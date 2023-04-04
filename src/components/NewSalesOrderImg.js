import React from "react";
import CheckMark from "../Images/CheckMark.png";
import { Col, Row, Card, Input, Progress, Button } from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
export default function NewSalesOrderImg() {
  return (
    <div style={{background:"#F1F5F9"}}>
      <Col>
        <Row>
          <Col span={20}>
            <h1 style={{ fontSize: "30px" }}>
              <b>NewSalesOrder</b>
            </h1>
          </Col>
          <Col span={4}>
            <h1>
              <b>Step 3 of 3</b>
            </h1>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row justify="space-between">
          <Col span={18}>
            <Card style={{ width:"63.5vw"}}>
              <h1 style={{ fontSize: "20px" }}>
                <b>Add Items</b>
              </h1>
              <Col>
                <Input
                  placeholder="Search products by SKU number or Product Name" 
                  style={{color:"#94A3B8",borderRadius:"6px"}}
                  prefix={<SearchOutlined />}
                />
              </Col>
              <Card style={{height:"200px", }}>
                <Col span={24}>
                  <Row>
                    <Col span={2}>
                      <img src={CheckMark} width="70px" height="70px" />
                    </Col>
                    <Col span={20}>
                      <Row>
                        {" "}
                        <Col span={4}>
                          <h1 style={{ fontSize: "18px" }}>
                            <b>1032BB-118</b>
                          </h1>
                        </Col>
                        <Col span={4}>
                          <h1 style={{ fontSize: "16px" }}>Millenium</h1>
                        </Col>
                        <Col span={4}>
                          {" "}
                          <h1 style={{ fontSize: "16px" }}>2602-PBK</h1>
                        </Col>
                      </Row>
                      <Col>
                        <Row>
                          <Col>
                            <h1 style={{ fontSize: "16px" }}>
                              Two Light Vanity by Capital Lighting from the
                              Arthur collection in Burnished Bronze finish
                            </h1>
                          </Col>
                        </Row>
                      </Col>
                    </Col>

                    <br />
                  </Row>
                </Col>
                <br />
                <Col>
                  <Row>
                    <Col span={20}>
                      <Row style={{ color: "#747E8D" }}>
                        <Col span={4}>DIMENSIONS</Col>
                        <Col span={4}>FINISH</Col>
                        <Col span={4}>LOCATION </Col>
                      </Row>

                      <Col>
                        <Row>
                          <Col span={4}>
                            <h1 style={{ fontSize: "14px" }}>
                              8.00"W x 22.00"H
                            </h1>
                          </Col>
                          <Col span={4}>
                            {" "}
                            <h1 style={{ fontSize: "14px" }}>Bronze / Dark</h1>
                          </Col>
                          <Col span={4}>
                            <h1 style={{ fontSize: "14px" }}>
                              Exterior Front Door
                            </h1>
                          </Col>
                        </Row>
                      </Col>
                    </Col>

                    <Col span={4}>
                      <Col>
                        <h1 style={{ fontSize: "22px" }}>
                          <b>$279.80</b>
                        </h1>
                      </Col>
                      <Col>
                        <h1 style={{ fontSize: "14px" }}>Price: $139.90</h1>
                      </Col>
                    </Col>
                  </Row>
                </Col>
              </Card>

              <Card style={{height:"200px"}}>
                <Col span={24}>
                  <Row>
                    <Col span={2}>
                      <img src={CheckMark} width="70px" height="70px" />
                    </Col>
                    <Col span={20}>
                      <Row>
                        {" "}
                        <Col span={4}>
                          <h1 style={{ fontSize: "18px" }}>
                            <b>1032BB-118</b>
                          </h1>
                        </Col>
                        <Col span={4}>
                          <h1 style={{ fontSize: "16px" }}>Millenium</h1>
                        </Col>
                        <Col span={4}>
                          {" "}
                          <h1 style={{ fontSize: "16px" }}> 2602-PBK</h1>
                        </Col>
                      </Row>
                      <Col>
                        <Row>
                          <Col>
                            <h1 style={{ fontSize: "16px" }}>
                              Two Light Vanity by Capital Lighting from the
                              Arthur collection in Burnished Bronze finish
                            </h1>
                          </Col>
                        </Row>
                      </Col>
                    </Col>

                    <br />
                  </Row>
                </Col>
                <br />
                <Col>
                  <Row>
                    <Col span={20}>
                      <Row style={{ color: "#747E8D" }}>
                        <Col span={4}>DIMENSIONS</Col>
                        <Col span={4}>FINISH</Col>
                        <Col span={4}>LOCATION </Col>
                      </Row>

                      <Col>
                        <Row>
                          <Col span={4}>
                            <h1 style={{ fontSize: "14px" }}>
                              8.00"W x 22.00"H
                            </h1>
                          </Col>
                          <Col span={4}>
                            {" "}
                            <h1 style={{ fontSize: "14px" }}>Bronze / Dark</h1>
                          </Col>
                          <Col span={4}>
                            <h1 style={{ fontSize: "14px" }}>
                              Exterior Front Door
                            </h1>
                          </Col>
                        </Row>
                      </Col>
                    </Col>

                    <Col span={4}>
                      <Col>
                        <h1 style={{ fontSize: "22px" }}>
                          <b>$279.80</b>
                        </h1>
                      </Col>
                      <Col>
                        <h1 style={{ fontSize: "14px" }}>Price: $139.90</h1>
                      </Col>
                    </Col>
                  </Row>
                </Col>
              </Card>

              <Card style={{height:"200px"}}>
                <Col span={24}>
                  <Row>
                    <Col span={2}>
                      <img src={CheckMark} width="70px" height="70px" />
                    </Col>
                    <Col span={20}>
                      <Row>
                        {" "}
                        <Col span={4}>
                          <h1 style={{ fontSize: "18px" }}>
                            <b>1032BB-118</b>
                          </h1>
                        </Col>
                        <Col span={4}>
                          <h1 style={{ fontSize: "16px" }}>Millenium</h1>
                        </Col>
                        <Col span={4}>
                          {" "}
                          <h1 style={{ fontSize: "16px" }}>2602-PBK</h1>
                        </Col>
                      </Row>
                      <Col>
                        <Row>
                          <Col>
                            <h1 style={{ fontSize: "16px" }}>
                              Two Light Vanity by Capital Lighting from the
                              Arthur collection in Burnished Bronze finish
                            </h1>
                          </Col>
                        </Row>
                      </Col>
                    </Col>

                    <br />
                  </Row>
                </Col>
                <br />
                <Col>
                  <Row>
                    <Col span={20}>
                      <Row style={{ color: "#747E8D" }}>
                        <Col span={4}>DIMENSIONS</Col>
                        <Col span={4}>FINISH</Col>
                        <Col span={4}>LOCATION </Col>
                      </Row>

                      <Col>
                        <Row>
                          <Col span={4}>
                            <h1 style={{ fontSize: "14px" }}>
                              8.00"W x 22.00"H
                            </h1>
                          </Col>
                          <Col span={4}>
                            {" "}
                            <h1 style={{ fontSize: "14px" }}>Bronze / Dark</h1>
                          </Col>
                          <Col span={4}>
                            <h1 style={{ fontSize: "14px" }}>
                              Exterior Front Door
                            </h1>
                          </Col>
                        </Row>
                      </Col>
                    </Col>

                    <Col span={4}>
                      <Col>
                        <h1 style={{ fontSize: "22px" }}>
                          <b>$279.80</b>
                        </h1>
                      </Col>
                      <Col>
                        <h1 style={{ fontSize: "14px" }}>Price: $139.90</h1>
                      </Col>
                    </Col>
                  </Row>
                </Col>
              </Card>

              <Card style={{height:"200px"}}>
                <Col span={24}>
                  <Row>
                    <Col span={2}>
                      <img src={CheckMark} width="70px" height="70px" />
                    </Col>
                    <Col span={20}>
                      <Row>
                        {" "}
                        <Col span={4}>
                          <h1 style={{ fontSize: "18px" }}>
                            <b>1032BB-118</b>
                          </h1>
                        </Col>
                        <Col span={4}>
                          <h1 style={{ fontSize: "16px" }}>Millenium</h1>
                        </Col>
                        <Col span={4}>
                          {" "}
                          <h1 style={{ fontSize: "16px" }}>2602-PBK</h1>
                        </Col>
                      </Row>
                      <Col>
                        <Row>
                          <Col>
                            <h1 style={{ fontSize: "16px" }}>
                              Two Light Vanity by Capital Lighting from the
                              Arthur collection in Burnished Bronze finish
                            </h1>
                          </Col>
                        </Row>
                      </Col>
                    </Col>

                    <br />
                  </Row>
                </Col>
                <br />
                <Col>
                  <Row>
                    <Col span={20}>
                      <Row style={{ color: "#747E8D" }}>
                        <Col span={4}>DIMENSIONS</Col>
                        <Col span={4}>FINISH</Col>
                        <Col span={4}>LOCATION </Col>
                      </Row>

                      <Col>
                        <Row>
                          <Col span={4}>
                            <h1 style={{ fontSize: "14px" }}>
                              8.00"W x 22.00"H
                            </h1>
                          </Col>
                          <Col span={4}>
                            {" "}
                            <h1 style={{ fontSize: "14px" }}>Bronze / Dark</h1>
                          </Col>
                          <Col span={4}>
                            <h1 style={{ fontSize: "14px" }}>
                              Exterior Front Door
                            </h1>
                          </Col>
                        </Row>
                      </Col>
                    </Col>

                    <Col span={4}>
                      <Col>
                        <h1 style={{ fontSize: "22px" }}>
                          <b>$279.80</b>
                        </h1>
                      </Col>
                      <Col>
                        <h1 style={{ fontSize: "14px" }}>Price: $139.90</h1>
                      </Col>
                    </Col>
                  </Row>
                </Col>
              </Card>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Card>
                <Col>
                  <Row justify="space-between">
                    <h1 style={{ fontSize: "18px", color: "#00CAA6" }}>
                      <b>$0.00</b>
                    </h1>
                    <Col>
                      <b>Left out of $2000.00</b>
                    </Col>
                  </Row>
                </Col>
                <Progress percent={2} size="small"  />
              </Card>
              <br />
              <h1 style={{ fontSize: "14px", color: "#94A3B8" }}>SUMMARY</h1>
              <Col span={24}>
                <Row>
                  <Col span={6}>
                    {" "}
                    <img src={CheckMark} width="70px" height="70px" />
                  </Col>
                  <Col span={18}>
                    <Row justify="space-between">
                      <Col>
                        <h1 style={{ fontSize: "16px" }}>
                          <b>1032BB-118</b>
                        </h1>
                      </Col>
                      <Col>
                        <CloseOutlined style={{ color: "#94A3B8" }} />
                      </Col>
                    </Row>
                    <Col>
                      <Row justify="space-between">
                        <Col>
                          <h1 style={{ fontSize: "14px", color: "#747E8D" }}>
                            Quantity: 4
                          </h1>
                        </Col>
                        <Col>
                          <h1 style={{ fontSize: "16px" }}>
                            <b> $1000.00</b>
                          </h1>
                        </Col>
                      </Row>
                    </Col>
                  </Col>
                </Row>
              </Col>
              <hr />
              <Col span={24}>
                <Row>
                  <Col span={6}>
                    {" "}
                    <img src={CheckMark} width="70px" height="70px" />
                  </Col>
                  <Col span={18}>
                    <Row justify="space-between">
                      <Col>
                        <h1 style={{ fontSize: "16px" }}>
                          <b>1032BB-118</b>
                        </h1>
                      </Col>
                      <Col>
                        <CloseOutlined style={{ color: "#94A3B8" }} />
                      </Col>
                    </Row>
                    <Col>
                      <Row justify="space-between">
                        <Col>
                          <h1 style={{ fontSize: "14px", color: "#747E8D" }}>
                            Quantity: 2
                          </h1>
                        </Col>
                        <Col>
                          <h1 style={{ fontSize: "16px" }}>
                            <b>$506.00</b>
                          </h1>
                        </Col>
                      </Row>
                    </Col>
                  </Col>
                </Row>
              </Col>
              <hr />
              <Col>
                <Row justify="space-between">
                  <Col>
                    <h1 style={{ fontSize: "18px" }}>
                      <b>TOTAL</b>
                    </h1>
                  </Col>
                  <Col>
                    <h1 style={{ fontSize: "18px" }}>
                      <b>$1506.00</b>
                    </h1>
                  </Col>
                </Row>
              </Col>
              <br />
              <Col>
                <Button
                  type="Generate Invoice"
                  block
                  style={{
                    height: "40px",
                    background: "#00CAA6",
                    color: "#FFFFFF",
                    borderRadius: "5px",
                  }}
                >
                  Generate Invoice
                </Button>
              </Col>
            </Card>
          </Col>
        </Row>
      </Col>
    </div>
  );
}