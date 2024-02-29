import axios from "axios";

export default axios.create({
  baseURL: fuel_logic_app.rest_url,
  timeout: 30000,
  headers: { "X-WP-Nonce": fuel_logic_app.nonce }
});
