import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  message: "",
  severity: null,
  timeout: 2000,
};
export const ToastNotificationsSlice = createSlice({
  initialState,
  name: "toasts",
  reducers: {
    SHOW_NOTIFICATION: (state, actions) => {
      state.message = actions.payload.message;
      state.severity = actions.payload.severity;
      state.timeout = actions.payload.timeout;
      state.show = true;
    },
    Hide_NOTIFICATION: (state) => {
      state.message = "";
      state.severity = null;
      state.show = false;
    },
  },
});
export const { Hide_NOTIFICATION, SHOW_NOTIFICATION } =
  ToastNotificationsSlice.actions;
