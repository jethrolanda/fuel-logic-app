import { createSlice } from "@reduxjs/toolkit";
import axios from "../../helpers/axios";

const qs = require("qs");

// Recaptcha state
export const loginSlice = createSlice({
  name: "loginState",
  initialState: {
    loading: false,
    username: "",
    password: ""
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCurrentCoordinates: (state, action) => {
      state.currentCoordinates = action.payload;
    }
  }
});

export const { setLoading } = loginSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const loginUser =
  ({ username, password, remember, cb }) =>
  (dispatch) => {
    axios
      .post(
        fuel_logic_app.ajax_url,
        qs.stringify({
          action: "fuel_logic_app_login_user",
          nonce: fuel_logic_app.login_nonce,
          data: {
            username,
            password,
            remember
          }
        })
      )
      .then(({ data }) => {
        dispatch(setLoading(false));
        if (typeof cb === "function") cb(data);
      });
  };

export const logoutUser = (cb) => (dispatch) => {
  axios
    .post(
      fuel_logic_app.ajax_url,
      qs.stringify({
        action: "fuel_logic_app_logout_user",
        nonce: fuel_logic_app.logout_nonce
      })
    )
    .then(({ data }) => {
      if (typeof cb === "function") cb(data);
    });
};

export default loginSlice.reducer;
