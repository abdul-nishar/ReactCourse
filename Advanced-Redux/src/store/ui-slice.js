import { createSlice } from "@reduxjs/toolkit";

const userInterfaceSlice = createSlice({
  name: "interface",
  initialState: { isVisible: false, notification: null },
  reducers: {
    toggleCart(state) {
      state.isVisible = !state.isVisible;
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const userActions = userInterfaceSlice.actions;

export default userInterfaceSlice;
