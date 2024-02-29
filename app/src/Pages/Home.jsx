import { useState, useEffect, useRef, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents
} from "react-leaflet";
import SearchBox from "../Components/SearchBox";
import StartOrderButton from "../Components/StartOrderButton";
import ShortcutsMenu from "../Components/ShortcutsMenu";

import pointer from "../../images/pointer.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import marker2 from "../../images/icon3.png";
import shadow2 from "../../images/PinMark.png";

import L from "leaflet";
import { icon } from "leaflet";

import {
  getCurrentCoordinates,
  getCurrentCoordinatesAddress,
  getLocations
} from "../store/reducer/mapSlice";

import { useSelector, useDispatch } from "react-redux";

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconUrl: marker2,
//   iconRetinaUrl: markerIcon2x,
//   shadowUrl: shadow2,
//   iconSize: [32, 32]
// shadowSize: [152,152],
// });

const ICON = icon({
  iconUrl: marker2,
  iconSize: [32, 32]
});

const Home = () => {
  const dispatch = useDispatch();

  const [coordinates, setCoordinates] = useState([]);
  // const [address, setAddress] = useState("");
  const address = useSelector((state) => state.mapState.currentLocation);

  const markerRef = useRef(null);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setCoordinates([marker.getLatLng()?.lat, marker.getLatLng()?.lng]);
        }
      }
    }),
    []
  );

  useEffect(() => {
    document.title = "Home";
    dispatch(
      getCurrentCoordinates({
        options: { enableHighAccuracy: true, maximumAge: 10000 },
        cb: (data) => {
          setCoordinates([data.coords.latitude, data.coords.longitude]);
        }
      })
    );

    dispatch(getLocations());
  }, []);

  useEffect(() => {
    if (coordinates.length === 0) return;

    dispatch(
      getCurrentCoordinatesAddress({
        coordinates
      })
    );
  }, [coordinates]);

  if (coordinates.length === 0) return <></>;
  else
    return (
      <>
        <SearchBox address={address} />
        <MapContainer
          style={{
            width: "100%",
            height: "100%",
            // zIndex: "9",
            position: "fixed"
          }}
          center={coordinates}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={coordinates}
            draggable={true}
            eventHandlers={eventHandlers}
            ref={markerRef}
            icon={ICON}
          >
            <Popup>{address}</Popup>
          </Marker>
        </MapContainer>
        <div className="home-footer-actions">
          <StartOrderButton />
          <ShortcutsMenu />
        </div>
      </>
    );
};

export default Home;
