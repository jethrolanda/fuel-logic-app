import { useState } from "react";
import { Input } from "antd";
import {
  MenuOutlined,
  ArrowRightOutlined,
  PlusCircleOutlined,
  StarFilled
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import { setCurrentLocation, setShowMenu } from "../store/reducer/mapSlice";

const SearchBox = (props) => {
  const dispatch = useDispatch();

  const [focused, setFocused] = useState(false);
  const { address } = props;
  const locations = useSelector((state) => state.mapState.savedLocations);

  const onChange = (e) => {
    // console.log("Change:", e.target.value);
    dispatch(setCurrentLocation(e.target.value));
  };

  return (
    <div className="search-box">
      <div style={{ padding: "0 10px", width: "1000px" }}>
        <Input
          value={address}
          size="large"
          prefix={<MenuOutlined onClick={() => dispatch(setShowMenu(true))} />}
          suffix={<ArrowRightOutlined onClick={() => alert("enter")} />}
          style={{
            borderRadius: "0px",
            maxWidth: "1000px",
            width: "100%",
            alignSelf: "center"
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
        />
        <div
          style={{
            maxWidth: "1000px",
            width: "100%",
            display: "flex",
            marginTop: "4px",
            background: "#fff",
            zIndex: "9999",
            display: focused ? "block" : "none"
          }}
        >
          <ul>
            <li>
              <PlusCircleOutlined style={{ color: "#F5824E" }} /> Save A New
              Delivery Location
            </li>
            {locations.length > 0 &&
              locations.map((data) => (
                <li>
                  <StarFilled /> {data?.location}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
