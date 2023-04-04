import React, { pageSize } from "react";
import "antd/dist/antd.css";
import { Button, Popover } from "antd";
import { Table, Card } from "antd";
import "../Stylesheet/_header.scss";

const text = "";
const content = (
  <div>
    {" "}
    <p style={{ color: "#fff", width: "46px" }}>Details</p> <p>Edit</p>{" "}
  </div>
);

const columns2 = [
  {
    title: <div className="user-title">EMAIL</div>,
    dataIndex: "email",
  },
  {
    title: <div className="user-title">ROLE</div>,
    dataIndex: "role",
  },
  {
    dataIndex: "edit",
  },
];

const data2 = [
  {
    key: "1",
    email: <div className="user-email">megan.carpenter@mail.com</div>,
    role: <div className="user-name">Admin</div>,

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
    email: <div className="user-email">megan.carpenter@mail.com</div>,
    role: <div className="user-name">Admin</div>,
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
    email: <div className="user-email">megan.carpenter@mail.com</div>,
    role: <div className="user-name">Admin</div>,
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
    email: <div className="user-email">megan.carpenter@mail.com</div>,
    role: <div className="user-name">Admin</div>,
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
    email: <div className="user-email">megan.carpenter@mail.com</div>,
    role: <div className="user-name">Admin</div>,
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
    email: <div className="user-email">megan.carpenter@mail.com</div>,
    role: <div className="user-name">Admin</div>,
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
    email: <div className="user-email">megan.carpenter@mail.com</div>,
    role: <div className="user-name">Admin</div>,
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
    email: <div className="user-email">megan.carpenter@mail.com</div>,
    role: <div className="user-name">Admin</div>,
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
    key: "9",
    email: <div className="user-email">megan.carpenter@mail.com</div>,
    role: <div className="user-name">Admin</div>,
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
];

const Role = () => (
  <Card title="Role" extra={<span style={{ color: "#28589A" }}></span>}>
    <Table
      columns={columns2}
      dataSource={data2}
      size="middle"
      pagination={data2.length > pageSize && { pageSize }}
    />
  </Card>
);

export default Role;
