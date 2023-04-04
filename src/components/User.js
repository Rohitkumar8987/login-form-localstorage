import React, { pageSize, useEffect, useState } from "react";
import "antd/dist/antd.css";
import {
  Table,
  Card,
  Row,
  Col,
  Form,
  Input,
  message,
  Select,
  Button,
  Popover,
} from "antd";
import PlusOutlined from "@ant-design/icons";
import "../Stylesheet/_header.scss";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import appConfig from "../config/AppConfig";
import { add, update, getDetails, list } from "../api/Apis";
const { Option } = Select;

const text = "";
const content = (
  <div>
    {" "}
    <p style={{ color: "#FFF", width: "46px" }}>Details</p> <p>Edit</p>{" "}
  </div>
);

const columns = [
  {
    title: <div className="user-title">NAME</div>,
    dataIndex: "firstName",
    reder: (firstName, record) => {
      return (
        <div>
          {record.firstName} + +{record.lastName}
        </div>
      );
    },
  },
  {
    title: <div className="user-title">EMAIL</div>,
    dataIndex: "email",
  },
  {
    dataIndex: "edit",
  },
];

const data = [
  {
    key: "1",
    name: <div className="user-name">Joe Clark</div>,
    email: <div className="user-email">megan.carpenter@mail.com</div>,
    type: "data",
    edit: (
      <Popover
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button className="user-button">...</Button>
      </Popover>
    ),
  },
  {
    key: "2",
    name: <div className="user-name">Joe Clark</div>,
    email: <div className="user-email">megan.carpenter@mail.com</div>,
    type: "data",
    edit: (
      <Popover
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button className="user-button">...</Button>
      </Popover>
    ),
  },
  {
    key: "3",
    name: <div className="user-name">Joe Clark</div>,
    email: <div className="user-email">megan.carpenter@mail.com</div>,
    type: "data",
    edit: (
      <Popover
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button className="user-button">...</Button>
      </Popover>
    ),
  },
  {
    key: "4",
    name: <div className="user-name">Joe Clark</div>,
    email: <div className="user-email">megan.carpenter@mail.com</div>,
    type: "data",
    edit: (
      <Popover
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button className="user-button">...</Button>
      </Popover>
    ),
  },
  {
    key: "5",
    name: <div className="user-name">Joe Clark</div>,
    email: <div className="user-email">megan.carpenter@mail.com</div>,
    type: "data",
    edit: (
      <Popover
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button className="user-button">...</Button>
      </Popover>
    ),
  },
  {
    key: "6",
    name: <div className="user-name">Joe Clark</div>,
    email: <div className="user-email">megan.carpenter@mail.com</div>,
    type: "data",
    edit: (
      <Popover
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button className="user-button">...</Button>
      </Popover>
    ),
  },
  {
    key: "7",
    name: <div className="user-name">Joe Clark</div>,
    email: <div className="user-email">megan.carpenter@mail.com</div>,
    type: "data",
    edit: (
      <Popover
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button className="user-button">...</Button>
      </Popover>
    ),
  },
  {
    key: "8",
    name: <div className="user-name">Joe Clark</div>,
    email: <div className="user-email">megan.carpenter@mail.com</div>,
    type: "data",
    edit: (
      <Popover
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button className="user-button">...</Button>
      </Popover>
    ),
  },
  {
    key: "9",
    name: <div className="user-name">Joe Clark</div>,
    email: <div className="user-email">megan.carpenter@mail.com</div>,
    type: "data",
    edit: (
      <Popover
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button className="user-button">...</Button>
      </Popover>
    ),
  },
];

export default function User() {
  const [enableUserForm, setEnableUserForm] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const onFinish = async (values) => {
    console.log(values, "values");
    let data = {
      entityData: values,
    };

    console.log(values, "vals", data);
    await add(appConfig["entityNames"]["addUser"], data)
      .then((result) => {
        console.log(result, "ressss");
        if (result.success) {
          message.success("User created successfully!");
          getUsers();
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

  const getUsers = () => {
    try {
      list(appConfig["entityNames"]["users"]).then((result) => {
        if (result.success) {
          console.log(result.data);
          setUsers(result.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card
      title="User"
      extra={
        <Button
          style={{ color: "#28589A" }}
          onClick={() => setEnableUserForm(true)}
        >
          + User
        </Button>
      }
    >
      {enableUserForm ? (
        <Form onFinish={onFinish} id="myForm">
          <Row gutter={[24, 0]} style={{ marginTop: "1vw" }}>
            <Col span={8}>
              <span className="title_changes">
                <span style={{ color: "red" }}>*</span>First Name
              </span>
              <Form.Item
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Please input your First Name!",
                  },
                ]}
                // initialValue={driverInfo?.firstName}
              >
                <Input placeholder="Input First Name" className="form-input" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <span className="title_changes">
                <span style={{ color: "red" }}>*</span>Last Name
              </span>
              <Form.Item
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Please input your Last Name!",
                  },
                ]}
                // initialValue={driverInfo?.lastName}
              >
                <Input placeholder="Input Last Name" className="form-input" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <span className="title_changes">
                <span style={{ color: "red" }}>*</span>Source
              </span>
              <Form.Item
                name="source"
                // rules={[
                //   {
                //     required: true,
                //     message: "Please Enter Your Phone!",
                //   },
                // ]}
                initialValue={""}
              >
                <Select
                  showSearch
                  allowClear
                  className="select_Height"
                  style={{ height: "40px" }}
                  placeholder="Select a contact"
                >
                  <Option value="Roles">Roles</Option>
                  <Option value="User1">User 1</Option>
                  <Option value="User2">User 2</Option>
                  <Option value="User3">User 3</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]} style={{ marginTop: "1vw" }}>
            <Col span={8}>
              <span className="title_changes">
                <span style={{ color: "red" }}>*</span>Email
              </span>
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

            <Col span={8}>
              <span className="title_changes">
                <span style={{ color: "red" }}>*</span>Password
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

            <Col span={8}>
              <span className="title_changes">
                <span style={{ color: "red" }}>*</span>Confirm Password
              </span>
              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Confirm Password"
                  className="form-input"
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item type="submit" htmlType="submit">
            <Row
              style={{
                float: "right",
                margin: "1.5vw 0",
              }}
              gutter={[24, 0]}
            >
              <Button
                type="primary"
                className="Next_btn"
                style={{
                  marginRight: "30px",
                  background: "#9dadbc",
                  border: "#9dadbc",
                }}
                onClick={() => document.getElementById("myForm").reset()}
              >
                <span className="btn_text">Reset</span>
              </Button>

              <Button
                type="primary"
                className="Next_btn"
                form="myForm"
                htmlType="submit"
              >
                <span className="btn_text">Submit</span>
              </Button>
            </Row>
          </Form.Item>
        </Form>
      ) : (
        <Table
          columns={columns}
          dataSource={users}
          size="middle"
          // pagination={data.length > pageSize && { pageSize }}
          pagination={data.length}
        />
      )}
    </Card>
  );
}
