import { createBrowserRouter } from "react-router-dom";
import { WelcomePage, HomePage, WeatherPage, ErrorPage } from "~/views";
import { PrivateRoute } from "~/hoc";

const APP_ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/home",
    element: <PrivateRoute children={<HomePage />} />,
  },
  {
    path: "/weather",
    element: <PrivateRoute children={<WeatherPage />} />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default APP_ROUTER;
