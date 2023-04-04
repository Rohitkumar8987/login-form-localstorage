import React, { useState, pageSize } from "react";
import { Table, Button, Popover } from "antd";

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
    title: <div className="table-titles">JOB #</div>,
    dataIndex: "job",
  },
  {
    title: <div className="table-titles">INVOICE</div>,
    dataIndex: "invoice",
    render: (text) => <a>{text}</a>,
  },
  {
    title: <div className="table-titles">TOTAL</div>,
    dataIndex: "total",
    render: (text) => <a style={{ color: "red" }}>{text}</a>,
  },
  {
    title: <div className="table-titles">STATUS</div>,
    dataIndex: "status",
  },
  {
    title: <div className="table-titles">ISSUEDON</div>,
    dataIndex: "issuedon",
  },
  {
    title: <div className="table-titles">PAIDON</div>,
    dataIndex: "paidon",
  },
  {
    // title: 'PAIDON',
    dataIndex: "button",
  },
];
const data = [
  {
    key: "1",
    job: <div className=" table-content">122134</div>,
    invoice: "#312345",
    total: "$123.00",
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#E8010115",
          borderRadius: "14px",
          width: "70px",
        }}
      >
        <h4 style={{ color: "#E80101", marginLeft: "6px", marginTop: "2px" }}>
          Overdue
        </h4>
      </div>
    ),
    issuedon: <div className=" table-content">22/07/2022</div>,
    paidon: "-",
    button: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ borderStyle: "none" }}>...</Button>
      </Popover>
    ),
  },
  {
    key: "1",
    job: <div className=" table-content">122134</div>,
    invoice: "#312345",
    total: "$123.00",
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#E2F8F0",
          borderRadius: "14px",
          width: "50px",
        }}
      >
        <h4 style={{ color: "#0BA811", marginLeft: "6px", marginTop: "2px" }}>
          Paid
        </h4>
      </div>
    ),
    issuedon: <div className=" table-content">22/07/2022</div>,
    paidon: "-",
    button: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ borderStyle: "none" }}>...</Button>
      </Popover>
    ),
  },
  {
    key: "1",
    job: <div className=" table-content">122134</div>,
    invoice: "#312345",
    total: "$123.00",
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#E8010115",
          borderRadius: "14px",
          width: "70px",
        }}
      >
        <h4 style={{ color: "#E80101", marginLeft: "6px", marginTop: "2px" }}>
          Overdue
        </h4>
      </div>
    ),
    issuedon: <div className=" table-content">22/07/2022</div>,
    paidon: "-",
    button: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ borderStyle: "none" }}>...</Button>
      </Popover>
    ),
  },
  {
    key: "1",
    job: <div className="table-content">122134</div>,
    invoice: "#312345",
    total: "$123.00",
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#E8010115",
          borderRadius: "14px",
          width: "70px",
        }}
      >
        <h4 style={{ color: "#E80101", marginLeft: "6px", marginTop: "2px" }}>
          Overdue
        </h4>
      </div>
    ),
    issuedon: <div className=" table-content">22/07/2022</div>,
    paidon: "-",
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

const Invoice = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <div>
      <Table
        pagination={data.length > pageSize && { pageSize }}
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

export default Invoice;
