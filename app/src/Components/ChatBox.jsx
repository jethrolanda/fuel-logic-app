import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowChat } from "../store/reducer/mapSlice";
import { Drawer, Divider, Input, Avatar, Space } from "antd";
import gate from "../../images/gate.png";
import { UserOutlined, CloseOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const ChatBox = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.mapState.showChat);
  const [placement, setPlacement] = useState("bottom");

  const onClose = () => {
    dispatch(setShowChat(false));
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
            padding: "10px",
            paddingTop: "30px",
            display: "flex",
            flexDirection: "column"
          },
          content: {
            display: "flex",
            justifyContent: "center"
          },
          wrapper: {
            display: "flex",
            alignSelf: "center"
          }
        }}
        // rootStyle={{ top: "30px" }}
        // closeIcon={<CloseOutlined />}
        height={750}
        className="chatbox"
      >
        <Space wrap size={16} style={{ position: "relative" }}>
          <Avatar size="large" icon={<UserOutlined />} />
          Erika - Operations - March 28, 2019 11:50
          <CloseOutlined
            style={{ position: "absolute", right: 0, top: 0 }}
            onClick={onClose}
          />
        </Space>

        <Divider />
        <p className="chat left">Morbi ullamcorper quis est et.</p>
        <p className="chat right">
          Integer quis eros quis et, vestibulum lobortis tortor, eleifend
          eleifend arcu.
        </p>
        <p className="chat left">In a nulla fermentum.</p>
        <p className="chat left">
          Pellentesque a lectus nulla, dapibus luctus arcu nec.
        </p>
        <img
          src={gate}
          alt="Gate"
          style={{ alignSelf: "end", marginBottom: "30px" }}
        />
        <TextArea rows={4} placeholder="Type a Message" />
      </Drawer>
    </>
  );
};

export default ChatBox;
