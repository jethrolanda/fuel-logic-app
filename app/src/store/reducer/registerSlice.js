import { createSlice } from "@reduxjs/toolkit";
import axios from "../../helpers/axios";

const qs = require("qs");

// Recaptcha state
export const registerSlice = createSlice({
  name: "registerState",
  initialState: {
    loading: false,
    submitted: false,
    have_account: "",
    company_name: "",
    first_name: "",
    last_name: "",
    email_address: "",
    mobile_number: "",
    terms_of_service: false
  },
  reducers: {
    setState: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { setState } = registerSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const registerUser = (state, cb) => (dispatch) => {
  axios
    .post(
      fuel_logic_app.ajax_url,
      qs.stringify({
        action: "fuel_logic_app_register_user",
        nonce: fuel_logic_app.register_nonce,
        data: state
      })
    )
    .then(({ data }) => {
      dispatch(setState({ loading: false }));
      if (typeof cb === "function") cb(data);
    });
};

export default registerSlice.reducer;
