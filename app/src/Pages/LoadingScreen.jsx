import { Flex } from "antd";
import logo from "../../images/FL-VERTICAL-WITH-SLOGAN.png";
import background from "../../images/Big-City-Scenes-[Converted]-WITH-LOGO.png";
import truck from "../../images/Truck-Facing-Right-for-BODY.png";
import wheel from "../../images/Van-wheel4.png";
import Page from "../Components/Page";

const LoadingScreen = () => {
  return (
    <Page title="Loading..." style={{ padding: "0px" }}>
      {/* <Flex id="wrapper" justify="center" align="center"> */}
      <div id="launch-screen">
        <img src={logo} alt="Logo" id="logo" />
        <div id="background" style={{ backgroundImage: `url(${background})` }}>
          <div id="truck-moving">
            <img src={truck} id="truck" alt="Truck" />
            <img src={wheel} id="wheel1" alt="Wheel" />
            <img src={wheel} id="wheel2" alt="Wheel" />
          </div>
        </div>
      </div>
      {/* </Flex> */}
    </Page>
  );
};

export default LoadingScreen;
