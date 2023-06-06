import React from "react";
import { useNavigate } from "react-router-dom";
import { Result, Button } from "antd";

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Page not found"
      extra={<Button onClick={handleGoHome}>Back to home</Button>}
    />
  );
};
