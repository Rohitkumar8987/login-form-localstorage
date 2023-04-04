import React from "react";
import "antd/dist/antd.css";
import ReactPhoneInput from "react-phone-input-2";

import {
  Card,
  Col,
  Row,
  Button,
  Form,
  Input,
  Checkbox,
  Space,
  Divider,
  Select,
} from "antd";

import {
  ArrowLeftOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
const { TextArea } = Input;
const NewVendor = () => {
  const [form] = Form.useForm();

  return (
    <div>
      <Card
        style={{
          backgroundColor: "#F1F5F9",
        }}
      >
        <div>
          <Row>
            <Col onClick={() => window.history.go(-1)}>
              <h1 style={{ color: "#1E293B", fontSize: "30px" }}>
                <b>
                  <span>
                    <ArrowLeftOutlined style={{ fontSize: "22px" }} />{" "}
                  </span>
                  New Vendor
                </b>
              </h1>
            </Col>
          </Row>
          <Form layout="vertical" form={form}>
            <Card
              style={{
                width: "40%",
                height: "100%",
              }}
            >
              <Row>
                <Col span={24}>
                  <h2>
                    <b>Vendor Details </b>
                  </h2>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <b>First Name</b>
                  <Form.Item
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your contact Name!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Input Contact Name"
                      className="form-input"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <b> Phone</b>
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,

                        message: "Please Enter Your Phone!",
                      },
                    ]}
                  >
                    <ReactPhoneInput
                      inputExtraProps={{
                        name: "contactMainPhone",
                        required: true,

                        autoFocus: true,
                      }}
                      placeholder=""
                      country="us"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <b>Email</b>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,

                        message: "Please Enter Your Email!",
                      },
                      {
                        type: "email",
                        message: "The Input Is Not Valid Email",
                      },
                    ]}
                  >
                    <Input
                      className="form-input"
                      placeholder="Please Enter Your Email"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <b>Address</b>
                  <Form.Item
                    name="address"
                    rules={[
                      {
                        required: true,
                        message: "Please select your Address!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Select Address"
                      className="form-input"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <b>City</b>
                  <Form.Item
                    name="city"
                    rules={[
                      {
                        required: true,
                        message: "Please Select your City",
                      },
                    ]}
                  >
                    <Input placeholder="select city" className="form-input" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <b>State</b>
                  <Form.Item
                    name="state"
                    rules={[
                      {
                        required: true,
                        message: "Please Select your state",
                      },
                    ]}
                  >
                    <Input placeholder="Select State" className="form-input" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <b>Zip Code</b>
                  <Form.Item
                    name="zipcode"
                    rules={[
                      {
                        required: true,
                        message: "Please input your zipcode!",
                      },
                    ]}
                  >
                    <Input placeholder="Input zipcode" className="form-input" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <h2>
                    <b> Free Freight Conditions</b>
                  </h2>
                </Col>
                <Col span={12}>
                  <b>Free Freight Allowance</b>
                  <Form.Item
                    name="freeFreight"
                    rules={[
                      {
                        required: true,
                        message: "Please input freeFreightAllowance!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Input freeFreightAllowance"
                      className="form-input"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <b>Minimum Order Amount</b>
                  <Form.Item
                    name="minimumOrder"
                    rules={[
                      {
                        required: true,
                        message: "Please Minimum Order Amount!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Input Minimum Order Amount"
                      className="form-input"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Col span={24}>
                <h4>
                  <b>Free Freight Date </b>
                </h4>
              </Col>
              <Row>
                <Checkbox.Group style={{ width: "100%" }}>
                  <Row>
                    <Col span={12}>
                      <Space direction="vertical">
                        <Checkbox value="Mon">
                          <b>Mon </b>
                        </Checkbox>
                        <Checkbox value="Tue">
                          <b>Tue</b>
                        </Checkbox>
                        <Checkbox value="Wed">
                          <b>Wed</b>
                        </Checkbox>
                        <Checkbox value="Thu">
                          <b>Thu</b>
                        </Checkbox>
                        <Checkbox value="Fri">
                          <b>Fri</b>
                        </Checkbox>
                        <Checkbox value="Sat">
                          <b>Sat</b>
                        </Checkbox>
                        <Checkbox value="Sun">
                          <b>Sun</b>
                        </Checkbox>
                        <Checkbox value="N/A">
                          <b>N/A</b>
                        </Checkbox>
                      </Space>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Row>
              <Col style={{ marginTop: "25px" }}>
                <h2>
                  <b>Dropship Policy</b>
                </h2>
              </Col>

              <Col span={24} offset={0}>
                <b>Policy #</b>
                <Form.Item
                  name="policy"
                  rules={[
                    {
                      required: true,
                      message: "Please input your policy!",
                    },
                  ]}
                >
                  <Input placeholder="Input policy" className="form-input" />
                </Form.Item>
              </Col>
              <Col style>
                <h2>
                  <b>Warranty Info</b>
                </h2>
              </Col>
              <Col span={24}>
                <b>Warranty Info #</b>
                <Form.Item
                  name="warrantyInfo"
                  rules={[
                    {
                      required: true,
                      message: "Please input your WarrantyInfo!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Input WarrantyInfo"
                    className="form-input"
                  />
                </Form.Item>
              </Col>
              <Col>
                <h2>
                  <b>Website info</b>
                </h2>
              </Col>

              <Col span={24}>
                <b>Web Site URL</b>
                <Form.Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your contact Name!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Input Contact Name"
                    className="form-input"
                  />
                </Form.Item>
              </Col>
              <Row gutter={[16, 16]}>
                <Col span={11}>
                  <b>User Name</b>
                  <Form.Item
                    name="userName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your User Name!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Input User Name"
                      className="form-input"
                    />
                  </Form.Item>
                </Col>
                <Col span={11}>
                  <span className="title_changes">
                    <b>Password</b>
                  </span>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password
                      placeholder="Password"
                      autoComplete="new-password"
                      className="form-input"
                    />
                  </Form.Item>
                </Col>
                <Col span={2}></Col>
              </Row>
              <Form.List name="">
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      {fields.map((field, index) => (
                        <div key={field.key}>
                          <Row gutter={[16, 16]}>
                            <Col span={11}>
                              <b>User Name</b>
                              <Form.Item
                                name="userName"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your User Name!",
                                  },
                                ]}
                              >
                                <Input
                                  placeholder="Input User Name"
                                  className="form-input"
                                />
                              </Form.Item>
                            </Col>
                            <Col span={11}>
                              <b>Password</b>

                              <Form.Item
                                name="password"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your password!",
                                  },
                                ]}
                                hasFeedback
                              >
                                <Input.Password
                                  placeholder="Password"
                                  autoComplete="new-password"
                                  className="form-input"
                                />
                              </Form.Item>
                            </Col>
                            <Col span={2}>
                              {fields.length > 0 ? (
                                <Form.Item label=" " name="delete">
                                  <Button
                                    type="danger"
                                    className="dynamic-delete-button"
                                    onClick={() => remove(field.name)}
                                    icon={<MinusCircleOutlined />}
                                  ></Button>
                                </Form.Item>
                              ) : null}
                            </Col>
                          </Row>
                        </div>
                      ))}

                      <Row>
                        <Col span={24}>
                          <Button
                            type="dashed"
                            onClick={() => add()}
                            style={{ marginBottom: "20px" }}
                          >
                            <PlusOutlined /> Add more
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  );
                }}
              </Form.List>

              <Col span={24} offset={0}>
                <b>Notes</b>
                <Form.Item name="notes">
                  <TextArea showCount style={{ height: 85 }} />
                </Form.Item>
              </Col>

              <div style={{ float: "right" }}>
                <Button style={{ marginRight: "20px" }} type="Cancel">
                  cancel
                </Button>
                <Button
                  style={{
                    backgroundColor: " #28589A",
                    marginRight: "2px",
                    color: "#FFFF",
                  }}
                >
                  Save
                </Button>
              </div>
            </Card>
          </Form>
        </div>
      </Card>
    </div>
  );
};
export default NewVendor;
