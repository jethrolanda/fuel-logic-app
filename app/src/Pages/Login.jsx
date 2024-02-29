import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Checkbox, message } from "antd";
import Page from "../Components/Page";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import logo from "../../images/icon.png";
import { loginUser, setLoading } from "../store/reducer/loginSlice";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.loginState.loading);
  const [messageApi, contextHolder] = message.useMessage();

  const msg = (data) => {
    messageApi.open({
      type: data.status,
      content: data.message
    });
  };

  const onFinish = (values) => {
    dispatch(setLoading(true));
    const { username, password, remember } = values;

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    dispatch(
      loginUser({
        username,
        password,
        remember,
        cb: async (data) => {
          msg(data);
          if (data.status === "success") {
            fuel_logic_app.is_logged_in = "1";
            await delay(500);
            // navigate("/");
            navigate(0);
          }
        }
      })
    );
  };

  return (
    <Page title="Login" style={{ padding: "0px" }}>
      <div
        class="login-bg"
        style={{
          // backgroundImage: `url(${login_bg})`

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "100px"
        }}
      >
        {contextHolder}
        <div className="oval"></div>
        <img
          src={logo}
          alt="Logo"
          style={{ marginTop: "-20px", width: "120px", zIndex: 2 }}
        />
        <div
          style={{
            background: "#fff",
            borderRadius: "20px 20px 0px 0px",
            padding: "20px",
            marginTop: "60px",
            zIndex: 3
          }}
        >
          <h1>We want to make Fuel Delivery as simple as a bacon pizza</h1>
          <h3>
            This is a beta version of the app with minimal features for testing
            and planning.{" "}
          </h3>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true
            }}
            onFinish={onFinish}
            size="large"
            style={{
              maxWidth: "500px",
              width: "100%"
            }}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username / Email!"
                }
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username / Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!"
                }
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="#">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                loading={loading}
              >
                Log in
              </Button>
              <p style={{ textAlign: "center" }}>
                New to Fuel Logic?{" "}
                <a
                  className="login-form-forgot"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </a>
              </p>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Page>
  );
};

export default Login;
