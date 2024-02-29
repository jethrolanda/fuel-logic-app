import React from "react";
import {
  HomeOutlined,
  MessageOutlined,
  NotificationOutlined,
  PhoneOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setShowChat,
  setShowNotification,
  setShowPhoneContact
} from "../store/reducer/mapSlice";

const ShortcutsMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="shortcuts-menu">
      <div className="menus">
        <HomeOutlined onClick={() => navigate("/")} />
        <MessageOutlined onClick={() => dispatch(setShowChat(true))} />
        <NotificationOutlined
          onClick={() => dispatch(setShowNotification(true))}
        />
        <PhoneOutlined onClick={() => dispatch(setShowPhoneContact(true))} />
      </div>
    </div>
  );
};

export default ShortcutsMenu;
