import React from "react";
import Helmet from "react-helmet";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer } from "react-toastify";
import { Layout, Button } from "antd";
import { BsCloudHazeFill } from "react-icons/bs";

type TPageLayoutProps = {
  children: React.ReactNode;
  pageName?: string;
};

export const PageLayout: React.FC<TPageLayoutProps> = (props) => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <React.Fragment>
      <Helmet>
        <title>Weather Forecast App | {props.pageName ?? ""}</title>
      </Helmet>

      <Layout>
        <Layout.Header>
          <div className="navbar">
            <h3>
              <BsCloudHazeFill /> &nbsp; Weather Forecast
            </h3>

            <div>
              {isAuthenticated ? (
                <Button
                  type="default"
                  onClick={() =>
                    logout({ logoutParams: { returnTo: window.location.origin } })
                  }
                >
                  Log Out
                </Button>
              ) : null}
            </div>
          </div>
        </Layout.Header>
        <Layout.Content>
          <div className="page-content">{props.children}</div>
        </Layout.Content>
      </Layout>

      <ToastContainer theme="colored" />
    </React.Fragment>
  );
};
