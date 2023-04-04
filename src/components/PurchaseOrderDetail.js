import React, { useState, pageSize } from "react";
import { Divider, Col, Button, Row, Card, Table, Timeline, Modal } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import HeaderOptions from "../Common/HeaderOptions";
import "../Stylesheet/_header.scss";

export default function PurchaseOrderDetail() {
  const [show, setShow] = useState(false);
  const columns = [
    {
      title: <div className="table-header">ID</div>,
      dataIndex: "id",
    },
    {
      title: <div className="table-header">DESCRIPTION</div>,
      dataIndex: "description",
    },
    {
      title: <div className="table-header">QTY</div>,
      dataIndex: "qty",
    },
    {
      title: <div className="table-header">Price</div>,
      dataIndex: "price",
    },
  ];

  const data = [
    {
      key: "1",
      id: <div className="table-itemdetails ">753948</div>,
      description: (
        <div className="table-itemdetails ">
          Two Light Vanity by Capital Lighting from the <br />
          Arthur collection in Burnished Bronze finish
        </div>
      ),
      qty: <div className="table-lastrow">2</div>,
      price: <div className="table-lastrow">$2144.00</div>,
    },
    {
      key: "2",
      id: <div className="table-itemdetails ">753940</div>,
      description: (
        <div className="table-itemdetails ">
          Three Light Vanity by Capital Lighting from the <br /> Arthur
          collection in Burnished Bronze finish
        </div>
      ),
      qty: <div className="table-lastrow"> 2</div>,
      price: <div className="table-lastrow">$2144.00</div>,
    },
    {
      key: "3",
      id: <div className="table-itemdetails ">753941</div>,
      description: (
        <div className="table-itemdetails ">
          Four Light Vanity by Capital Lighting from the <br /> Arthur
          collection in Burnished Bronze finish
        </div>
      ),
      qty: <div className="table-lastrow">2</div>,
      price: <div className="table-lastrow">$2144.00</div>,
    },
    {
      key: "4",
      id: <div className="table-itemdetails ">753965</div>,
      description: (
        <div className="table-itemdetails ">
          Five Light Vanity by Capital Lighting from the <br />
          Arthur collection in Burnished Bronze finish
        </div>
      ),
      qty: <div className="table-lastrow">2</div>,
      price: <div className="table-lastrow">$2144.00</div>,
    },
    {
      key: "5",
      id: <div className="table-itemdetails ">971781</div>,
      description: (
        <div className="table-itemdetails ">
          Two Light Vanity by Capital Lighting from the Louis
          <br /> collection in Chrome finish
        </div>
      ),
      qty: <div className="table-lastrow"> 2</div>,
      price: <div className="table-lastrow">$2144.00</div>,
    },
    {
      key: "6",
      id: <div className="table-itemdetails ">971782</div>,
      description: (
        <div className="table-itemdetails ">
          Two Light Vanity by Capital Lighting from the Louis
          <br /> collection in Matte Nickel finish
        </div>
      ),
      qty: <div className="table-lastrow">2</div>,
      price: <div className="table-lastrow">$2144.00</div>,
    },
    {
      key: "7",
      id: <div className="table-itemdetails ">753940</div>,
      description: (
        <div className="table-itemdetails ">
          Three Light Vanity by Capital Lighting from the Louis <br />
          collection in Chrome finish
        </div>
      ),
      qty: <div className="table-lastrow">2</div>,
      price: <div className="table-lastrow">$2144.00</div>,
    },
  ];
  return (
    <div>
      <Col span={24}>
        <HeaderOptions
          title="#12234345"
          showEdit={true}
          showDelete={true}
          showEmail={true}
          showDownload={true}
        />

        <Col span={24}>
          <Row gutter={[8, 8]}>
            <Col span={4}>
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <Card style={{ heigth: "245px" }}>
                    <Row justify="space-between">
                      <h3 className="card">PO Details</h3>
                      <Divider
                        style={{ marginBottom: "15px", marginTop: "15px" }}
                      />
                    </Row>
                    <Row justify="space-between">
                      <Col className="label">Created by</Col>
                      <Col className="card-content">Philip Marshall</Col>
                      <Divider
                        style={{ marginBottom: "15px", marginTop: "15px" }}
                      />
                    </Row>
                    <Row justify="space-between">
                      <Col className="label">Created date</Col>
                      <Col className="card-content">30/07/2022</Col>
                      <Divider
                        style={{ marginBottom: "15px", marginTop: "15px" }}
                      />
                    </Row>
                    <Row justify="space-between">
                      <Col className="label">PO#</Col>
                      <Col style={{ color: "#0058E8", fontWeight: "600" }}>
                        #123434
                      </Col>
                      <Divider
                        style={{ marginBottom: "15px", marginTop: "15px" }}
                      />
                    </Row>
                    <Row justify="space-between">
                      <Col className="label">Terms</Col>
                      <Col className="card-content">30/07/2022</Col>
                    </Row>{" "}
                  </Card>

                  <Row gutter={[6, 6]}>
                    <Col span={24}>
                      <Card style={{ marginTop: "10px" }}>
                        <Row justify="space-between">
                          <h3 className="card">Vendor Details</h3>
                          <Divider
                            style={{ marginBottom: "13px", marginTop: "13px" }}
                          />
                        </Row>
                        <Row justify="space-between">
                          <Col>
                            <span className="label">Name</span>
                          </Col>
                          <Col className="card-content">Jonathan Matthews</Col>
                          <Divider
                            style={{ marginBottom: "13px", marginTop: "13px" }}
                          />
                        </Row>
                        <Row justify="space-between">
                          <Col className="label">Address</Col>
                          <Col className="card-content">
                            841 Lakeshore Dr <br />
                            Port Orford, Oregon
                          </Col>
                          <Divider
                            style={{ marginBottom: "13px", marginTop: "13px" }}
                          />
                        </Row>
                        <Row justify="space-between">
                          <Col className="label">Contact</Col>
                          <Col className="card-content">(155)810-8363</Col>
                          <Divider
                            style={{ marginBottom: "13px", marginTop: "13px" }}
                          />
                        </Row>
                        <Row justify="space-between">
                          <Col className="label">Account #</Col>
                          <Col className="card-content">#122343</Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                  <Row gutter={[6, 6]}>
                    <Col span={24}>
                      <Card style={{ marginTop: "10px" }}>
                        <Row justify="space-between">
                          <h3 className="card">Status</h3>
                          <Divider
                            style={{ marginBottom: "13px", marginTop: "13px" }}
                          />
                        </Row>
                        <Row justify="space-between">
                          <Col className="label">Status</Col>
                          <Col>
                            <div
                              style={{
                                borderRadius: "14px",
                                background: "#E2F8F0",
                                color: "green",
                              }}
                            >
                              <h4
                                style={{
                                  color: "#0BA811",
                                  padding: " 4px 10px",
                                }}
                              >
                                Received
                              </h4>
                            </div>
                          </Col>
                          <Divider
                            style={{ marginBottom: "13px", marginTop: "13px" }}
                          />
                        </Row>
                        <Row justify="space-between">
                          <Col className="label">Received Date</Col>
                          <Col className="card-content">30/07/2022</Col>
                          <Divider
                            style={{ marginBottom: "13px", marginTop: "13px" }}
                          />
                        </Row>
                        <Row justify="space-between">
                          <Col className="label">
                            Warehouse/ <br />
                            Dropship
                          </Col>
                          <Col>
                            <Button
                              style={{
                                borderRadius: "14px",
                                background: "#FFFFFF",
                                border: "1px solid #E2E8F0",
                              }}
                            >
                              <h4
                                style={{
                                  color: "#475569",
                                  fontSize: "12px",
                                }}
                              >
                                Dropship
                              </h4>
                            </Button>
                          </Col>
                          <Divider
                            style={{ marginBottom: "13px", marginTop: "13px" }}
                          />
                        </Row>
                        <Row justify="space-between">
                          <Col className="label">Tracking Number</Col>
                          <Col
                            style={{
                              cursor: "pointer",
                              color: "#28589A",
                              fontWeight: "600",
                            }}
                            onClick={() => {
                              setShow(true);
                            }}
                          >
                            <u>1232435</u>
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
                title="Items Details"
                padding="0px 1px 0px 2px "
                style={{ color: "#1E293B", fontSize: "15px", width: "" }}
              >
                <Table
                  columns={columns}
                  dataSource={data}
                  size="middle"
                  pagination={data.length > pageSize && { pageSize }}
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Col>
      {show && (
        <Modal
          title="Tracking"
          centered
          visible={show}
          onOk={() => setShow(false)}
          onCancel={() => setShow(false)}
          width={600}
          okText=""
          cancelText
        >
          <Col>
            <Row justify="space-between">
              <Col>
                <Timeline.Item color="#28589A" className="timeline-title">
                  Arrived at Facility
                  <p className="timeline-para"> 11/08/22 9:56 AM</p>
                </Timeline.Item>
              </Col>

              <Col>
                <div>
                  <h4>Louisville,KY,US</h4>
                </div>
              </Col>
            </Row>
            <Row justify="space-between">
              <Col>
                <Timeline.Item color="#28589A" className="timeline-title">
                  Departed from Facility
                  <p className="timeline-para"> 11/08/22 9:56 AM</p>
                </Timeline.Item>
              </Col>

              <Col>
                <div>
                  <h4>Louisville,KY,US</h4>
                </div>
              </Col>
            </Row>{" "}
            <Row justify="space-between">
              <Col>
                <Timeline.Item color="#28589A" className="timeline-title">
                  Arrived at Facility
                  <p className="timeline-para"> 11/08/22 9:56 AM</p>
                </Timeline.Item>
              </Col>

              <Col>
                <div>
                  <h4>Albuquerque, NM,US</h4>
                </div>
              </Col>
            </Row>{" "}
            <Row justify="space-between">
              <Col>
                <Timeline.Item color="#28589A" className="timeline-title">
                  Departed from Facility
                  <p className="timeline-para"> 11/08/22 9:56 AM</p>
                </Timeline.Item>
              </Col>

              <Col>
                <div>
                  <h4>Albuquerque, NM,US</h4>
                </div>
              </Col>
            </Row>{" "}
            <Row justify="space-between">
              <Col>
                <Timeline.Item color="#28589A" className="timeline-title">
                  Destination Scan
                  <p className="timeline-para"> 11/08/22 9:56 AM</p>
                </Timeline.Item>
              </Col>
              <Col>
                <div>
                  <h4>Clovis, NM, US</h4>
                </div>
              </Col>
            </Row>{" "}
            <Row justify="space-between">
              <Col>
                <Timeline.Item color="#28589A" className="timeline-title">
                  Out for Delivery Today
                  <p className="timeline-para"> 11/08/22 9:56 AM</p>
                </Timeline.Item>
              </Col>
              <Col>
                <div>
                  <h4>Clovis, NM, US</h4>
                </div>
              </Col>
            </Row>{" "}
            <Row justify="space-between">
              <Col>
                <Timeline>
                  <Timeline.Item
                    color="#28589A"
                    dot={<CheckCircleFilled />}
                    className="timeline-title"
                  >
                    Delivered
                    <p className="timeline-para">11/08/22 9:56 AM</p>
                  </Timeline.Item>
                </Timeline>
              </Col>

              <Col>
                <div>
                  <h4>Portales, NM,US</h4>
                </div>
              </Col>
            </Row>
          </Col>
        </Modal>
      )}
    </div>
  );
}
