import React from "react";
import "antd/dist/antd.css";

import {
  Card,
  Col,
  Row,
  Select,
  Table,
  Button,
  Space,
  Dropdown,
  Menu,
} from "antd";

import { ArrowLeftOutlined, DownOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "ITEM Name",
    dataIndex: "name",
  },
  {
    title: "ITEM ID",
    dataIndex: "id",
  },
  {
    title: "QTY ORDERD",
    dataIndex: "orderd",
  },
  {
    title: "QTY RECEIVED",
    dataIndex: "dropdown",
  },
];

const menu = (
  <Menu>
    <Menu.Item key="1">1</Menu.Item>
    <Menu.Item key="2">2</Menu.Item>
    <Menu.Item key="3">3</Menu.Item>
  </Menu>
);
const data = [
  {
    key: "1",
    name: <b>Arthur Two Light Vanity</b>,
    id: <b>753948</b>,
    orderd: <b>10</b>,
    dropdown: (
      <Dropdown overlay={menu}>
        <Button style={{ width: "100%" }}>
          <Space>
            <b>2</b>
            <DownOutlined style={{ marginLeft: "40px" }} />
          </Space>
        </Button>
        </Dropdown>
    ),
  },
  {
    key: "2",
    name: <b>Arthur Three Light Vanity</b>,
    id: <b>753940</b>,
    orderd: <b>2</b>,
    dropdown: (
      <Dropdown overlay={menu}>
        <Button style={{ width: "100%" }}>
          <Space>
            <b>1</b>
            <DownOutlined style={{ marginLeft: "40px" }} />
          </Space>
        </Button>
      </Dropdown>
    ),
  },
  {
    key: "3",
    name: <b>Arthur Four Light Vanity</b>,
    id: <b>753940</b>,
    orderd: <b>4</b>,
    dropdown: (
      <Dropdown overlay={menu}>
        <Button style={{ width: "100%" }}>
          <Space>
            <b>0</b>
            <DownOutlined style={{ marginLeft: "40px" }} />
          </Space>
        </Button>
      </Dropdown>
    ),
  },
  {
    key: "4",
    name: <b>Arthur Five Light Vanity</b>,
    id: <b>753965</b>,
    orderd: <b>1</b>,
    dropdown: (
      <Dropdown overlay={menu}>
        <Button style={{ width: "100%" }}>
          <Space>
            <b>1</b>
            <DownOutlined style={{ marginLeft: "40px" }} />
          </Space>
        </Button>
      </Dropdown>
    ),
  },
];
const { Option } = Select;

const AddReceivedItem = () => {
  return (
    <>
      <div>
        <Card
          style={{
            backgroundColor: "#F1F5F9",
            height: "901px",
          }}
        >
          <div>
            <Row>
              <Col onClick={() => window.history.go(-1)}>
                <h1 style={{ color: "#1E293B", fontSize: "30px" }}>
                  <span>
                    <ArrowLeftOutlined style={{ fontSize: "22px" }} />
                  </span>
                  Add Received Item
                </h1>
              </Col>
            </Row>

            <Row>
              <Col span={4} offset={0}>
                <Card
                  style={{
                    width: "688px",
                    height: "510px",
                    backgroundColor: "#FFFFFF",
                    borderSize: "1px",
                    bordColor: "white",
                  }}
                >
                  <h2>
                    <b>Details</b>
                  </h2>
                  <h5>
                    <b>PO#</b>
                  </h5>
                  <Select
                    className=""
                    defaultValue="#122344"
                    style={{
                      height: "100%",
                      width: "100%",
                      marginBottom: "20px",
                    }}
                    onChange={() => console.log("")}
                  >
                    <Option value="#122344">
                      <b>#122344</b>
                    </Option>
                  </Select>
                  <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    style={{ background: "#e3e7ea" }}
                  />
                  <div style={{ float: "right", marginTop: "10px" }}>
                    <Button style={{ marginRight: "10px" }} type="Cancel">
                      cancel
                    </Button>
                    <Button
                      style={{
                        backgroundColor: " #28589A",
                        marginRight: "20px",
                        color: "#fff",
                      }}
                    >
                      Save
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
    </>
  );
};
export default AddReceivedItem;
