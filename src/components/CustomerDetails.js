import React from "react";
import { Col, Row, Card, Tabs, Input } from "antd";
import HeaderOptions from "../Common/HeaderOptions";
import Invoice from "../Components/Invoice";
import CustomerOrders from "../Components/CustomerOrders";
import Notes from "../Components/Notes";

const { TabPane } = Tabs;
const items = [
  {
    label: (
      <div style={{ fontSize: "15px", fontWeight: "600" }}>
        Invoices <span style={{ fontWeight: "400", color: "#94A3B8" }}>4</span>{" "}
      </div>
    ),
    key: 1,
    children: <Invoice />,
  },
  {
    label: (
      <div style={{ fontSize: "15px", fontWeight: "600" }}>
        Customer Orders{" "}
        <span style={{ fontWeight: "400", color: "#94A3B8" }}>9</span>{" "}
      </div>
    ),
    key: 2,
    children: <CustomerOrders />,
  },
  {
    label: (
      <div style={{ fontSize: "15px", fontWeight: "600" }}>
        Notes <span style={{ fontWeight: "400", color: "#94A3B8" }}>2</span>
      </div>
    ),
    key: 3,
    children: <Notes />,
  },
];
export default function CustomerDetails() {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Col>
      <Col span={24}>
        <HeaderOptions
          title="Customer Details"
          showEdit={true}
          showDelete={true}
        />
      </Col>
      <Col span={24}>
        <Row gutter={[16, 16]}>
          <Col span={5}>
            <Card>
              <Col style={{ fontSize: "23px", color: "#1E293B" }}>
                <b> Details</b>
              </Col>

              <hr />
              <Col>
                <Row justify="space-between">
                  <Col>
                    <h1 style={{ fontSize: "14px", color: "#747E8D" }}>
                      First Name
                    </h1>
                  </Col>
                  <Col>
                    <h1 style={{ fontSize: "14px" }}>Philip</h1>
                  </Col>
                </Row>{" "}
                <hr />
                <Row justify="space-between">
                  <Col>
                    <h1 style={{ fontSize: "14px", color: "#747E8D" }}>
                      Last Name
                    </h1>
                  </Col>
                  <Col>
                    <h1 style={{ fontSize: "14px" }}>Marshall</h1>
                  </Col>
                </Row>{" "}
                <hr />
                <Row justify="space-between">
                  <Col>
                    <h1 style={{ fontSize: "14px", color: "#747E8D" }}>
                      Phone
                    </h1>
                  </Col>
                  <Col style={{ fontSize: "14px" }}>
                    <h1>(371)611-0042</h1>
                  </Col>
                </Row>{" "}
                <hr />
                <Row justify="space-between">
                  <Col>
                    <h1 style={{ fontSize: "14px", color: "#747E8D" }}>
                      Email
                    </h1>
                  </Col>
                  <Col>
                    <h1 style={{ fontSize: "12px" }}>debra.vargas@mail.com</h1>
                  </Col>
                </Row>{" "}
                <hr />
                <Row justify="space-between">
                  <Col>
                    <h1 style={{ fontSize: "16px", color: "#747E8D" }}>
                      Address
                    </h1>
                  </Col>
                  <Col>
                    <h1 style={{ fontSize: "14px" }}>
                      841 Lakeshore Dr <br /> Port Orford, Oregon
                    </h1>
                  </Col>
                </Row>{" "}
                <hr />
                <Row justify="space-between">
                  <Col>
                    <h1 style={{ fontSize: "14px", color: "#747E8D" }}>
                      Business type
                    </h1>
                  </Col>
                  <Col>
                    <h1 style={{ fontSize: "14px" }}>Business</h1>
                  </Col>
                </Row>{" "}
                <hr />
                <Row justify="space-between">
                  <Col>
                    <h1 style={{ fontSize: "14px", color: "#747E8D" }}>
                      Salesperson
                    </h1>
                  </Col>
                  <Col>
                    <h1 style={{ fontSize: "14px" }}>George James</h1>
                  </Col>
                </Row>
              </Col>
            </Card>
            <br />
            <Card>
              <br />
              <Col style={{ fontSize: "23px" }}>
                {" "}
                <h1>Pricing Levels</h1>
              </Col>

              <hr />
              <Input
                type="text"
                style={{ height: "50px", borderRadius: "6px" }}
              />
            </Card>
          </Col>
          <Col span={18}>
            <Card>
              {" "}
              <Tabs defaultActiveKey={1} onChange={onChange}>
                {items.map((e) => (
                  <TabPane key={e.key} tab={e.label}>
                    {e.children}
                  </TabPane>
                ))}
              </Tabs>
            </Card>
          </Col>
        </Row>
      </Col>
    </Col>
  );
}
