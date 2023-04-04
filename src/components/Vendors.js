import React, { useState } from "react";
import { Divider, Select, Col, Button, Popover } from "antd";
import "../Stylesheet/_header.scss";
import { Link } from "react-router-dom";

import CollapseTable from "../Common/CollapsTable";

const { Option } = Select;

const text = "";
const content = (
  <div>
    <Link to="/vendorDetails">
      <p style={{ color: "#FFFFFF", width: "46px" }}>Details</p>
    </Link>
    <p>Edit</p>
    <p>Remove</p>
  </div>
);

const columns = [
  {
    title: <div className="table-titles">NAME</div>,
    dataIndex: "name",
  },
  {
    title: <div className="table-titles">ADDRESS</div>,
    dataIndex: "address",
  },
  {
    title: <div className="table-titles">CONTACTS</div>,
    dataIndex: "contacts",
  },
  {
    title: <div className="table-titles">TERMS</div>,
    dataIndex: "terms",
  },
  {
    title: (
      <div className="table-titles">
        FREE FREIGHT
        <br /> ALLOWANCE
      </div>
    ),
    dataIndex: "allowance",
  },
  {
    title: (
      <div className="table-titles">
        FREE FREIGHT
        <br /> DATE
      </div>
    ),
    dataIndex: "date",
  },
  {
    title: (
      <div className="table-titles">
        MIN ORDER
        <br /> AMOUNT
      </div>
    ),
    dataIndex: "minOrder",
  },

  {
    title: "",
    dataIndex: "dots",
  },
];

const subData = [
  {
    key: "1",
    name: <div className="vendor-name">Quorum</div>,
    address: (
      <div className="vendor-address">841 Lakeshore Dr Port Orford, Oregon</div>
    ),
    contacts: <div className="vendor-contact">(898)839-4369</div>,
    terms: <div className="vendor-terms">Lorem ipsum</div>,
    allowance: <div className="vendor-allowance">$800</div>,
    date: <div className="vendor-date">Mon</div>,
    minOrder: <div className="vendor-order">$99.00</div>,

    dots: (
      <Popover
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "2",
    name: <div className="vendor-name">Quorum</div>,
    address: (
      <div className="vendor-address">841 Lakeshore Dr Port Orford, Oregon</div>
    ),
    contacts: <div className="vendor-contact">(898)839-4369</div>,
    terms: <div className="vendor-terms">Lorem ipsum</div>,
    allowance: <div className="vendor-allowance">$800</div>,
    date: <div className="vendor-date">Sat</div>,
    minOrder: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "48px",
          fontWeight: "600",
        }}
      >
        $99.00
      </div>
    ),

    dots: (
      <Popover
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "3",
    name: <div className="vendor-name">Quorum</div>,
    address: (
      <div className="vendor-address">841 Lakeshore Dr Port Orford, Oregon</div>
    ),
    contacts: <div className="vendor-contact">(898)839-4369</div>,
    terms: <div className="vendor-terms">Lorem ipsum</div>,
    allowance: <div className="vendor-allowance">$800</div>,
    date: <div className="vendor-date">Sun</div>,
    minOrder: <div className="vendor-order">$99.00</div>,

    dots: (
      <Popover
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "4",
    name: <div className="vendor-name">Quorum</div>,
    address: (
      <div className="vendor-address">841 Lakeshore Dr Port Orford, Oregon</div>
    ),
    contacts: <div className="vendor-contact">(898)839-4369</div>,
    terms: <div className="vendor-terms">Lorem ipsum</div>,
    allowance: <div className="vendor-allowance">$800</div>,
    date: <div className="vendor-date">Mon</div>,
    minOrder: <div className="vendor-order">$99.00</div>,

    dots: (
      <Popover
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "5",
    name: <div className="vendor-name">Quorum</div>,
    address: (
      <div className="vendor-address">841 Lakeshore Dr Port Orford, Oregon</div>
    ),
    contacts: <div className="vendor-contact">(898)839-4369</div>,
    terms: <div className="vendor-terms">Lorem ipsum</div>,
    allowance: <div className="vendor-allowance">$800</div>,
    date: <div className="vendor-date">Mon,Tue</div>,
    minOrder: <div className="vendor-order">$99.00</div>,

    dots: (
      <Popover
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "6",
    name: <div className="vendor-name">Quorum</div>,
    address: (
      <div className="vendor-address">841 Lakeshore Dr Port Orford, Oregon</div>
    ),
    contacts: <div className="vendor-contact">(898)839-4369</div>,
    terms: <div className="vendor-terms">Lorem ipsum</div>,
    allowance: <div className="vendor-allowance">$800</div>,
    date: <div className="vendor-date">Fri</div>,
    minOrder: <div className="vendor-order">$99.00</div>,

    dots: (
      <Popover
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "7",
    name: <div className="vendor-name">Quorum</div>,
    address: (
      <div className="vendor-address">841 Lakeshore Dr Port Orford, Oregon</div>
    ),
    contacts: <div className="vendor-contact">(898)839-4369</div>,
    terms: <div className="vendor-terms">Lorem ipsum</div>,
    allowance: <div className="vendor-allowance">$800</div>,
    date: <div className="vendor-date">Fri</div>,
    minOrder: <div className="vendor-order">$99.00</div>,

    dots: (
      <Popover
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "8",
    name: <div className="vendor-name">Quorum</div>,
    address: (
      <div className="vendor-address">841 Lakeshore Dr Port Orford, Oregon</div>
    ),
    contacts: <div className="vendor-contact">(898)839-4369</div>,
    terms: <div className="vendor-terms">Lorem ipsum</div>,
    allowance: <div className="vendor-allowance">$800</div>,
    date: <div className="vendor-date">Fri</div>,
    minOrder: <div className="vendor-order">$99.00</div>,

    dots: (
      <Popover
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "9",
    name: <div className="vendor-name">Quorum</div>,
    address: (
      <div className="vendor-address">841 Lakeshore Dr Port Orford, Oregon</div>
    ),
    contacts: <div className="vendor-contact">(898)839-4369</div>,
    terms: <div className="vendor-terms">Lorem ipsum</div>,
    allowance: <div className="vendor-allowance">$800</div>,
    date: <div className="vendor-date">Mon</div>,
    minOrder: <div className="vendor-order">$99.00</div>,

    dots: (
      <Popover
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
];
const filterData = ["All", "Mon", "Tue", "Wed", "Thu", "Fri"];

const data = {
  isCollapseTable: true,
  pageTitle: "Vendors",
  pageButtonTitle: "Vendor",
  collapseButtonTitle: "",
  collapseTableData: [
    {
      id: "1",
      collapseTitle: "",
      collapseSubTitle: "",
      collapseData: subData,
      constraints: false,
    },
  ],
};

export default function Vendors() {
  return (
    <CollapseTable
      columns={columns}
      data={data}
      filterData={filterData}
      showCheckBox
    />
  );
}
