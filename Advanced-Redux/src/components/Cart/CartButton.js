import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart.cartItems).length;

  const handleCartToggle = () => {
    dispatch(userActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={handleCartToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsInCart}</span>
    </button>
  );
};

export default CartButton;
