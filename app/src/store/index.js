import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "./reducer/mapSlice";
import orderFormReducer from "./reducer/orderFormSlice";
import loginReducer from "./reducer/loginSlice";
import registerReducer from "./reducer/registerSlice";

export default configureStore({
  reducer: {
    mapState: mapReducer,
    orderFormState: orderFormReducer,
    loginState: loginReducer,
    registerState: registerReducer
  }
});
