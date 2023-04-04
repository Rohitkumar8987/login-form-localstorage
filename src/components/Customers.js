import React from "react";
import { Button, Popover } from "antd";

import CollapseTable from "./../Common/CollapsTable";
import "../Stylesheet/_header.scss";
import { Link } from "react-router-dom";

const text = "";
const content = (
  <div>
    <Link to="/customerDetails">
      <p style={{ color: "#FFFFFF", width: "46px" }}>Details</p>
    </Link>
    <p>Edit</p>
    <p>Remove</p>
  </div>
);
const columns = [
  {
    title: <div className="table-titles">FULL NAME</div>,
    dataIndex: "fullname",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: <div className="table-titles">PHONE</div>,
    dataIndex: "phone",
  },
  {
    title: <div className="table-titles">EMAIL</div>,
    dataIndex: "email",
  },
  {
    title: <div className="table-titles">ADDRESS</div>,
    dataIndex: "address",
  },
  {
    title: <div className="table-titles">TYPE</div>,
    dataIndex: "type",
  },
  {
    title: <div className="table-titles">SALESPERSON</div>,
    dataIndex: "salesperson",
  },
  {
    title: <div className="table-titles">NOTES</div>,
    dataIndex: "notes",
  },
  {
    // title: " ",
    dataIndex: "edit",
  },
];

const subData = [
  {
    key: "1",
    fullname: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          fontWeight: "bolder",
          width: "100px",
        }}
      >
        Philip Marshall
      </div>
    ),
    phone: <div className="table-content">(371)611-0042</div>,
    email: <div className="table-content">debra.vargas@mail.com</div>,
    address: (
      <div className="table-content">
        841 Lakeshore Dr <br />
        Port Orford, Oregon
      </div>
    ),
    type: <div className="table-content">Business</div>,
    salesperson: <div className="table-content">George James</div>,
    notes: <div className="table-content">1</div>,
    edit: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "2",
    fullname: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          fontWeight: "bolder",
          width: "97px",
        }}
      >
        Danielle Cook
      </div>
    ),
    phone: <div className="table-content">(371)423-9597</div>,
    email: <div className="table-content">steve.cooper@mail.com</div>,
    address: (
      <div className="table-content">
        841 Lakeshore Dr <br />
        Port Orford, Oregon
      </div>
    ),
    type: <div className="table-content">Business</div>,
    salesperson: <div className="table-content">George James</div>,
    notes: <div className="table-content">1</div>,
    edit: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "3",
    fullname: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          fontWeight: "bolder",
          width: "97px",
        }}
      >
        Nancy Garrett
      </div>
    ),
    phone: <div className="table-content">(518)153-3973</div>,
    email: <div className="table-content">debra.vargas@mail.com</div>,
    address: (
      <div className="table-content">
        841 Lakeshore Dr <br />
        Port Orford, Oregon
      </div>
    ),
    type: <div className="table-content">Business</div>,
    salesperson: <div className="table-content">George James</div>,
    notes: <div className="table-content">1</div>,
    edit: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "4",
    fullname: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          fontWeight: "bolder",
          width: "97px",
        }}
      >
        Marie Diaz
      </div>
    ),
    phone: <div className="table-content">(927)999-7836</div>,
    email: <div className="table-content">aaron.mendoza@mail.com</div>,
    address: (
      <div className="table-content">
        841 Lakeshore Dr <br />
        Port Orford, Oregon
      </div>
    ),
    type: <div className="table-content">Business</div>,
    salesperson: <div className="table-content">George James</div>,
    notes: <div className="table-content">1</div>,
    edit: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "5",
    fullname: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          fontWeight: "bolder",
          width: "97px",
        }}
      >
        Philip Ross
      </div>
    ),
    phone: <div className="table-content">(154)983-6065</div>,
    email: <div className="table-content">george.meyer@mail.com</div>,
    address: (
      <div className="table-content">
        841 Lakeshore Dr <br />
        Port Orford, Oregon
      </div>
    ),
    type: <div className="table-content">Business</div>,
    salesperson: <div className="table-content">George James</div>,
    notes: <div className="table-content">1</div>,
    edit: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "6",
    fullname: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          fontWeight: "bolder",
          width: "97px",
        }}
      >
        Aaron Pierce
      </div>
    ),
    phone: <div className="table-content">(969)281-4362</div>,
    email: <div className="table-content">julie.hughes@mail.com</div>,
    address: (
      <div className="table-content">
        841 Lakeshore Dr <br />
        Port Orford, Oregon
      </div>
    ),
    type: <div className="table-content">Business</div>,
    salesperson: <div className="table-content">George James</div>,
    notes: <div className="table-content">1</div>,
    edit: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "7",
    fullname: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          fontWeight: "bolder",
          width: "97px",
        }}
      >
        Carol Weber
      </div>
    ),
    phone: <div className="table-content">(689)248-8271</div>,
    email: <div className="table-content">jasmine.freeman@mail.com</div>,
    address: (
      <div className="table-content">
        841 Lakeshore Dr <br />
        Port Orford, Oregon
      </div>
    ),
    type: <div className="table-content">Business</div>,
    salesperson: <div className="table-content">George James</div>,
    notes: <div className="table-content">1</div>,
    edit: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },

  {
    key: "8",
    fullname: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          fontWeight: "bolder",
          width: "97px",
        }}
      >
        Roger Young
      </div>
    ),
    phone: <div className="table-content">(412)158-3605</div>,
    email: <div className="table-content">natasha.lynch@mail.com</div>,
    address: (
      <div className="table-content">
        841 Lakeshore Dr <br />
        Port Orford, Oregon
      </div>
    ),
    type: <div className="table-content">Business</div>,
    salesperson: <div className="table-content">George James</div>,
    notes: <div className="table-content">1</div>,
    edit: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "9",
    fullname: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          fontWeight: "bolder",
          width: "105px",
        }}
      >
        Rebecca Palmer
      </div>
    ),
    phone: <div className="table-content">(823)307-2353</div>,
    email: <div className="table-content">timothy.wood@mail.com</div>,
    address: (
      <div className="table-content">
        841 Lakeshore Dr <br />
        Port Orford, Oregon
      </div>
    ),
    type: <div className="table-content">Business</div>,
    salesperson: <div className="table-content">George James</div>,
    notes: <div className="table-content">1</div>,
    edit: (
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
];

const filterData = [
  "All",
  "Business",
  "Builder Referral",
  "Store/Walking",
  "Store/Direct",
];
const data = {
  isCollapseTable: true,
  pageTitle: "Customers",
  collapseButtonTitle: "",
  pageButtonTitle: "Add Customer",
  collapseTableData: [
    {
      id: "1",
      collapseTitle: "",
      collapseData: subData,
      constraints: false,
    },
  ],
};

export default function Salesorder() {
  return (
    <CollapseTable
      columns={columns}
      data={data}
      filterData={filterData}
      showCheckBox
    />
  );
}
