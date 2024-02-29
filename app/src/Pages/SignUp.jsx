import { useState, useEffect } from "react";
import {
  Radio,
  Space,
  Steps,
  theme,
  Form,
  Input,
  Button,
  Checkbox,
  message
} from "antd";
import logo from "../../images/icon.png";
import Page from "../Components/Page";

import { setState, registerUser } from "../store/reducer/registerSlice";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

const StepContentSignup = ({ page, onChange, dispatch, state }) => {
  const onFinish = (values) => {
    dispatch(setState({ submitted: true, ...values }));
  };
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!"
    },
    number: {
      range: "${label} must be between ${min} and ${max}"
    }
  };

  switch (page) {
    case 0:
      return (
        <>
          <h1>Do you have an Account with Fuel Logic?</h1>
          <p>
            If you have an account with Fuel Logic, click YES to use the payment
            method on file. If you do NOT have an account or you would like to
            use a different credit card, click NO and you will be directed to
            our payment authorization form.
          </p>
          <Radio.Group onChange={onChange}>
            <Space
              direction="vertical"
              size="large"
              style={{ marginTop: "20px" }}
            >
              <Radio value="No">No, I don’t have an account</Radio>
              <Radio value="Yes">Yes, I have an account </Radio>
            </Space>
          </Radio.Group>
        </>
      );
    case 1:
      return (
        <>
          <h1>Register Business</h1>
          <p>
            To use the Fuel Logic app, please register your business. If you
            know your customer ID you can skip this step and we’ll sync your
            business information with the app.
          </p>
          <p>
            <a href="#">I have a customer ID</a>
          </p>

          <Form
            name="basic"
            style={{
              maxWidth: 600
            }}
            initialValues={{
              remember: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            validateMessages={validateMessages}
          >
            <Form.Item
              label="Company Name"
              name="company_name"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="First Name"
              name="first_name"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="last_name"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email Address"
              name="email_address"
              rules={[
                {
                  required: true,
                  type: "email"
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mobile Number"
              name="mobile_number"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <Input />
            </Form.Item>
            <p>
              <a href="#">Click to read our terms of service</a>
            </p>

            <Form.Item
              name="terms_of_service"
              valuePropName="checked"
              rules={[
                {
                  required: true,
                  message: "Terms of service is required!"
                }
              ]}
            >
              <Checkbox>I agree with terms of service</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="start-new-order-btn"
                loading={state.loading}
              >
                Start using the app
              </Button>
            </Form.Item>
          </Form>
        </>
      );
    default:
      return <>{page}</>;
  }
};

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = theme.useToken();
  const [steps, setSteps] = useState([]);
  const [items, setItems] = useState([]);
  const [current, setCurrent] = useState(0);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const [messageApi, contextHolder] = message.useMessage();

  const msg = (data) => {
    messageApi.open({
      type: data.status,
      content: data.message
    });
  };

  const state = useSelector((state) => state.registerState);
  const contentStyle = {
    maxWidth: "1000px",
    width: "100%",
    borderRadius: token.borderRadiusLG
  };

  const onChange = (e) => {
    dispatch(setState({ have_account: e.target.value }));
    next();
  };

  const next = () => {
    setCurrent(current + 1);
  };

  useEffect(() => {
    if (state.submitted) {
      dispatch(setState({ loading: true }));
      dispatch(
        registerUser(state, async (data) => {
          msg(data);
          dispatch(setState({ submitted: false }));
          if (data.status === "success") {
            fuel_logic_app.is_logged_in = "1";
            await delay(500);
            navigate(0);
          }
        })
      );
    }
  }, [state.submitted]);

  useEffect(() => {
    setSteps(
      [...Array(2)].map((_, i) => {
        return {
          title: "",
          content: (
            <StepContentSignup
              page={i}
              onChange={onChange}
              dispatch={dispatch}
              state={state}
            />
          )
        };
      })
    );
    setItems(
      [...Array(2)].map((_, i) => {
        return [
          {
            title: ""
          }
        ];
      })
    );
  }, []);

  return (
    <Page title="Signup">
      {contextHolder}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          overflow: "hidden"
        }}
      >
        <img src={logo} alt="Logo" style={{ width: "120px" }} />
        <Steps progressDot type="inline" current={current} items={items} />
      </div>
      <div style={contentStyle}>{steps[current]?.content}</div>
    </Page>
  );
};

export default SignUp;
