import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { saveLocation } from "../store/reducer/mapSlice";
import { useSelector, useDispatch } from "react-redux";

const StartOrderButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const coordinates = useSelector((state) => state.mapState.currentCoordinates);
  const location = useSelector((state) => state.mapState.currentLocation);

  return (
    <div className="start-new-order">
      <div
        style={{
          padding: "0px 10px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Button
          onClick={() => {
            navigate("order");
            dispatch(saveLocation({ coordinates, location }));
          }}
          className="start-new-order-btn secondary-btn"
          type="primary"
        >
          Start Order
        </Button>
      </div>
    </div>
  );
};

export default StartOrderButton;
