import React from "react";
import { Select } from "antd";
import "../Stylesheet/_header.scss";
import CollapseTable from "../Common/CollapsTable";
const { Option } = Select;

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "DESCRIPTION",
    dataIndex: "description",
  },
  {
    title: "QUANTITY",
    dataIndex: "quantity",
  },
  {
    title: "PRICE",
    dataIndex: "price",
  },
  {
    title: "",
    dataIndex: "dots",
  },
];

const subData = [
  {
    key: "1",
    id: "6565232",
    description:
      "Two Light Vanity by Capital Lighting from the Arthur collection in Burnished Bronze finish",
    quantity: (
      <>
        <Select
          className="select"
          defaultValue="78"
          onChange={() => console.log("")}
        >
          <Option value="78">78</Option>
        </Select>
      </>
    ),
    price: "$120",
    dots: <div className="dots">...</div>,
  },
  {
    key: "2",
    id: "6565232",
    description:
      "Two Light Vanity by Capital Lighting from the Arthur collection in Burnished Bronze finish",
    quantity: (
      <>
        <Select
          className="select"
          defaultValue="78"
          onChange={() => console.log("")}
        >
          <Option value="78">78</Option>
        </Select>
      </>
    ),
    price: "$120",
    dots: <div className="dots">...</div>,
  },
  {
    key: "3",
    id: "6565232",
    description:
      "Two Light Vanity by Capital Lighting from the Arthur collection in Burnished Bronze finish",
    quantity: (
      <>
        <Select
          className="select"
          defaultValue="78"
          onChange={() => console.log("")}
        >
          <Option value="78">78</Option>
        </Select>
      </>
    ),
    price: "$120",
    dots: <div className="dots">...</div>,
  },
];

const data = {
  isCollapseTable: true,
  pageTitle: "Wantbook",
  pageButtonTitle: "Purchase Order",
  selectedItems:true,
  collapseButtonTitle: "Convert to PO",
  collapseTableData: [
    {
      id: "1",
      collapseTitle: "Craftmade",

      collapseSubTitle:
        "Free Freight anytime of week or total PO (No constraints)",
      collapseData: subData,
      constraints: false,
    },

    {
      id: "2",
      collapseTitle: "Capital",
      collapseSubTitle: "Free Freight if PO = $500 any time of the week",
      collapseData: subData,
      constraints: true,
    },
    {
      id: "3",
      collapseTitle: "Quorum",
      collapseSubTitle:
        "Free Freight anytime of week or total PO (No constraints)",
      collapseData: subData,
      constraints: true,
    },
    {
      id: "4",
      collapseTitle: "Bulbrite",

      collapseSubTitle:
        "Minimum Order must be $100. Free Freight Allowance at $800",
      collapseData: subData,
      constraints: false,
    },
  ],
};

export default function WantbookInventory() {
  return <CollapseTable columns={columns} data={data} showCheckBox />;
}
