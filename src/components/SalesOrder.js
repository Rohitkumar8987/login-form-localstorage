import React from "react";
import { Select, Button, Popover } from "antd";
import CheckMark from "../Images/CheckMark.png";
import CollapseTable from "./../Common/CollapsTable";
import "../Stylesheet/_header.scss";
const { Option } = Select;

const content = (
  <div>
    <h4 style={{ fontSize: "14px", color: "#0BA811" }}>.In Stock</h4>
    <br />
    <h4
      style={{
        fontSize: "14px",

        color: "#E80101",
      }}
    >
      .Out of stock
    </h4>
  </div>
);

const columns = [
  {
    title: "IMAGE",
    dataIndex: "image",
  },
  {
    title: "SKU#",
    dataIndex: "sku",
  },
  {
    title: "ROOM",
    dataIndex: "room",
  },
  {
    title: "DESCRIPTION",
    dataIndex: "description",
  },
  {
    title: "DIMENSIONS",
    dataIndex: "dimensions",
  },
  {
    title: "FINSH",
    dataIndex: "finsh",
  },
  {
    title: "SOURCE",
    dataIndex: "source",
  },
  {
    title: "AVAILABILITY",
    dataIndex: "availability",
  },
  {
    title: "QUANTITY",
    dataIndex: "quantity",
  },
  {
    title: "LOCATION",
    dataIndex: "location",
  },
  {
    title: "SUB-LOCATION",
    dataIndex: "subLocation",
  },
  {
    title: "",
    dataIndex: "check",
  },
];

const subData = [
  {
    key: "1",
    image: <img src={CheckMark} alt="img" />,
    sku: "1032BB-118",
    room: "23456",
    description:
      "Two Light Vanity by Capital Lighting from the Arthur collection in Burnished Bronze finish",
    dimensions: "14x8",
    finsh: "Bronze/ Dark",
    source: "In System",
    availability: (
      <div>
        <Popover placement="bottom" content={content} trigger="click">
          <Button
            span
            style={{
              color: "#0BA811",
              fontSize: "15px",
              border: "0px solid #E2E8F0",
            }}
          >
            {" "}
            . In Stock
          </Button>
        </Popover>
      </div>
    ),
    quantity: (
      <>
        <Select defaultValue="78" onChange={() => console.log("")}>
          <Option value="78">78</Option>
        </Select>
      </>
    ),
    location: (
      <>
        <Select
          className=""
          defaultValue="2B4M"
          onChange={() => console.log("")}
        >
          <Option value="2B4M">2B4M</Option>
        </Select>
      </>
    ),
    subLocation: (
      <>
        <Select
          className=""
          defaultValue="2B4M"
          onChange={() => console.log("")}
        >
          <Option value="2B4M">2B4M</Option>
        </Select>
      </>
    ),
  },
  {
    key: "2",
    image: <img src={CheckMark} alt="img" />,
    sku: "1032BB-118",
    room: "23456",
    description:
      "Two Light Vanity by Capital Lighting from the Arthur collection in Burnished Bronze finish",
    dimensions: "14x8",
    finsh: "Bronze/ Dark",
    source: "In System",
    availability: (
      <>
        <Popover placement="bottom" content={content} trigger="click">
          <Button
            span
            style={{
              color: "#E80101",
              fontSize: "15px",
              border: "0px solid #E2E8F0",
            }}
          >
            . Out of stock
          </Button>
        </Popover>
      </>
    ),
    quantity: (
      <>
        <Select defaultValue="78" onChange={() => console.log("")}>
          <Option value="78">78</Option>
        </Select>
      </>
    ),
    location: (
      <>
        <Select
          className=""
          defaultValue="2B4M"
          onChange={() => console.log("")}
        >
          <Option value="2B4M">2B4M</Option>
        </Select>
      </>
    ),
    subLocation: (
      <>
        <Select
          className=""
          defaultValue="2B4M"
          onChange={() => console.log("")}
        >
          <Option value="2B4M">2B4M</Option>
        </Select>
      </>
    ),
  },
  {
    key: "3 ",
    image: <img src={CheckMark} alt="img" />,
    sku: "1032BB-118",
    room: "23456",
    description:
      "Two Light Vanity by Capital Lighting from the Arthur collection in Burnished Bronze finish",
    dimensions: "14x8",
    finsh: "Bronze/ Dark",
    source: "In System",
    availability: (
      <Popover placement="bottom" content={content} trigger="click">
        <Button
          span
          style={{
            color: "#0BA811",
            fontSize: "15px",
            border: "0px solid #E2E8F0",
          }}
        >
          {" "}
          . In Stock
        </Button>
      </Popover>
    ),
    quantity: (
      <>
        <Select defaultValue="78" onChange={() => console.log("")}>
          <Option value="78">78</Option>
        </Select>
      </>
    ),
    location: (
      <>
        <Select
          className=""
          defaultValue="2B4M"
          onChange={() => console.log("")}
        >
          <Option value="2B4M">2B4M</Option>
        </Select>
      </>
    ),
    subLocation: (
      <>
        <Select
          className=""
          defaultValue="2B4M"
          onChange={() => console.log("")}
        >
          <Option value="2B4M">2B4M</Option>
        </Select>
      </>
    ),
  },
];

const data = {
  isCollapseTable: true,
  pageTitle: "Sales Order Fulfilment",
  collapseButtonTitle: "Wantbook",
  search: false,
  collapseButtonIcon:true,
  collapseTableData: [
    {
      id: "1",
      collapseTitle: "Job ID#",
      collapseData: subData,
      constraints: false,
    },
    {
      id: "2",
      collapseTitle: "Job ID#",
      collapseData: subData,
      constraints: false,
    },
    {
      id: "3",
      collapseTitle: "Job ID#",
      collapseData: subData,
      constraints: false,
    },
  ],
};

export default function Salesorder() {
  return <CollapseTable columns={columns} data={data} showCheckBox />;
}
