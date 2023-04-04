import React from "react";
import "antd/dist/antd.css";
import {
  Card,
  Col,
  Row,
  Select,
  Button,
  Form,
  Input,
  Divider,
  message,
} from "antd";
import "react-phone-input-2/lib/style.css";
import ReactPhoneInput from "react-phone-input-2";

import FormItem from "antd/es/form/FormItem";
import appConfig from "../config/AppConfig";
import { add, update, getDetails } from "../api/Apis";
import HeaderOptions from "../Common/HeaderOptions";

import {
  MinusCircleOutlined,
  PlusOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

const NewPurchaseOrder = () => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const { TextArea } = Input;
  const onFinish = async (values) => {
    console.log(values, "values");
    let data = {
      entityData: values,
    };
    console.log(values, "vals", data);
    await add(appConfig["entityNames"]["customers"], data)
      .then((result) => {
        console.log(result, "ressss");
        if (result.success) {
          message.success("Customer created successfully!");
          document.getElementById("myForm").reset();
        } else {
          message.error("Something went wrong.!");
          console.log("Error : ", result.error);
        }
      })
      .catch((err) => {
        console.log("Error : ", err);

        message.error("Something went wrong.!");
      });
  };
  return (
    <div style={{ backgroundColor: "#F1F5F9" }}>
      <HeaderOptions title=" New Purchase Order" />

      <Form onFinish={onFinish} id="myForm">
        <Col span={16}>
          <Card style={{ width: "688px", height: "761px" }}>
            <h1 style={{ fontSize: "20px" }}>Purchase Order Details</h1>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <div style={{ borderRadius: "10px" }}>
                    <b>Created by</b>
                    <Form.Item
                      name="firstName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your contact Name!",
                        },
                      ]}
                    >
                      <Input className="form-input" />
                    </Form.Item>
                    <b>PO#</b>
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
                  </div>
                </Col>

                <Col span={12}>
                  <div>
                    <b>Created date</b>
                    <Form.Item
                      name="lastName"
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
                  </div>
                </Col>
              </Row>
              <Col span={24}>
                {" "}
                <b> Vendor</b>
                <Form.Item name="vendor">
                  <Select
                    className=""
                    defaultValue=" 1 Vendor Name here "
                    onChange={() => console.log("")}
                  >
                    <option value=" 1 Vendor Name here ">
                      1 Vendor Name here{" "}
                      <span style={{ color: "red" }}>Min order $500.00</span>
                    </option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Row justify="space-between">
                  <Col>
                    <h2>
                      <b>Items</b>
                    </h2>
                  </Col>
                  <Col>
                    <h2>
                      <b>Total Price $0.00</b>
                    </h2>
                  </Col>
                </Row>
                <Row>
                  <Col span={10}>
                    <Form.Item label="Item" name="item">
                      <Select className="" onChange={() => console.log("")}>
                        <option>item 1</option>
                        <option>item 2</option>
                        <option>item 3</option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={4} offset={1}>
                    {" "}
                    <Form.Item label="Qty" name="quality">
                      <Select className="" onChange={() => console.log("")}>
                        <option>qty 1</option>
                        <option>qty 2</option>
                        <option>qty 3</option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={8} offset={1}>
                    <Form.Item label="Price">
                      <Input type="text" />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Form.List name="">
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      {fields.map((field, index) => (
                        <div key={field.key}>
                          <Row>
                            <Col span={8}>
                              <Form.Item label="Item" name="item">
                                <Select
                                  className=""
                                  onChange={() => console.log("")}
                                >
                                  <option>item 1</option>
                                  <option>item 2</option>
                                  <option>item 3</option>
                                </Select>
                              </Form.Item>
                            </Col>
                            <Col span={4} offset={2}>
                              {" "}
                              <Form.Item label="Qty" name="quality">
                                <Select
                                  className=""
                                  onChange={() => console.log("")}
                                >
                                  <option>qty 1</option>
                                  <option>qty 2</option>
                                  <option>qty 3</option>
                                </Select>
                              </Form.Item>
                            </Col>
                            <Col span={6} offset={1}>
                              <Form.Item label="Price">
                                <Input type="text" />
                              </Form.Item>
                            </Col>
                            <Col offset={1}>
                              {fields.length > 0 ? (
                                <Form.Item label=" " name="delete">
                                  <Button
                                    type="danger"
                                    className="dynamic-delete-button"
                                    onClick={() => remove(field.name)}
                                    icon={<MinusCircleOutlined />}
                                  ></Button>
                                </Form.Item>
                              ) : (
                                ""
                              )}
                            </Col>
                          </Row>
                        </div>
                      ))}
                      <Divider />
                      <Row justify="space-between" gutter={[16, 16]}>
                        <div>
                          <Button type="dashed" onClick={() => add()}>
                            <PlusOutlined /> Add more
                          </Button>
                        </div>

                        <div style={{ float: "right" }}>
                          <Button
                            style={{
                              borderRadius: "5px",
                              marginRight: "10px",
                              color: "#28589A",
                            }}
                          >
                            Cancel
                          </Button>{" "}
                          <Button
                            style={{
                              background: "#28589A",
                              color: "white",
                              borderRadius: "5px",
                            }}
                            type="primary"
                            htmlType="submit"
                          >
                            Save
                          </Button>
                        </div>
                      </Row>
                    </div>
                  );
                }}
              </Form.List>
            </Col>
          </Card>
        </Col>
      </Form>
    </div>
  );
};
export default NewPurchaseOrder;
