import { userActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchingData = async () => {
      const response = await fetch(
        "https://website-development-64082-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) throw new Error("Fetching cart data failed");

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchingData();
      dispatch(cartActions.replaceCart({ items: cartData || [] }));
    } catch (error) {
      console.log(error);
      dispatch(
        userActions.showNotification({
          status: "error",
          title: "Error 🔴",
          message: "Fetching cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      userActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data...",
      })
    );

    const sendingData = async () => {
      await fetch(
        "https://website-development-64082-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );
    };

    try {
      await sendingData();
      dispatch(
        userActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Cart data sent successfully",
        })
      );
    } catch (error) {
      dispatch(
        userActions.showNotification({
          status: "error",
          title: "Error 🔴",
          message: "Sending cart data failed",
        })
      );
    }
  };
};
