import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowNotification } from "../store/reducer/mapSlice";
import { Drawer, Space, Card, Input, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const NotificationBox = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.mapState.showNotification);
  const [placement, setPlacement] = useState("bottom");

  const onClose = () => {
    dispatch(setShowNotification(false));
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
            paddingTop: "40px",
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
        className="notification"
      >
        <CloseOutlined
          style={{ position: "absolute", right: "20px", top: "10px" }}
          onClick={onClose}
        />
        <Space
          direction="vertical"
          size="middle"
          style={{
            display: "flex"
          }}
        >
          <Card
            size="small"
            bodyStyle={{
              padding: "20px"
            }}
            className="processing"
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gridTemplateRows: "auto"
              }}
            >
              <div
                className="order-wrap"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <span className="order-number">12/12/24, ORDER #12345</span>
                <span className="order-address">323 s. Briscoe blvd. </span>
              </div>
              <div className="order-status">PROCCESING …</div>
            </div>
            <p style={{ textAlign: "center" }}>
              <Space>
                <Button className="view-btn">VIEW</Button>
                <Button className="chat-btn">CHAT</Button>
              </Space>
            </p>
          </Card>
          <Card
            size="small"
            bodyStyle={{
              padding: "20px"
            }}
            className="dispatched"
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gridTemplateRows: "auto"
              }}
            >
              <div
                className="order-wrap"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <span className="order-number">11/28/24, ORDER #22345</span>
                <spa className="order-address">2000 Hawkings trail </spa>
              </div>
              <div className="order-status">DISPATCHED …</div>
            </div>
            <p style={{ textAlign: "center" }}>
              <Space>
                <Button className="view-btn">VIEW</Button>
                <Button className="chat-btn">CHAT</Button>
              </Space>
            </p>
          </Card>
          <Card
            size="small"
            bodyStyle={{
              padding: "20px"
            }}
            className="completed"
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gridTemplateRows: "auto"
              }}
            >
              <div
                className="order-wrap"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <span className="order-number">11//02/24, ORDER #12345</span>
                <span className="order-address">323 .s Briccoe blvd </span>
              </div>
              <div className="order-status">COMPLETED …</div>
            </div>
            <p style={{ textAlign: "center" }}>
              <Space>
                <Button className="view-btn">VIEW</Button>
                <Button className="reorder-btn">REORDER</Button>
              </Space>
            </p>
          </Card>
          <Card
            size="small"
            bodyStyle={{
              padding: "20px"
            }}
            className="completed"
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gridTemplateRows: "auto"
              }}
            >
              <div
                className="order-wrap"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <span className="order-number">11//02/24, ORDER #12345</span>
                <span className="order-address">323 .s Briccoe blvd</span>
              </div>
              <div className="order-status">COMPLETED …</div>
            </div>
            <p style={{ textAlign: "center" }}>
              <Space>
                <Button className="view-btn">VIEW</Button>
                <Button className="reorder-btn">REORDER</Button>
              </Space>
            </p>
          </Card>
        </Space>
      </Drawer>
    </>
  );
};

export default NotificationBox;
