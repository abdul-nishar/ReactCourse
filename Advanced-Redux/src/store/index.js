import { configureStore } from "@reduxjs/toolkit";

import userInterfaceSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, user: userInterfaceSlice.reducer },
});

export default store;
