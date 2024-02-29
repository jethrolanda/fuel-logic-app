import Page from "../Components/Page";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();

  return (
    <Page title="Error 404 Page not found">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            type="primary"
            onClick={() =>
              fuel_logic_app.is_logged_in ? navigate("/") : navigate("/login")
            }
          >
            Back Home
          </Button>
        }
      />
    </Page>
  );
};

export default NoPage;
