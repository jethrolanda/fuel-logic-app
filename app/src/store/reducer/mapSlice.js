import { createSlice } from "@reduxjs/toolkit";
import axios from "../../helpers/axios";

const qs = require("qs");

const APIkey = "1bcc0761bc8b4deaa8f1a307fcee48ea";

// Recaptcha state
export const mapSlice = createSlice({
  name: "chartState",
  initialState: {
    currentCoordinates: [],
    currentLocation: "",
    savedLocations: [],
    showMenu: false,
    showNotification: false,
    showChat: false,
    showPhoneContact: false
  },
  reducers: {
    setCurrentCoordinates: (state, action) => {
      state.currentCoordinates = action.payload;
    },
    setCurrentLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
    setSavedLocations: (state, action) => {
      state.savedLocations = action.payload;
    },
    setShowMenu: (state, action) => {
      state.showMenu = action.payload;
    },
    setShowChat: (state, action) => {
      state.showChat = action.payload;
    },
    setShowNotification: (state, action) => {
      state.showNotification = action.payload;
    },
    setShowPhoneContact: (state, action) => {
      state.showPhoneContact = action.payload;
    }
  }
});

export const {
  setCurrentCoordinates,
  setCurrentLocation,
  setSavedLocations,
  setShowMenu,
  setShowChat,
  setShowNotification,
  setShowPhoneContact
} = mapSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const getCurrentCoordinates =
  ({ options, cb }) =>
  (dispatch) => {
    const request = new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    );

    request
      .then((data) => {
        dispatch(
          setCurrentCoordinates([data.coords.latitude, data.coords.longitude])
        );
        if (typeof cb === "function") cb(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // console.log('promise done executing');
      });
  };

export const getCurrentCoordinatesAddress =
  ({ coordinates }) =>
  (dispatch) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${coordinates[0]},${coordinates[1]}&key=${APIkey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCurrentCoordinates(coordinates));
        dispatch(setCurrentLocation(data.results[0].formatted));
        if (data.status.code === 200) {
          // cb(data.results[0].formatted);
        } else {
          console.log("Reverse geolocation request failed.");
        }
      })
      .catch((error) => console.error(error));
  };

export const saveLocation =
  ({ coordinates, location }) =>
  (dispatch) => {
    axios
      .post(
        fuel_logic_app.ajax_url,
        qs.stringify({
          action: "fuel_logic_app_save_location",
          nonce: fuel_logic_app.save_location_nonce,
          data: {
            coordinates,
            location
          }
        })
      )
      .then(({ data }) => {});
  };

export const getLocations = () => (dispatch) => {
  axios
    .post(
      fuel_logic_app.ajax_url,
      qs.stringify({
        action: "fuel_logic_app_get_locations",
        nonce: fuel_logic_app.get_locations_nonce,
        data: {}
      })
    )
    .then(({ data }) => {
      if (data.status === "success") {
        dispatch(setSavedLocations(data.locations));
      }
    });
};

export default mapSlice.reducer;
