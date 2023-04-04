import React from "react";
import CollapseTable from "../Common/CollapsTable";

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
import { list, add } from "../api/Apis";
import appConfig from "../config/AppConfig";
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
    // <p>Details</p>
    // <p>Edit</p>
    // <p>Remove</p>
    //{" "}
  </div>
);
const columns = [
  {
    title: "ITEM",
    dataIndex: "iem",
  },
  {
    title: "ITEM AVAILABILITY",
    dataIndex: "itemAva",
  },
  {
    title: "QTY",
    dataIndex: "qty",
  },
  {
    title: "COMPANY",
    dataIndex: "company",
  },
  {
    title: "STYLE NO",
    dataIndex: "style",
  },
  {
    title: "STATUS",
    dataIndex: "status",
  },
  {
    title: "WAREHOUSE LOCATION",
    dataIndex: "warehouse",
  },
  {
    title: "NOT IN STOCK",
    dataIndex: "stock",
  },
];
const subData = [
  {
    key: "1",
    iem: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "90px",

          fontWeight: "bold",
        }}
      >
        1032BB-118
      </div>
    ),
    itemAva: (
      <div
        style={{
          color: "#3FB744",
          fontSize: "14px",
          width: "85px",
          height: "16px",
        }}
      >
        <b> 10 available </b>
      </div>
    ),
    qty: (
      <div
        style={{
          color: "#1E293B",
          fontSize: "14px",
          width: "9px",

          fontWeight: "bold",
        }}
      >
        2
      </div>
    ),
    company: (
      <h2 style={{ fontSize: "14px", color: "#1E293B", width: "71px" }}>
        Craftmade
      </h2>
    ),
    style: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "68px",
          fontWeight: "bolder",
        }}
      >
        #1223234
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#F1DEF5",
          borderRadius: "14px",
          width: "80px",
        }}
      >
        <h4
          style={{
            color: "#B70ADB",
            marginLeft: "11px",
            marginTop: "5px",
            marginLeft: "8px",
          }}
        >
          Processed
        </h4>
      </div>
    ),
    warehouse: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "42px",
          fontWeight: "bolder",
          marginLeft: "10px",
        }}
      >
        12345
      </div>
    ),
    stock: (
      <Button
        style={{
          backgroundColor: "#fff",
          color: "#28589A",
          minWidth: "150px",
          borderRadius: "5px",
          marginLeft: "10px",
        }}
      >
        {/* <PlusOutlined />
            Wantbook */}
      </Button>
    ),
  },
  {
    key: "2",
    iem: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "90px",

          fontWeight: "bold",
        }}
      >
        1032BB-118
      </div>
    ),
    itemAva: (
      <div
        style={{
          color: "#E80101",
          fontSize: "14px",
          width: "85px",
          height: "16px",
        }}
      >
        <b> Our of stock </b>
      </div>
    ),
    qty: (
      <div
        style={{
          color: "#1E293B",
          fontSize: "14px",
          width: "9px",

          fontWeight: "bold",
        }}
      >
        2
      </div>
    ),
    company: (
      <h2 style={{ fontSize: "14px", color: "#1E293B", width: "71px" }}>
        Craftmade
      </h2>
    ),
    style: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "68px",
          fontWeight: "bolder",
        }}
      >
        #1223234
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#E2F8F0",
          borderRadius: "14px",
          width: "90px",
          marginLeft: "1px",
        }}
      >
        <h4
          style={{
            color: "#0BA811",
            marginLeft: "11px",
            marginTop: "5px",
            marginLeft: "10px",
          }}
        >
          In progress
        </h4>
      </div>
    ),
    warehouse: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "42px",
          fontWeight: "bolder",
        }}
      >
        {/* 12345 */}
      </div>
    ),
    stock: (
      <Button
        style={{
          backgroundColor: "#fff",
          color: "#28589A",
          Width: "99px",
          borderRadius: "5px",
          marginLeft: "10px",
          border: "1px solid #E2E8F0",
        }}
      >
        <PlusOutlined />
        Wantbook
      </Button>
    ),
  },
  {
    key: "3",
    iem: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "90px",

          fontWeight: "bold",
        }}
      >
        1032BB-118
      </div>
    ),
    itemAva: (
      <div
        style={{
          color: "#E80101",
          fontSize: "14px",
          width: "85px",
          height: "16px",
          fontWeight: "bold",
        }}
      >
        Our of stock
      </div>
    ),
    qty: (
      <div
        style={{
          color: "#1E293B",
          fontSize: "14px",
          width: "9px",

          fontWeight: "bold",
        }}
      >
        2
      </div>
    ),
    company: (
      <h2 style={{ fontSize: "14px", color: "#1E293B", width: "71px" }}>
        Craftmade
      </h2>
    ),
    style: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "68px",
          fontWeight: "bolder",
        }}
      >
        #1223234
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#E2F8F0",
          borderRadius: "14px",
          width: "90px",
          marginLeft: "1px",
        }}
      >
        <h4
          style={{
            color: "#0BA811",
            marginLeft: "11px",
            marginTop: "5px",
            marginLeft: "10px",
          }}
        >
          In progress
        </h4>
      </div>
    ),
    warehouse: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "42px",
          fontWeight: "bolder",
        }}
      >
        {/* 12345 */}
      </div>
    ),
    stock: (
      <Button
        style={{
          backgroundColor: "#fff",
          color: "#28589A",
          Width: "99px",
          borderRadius: "5px",
          marginLeft: "10px",
          border: "1px solid #E2E8F0",
        }}
      >
        <PlusOutlined />
        Wantbook
      </Button>
    ),
  },
  {
    key: "4",
    iem: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "90px",

          fontWeight: "bold",
        }}
      >
        1032BB-118
      </div>
    ),
    itemAva: (
      <div
        style={{
          color: "#3FB744",
          fontSize: "14px",
          width: "85px",
          height: "16px",
        }}
      >
        <b> 10 available </b>
      </div>
    ),
    qty: (
      <div
        style={{
          color: "#1E293B",
          fontSize: "14px",
          width: "9px",

          fontWeight: "bold",
        }}
      >
        2
      </div>
    ),
    company: (
      <h2 style={{ fontSize: "14px", color: "#1E293B", width: "71px" }}>
        Craftmade
      </h2>
    ),
    style: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "68px",
          fontWeight: "bolder",
        }}
      >
        #1223234
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#EDE3CC",
          borderRadius: "14px",
          width: "70px",
        }}
      >
        <h4 style={{ color: "#CE8700", marginLeft: "11px", marginTop: "5px" }}>
          Waiting
        </h4>
      </div>
    ),
    warehouse: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "42px",
          fontWeight: "bolder",
        }}
      >
        {/* 12345 */}
      </div>
    ),
    stock: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "62px",
          fontWeight: "bold",
          textAlign: "left",
        }}
      ></div>
    ),
  },
  {
    key: "5",
    iem: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "90px",

          fontWeight: "bold",
        }}
      >
        1032BB-118
      </div>
    ),
    itemAva: (
      <div
        style={{
          color: "#3FB744",
          fontSize: "14px",
          width: "85px",
          height: "16px",
        }}
      >
        <b> 10 available </b>
      </div>
    ),
    qty: (
      <div
        style={{
          color: "#1E293B",
          fontSize: "14px",
          width: "9px",

          fontWeight: "bold",
        }}
      >
        2
      </div>
    ),
    company: (
      <h2 style={{ fontSize: "14px", color: "#1E293B", width: "71px" }}>
        Craftmade
      </h2>
    ),
    style: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "68px",
          fontWeight: "bolder",
        }}
      >
        #1223234
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#F1DEF5",
          borderRadius: "14px",
          width: "80px",
        }}
      >
        <h4
          style={{
            color: "#B70ADB",
            marginLeft: "11px",
            marginTop: "5px",
            marginLeft: "8px",
          }}
        >
          Processed
        </h4>
      </div>
    ),
    warehouse: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "42px",
          marginLeft: "10px",
          fontWeight: "bolder",
        }}
      >
        12345
      </div>
    ),
    stock: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "62px",
          fontWeight: "bold",
          textAlign: "left",
        }}
      ></div>
    ),
  },
  {
    key: "6",
    iem: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "90px",

          fontWeight: "bold",
        }}
      >
        1032BB-118
      </div>
    ),
    itemAva: (
      <div
        style={{
          color: "#3FB744",
          fontSize: "14px",
          width: "85px",
          height: "16px",
        }}
      >
        <b> 10 available </b>
      </div>
    ),
    qty: (
      <div
        style={{
          color: "#1E293B",
          fontSize: "14px",
          width: "9px",

          fontWeight: "bold",
        }}
      >
        2
      </div>
    ),
    company: (
      <h2 style={{ fontSize: "14px", color: "#1E293B", width: "71px" }}>
        Craftmade
      </h2>
    ),
    style: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "68px",
          fontWeight: "bolder",
        }}
      >
        #1223234
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#EDE3CC",
          borderRadius: "14px",
          width: "70px",
        }}
      >
        <h4 style={{ color: "#CE8700", marginLeft: "11px", marginTop: "5px" }}>
          Waiting
        </h4>
      </div>
    ),
    warehouse: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "42px",
          fontWeight: "bolder",
        }}
      >
        {/* 12345 */}
      </div>
    ),
    stock: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "62px",
          fontWeight: "bold",
          textAlign: "left",
        }}
      ></div>
    ),
  },
  {
    key: "7",
    iem: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "90px",

          fontWeight: "bold",
        }}
      >
        1032BB-118
      </div>
    ),
    itemAva: (
      <div
        style={{
          color: "#3FB744",
          fontSize: "14px",
          width: "85px",
          height: "16px",
        }}
      >
        <b> 10 available </b>
      </div>
    ),
    qty: (
      <div
        style={{
          color: "#1E293B",
          fontSize: "14px",
          width: "9px",

          fontWeight: "bold",
        }}
      >
        2
      </div>
    ),
    company: (
      <h2 style={{ fontSize: "14px", color: "#1E293B", width: "71px" }}>
        Craftmade
      </h2>
    ),
    style: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "68px",
          fontWeight: "bolder",
        }}
      >
        #1223234
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#F1DEF5",
          borderRadius: "14px",
          width: "80px",
        }}
      >
        <h4
          style={{
            color: "#B70ADB",
            marginLeft: "11px",
            marginTop: "5px",
            marginLeft: "8px",
          }}
        >
          Processed
        </h4>
      </div>
    ),
    warehouse: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "42px",
          fontWeight: "bolder",
          marginLeft: "10px",
        }}
      >
        12345
      </div>
    ),
    stock: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "62px",
          fontWeight: "bold",
          textAlign: "left",
        }}
      ></div>
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

export default function SoDetails() {
  //   useEffect(() => {

  // console.log("test")
  // getMasterData()

  //   });

  //   const getMasterData = async () => {
  //     list(appConfig["entityNames"]["getMasterData"])
  //       .then((result) => {
  //         console.log(result,"result");
  //         if (result.success) {
  //           this.setState({
  //             masterData: result.data.sort((a, b) =>
  //               a["data"] > b.data ? 1 : -1
  //             ),
  //           });
  //           // this.getProposals();
  //         }
  //       })
  //       .catch((error) => console.log(error));
  //   };

  return (
    <div>
    <Col span={24} style={{background: "#F1F5F9",}}>
      <Row>
        <Col span={18} onClick={() => window.history.go(-1)}>
          <h1 style={{ color: "#1E293B", fontSize: "30px" }}>
            <span>
              <ArrowLeftOutlined style={{ fontSize: "22px" }} />
            </span>
            Sales Order Details
          </h1>
        </Col>

        <Col span={6}>
          <Row justify="space-between">
            <Col>
              <Button
                style={{
                  marginLeft: "100px",
                  color: "#94A3B8",
                  borderRadius: "5px",
                }}
              >
                <DeleteOutlined style={{ color: "#94A3B8" }} />
                Remove
              </Button>
            </Col>
            <Col>
              <Button style={{ color: "#94A3B8", borderRadius: "5px" }}>
                <EditOutlined style={{ color: "#94A3B8" }} /> Edit
              </Button>
            </Col>
            <Col>
              <Button
                style={{
                  backgroundColor: "#28589A",
                  color: "white",
                  minWidth: "121px",
                  borderRadius: "5px",
                }}
              >
                <PlusOutlined />
                Wantbook
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Col span={24}>
        <Row gutter={[8, 8]}>
          <Col span={4}>
            <Row gutter={[6, 6]}>
              <Col span={24}>
                <Card>
                  <Row justify="space-between">

      {/* <Col span={24}>
        <Row gutter={[8, 8]}>
          <Col span={6}>
            <Row gutter={[6, 6]}>
              <Col span={24}>
                <Card style={{ heigth: "px" }}>
                  <Row justify="space-between"> */}
                    <h3><b>Details</b></h3>
                    <Divider style={{ margin: "15px 0" }} />
                  </Row>
                  <Row justify="space-between">
                    <Col>Order Date</Col>
                    <Col>
                      <b>27/07/2022</b>
                    </Col>

                    <Divider style={{ margin: "15px 0" }} />
                  </Row>
                  <Row justify="space-between">
                    <Col> Customer</Col>
                    <Col>
                      <b>Philip Marshall</b>
                    </Col>

                    <Divider  style={{ margin: "15px 0" }}/>
                  </Row>
                  <Row justify="space-between">
                    <Col>Items</Col>
                    <Col>
                      <b>3</b>
                    </Col>
                    <Divider  style={{ margin: "15px 0" }}/>
                  </Row>
                  <Row justify="space-between">
                    <Col>Price</Col>
                    <Col>
                      <b>$100.00</b>
                    </Col>
                    <Divider  style={{ margin: "15px 0" }}/>
                  </Row>{" "}
                  <Row justify="space-between">
                    <Col>Source</Col>
                    <Col>
                      <b>Website</b>
                    </Col>
                    <Divider  style={{ margin: "15px 0" }}/>
                  </Row>
                  <Row justify="space-between">
                    <Col>Type</Col>
                    <Col>
                      <b>Picup</b>
                    </Col>
                    <Divider style={{ margin: "15px 0" }} />
                  </Row>
                  <Row justify="space-between">
                    <Col>Sales Person</Col>
                    <Col>
                      <b>George James</b>
                    </Col>
                    <Divider style={{ margin: "15px 0" }} />
                  </Row>
                  <Row justify="space-between">
                    <Col>Needed By </Col>
                    <Col>
                      <b>30/07/2022</b>
                    </Col>
                    <Divider style={{ margin: "15px 0" }}/>
                  </Row>
                </Card>

                <Row gutter={[6, 6]}>
                  <Col span={24}>
                    <Card style={{ marginTop: "15px" }}>
                      <Row justify="space-between" style={{}}>
                        <h3>
                          <b>Cost</b>
                        </h3>
                        <Divider style={{ margin: "15px 0" }} />
                      </Row>
                      <Row justify="space-between">
                        <Col>Total Order Cost</Col>
                        <Col>
                          <b>$100.00</b>
                        </Col>
                        <Divider style={{ margin: "15px 0" }} />
                      </Row>
                      <Row justify="space-between">
                        <Col>Sales Price (Internal)</Col>
                        <Col>
                          <b>$200.00</b>
                        </Col>

                        <Divider  style={{ margin: "15px 0" }}/>
                      </Row>
                      <Row justify="space-between">
                        <Col>Margin (Internal)</Col>
                        <Col>
                          <b>$300.00</b>
                        </Col>

                        <Divider  style={{ margin: "20px 0" }}/>
                      </Row>
                      <Row justify="space-between">
                        <Col>Budget</Col>
                        <Col>
                          <b>$1000.00</b>
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
              title="Inventory"
              padding="0px 1px 0px 2px "
              style={{ color: "#1E293B", fontSize: "15px", width: "" , marginLeft: "10px"}}
            >
              <Table rowSelection dataSource={subData} columns={columns} />
            </Card>
          </Col>
        </Row>
      </Col>
    </Col>
    </div>
  );
}
