import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [], changed: false },
  reducers: {
    replaceCart(state, action) {
      state.cartItems = action.payload.items;
    },
    addToCart(state, action) {
      state.changed = true;
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index === -1) state.cartItems.push(action.payload);
      else state.cartItems[index].quantity++;
    },

    increaseQuantity(state, action) {
      state.changed = true;
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.cartItems[index].quantity++;
    },

    decreaseQuantity(state, action) {
      state.changed = true;
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[index].quantity <= 1) {
        state.cartItems.splice(index, 1);
      } else state.cartItems[index].quantity--;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
