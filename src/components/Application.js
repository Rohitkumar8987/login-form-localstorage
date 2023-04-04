import React from "react"
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import AppRoutes from "../config/AppRoutes";
import SiderInventory from "../Common/SiderInventory";
import HeaderInventory from "../Common/HeaderInventory";
import HeaderWarehouse from "../Common/HeaderWarehouse";


const { Content, Header  } = Layout;

const Application = () => {
  return (
    <Layout>
      <Layout hasSider className="fullsitelayout">
        {window.location.pathname !== "/salesOrder" &&
          window.location.pathname !== "/wantbook" &&
          window.location.pathname !== "/receivedPO" &&
          window.location.pathname !== "/PurchaseOrdersWare" &&
          window.location.pathname !== "/receivedPO2" 


           && <SiderInventory />}

        <Layout
          style={{
            minHeight: "100vh",
            background: "#F1F5F9",
          }}
          className="sitecontentlayout"
        >
          
          <Header style={{ padding: 0, height: "auto" }}>
            {window.location.pathname === "/salesOrder" ||
            window.location.pathname === "/wantbook" ||
            window.location.pathname === "/receivedPO"
            ||  window.location.pathname === "/PurchaseOrdersWare" ||  window.location.pathname === "/receivedPO2"
            ?
             (
              <HeaderWarehouse />
            ) : (
              <HeaderInventory />
            )}
          </Header>
          <Content className="mainlayout">
            <div style={{ minHeight: 360 }}>
              <Layout>
                <Switch>
                  {AppRoutes.map((route) => (
                    <Route
                      exact={route.exact}
                      path={route.path}
                      component={route.component}
                      key={route.key}
                    />
                  ))}
                </Switch>
              </Layout>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Application;
