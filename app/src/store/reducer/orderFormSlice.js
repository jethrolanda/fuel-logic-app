import { createSlice } from "@reduxjs/toolkit";
import axios from "../../helpers/axios";
const qs = require("qs");

// Recaptcha state
export const orderFormSlice = createSlice({
  name: "chartState",
  initialState: {
    are_you_the_contact_on_site: false,
    contact_first_name: "",
    contact_last_name: "",
    contact_mobile_number: "",
    delivery_address: "",
    what_kind_of_fuel_are_you_needing: [],
    how_many_gallons_are_you_estimating: []
  },
  reducers: {}
});

export const {} = orderFormSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

// Get recaptcha values
export const fetchOrderForm = async (cb) => {
  await axios
    .get("/gf/v2/forms/1", {
      headers: {
        "X-WP-Nonce": fuel_logic_app.nonce
      }
    })
    .then(({ data }) => {
      let pageCounter = 1;

      data.fields.forEach((element, i) => {
        if (element.type === "page") pageCounter += 1;
      });

      if (typeof cb === "function") cb({ data, pageCounter });
    });
};

export default orderFormSlice.reducer;
