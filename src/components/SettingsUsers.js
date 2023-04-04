import React from "react";
import "antd/dist/antd.css";
import { Button, Col, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Table, Card } from "antd";



const columns = [
  {
    title: <div style={{ color: "#747E8D", fontSize: "12px" }}>NAME</div>,
    dataIndex: "name"
  },
  {
    title: <div style={{ color: "#747E8D", fontsize: "12px" }}>EMAIL</div>,
    dataIndex: "email"
  },
  {
    dataIndex: "edit"
  }
];

const data = [
  {
    key: "1",
    name: <div style={{ color: "#1E293B", fontSize: "14px" }}>Joe Clark</div>,
    email: <div style={{ color: "#475569" }}>megan.carpenter@mail.com</div>,
    type: "data",
    edit: <Button>...</Button>
  },
  {
    key: "2",
    name: <div style={{ color: "#1E293B", fontSize: "14px" }}>Joe Clark</div>,
    email: <div style={{ color: "#475569" }}>megan.carpenter@mail.com</div>,
    type: "data",
    edit: <Button>...</Button>
  },
  {
    key: "3",
    name: <div style={{ color: "#1E293B", fontSize: "14px" }}>Joe Clark</div>,
    email: <div style={{ color: "#475569" }}>megan.carpenter@mail.com</div>,
    type: "data",
    edit: <Button>...</Button>
  },
  {
    key: "4",
    name: <div style={{ color: "#1E293B", fontSize: "14px" }}>Joe Clark</div>,
    email: <div style={{ color: "#475569" }}>megan.carpenter@mail.com</div>,
    type: "data",
    edit: <Button>...</Button>
  },
  {
    key: "5",
    name: <div style={{ color: "#1E293B", fontSize: "14px" }}>Joe Clark</div>,
    email: <div style={{ color: "#475569" }}>megan.carpenter@mail.com</div>,
    type: "data",
    edit: <Button>...</Button>
  },
  {
    key: "6",
    name: <div style={{ color: "#1E293B", fontSize: "14px" }}>Joe Clark</div>,
    email: <div style={{ color: "#475569" }}>megan.carpenter@mail.com</div>,
    type: "data",
    edit: <Button>...</Button>
  },
  {
    key: "7",
    name: (
      <div style={{ color: "#1E293B", fontSize: "14px", height: "16px" }}>
        Joe Clark
      </div>
    ),
    email: <div style={{ color: "#475569" }}>megan.carpenter@mail.com</div>,
    type: "data",
    edit: <Button>...</Button>
  },
  {
    key: "8",
    name: <div style={{ color: "#1E293B", fontSize: "14px" }}>Joe Clark</div>,
    email: <div style={{ color: "#475569" }}>megan.carpenter@mail.com</div>,
    type: "data",
    edit: <Button>...</Button>
  },
  {
    key: "9",
    name: <div style={{ color: "#1E293B", fontSize: "14px" }}>Joe Clark</div>,
    email: <div style={{ color: "#475569" }}>megan.carpenter@mail.com</div>,
    type: "data",
    edit: <Button>...</Button>
  }
];

const SettingsUsers = () => (
  <>
    <div style={{ background: "#F1F5F9", height: "964px" }}>
      <Col span={24}>
        <h1
          style={{
            margin: "20px 0 20px 20px",
            fontSize: "30px",
            color: "#1E293B",
            width: "121px",
            height: "36px"
          }}
        >
          Settings
        </h1>
        <div style={{margin: " 0 0 0 20px"}}>
          <Col span={24}>
            <Row>
              <Col span={3}>
                {" "}
                <Card style={{ height: "710px" }}>
                  <Col
                    style={{
                      color: "#747E8D",
                      fontSize: "12px",
                      marginBottom: "10px"
                    }}
                  >
                    <span>SETTINGS</span>
                  </Col>
                  <Col
                    style={{
                      color: "#28589A",
                      background: "#28589A1A",
                      fontSize: "14px"
                    }}
                  >
                    <h4>Users</h4>
                  </Col>
                  <Col style={{ color: "#1E293B" }}>
                    <h4>Roles</h4>
                  </Col>
                  <Col style={{ color: "#1E293B" }}>
                    <h4>Integrations</h4>
                  </Col>
                </Card>
              </Col>
              <Col span={18}>
                {" "}
                <Card>
                  <Col>
                    <Row justify="space-between">
                      <Col style={{ color: "#1E293B", fontSize: "18px" }}>
                        <h3>User</h3>
                      </Col>
                      <Col>
                        <div style={{ margin: "0 20px 0 0" }}>
                          <PlusOutlined
                            style={{ color: "#28589A", margin: "0 5px 0 0" }}
                          />
                          <span style={{ color: "#28589A" }}>User</span>
                        </div>
                      </Col>
                    </Row>
                    <Col>
                      <div>
                        <Table
                          columns={columns}
                          dataSource={data}
                          size="middle"
                        />
                      </div>
                    </Col>
                  </Col>
                </Card>
              </Col>
            </Row>
          </Col>
        </div>
      </Col>
    </div>
  </>
);

export default SettingsUsers;