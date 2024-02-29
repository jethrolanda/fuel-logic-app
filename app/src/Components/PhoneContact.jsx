import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowPhoneContact } from "../store/reducer/mapSlice";
import { Drawer } from "antd";
import phone from "../../images/phone.png";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const PhoneContact = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.mapState.showPhoneContact);
  const [placement, setPlacement] = useState("bottom");

  const onClose = () => {
    dispatch(setShowPhoneContact(false));
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <Drawer
        // title={<Test onClose={onClose} />}
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
            padding: "20px",
            display: "flex",
            justifyContent: "center"
          },
          mask: {
            background: "none"
          },
          content: {
            background: "rgba(0, 0, 0, 0.45)"
          }
        }}
        // rootStyle={{ top: "30px" }}
        // closeIcon={<CloseOutlined />}
        height={600}
      >
        <div
          style={{
            maxWidth: "1000px",
            width: "100%",
            textAlign: "center",
            background: "#fff",
            borderRadius: "15px",
            position: "relative"
          }}
        >
          <CloseOutlined
            style={{ position: "absolute", right: "20px", top: "10px" }}
            onClick={onClose}
          />
          <div style={{ padding: "40px" }}>
            <img
              src={phone}
              alt="Phone"
              style={{ maxWidth: "327px", width: "100%" }}
            />
          </div>
          <h1>Give us a call!</h1>
          <p>Click to talk to someone now</p>
          <Button
            size="large"
            style={{
              background: "#F5FAE9",
              color: "#F88160",
              borderRadius: "10px"
            }}
            href="tel: 888-234-2324"
          >
            888-234-2324
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default PhoneContact;
