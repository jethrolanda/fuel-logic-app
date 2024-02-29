import { useState } from "react";
import { Drawer, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setShowMenu } from "../store/reducer/mapSlice";
import { CloseOutlined } from "@ant-design/icons";
import fuel_logic_img from "../../images/FL-logo-horizon-2021.jpg";
import { logoutUser } from "../store/reducer/loginSlice";
import { useNavigate } from "react-router-dom";

const Test = ({ onClose }) => {
  return (
    <>
      <img src={fuel_logic_img} style={{ maxWidth: "250px", width: "100%" }} />
      <CloseOutlined
        style={{ position: "absolute", top: "20px", right: "20px" }}
        onClick={onClose}
      />
    </>
  );
};
const MainMenu = ({ msg }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isOpen = useSelector((state) => state.mapState.showMenu);
  const [placement, setPlacement] = useState("left");

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const onClose = () => {
    dispatch(setShowMenu(false));
  };

  const logout = () => {
    dispatch(
      logoutUser(async (data) => {
        msg(data);
        if (data.status === "success") {
          fuel_logic_app.is_logged_in = "0";
          await delay(500);
          navigate(0);
        }
      })
    );
  };
  return (
    <>
      <Drawer
        title={<Test onClose={onClose} />}
        placement={placement}
        closable={false}
        onClose={onClose}
        open={isOpen}
        key={placement}
        styles={{
          header: {
            display: "flex",
            alignSelf: "center",
            padding: "0px",
            border: "0px"
          },
          body: {
            padding: "0px"
          }
        }}
        // rootStyle={{ top: "30px" }}
        // closeIcon={<CloseOutlined />}
        className="main-menu"
      >
        <ul style={{ padding: "0px" }}>
          <li>Saved Locations</li>
          <li>Orders</li>
          <li>Reports</li>
          <li>Profile</li>
          <li>Chat</li>
          <li>Contact Us</li>
          <li>Sync Settings</li>
          <li onClick={logout}>Logout</li>
        </ul>
      </Drawer>
    </>
  );
};

export default MainMenu;
