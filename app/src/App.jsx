import { Suspense, lazy } from "react";
import { message } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";

import Confirmation from "./Pages/Confirmation";
import NoPage from "./Pages/NoPage";
import LoadingScreen from "./Pages/LoadingScreen";

const Home = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 6000));
  return await import("./Pages/Home");
});

const MainMenu = lazy(() => import("./Components/MainMenu"));
const ChatBox = lazy(() => import("./Components/ChatBox"));
const NotificationBox = lazy(() => import("./Components/NotificationBox"));
const PhoneContact = lazy(() => import("./Components/PhoneContact"));
const Order = lazy(() => import("./Pages/Order"));

const Login = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 6000));
  return await import("./Pages/Login");
});

const App = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const msg = (data) => {
    messageApi.open({
      type: data.status,
      content: data.message
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Suspense fallback={<LoadingScreen />}>
                {contextHolder}
                <Home />
                <MainMenu msg={msg} />
                <ChatBox />
                <NotificationBox />
                <PhoneContact />
              </Suspense>
            }
          />
          <Route
            path="order"
            element={
              <Suspense fallback={<p>Fetching data...</p>}>
                <Order />
              </Suspense>
            }
          />
          <Route
            path="confirmation"
            element={
              <Suspense fallback={<p>Fetching data...</p>}>
                <Confirmation />
                <ChatBox />
                <NotificationBox />
                <PhoneContact />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="signup"
            element={
              <Suspense fallback={<p>Fetching user details...</p>}>
                <SignUp />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<p>Fetching user details...</p>}>
                <NoPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
