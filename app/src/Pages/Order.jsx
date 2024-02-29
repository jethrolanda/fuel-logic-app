import { useEffect, useState } from "react";
import { Button, message, Steps, theme } from "antd";
import StepContent from "../Components/StepContent";
import { useNavigate } from "react-router-dom";
import { fetchOrderForm } from "../store/reducer/orderFormSlice";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Order = () => {
  const navigate = useNavigate();

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [pages, setPages] = useState(1);
  const [contents, setContents] = useState([]);
  const [steps, setSteps] = useState([]);
  const [items, setItems] = useState([]);
  const [fetching, setFetching] = useState(false);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onChange = (value) => {
    setCurrent(value);
  };

  const contentStyle = {
    // textAlign: 'center',
    maxWidth: "1000px",
    width: "100%",
    // backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG
    // border: `1px dashed ${token.colorBorder}`,
    // marginTop: 16,
    // padding: '20px 40px'
  };

  useEffect(() => {
    document.title = "Order";

    setFetching(true);
    // Only show the steps if user is loggedin
    // If we allow non-login it will error out since we can only fetch api data if user is logged-in
    if (fuel_logic_app.is_logged_in) {
      fetchOrderForm(({ data, pageCounter }) => {
        setPages(pageCounter);
        setContents(data.fields);
        setFetching(false);
      });
    }
  }, [fuel_logic_app.is_logged_in]);

  // Set step content
  useEffect(() => {
    if (contents.length === 0) return;

    setSteps(
      Array.from(Array(pages)).map((_, i) => {
        return {
          title: "",
          content: <StepContent page={i} contents={contents} next={next} />
        };
      })
    );
  }, [pages, contents]);

  useEffect(() => {
    setItems(
      steps.map((item, i) => ({
        key: i,
        title: ""
      }))
    );
  }, [steps]);

  if (!fuel_logic_app.is_logged_in) return <>Please login first.</>;

  if (fetching) {
    return <p>Fetching data...</p>;
  }
  return (
    <>
      <Steps
        onChange={onChange}
        current={current}
        items={items}
        style={{
          maxWidth: "1000px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "20px"
        }}
        responsive={false}
        size="small"
      />
      <div style={contentStyle}>{steps[current]?.content}</div>
      <div
        style={{
          marginTop: 24,
          maxWidth: "500px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {current < steps.length - 1 && (
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Button
              type="primary"
              className="secondary-btn"
              onClick={() => next()}
              style={{ margin: 10 }}
            >
              {current === 1 ? "Confirm" : "Next Step"}
            </Button>
            {current === 1 && (
              <Button
                className="btn"
                style={{ margin: 10 }}
                onClick={() => navigate("/")}
              >
                Edit
              </Button>
            )}
          </div>
        )}
        {current === steps.length - 1 && (
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Button
              type="primary"
              className="secondary-btn"
              onClick={() => navigate("/confirmation")}
              style={{ margin: 10 }}
            >
              Submit Order
            </Button>
          </div>
        )}
        <p style={{ textAlign: "center" }}>
          <a href="#" className="save-for-later">
            Save for later
          </a>
        </p>
      </div>
    </>
  );
};

export default Order;
