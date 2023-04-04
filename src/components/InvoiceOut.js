import React from "react";
import "antd/dist/antd.css";
import { Col, Row, Button, Input, Card, Divider } from "antd";
import invoice from "../Images/invoice.png";
import FormItem from "antd/es/form/FormItem";
import HeaderOptions from "../Common/HeaderOptions";
import "../Stylesheet/_header.scss";

const { TextArea } = Input;

const InvoiceOut = () => (
  <>
    <div style={{ background: "#F1F5F9" }}>
      <Col span={24}>
        <HeaderOptions
          title="#12234345"
          showEdit={true}
          showDelete={false}
          showEmail={false}
          showDownload={true}
        />
        {/* Title */}
        <div
          style={{
            border: "1px solid #F1F5F9",
            background: "#FFFFFF",
            height: "330px",
            margin: "0 20px 0 20px",
          }}
        >
          <Row span={24}>
            <Col span={12}>
              <img
                style={{
                  textAlign: "left",
                  position: "relative",
                  top: "30px",
                  left: "30px",
                  bottom: "703px",
                  width: "170px",
                  height: "85px",
                }}
                alt="example"
                src={invoice}
              />
            </Col>
            <Col span={12}>
              <h2
                style={{
                  textAlign: "right",
                  position: "relative",
                  top: "40px",
                  right: "30px",
                  color: "#1E293B",
                  fontSize: "28px",
                }}
              >
                #12234345
              </h2>
              <h6
                style={{
                  textAlign: "right",
                  position: "absolute",
                  top: "84px",
                  right: "30px",
                  color: "#1E293B",
                  fontSize: "16px",
                  width: "146px",
                }}
              >
                Date: Aug 10, 2022
              </h6>
            </Col>
          </Row>
          {/* from and to address */}
          <Row span={24}>
            <Col span={12}>
              <p
                style={{
                  position: "relative",
                  top: "35px",
                  left: "30px",
                  bottom: "649px",
                  color: "#1E293B",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                To
              </p>
            </Col>
            <Col span={12}>
              <h2
                style={{
                  position: "relative",
                  top: "35px",
                  textAlign: "right",
                  right: "30px",
                  color: "#1E293B",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                From
              </h2>
            </Col>
          </Row>
          <Row span={24}>
            <Col span={12}>
              <h1
                style={{
                  position: "relative",
                  top: "15px",
                  left: "30px",
                  bottom: "618px",
                  color: "#1E293B",
                  fontSize: "18px",
                }}
              >
                Lorem Ipsum
              </h1>
            </Col>
            <Col span={12}>
              <h1
                style={{
                  textAlign: "right",
                  position: "relative",
                  right: "30px",
                  top: "15px",
                  color: "#1E293B",
                  fontSize: "18px",
                }}
              >
                Lorem Ipsum
              </h1>
            </Col>
          </Row>
          {/* address */}
          <Row span={24}>
            <Col span={12}>
              <p
                style={{
                  position: "relative",
                  top: "10px",
                  left: "30px",
                  bottom: "570px",
                  color: "#94A3B8",
                  fontSize: "16px",
                }}
              >
                841 Lakeshore Dr <br />
                Port Orford, Oregon
              </p>
            </Col>
            <Col span={12}>
              <p
                style={{
                  textAlign: "right",
                  position: "absolute",
                  top: "10px",
                  right: "30px",
                  color: "#94A3B8",
                  fontSize: "16px",
                }}
              >
                841 Lakeshore Dr <br />
                Port Orford, Oregon
              </p>
            </Col>
          </Row>
          {/* telephone */}
          <Row span={24}>
            <Col span={12}>
              <span
                style={{
                  position: "relative",
                  top: "5px",
                  left: "30px",
                  bottom: "541px",
                  color: "#94A3B8",
                  fontSize: "16px",
                }}
              >
                (702)134-8648
              </span>
            </Col>
            <Col span={12}>
              <span
                style={{
                  textAlign: "right",
                  position: "absolute",
                  top: "5px",
                  right: "30px",
                  color: "#94A3B8",
                  fontSize: "16px",
                }}
              >
                (702)134-8648
              </span>
            </Col>
          </Row>
          {/* email */}
          <Row span={24}>
            <Col span={12}>
              <span
                style={{
                  position: "relative",
                  top: "10px",
                  left: "30px",
                  bottom: "512px",
                  color: "#94A3B8",
                  fontSize: "16px",
                }}
              >
                kathy.mendoza@mail.com
              </span>
            </Col>
            <Col span={12}>
              <span
                style={{
                  textAlign: "right",
                  position: "absolute",
                  right: "30px",
                  top: "10px",
                  color: "#94A3B8",
                  fontSize: "16px",
                }}
              >
                kathy.mendoza@mail.com
              </span>
            </Col>
          </Row>
        </div>
        {/* Order Details */}
        <div style={{ margin: "10px 40px " }}>
          <Row span={24}>
            <Col span={18}>
              <span className="table-titles">NAME</span>
            </Col>
            <Col span={3}>
              <span className="table-titles">QTY</span>
            </Col>
            <Col span={3}>
              <span className="table-titles">PRICE</span>
            </Col>
          </Row>
        </div>
        <Card style={{ margin: "0 20px 0", border: "1px solid #F1F5F9" }}>
          <Col span={24}>
            <Row span={24}>
              <Col span={18}>
                <span className="table-name">Lorem Ipsum</span>
              </Col>
              <Col span={3}>
                <span className="table-content">2</span>
              </Col>
              <Col span={3}>
                <span className="table-content">$123.00</span>
              </Col>
            </Row>
            <Divider />
            <Row span={24}>
              <Col span={18}>
                <span className="table-name">Lorem Ipsum</span>
              </Col>
              <Col span={3}>
                <span className="table-content">2</span>
              </Col>
              <Col span={3}>
                <span className="table-content">$123.00</span>
              </Col>
            </Row>
            <Divider />
            <Row span={24}>
              <Col span={18}>
                <span className="table-name">Lorem Ipsum</span>
              </Col>
              <Col span={3}>
                <span className="table-content">2</span>
              </Col>
              <Col span={3}>
                <span className="table-content">$123.00</span>
              </Col>
            </Row>
            <Divider />
          </Col>

          {/* total section */}
          <div>
            <Row span={24}>
              <Col span={19}></Col>
              <Col span={3}>
                <h4 className="total-content">Sub Total</h4>
              </Col>
              <Col span={2}>
                <h4 className="total-content">$1230.00</h4>
              </Col>
            </Row>

            <Row span={24}>
              <Col span={19}></Col>
              <Col span={3}>
                <h4 className="total-content">Tax</h4>
              </Col>
              <Col span={2}>
                <h4
                  style={{
                    color: "#1E293B",
                    fontSize: "16px",
                    margin: " 0 10px 0 20px",
                  }}
                >
                  $10.00
                </h4>
              </Col>
            </Row>

            <Row span={24}>
              <Col span={19}></Col>
              <Col span={3}>
                <h4 className="total-content">Total</h4>
              </Col>
              <Col span={2}>
                <h4
                  style={{
                    color: "#1E293B",
                    fontSize: "18px",
                    fontWeight: "680",
                  }}
                >
                  $1240.00
                </h4>
              </Col>
            </Row>

            {/* comments secttion */}
            <div>
              <h4
                style={{
                  margin: "0 1016px 10px 10px",
                  fontSize: "16px",
                  color: "#1E293B",
                }}
              >
                Comments/Notes
              </h4>
              <Row span={24}>
                <Col span={16}>
                  <FormItem>
                    <TextArea
                      style={{
                        width: "648px",
                        height: "92px",
                        margin: "0 502px 26px 10px",
                      }}
                    />
                  </FormItem>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
        {/* payment button */}
        <div>
          <Row span={24}>
            <Col span={22}></Col>
            <Col span={1}>
              <Button
                style={{
                  position: "relative",
                  left: "20px",
                  top: "30px",
                  marginBottom: "130px",
                  background: "#28589A",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  borderRadius: "4px",
                }}
              >
                Pay Invoice
              </Button>
            </Col>
          </Row>
        </div>{" "}
      </Col>
    </div>
  </>
);

export default InvoiceOut;
