import React from "react";
import "antd/dist/antd.css";
import { Tabs, Col } from "antd";
import User from "./User";
import Role from "./Role";

const { TabPane } = Tabs;

const Settings = () => {
  const tabContent = [
    {
      label: "Users",
      key: 1,
      children: <User />,
    },
    {
      label: "Roles",
      key: 2,
      children: <Role />,
    },
    {
      label: "Integrations",
      key: 3,
      children: "",
    },
  ];

  return (
    <>
      <div style={{ background: "#F1F5F9", height: "964px", padding: "20px" }}>
        <Col span={24}>
          <h1
            style={{
              fontSize: "30px",
              color: "#1E293B",
            }}
          >
            Settings
          </h1>
          <div style={{ backgroundColor: "#FFF" }}>
            <Tabs
              defaultActiveKey={1}
              size="middle"
              tabPosition="left"
              tabBarStyle={{ marginRight: "-2px", minWidth: "280px" }}
              items={tabContent}
            >
              {tabContent.map((e) => (
                <TabPane key={e.key} tab={e.label}>
                  {e.children}
                </TabPane>
              ))}
            </Tabs>
            {/* <TabPane tab="Users" key="1"><User /> </TabPane>
            <TabPane tab="Roles" key="2"> <Role /> </TabPane> */}
          </div>
        </Col>
      </div>
    </>
  );
};
export default Settings;
