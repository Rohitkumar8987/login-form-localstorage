import { Table, Button, Popover } from "antd";
import React, { useState } from "react";

const text = "";
const content = (
  <div>
    <p>Details</p>
    <p>Edit</p>
    <p>Remove</p>
  </div>
);

const columns = [
  {
    title: <div className="table-titles">DATE</div>,
    dataIndex: "date",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: <div className="table-titles">ITEMS ORDERED</div>,
    dataIndex: "itemsordered",
  },
  {
    title: <div className="table-titles">ORDER COST</div>,
    dataIndex: "ordercost",
  },
  {
    title: <div className="table-titles">TYPE</div>,
    dataIndex: "type",
  },
  {
    title: <div className="table-titles">NEEDED BY</div>,
    dataIndex: "neededby",
  },
  {
    title: <div className="table-titles">STATUS</div>,
    dataIndex: "status",
    render: (text) => (
      <a style={{ background: "#E2F8F0", color: "green", size: "12px" }}>
        {text}
      </a>
    ),
  },
  {
    // title: 'STATUS',
    dataIndex: "button",
  },
];
const data = [
  {
    key: "1",
    date: <div className="table-content">09/07/2022</div>,
    itemsordered: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$100.00</div>,
    type: <div className="table-content">Pickup</div>,
    neededby: <div className="table-content">Pickup</div>,
    status: (
      <div
        className="status"
        style={{ backgroundColor: "#E2F8F0", borderRadius: "14px" }}
      >
        <h4
          style={{
            color: "#0BA811",
            marginLeft: "9px",
            marginTop: "4px",
            fontSize: "13px",
          }}
        >
          In progress
        </h4>
      </div>
    ),
    button: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ borderStyle: "none" }}>...</Button>
      </Popover>
    ),
  },
  {
    key: "2",
    date: <div className="table-content">09/07/2022</div>,
    itemsordered: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$100.00</div>,
    type: <div className="table-content">Pickup</div>,
    neededby: <div className="table-content">Pickup</div>,
    status: (
      <div
        className="status"
        style={{ backgroundColor: "#E2F8F0", borderRadius: "14px" }}
      >
        <h4
          style={{
            color: "#0BA811",
            marginLeft: "9px",
            marginTop: "4px",
            fontSize: "13px",
          }}
        >
          In progress
        </h4>
      </div>
    ),
    button: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ borderStyle: "none" }}>...</Button>
      </Popover>
    ),
  },
  {
    key: "3",
    date: <div className="table-content">09/07/2022</div>,
    itemsordered: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$100.00</div>,
    type: <div className="table-content">Pickup</div>,
    neededby: <div className="table-content">Pickup</div>,
    status: (
      <div
        className="status"
        style={{ backgroundColor: "#E2F8F0", borderRadius: "14px" }}
      >
        <h4
          style={{
            color: "#0BA811",
            marginLeft: "9px",
            marginTop: "4px",
            fontSize: "13px",
          }}
        >
          In progress
        </h4>
      </div>
    ),
    button: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ borderStyle: "none" }}>...</Button>
      </Popover>
    ),
  },
  {
    key: "4",
    date: <div className="table-content">09/07/2022</div>,
    itemsordered: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$100.00</div>,
    type: <div className="table-content">Pickup</div>,
    neededby: <div className="table-content">Pickup</div>,
    status: (
      <div
        className="status"
        style={{ backgroundColor: "#E2F8F0", borderRadius: "14px" }}
      >
        <h4
          style={{
            color: "#0BA811",
            marginLeft: "9px",
            marginTop: "4px",
            fontSize: "13px",
          }}
        >
          In progress
        </h4>
      </div>
    ),
    button: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ borderStyle: "none" }}>...</Button>
      </Popover>
    ),
  },
  {
    key: "5",
    date: <div className="table-content">09/07/2022</div>,
    itemsordered: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$100.00</div>,
    type: <div className="table-content">Pickup</div>,
    neededby: <div className="table-content">Pickup</div>,
    status: (
      <div
        className="status"
        style={{ backgroundColor: "#E2F8F0", borderRadius: "14px" }}
      >
        <h4
          style={{
            color: "#0BA811",
            marginLeft: "9px",
            marginTop: "4px",
            fontSize: "13px",
          }}
        >
          In progress
        </h4>
      </div>
    ),
    button: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ borderStyle: "none" }}>...</Button>
      </Popover>
    ),
  },
  {
    key: "6",
    date: <div className="table-content">09/07/2022</div>,
    itemsordered: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$100.00</div>,
    type: <div className="table-content">Pickup</div>,
    neededby: <div className="table-content">Pickup</div>,
    status: (
      <div
        className="status"
        style={{ backgroundColor: "#E2F8F0", borderRadius: "14px" }}
      >
        <h4
          style={{
            color: "#0BA811",
            marginLeft: "9px",
            marginTop: "4px",
            fontSize: "13px",
          }}
        >
          In progress
        </h4>
      </div>
    ),
    button: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ borderStyle: "none" }}>...</Button>
      </Popover>
    ),
  },
  {
    key: "7",
    date: <div className="table-content">09/07/2022</div>,
    itemsordered: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$100.00</div>,
    type: <div className="table-content">Pickup</div>,
    neededby: <div className="table-content">Pickup</div>,
    status: (
      <div
        className="status"
        style={{ backgroundColor: "#E2F8F0", borderRadius: "14px" }}
      >
        <h4
          style={{
            color: "#0BA811",
            marginLeft: "9px",
            marginTop: "4px",
            fontSize: "13px",
          }}
        >
          In progress
        </h4>
      </div>
    ),
    button: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ borderStyle: "none" }}>...</Button>
      </Popover>
    ),
  },
  {
    key: "8",
    date: <div className="table-content">09/07/2022</div>,
    itemsordered: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$100.00</div>,
    type: <div className="table-content">Pickup</div>,
    neededby: <div className="table-content">Pickup</div>,
    status: (
      <div
        className="status"
        style={{ backgroundColor: "#E2F8F0", borderRadius: "14px" }}
      >
        <h4
          style={{
            color: "#0BA811",
            marginLeft: "10px",
            marginTop: "4px",
            fontSize: "13px",
          }}
        >
          In progress
        </h4>
      </div>
    ),
    button: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ borderStyle: "none" }}>...</Button>
      </Popover>
    ),
  },
  {
    key: "9",
    date: <div className="table-content">09/07/2022</div>,
    itemsordered: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$100.00</div>,
    type: <div className="table-content">Pickup</div>,
    neededby: <div className="table-content">Pickup</div>,
    status: (
      <div
        className="status"
        style={{ backgroundColor: "#E2F8F0", borderRadius: "14px" }}
      >
        <h4
          style={{
            color: "#0BA811",
            marginLeft: "9px",
            marginTop: "4px",
            fontSize: "13px",
          }}
        >
          In progress
        </h4>
      </div>
    ),
    button: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ borderStyle: "none" }}>...</Button>
      </Popover>
    ),
  },
]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};

const CustomerOrders = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <div>
      <Table
        pagination={{ hideOnSinglePage: true }}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default CustomerOrders;
