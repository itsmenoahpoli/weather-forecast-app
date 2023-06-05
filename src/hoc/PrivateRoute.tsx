import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

type TPrivateRouteProps = {
  children: React.ReactNode;
};

export const PrivateRoute: React.FC<TPrivateRouteProps> = withAuthenticationRequired(
  (props) => {
    return props.children;
  }
);
