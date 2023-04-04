import React from "react";
import CollapseTable from "../Common/CollapsTable";
import HeaderOptions from "../Common/HeaderOptions";

import {
  Divider,
  Select,
  Col,
  Button,
  Popover,
  Row,
  Card,
  Collapse,
  Table,
} from "antd";
import {
  ArrowLeftOutlined,
  DownloadOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  MailOutlined,
} from "@ant-design/icons";
const { Panel } = Collapse;

const text = "";
const content = (
  <div>
    <p>Details</p>
    <p>Edit</p>
    <p>Remove</p>
  </div>
);
const columns = [
  {
    title: "DATE",
    dataIndex: "date",
  },
  {
    title: "CHANGE",
    dataIndex: "change",
  },
  {
    title: "",
    dataIndex: "dots",
  },
];
const subData = [
  {
    key: "1",
    date: "09/07/2022",
    change: "$100.00",
    dots: (
      <Popover
        style={{ width: "124px", height: "100px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "2",
    date: "09/07/2022",
    change: "$100.00",
    dots: (
      <Popover
        style={{ width: "124px", height: "100px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "3",
    date: "09/07/2022",
    change: "$100.00",
    dots: (
      <Popover
        style={{ width: "124px", height: "100px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "4",
    date: "09/07/2022",
    change: "$100.00",
    dots: (
      <Popover
        style={{ width: "124px", height: "100px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "5",
    date: "09/07/2022",
    change: "$100.00",
    dots: (
      <Popover
        style={{ width: "124px", height: "100px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "6",
    date: "09/07/2022",
    change: "$100.00",
    dots: (
      <Popover
        style={{ width: "124px", height: "100px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "7",
    date: "09/07/2022",
    change: "$100.00",
    dots: (
      <Popover
        style={{ width: "124px", height: "100px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "8",
    date: "09/07/2022",
    change: "$100.00",
    dots: (
      <Popover
        style={{ width: "124px", height: "100px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "9",
    date: "09/07/2022",
    change: "$100.00",
    dots: (
      <Popover
        style={{ width: "124px", height: "100px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
];

const data = {
  isCollapseTable: true,
  pageTitle: "",
  pageButtonTitle: "",
  collapseButtonTitle: "",
  collapseTableData: [
    {
      id: "1",
      collapseTitle: "",
      collapseSubTitle: "",
      collapseData: subData,
      constraints: false,
    },
  ],
};

export default function VendorDetails() {
  return (
    <Col span={24}>
      <HeaderOptions title="Vendor Details" showEdit={true} showDelete={true} />
      {/* <Row>
        <Col span={18} onClick={() => window.history.go(-1)}>
          <h1 style={{ color: "#1E293B", fontSize: "30px" }}>
            <span>
              <ArrowLeftOutlined style={{ fontSize: "22px" }} />
            </span>
            VendorDetails
          </h1>
        </Col>
        <Col span={6}>
          <Row justify="space-between">
            <Col
              style={{
                marginLeft: "231px",
                marginTop: "40px",
                color: "#C72323",
                borderRadius: "5px",
              }}
            >
              <DeleteOutlined style={{ color: "#C72323" }} />
              Remove
            </Col>
            <Col>
              <Button
                style={{
                  color: "#94A3B8",
                  borderRadius: "5px",
                  marginLeft: "25PX",
                  marginTop: "35px",
                }}
              >
                <EditOutlined style={{ color: "#94A3B8" }} /> Edit
              </Button>
            </Col>
          </Row>
        </Col>
      </Row> */}
      <Col span={24}>
        <Row gutter={[8, 8]}>
          <Col span={4}>
            <Row gutter={[6, 6]}>
              <Col span={24}>
                <Card>
                  <Row justify="space-between">
                    <h3>
                      <b>Vendor Details</b>
                    </h3>
                    <Divider style={{ margin: "10px 0" }} />
                  </Row>
                  <Row justify="space-between">
                    <Col>Name</Col>
                    <Col>
                      <b>1032BB-118</b>
                    </Col>
                    <Divider style={{ margin: "10px 0" }} />
                  </Row>
                  <Col>Address</Col>
                  <Col>
                    <b>
                      841 Lakeshore Dr <br />
                      Port Orford, Oregon
                    </b>
                  </Col>
                  <Divider />
                  <Row justify="space-between">
                    <Col>Phone</Col>
                    <Col>
                      <b>14x8</b>
                    </Col>
                    <Divider style={{ margin: "10px 0" }} />
                  </Row>
                  <Row justify="space-between">
                    <Col>Email</Col>
                    <Col>
                      <b>Bronze / Dark</b>
                    </Col>
                    <Divider style={{ margin: "`10px 0" }} />
                  </Row>{" "}
                  <Row justify="space-between">
                    <Col>Dropship Policy</Col>
                    <Col>
                      <b>Bronze / Dark</b>
                    </Col>
                    <Divider style={{ margin: "10px 0" }} />
                  </Row>
                  <Row justify="space-between">
                    <Col>Warranty</Col>
                    <Col>
                      <b>Bronze / Dark</b>
                    </Col>
                    <Divider style={{ margin: "10px 0" }} />
                  </Row>
                  <Col>Website</Col>
                  <Col>
                    <b>www.websitename.com</b>
                  </Col>
                  <Divider style={{ margin: "10px 0" }} />
                  <Col>
                    <b>Username: Username</b>
                    <br />
                    <b> Password:123456</b>
                  </Col>
                  <Divider style={{ margin: "10px 0" }} />
                </Card>
                <Row gutter={[6, 6]}>
                  <Col span={24}>
                    <Card style={{ margin: "10px 0" }}>
                      <Row justify="space-between">
                        <h3>
                          <b>Free Freight Conditions</b>
                        </h3>
                        <Divider style={{ margin: "20px 0" }} />
                      </Row>
                      <Row justify="space-between">
                        <Col>Free Freight Allowance</Col>
                        <Col>
                          <b>$100</b>
                        </Col>
                        <Divider style={{ margin: "20px 0" }} />
                      </Row>
                      <Row justify="space-between">
                        <Col>Minimum Order Amount</Col>
                        <Col>
                          <b>$100</b>
                        </Col>

                        <Divider style={{ margin: "20px 0" }} />
                      </Row>
                      <Row justify="space-between">
                        <Col>Free Freight Date</Col>
                        <Col>
                          <b>Mon, Fri</b>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={20}>
            <Card
              title="History of changes"
              padding="0px 1px 0px 2px "
              style={{ color: "#1E293B", fontSize: "15px", marginLeft: "10px" }}
            >
              <Table rowSelection dataSource={subData} columns={columns} />
            </Card>
          </Col>
        </Row>
      </Col>
    </Col>
  );
}
