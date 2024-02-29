import React from "react";
import App from "./App";
import { render } from "@wordpress/element";
import { Provider } from "react-redux";
import store from "./store";
import { ConfigProvider } from "antd";
import "../styles/main.scss";

import "leaflet/dist/leaflet.css";

// Render the App component into the DOM
render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#A2CD3A"
          },
          components: {
            Button: {
              // colorPrimary: "#00b96b"
              // algorithm: true, // Enable algorithm
            },
            Input: {
              // colorPrimary: "#eb2f96"
              //algorithm: true, // Enable algorithm
            }
          }
        }}
      >
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("fuel-logic-app")
);
