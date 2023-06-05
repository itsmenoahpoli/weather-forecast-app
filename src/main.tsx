import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { RouterProvider } from "react-router-dom";

import APP_ROUTER from "~/router";
import { getEnv } from "./config";
import "antd/dist/reset.css";
import "antd-css-utilities/utility.min.css";
import "~/styles/app.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Auth0Provider
    domain={getEnv("AUTH0_DOMAIN")}
    authorizationParams={{
      redirect_uri: getEnv("APP_URL"),
    }}
    clientId={getEnv("AUTH0_CLIENT_ID")}
  >
    <RouterProvider router={APP_ROUTER} />
  </Auth0Provider>
);
