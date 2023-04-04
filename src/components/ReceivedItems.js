import React, { useState } from "react";
import { Divider, Select, Col, Button, Popover } from "antd";
import "../Stylesheet/_header.scss";
import CollapseTable from "../Common/CollapsTable";
import { MailOutlined, DownloadOutlined } from "@ant-design/icons";
const { Option } = Select;

const text = "";
const content = (
  <div>
    <p>Edit</p>
    <p>Remove</p>
  </div>
);

const columns = [
  {
    title: (
      <div className="table-titles">
        DATE <br />
        RECEIVED
      </div>
    ),
    dataIndex: "date",
  },
  {
    title: <div className="table-titles">ITEM NAME</div>,
    dataIndex: "itemName",
  },
  {
    title: <div className="table-titles">ITEM ID</div>,
    dataIndex: "itemId",
  },
  {
    title: <div className="table-titles">DESCRIPTION</div>,
    dataIndex: "description",
  },
  {
    title: (
      <div className="table-titles">
        QTY <br />
        AVAILABLE
      </div>
    ),
    dataIndex: "qty",
  },
  {
    title: (
      <div className="table-titles">
        MIN STOCK <br />
        LEVEL
      </div>
    ),
    dataIndex: "stock",
  },
  {
    title: (
      <div className="table-titles">
        ITEM
        <br /> LOCATION
      </div>
    ),
    dataIndex: "location",
  },
  {
    title: <div className="table-titles">PARTS</div>,
    dataIndex: "parts",
  },
  {
    title: (
      <div className="table-titles">
        SALES <br />
        ORDER
      </div>
    ),
    dataIndex: "salesOrder",
  },
  {
    title: <div className="table-titles">PO#</div>,
    dataIndex: "po",
  },
  {
    title: "",
    dataIndex: "dots",
  },
];

const subData = [
  {
    key: "1",
    date: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "61px",
          fontWeight: "bold",
        }}
      >
        10/08/22
      </div>
    ),
    itemName: (
      <div className="received-name">
        Arthur Two <br />
        Light Vanity
      </div>
    ),
    itemId: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "52px",
        }}
      >
        753940
      </div>
    ),
    description: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "232px",
        }}
      >
        Two Light Vanity by Capital
        <br /> Lighting from the Arthur collection
        <br /> in Burnished Bronze finish
      </div>
    ),
    qty: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "68px",
        }}
      >
        96
      </div>
    ),
    stock: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "68px",
        }}
      >
        10
      </div>
    ),
    location: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "74px",
        }}
      >
        Warehouse
      </div>
    ),
    parts: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "74px",
        }}
      >
        1/1
      </div>
    ),
    salesOrder: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "74px",
        }}
      >
        #12312343
      </div>
    ),
    po: (
      <div
        style={{
          fontWeight: "bold",
          fontSize: "14px",
          color: "#1564D6",
          width: "75px",
        }}
      >
        #12312343
      </div>
    ),

    dots: (
      <Popover
        style={{ width: "97px" }}
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
    date: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "61px",
          fontWeight: "bold",
        }}
      >
        10/08/22
      </div>
    ),
    itemName: (
      <div className="received-name">
        Arthur Two <br />
        Light Vanity
      </div>
    ),
    itemId: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "52px",
        }}
      >
        753941
      </div>
    ),
    description: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "232px",
        }}
      >
        Two Light Vanity by Capital <br />
        Lighting from the Arthur collection
        <br /> in Burnished Bronze finish
      </div>
    ),
    qty: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "68px",
        }}
      >
        1173
      </div>
    ),
    stock: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "68px",
        }}
      >
        10
      </div>
    ),
    location: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "74px",
        }}
      >
        Warehouse
      </div>
    ),
    parts: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "74px",
        }}
      >
        1/1
      </div>
    ),
    salesOrder: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "74px",
        }}
      >
        #12312343
      </div>
    ),
    po: (
      <div
        style={{
          fontWeight: "bold",
          fontSize: "14px",
          color: "#1564D6",
          width: "75px",
        }}
      >
        #12312343
      </div>
    ),

    dots: (
      <Popover
        style={{ width: "97px" }}
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
    date: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "61px",
          fontWeight: "bold",
        }}
      >
        10/08/22
      </div>
    ),
    itemName: (
      <div className="received-name">
        Arthur Two
        <br /> Light Vanity
      </div>
    ),
    itemId: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "52px",
        }}
      >
        753965
      </div>
    ),
    description: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "232px",
        }}
      >
        Two Light Vanity by Capital
        <br /> Lighting from the Arthur collection
        <br /> in Burnished Bronze finish
      </div>
    ),
    qty: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "68px",
        }}
      >
        101
      </div>
    ),
    stock: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "68px",
        }}
      >
        10
      </div>
    ),
    location: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "74px",
        }}
      >
        Warehouse
      </div>
    ),
    parts: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "74px",
        }}
      >
        1/1
      </div>
    ),
    salesOrder: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "74px",
        }}
      >
        #12312343
      </div>
    ),
    po: (
      <div
        style={{
          fontWeight: "bold",
          fontSize: "14px",
          color: "#1564D6",
          width: "75px",
        }}
      >
        #12312343
      </div>
    ),

    dots: (
      <Popover
        style={{ width: "97px" }}
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
    date: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "61px",
          fontWeight: "bold",
        }}
      >
        10/08/22
      </div>
    ),
    itemName: (
      <div className="received-name">
        Arthur Two <br />
        Light Vanity
      </div>
    ),
    itemId: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "52px",
        }}
      >
        971781
      </div>
    ),
    description: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "232px",
        }}
      >
        Two Light Vanity by Capital
        <br /> Lighting from the Arthur collection
        <br /> in Burnished Bronze finish
      </div>
    ),
    qty: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "68px",
        }}
      >
        28
      </div>
    ),
    stock: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "68px",
        }}
      >
        10
      </div>
    ),
    location: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "74px",
        }}
      >
        Warehouse
      </div>
    ),
    parts: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "74px",
        }}
      >
        1/1
      </div>
    ),
    salesOrder: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "74px",
        }}
      >
        #12312343
      </div>
    ),
    po: (
      <div
        style={{
          fontWeight: "bold",
          fontSize: "14px",
          color: "#1564D6",
          width: "75px",
        }}
      >
        #12312343
      </div>
    ),

    dots: (
      <Popover
        style={{ width: "97px" }}
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
    date: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "61px",
          fontWeight: "bold",
        }}
      >
        10/08/22
      </div>
    ),
    itemName: (
      <div className="received-name">
        Arthur Two
        <br /> Light Vanity
      </div>
    ),
    itemId: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "52px",
        }}
      >
        971782
      </div>
    ),
    description: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "232px",
        }}
      >
        Two Light Vanity by Capital <br />
        Lighting from the Arthur collection
        <br /> in Burnished Bronze finish
      </div>
    ),
    qty: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "68px",
        }}
      >
        22
      </div>
    ),
    stock: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "68px",
        }}
      >
        10
      </div>
    ),
    location: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "74px",
        }}
      >
        Warehouse
      </div>
    ),
    parts: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "74px",
        }}
      >
        1/1
      </div>
    ),
    salesOrder: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "74px",
        }}
      >
        #12312343
      </div>
    ),
    po: (
      <div
        style={{
          fontWeight: "bold",
          fontSize: "14px",
          color: "#1564D6",
          width: "75px",
        }}
      >
        #12312343
      </div>
    ),

    dots: (
      <Popover
        style={{ width: "97px" }}
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
    date: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "61px",
          fontWeight: "bold",
        }}
      >
        10/08/22
      </div>
    ),
    itemName: (
      <div className="received-name">
        Arthur Two
        <br /> Light Vanity
      </div>
    ),
    itemId: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "52px",
        }}
      >
        971786
      </div>
    ),
    description: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "232px",
        }}
      >
        Two Light Vanity by Capital
        <br /> Lighting from the Arthur collection
        <br /> in Burnished Bronze finish
      </div>
    ),
    qty: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "68px",
        }}
      >
        24
      </div>
    ),
    stock: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "68px",
        }}
      >
        10
      </div>
    ),
    location: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "74px",
        }}
      >
        Warehouse
      </div>
    ),
    parts: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "74px",
        }}
      >
        1/1
      </div>
    ),
    salesOrder: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "74px",
        }}
      >
        #12312343
      </div>
    ),
    po: (
      <div
        style={{
          fontWeight: "bold",
          fontSize: "14px",
          color: "#1564D6",
          width: "75px",
        }}
      >
        #12312343
      </div>
    ),

    dots: (
      <Popover
        style={{ width: "97px" }}
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
    date: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "61px",
          fontWeight: "bold",
        }}
      >
        10/08/22
      </div>
    ),
    itemName: (
      <div className="received-name">
        Arthur Two
        <br /> Light Vanity
      </div>
    ),
    itemId: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "52px",
        }}
      >
        550284
      </div>
    ),
    description: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "232px",
        }}
      >
        Two Light Vanity by Capital <br />
        Lighting from the Arthur collection
        <br /> in Burnished Bronze finish
      </div>
    ),
    qty: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "68px",
        }}
      >
        14
      </div>
    ),
    stock: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "68px",
        }}
      >
        10
      </div>
    ),
    location: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "74px",
        }}
      >
        Warehouse
      </div>
    ),
    parts: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "74px",
        }}
      >
        1/1
      </div>
    ),
    salesOrder: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "74px",
        }}
      >
        #12312343
      </div>
    ),
    po: (
      <div
        style={{
          fontWeight: "bold",
          fontSize: "14px",
          color: "#1564D6",
          width: "75px",
        }}
      >
        #12312343
      </div>
    ),

    dots: (
      <Popover
        style={{ width: "97px" }}
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
    date: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "61px",
          fontWeight: "bold",
        }}
      >
        10/08/22
      </div>
    ),
    itemName: (
      <div className="received-name">
        Arthur Two
        <br /> Light Vanity
      </div>
    ),
    itemId: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "52px",
        }}
      >
        971784
      </div>
    ),
    description: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "232px",
        }}
      >
        Two Light Vanity by Capital
        <br /> Lighting from the Arthur collection
        <br /> in Burnished Bronze finish
      </div>
    ),
    qty: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "68px",
        }}
      >
        2
      </div>
    ),
    stock: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "68px",
        }}
      >
        10
      </div>
    ),
    location: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "74px",
        }}
      >
        Warehouse
      </div>
    ),
    parts: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "74px",
        }}
      >
        1/1
      </div>
    ),
    salesOrder: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "74px",
        }}
      >
        #12312343
      </div>
    ),
    po: (
      <div
        style={{
          fontWeight: "bold",
          fontSize: "14px",
          color: "#1564D6",
          width: "75px",
        }}
      >
        #12312343
      </div>
    ),

    dots: (
      <Popover
        style={{ width: "97px" }}
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
    date: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "61px",
          fontWeight: "bold",
        }}
      >
        10/08/22
      </div>
    ),
    itemName: (
      <div className="received-name">
        Arthur Two
        <br /> Light Vanity
      </div>
    ),
    itemId: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "52px",
        }}
      >
        753948
      </div>
    ),
    description: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "232px",
        }}
      >
        Two Light Vanity by Capital
        <br /> Lighting from the Arthur collection
        <br /> in Burnished Bronze finish
      </div>
    ),
    qty: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "68px",
        }}
      >
        64
      </div>
    ),
    stock: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "68px",
        }}
      >
        10
      </div>
    ),
    location: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "74px",
        }}
      >
        Warehouse
      </div>
    ),
    parts: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "74px",
        }}
      >
        1/1
      </div>
    ),
    salesOrder: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "74px",
        }}
      >
        #12312343
      </div>
    ),
    po: (
      <div
        style={{
          fontWeight: "bold",
          fontSize: "14px",
          color: "#1564D6",
          width: "75px",
        }}
      >
        #12312343
      </div>
    ),

    dots: (
      <Popover
        style={{ width: "97px" }}
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

const data = {
  isCollapseTable: true,
  pageTitle: "Received Items",
  pageButtonTitle: "Received Item",
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

const filterData = ["All"];

export default function ReceivedItems() {
  return (
    <CollapseTable
      columns={columns}
      data={data}
      filterData={filterData}
      showCheckBox
    />
  );
}
