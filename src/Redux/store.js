import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./Slice/AppSlice";
import { cartSlice } from "./Slice/CartSlice";
import { userSlice } from "./Slice/UserSlice";
import { ProductsSlice } from "./Slice/ProductsSlice";
import { ToastNotificationsSlice } from "./Slice/ToastNotificationsSlice";
const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [ProductsSlice.name]: ProductsSlice.reducer,
    [ToastNotificationsSlice.name]: ToastNotificationsSlice.reducer,
  },
});

export default store;
