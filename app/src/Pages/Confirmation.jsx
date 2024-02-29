import { useEffect } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import logo from "../../images/icon.png";
import ShortcutsMenu from "../Components/ShortcutsMenu";

import L from "leaflet";
import { icon } from "leaflet";
import pin from "../../images/pin.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import marker2 from "../../images/icon3.png";
import shadow2 from "../../images/PinMark.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  // iconUrl: pin
  // iconRetinaUrl: markerIcon2x,
  // shadowUrl: shadow2,
  // iconSize: [32, 32]
  // shadowSize: [152,152],
});

const ICON = icon({
  iconUrl: pin,
  iconSize: [32, 32]
});

const Confirmation = () => {
  const navigate = useNavigate();

  const coordinates = useSelector((state) => state.mapState.currentCoordinates);
  const location = useSelector((state) => state.mapState.currentLocation);

  useEffect(() => {
    document.title = "Confirmation";
    if (location === "") navigate("/");
  }, [location]);

  return (
    <div className="confirmation-page">
      <div style={{ padding: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 0px"
          }}
        >
          <div>
            <h5>DELIVERY ADDRESS</h5>
            <p className="address">{location}</p>
          </div>
          <img
            src={logo}
            alt="Logo"
            style={{ marginTop: "-20px", width: "120px" }}
          />
        </div>

        <MapContainer
          style={{ height: "300px" }}
          center={coordinates}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coordinates} icon={ICON} />
        </MapContainer>

        <div style={{ marginTop: "40px" }}>
          <h2>Your order has been submitted</h2>
          <p>
            To see your order click below. You can always find your orders in
            the menu tab. If you need to speak someone give us a call or open a
            chat.{" "}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Button
            className="btn"
            style={{ margin: 10, maxWidth: "400px", width: "100%" }}
          >
            View Order
          </Button>
          <p>Give us a call 888-345-3454</p>
        </div>

        <ShortcutsMenu />
      </div>
    </div>
  );
};

export default Confirmation;
