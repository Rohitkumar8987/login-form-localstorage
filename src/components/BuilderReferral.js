import React from "react";
import { Divider, Select } from "antd";
 import CollapseTable from "../Common/CollapsTable";
import "../Stylesheet/_header.scss";
const { Option } = Select;

const columns = [
  {
    title: "FULL NAME",
    dataIndex: "name"
  },
  {
    title: "PHONE",
    dataIndex: "phone"
  },
  {
    title: "EMAIL",
    dataIndex: "email"
  },
  {
    title: "ADDRESS",
    dataIndex: "address"
  },
  {
    title: "TYPE",
    dataIndex: "type"
  },
  {
    title: "SALESPERSON",
    dataIndex: "salesperson"
  },
  {
    title: "NOTES",
    dataIndex: "notes"
  },
  {
    title: "",
    dataIndex: "dots"
  }
];

const subData = [
  {
    key: "1",
    name: "Philip Marshall",
    phone: "(371)611-0042",
    email: "debra.vengas@gmail.com",
    address: "841 Lakeshore Dr Port Orford, Oregon",
    type: "Business",
    salesperson: "George James",
    notes: "1",
    dots: <div className="dots">...</div>
  },
  {
    key: "2",
    name: "Danielle Cook",
    phone: "(371)423-9597",
    email: "steve.cooper@mail.com",
    address: "841 Lakeshore Dr Port Orford, Oregon",
    type: "Business",
    salesperson: "George James",
    notes: "1",
    dots: <div className="dots">...</div>
  },
  {
    key: "3",
    name: "Nancy Garrett",
    phone: "(518)153-3973",
    email: "kyle.reyes@mail.com",
    address: "841 Lakeshore Dr Port Orford, Oregon",
    type: "Business",
    salesperson: "George James",
    notes: "1",
    dots: <div className="dots">...</div>
  }
];

const data = {
  isCollapseTable: true,
  pageTitle: "Customers",
  pageButtonTitle: "Add Customer",

  collapseButtonTitle: "",
  collapseTableData: [
    {
      id: "1",
      collapseTitle: "Builder Name ",
      collapseData: subData,
      constraints: false
    },

    {
      id: "2",
      collapseTitle: "Builder Name ",
      collapseData: subData,
      constraints: true
    },
    {
      id: "3",
      collapseTitle: "Builder Name ",
      collapseData: subData,
      constraints: true
    },
    {
      id: "4",
      collapseTitle: "Builder Name ",
      collapseData: subData,
      constraints: false
    },
    {
      id: "5",
      collapseTitle: "Builder Name ",
      collapseData: subData,
      constraints: false
    },
    {
      id: "6",
      collapseTitle: "Builder Name ",
      collapseData: subData,
      constraints: false
    },
  ]
};

export default function builderReferal() {
  return <CollapseTable columns={columns} data={data} showCheckBox />;
}