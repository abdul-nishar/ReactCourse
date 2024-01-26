import { useState, useRef } from "react";

import Header from "./components/Header";
import { fetchFoodItems, fetchOrderRequest } from "./http";
import { useFetch } from "../src/hooks/useFetch";
import FoodItem from "./components/FoodItem";
import CartModal from "./components/CartModal";
import CheckoutModal from "./components/CheckoutModal";
import OrderSuccessModal from "./components/OrderSuccessModal";

function App() {
  const { fetchedData: foodItems } = useFetch(fetchFoodItems, []);
  const [cartItems, setCartItems] = useState([]);
  const cartModalDialog = useRef();
  const checkoutModalDialog = useRef();
  const orderSuccessModalDialog = useRef();

  function handleCartItems(newCartItem) {
    const existingCartItem = cartItems.some(
      (item) => item.id === newCartItem.id
    );
    if (existingCartItem) return;
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { ...newCartItem, quantity: 1 },
    ]);
  }

  function handleIncreaseItem(item) {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    const existingCartItem = updatedCartItems[existingItemIndex];
    const updatedItem = {
      ...existingCartItem,
      quantity: existingCartItem.quantity + 1,
    };
    updatedCartItems[existingItemIndex] = updatedItem;
    setCartItems(updatedCartItems);
  }

  function handleDecreaseItem(item) {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    const existingCartItem = updatedCartItems[existingItemIndex];
    if (existingCartItem.quantity <= 1) {
      // updatedCartItems = updatedCartItems.filter(
      //   (cartItem) => cartItem.id !== existingCartItem.id
      // );
      updatedCartItems.splice(existingItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedCartItems[existingItemIndex] = updatedItem;
    }
    setCartItems(updatedCartItems);
  }

  function handleCartModal() {
    cartModalDialog.current.open();
  }

  function handleCheckoutModal() {
    cartModalDialog.current.close();
    checkoutModalDialog.current.open();
  }

  async function handleOrderSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    let order = {};
    order.customer = Object.fromEntries(fd.entries());

    event.target.reset();

    order.items = cartItems.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    }));
    await fetchOrderRequest(order);

    checkoutModalDialog.current.close();
    orderSuccessModalDialog.current.open();
  }

  function handleResetCart() {
    orderSuccessModalDialog.current.close();
    setCartItems([]);
  }

  return (
    <>
      <OrderSuccessModal
        ref={orderSuccessModalDialog}
        resetCart={handleResetCart}
      />
      <CheckoutModal
        ref={checkoutModalDialog}
        items={cartItems}
        handleSubmit={handleOrderSubmit}
      />
      <CartModal
        ref={cartModalDialog}
        items={cartItems}
        incItem={handleIncreaseItem}
        decItem={handleDecreaseItem}
        openCheckout={handleCheckoutModal}
      />
      <Header items={cartItems.length} openModal={handleCartModal} />
      <ul id="meals">
        {foodItems.map((foodItem) => (
          <FoodItem
            key={foodItem.id}
            foodObj={foodItem}
            addToCart={() => handleCartItems(foodItem)}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
