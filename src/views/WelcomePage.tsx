import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";
import { PageLayout } from "~/components";

export const WelcomePage: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <PageLayout pageName="Welcome">
      <h3>Hello World!</h3>
      <p>
        Welcome to the weather forecast web application. Please login with your Github
        user to use the application and view weather in your city.
      </p>

      <Button className="btn-login" onClick={loginWithRedirect}>
        Login
      </Button>
    </PageLayout>
  );
};
