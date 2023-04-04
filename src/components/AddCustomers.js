import React from "react";
import { Col, Row, Form, Input, Button, Select, Card, message } from "antd";
import "react-phone-input-2/lib/style.css";
import ReactPhoneInput from "react-phone-input-2";
import FormItem from "antd/es/form/FormItem";
import appConfig from "../config/AppConfig";
import { add, update, getDetails } from "../api/Apis";
import HeaderOptions from "../Common/HeaderOptions";

export default function AddCustomer() {
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
        console.log(result,"ressss")
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
    <HeaderOptions title="Add Customer" />
      {/* <h1 style={{ fontSize: "28px" }}>Add Customer</h1> */}
      <Form onFinish={onFinish} id="myForm">
        <Col span={16}>
          <Card style={{ width: "688px", height: "761px" }}>
            <h1 style={{ fontSize: "20px" }}>Add Customer</h1>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <div style={{ borderRadius: "10px" }}>
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
                      <Input
                        placeholder="Select State"
                        className="form-input"
                      />
                    </Form.Item>
                    <b>Type</b>
                    <Form.Item
                      name="type"
                      // rules={[
                      //   {
                      //     required: true,
                      //     message: "Please Enter Your Phone!",
                      //   },
                      // ]}
                      initialValue={"Builder Referred"}
                    >
                      <Select
                        showSearch
                        allowClear
                        className="select_Height"
                        style={{ height: "40px" }}
                        placeholder="Select a contact"
                      >
                        <Option value="Builder Referred">
                          Builder Referred
                        </Option>
                      </Select>
                    </Form.Item>
                    <b>Source</b>
                    <Form.Item
                      name="source"
                      // rules={[
                      //   {
                      //     required: true,
                      //     message: "Please Enter Your Phone!",
                      //   },
                      // ]}
                      initialValue={"Google"}
                    >
                      <Select
                        showSearch
                        allowClear
                        className="select_Height"
                        style={{ height: "40px" }}
                        placeholder="Select a contact"
                      >
                        <Option value="Google">Google</Option>
                      </Select>
                    </Form.Item>
                  </div>
                </Col>

                <Col span={12}>
                  <div>
                    <b>Last Name</b>
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
                      <Input
                        placeholder="Input zipcode"
                        className="form-input"
                      />
                    </Form.Item>
                    <b>Builder/Design License #</b>

                    <Form.Item
                      name="builderDesign"
                      rules={[
                        {
                          required: true,
                          message: "Please input Builder/Design Name!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Input Builder/Design Name"
                        className="form-input"
                      />
                    </Form.Item>
                    <b>Sales Person</b>
                    <Form.Item
                      name="salesPerson"
                      rules={[
                        {
                          required: true,
                          message: "Please input Sales Person Name!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Input Sales Person Name"
                        className="form-input"
                      />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
              <Col span={24}>
                <b>Comments</b>
                <Form.Item name="notes">
                  <TextArea showCount style={{ height: 85 }} />
                </Form.Item>
              </Col>
              <Form.Item type="submit" htmlType="submit">
                <Col span={24}>
                  <Row
                    style={{
                      justifyContent: "right",
                      borderRadius: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <Col>
                      <Button
                        style={{
                          borderRadius: "5px",
                          marginRight: "10px",
                          color: "#28589A",
                        }}
                      >
                        Cancel
                      </Button>
                    </Col>
                    <Col>
                      {" "}
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
                    </Col>
                  </Row>
                </Col>
              </Form.Item>
            </Col>
          </Card>
        </Col>
      </Form>
    </div>
  );
}
