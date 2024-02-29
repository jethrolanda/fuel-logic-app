import { useEffect } from "react";
import { Layout } from "antd";

const { Content } = Layout;

const layoutStyle = {
  width: "100%",
  maxWidth: "1000px",
  display: "flex",
  flexDirection: "column",
  background: "#fff"
};

const contentStyle = {
  padding: "20px",
  // backgroundColor: "#0958d9"
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const Page = ({ title, children, style }) => {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <Layout style={{ ...layoutStyle, ...style }}>
      <Content className="content" style={{ ...contentStyle, ...style }}>
        {children}
      </Content>
    </Layout>
  );
};

export default Page;
