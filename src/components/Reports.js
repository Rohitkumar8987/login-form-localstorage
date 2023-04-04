import React from "react";
import { Divider, Select } from "antd";
import "../Stylesheet/_header.scss";
import CollapseTable from "../Common/CollapsTable";
const { Option } = Select;

const columns = [
  {
    title: "",
    dataIndex: "",
  },
];

const subData = [
  {
    id: "",
  },
];

const data = {
  isCollapseTable: true,
  pageTitle: "Reports",
  pageButtonTitle: "",

  collapseButtonTitle: "",
  collapseTableData: [
    {
      id: "1",
      collapseTitle: "",
      collapseData: subData,
      constraints: false,
    },
  ],
};

export default function Reports() {
  return <CollapseTable columns={columns} data={data} showCheckBox />;
}
