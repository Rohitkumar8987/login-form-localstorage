import React from "react";
import { Button, Popover } from "antd";
import "../Stylesheet/_header.scss";
import CollapseTable from "../Common/CollapsTable";
import { Link } from "react-router-dom";

const text = "";
const content = (
  <div>
    <Link to="/sODetails">
      <p style={{ color: "#FFFFFF", width: "46px" }}>Details</p>
    </Link>
    <p>Edit</p>
    <p>Remove</p>
  </div>
);

const columns = [
  {
    title:<div className="table-titles">DATE</div> ,
    dataIndex: "date",
  },
  {
    title: <div className="table-titles">CUSTOMER</div>,
    dataIndex: "customer",
  },
  {
    title: <div className="table-titles"> ITEMS<br/> ORDERED</div>,
    dataIndex: "items",
  },
  {
    title: <div className="table-titles"> ORDER COST</div>,
    dataIndex: "ordercost",
  },
  {
    title: <div className="table-titles"> SOURCE</div>,
    dataIndex: "source",
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
    title: <div className="table-titles">NEEDED BY</div>,
    dataIndex: "needed",
  },
  {
    title: <div className="table-titles">STATUS</div>,
    dataIndex: "status",
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
      <div style={{ fontSize: "14px", color: "#1E293B", fontWeight: "bolder" }}>
        09/07/2022
      </div>
    ),
    customer: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "96px",
          height: "16px",
        }}
      >
        Philip Marshall
      </div>
    ),
    items:<div className="table-content"> 3</div>,
    ordercost: <div className="table-content">$100.00</div>,
    source: <div className="table-content">Website</div>,
    type: <div className="table-content">Pickup</div>,
    salesperson:<div className="table-content">George James</div>,
    needed: <div className="table-content">22/07/2022</div>,
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
    dots: (
      <Popover
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button
          style={{
            border: "0px solid #E2E8F0",
            color: "#475569",
            backgroundColor: "#fff",
          }}
        >
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "2",
    date: (
      <div style={{ fontSize: "14px", color: "#1E293B", fontWeight: "bolder" }}>
        09/07/2022
      </div>
    ),
    customer: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "96px",
          height: "16px",
        }}
      >
        Philip Marshall
      </div>
    ),
    items: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$100.00</div>,
    source: <div className="table-content">Website</div>,
    type: <div className="table-content">Pickup</div>,
    salesperson: <div className="table-content">George James</div>,
    needed:<div className="table-content">22/07/2022</div> ,
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#EDE3CC",
          borderRadius: "14px",
          width: "62px",
        }}
      >
        <h4
          style={{
            color: "#CE8700",
            marginLeft: "8px",
            marginTop: "4px",
            fontSize: "13px",
          }}
        >
          Waiting
        </h4>
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
        <Button
          style={{
            border: "0px solid #E2E8F0",
            color: "#475569",
            backgroundColor: "#fff",
          }}
        >
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "3",
    date: (
      <div style={{ fontSize: "14px", color: "#1E293B", fontWeight: "bolder" }}>
        09/07/2022
      </div>
    ),
    customer: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "96px",
          height: "16px",
        }}
      >
        Philip Marshall
      </div>
    ),
    items: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$100.00</div>,
    source: <div className="table-content">Website</div>,
    type: <div className="table-content">Pickup</div>,
    salesperson: <div className="table-content">George James</div>,
    needed:<div className="table-content">22/07/2022</div> ,
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
    dots: (
      <Popover
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button
          style={{
            border: "0px solid #E2E8F0",
            color: "#475569",
            backgroundColor: "#fff",
          }}
        >
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "4",
    date: (
      <div style={{ fontSize: "14px", color: "#1E293B", fontWeight: "bolder" }}>
        09/07/2022
      </div>
    ),
    customer: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "96px",
          height: "16px",
        }}
      >
        Philip Marshall
      </div>
    ),
    items: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$100.00</div>,
    source: <div className="table-content">Website</div>,
    type: <div className="table-content">Pickup</div>,
    salesperson: <div className="table-content">George James</div>,
    needed:<div className="table-content">22/07/2022</div> ,
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
    dots: (
      <Popover
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button
          style={{
            border: "0px solid #E2E8F0",
            color: "#475569",
            backgroundColor: "#fff",
          }}
        >
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "5",
    date: (
      <div style={{ fontSize: "14px", color: "#1E293B", fontWeight: "bolder" }}>
        09/07/2022
      </div>
    ),
    customer: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "96px",
          height: "16px",
        }}
      >
        Philip Marshall
      </div>
    ),
    items: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$100.00</div>,
    source: <div className="table-content">Website</div>,
    type: <div className="table-content">Pickup</div>,
    salesperson: <div className="table-content">George James</div>,
    needed:<div className="table-content">22/07/2022</div> ,
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#DEE3F5",
          borderRadius: "14px",
          width: "82px",
        }}
      >
        <h4 style={{ color: "#0047CE", marginLeft: "10px", fontSize: "12px" }}>
          Completed
        </h4>
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
        <Button
          style={{
            border: "0px solid #E2E8F0",
            color: "#475569",
            backgroundColor: "#fff",
          }}
        >
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "6",
    date: (
      <div style={{ fontSize: "14px", color: "#1E293B", fontWeight: "bolder" }}>
        09/07/2022
      </div>
    ),
    customer: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "96px",
          height: "16px",
        }}
      >
        Philip Marshall
      </div>
    ),
    items: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$100.00</div>,
    source: <div className="table-content">Website</div>,
    type: <div className="table-content">Pickup</div>,
    salesperson: <div className="table-content">George James</div>,
    needed:<div className="table-content">22/07/2022</div> ,
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
    dots: (
      <Popover
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button
          style={{
            border: "0px solid #E2E8F0",
            color: "#475569",
            backgroundColor: "#fff",
          }}
        >
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "7",
    date: (
      <div style={{ fontSize: "14px", color: "#1E293B", fontWeight: "bolder" }}>
        09/07/2022
      </div>
    ),
    customer: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "96px",
          height: "16px",
        }}
      >
        Philip Marshall
      </div>
    ),
    items: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$100.00</div>,
    source: <div className="table-content">Website</div>,
    type: <div className="table-content">Pickup</div>,
    salesperson: <div className="table-content">George James</div>,
    needed:<div className="table-content">22/07/2022</div> ,
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
    dots: (
      <Popover
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button
          style={{
            border: "0px solid #E2E8F0",
            color: "#475569",
            backgroundColor: "#fff",
          }}
        >
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "8",
    date: (
      <div style={{ fontSize: "14px", color: "#1E293B", fontWeight: "bolder" }}>
        09/07/2022
      </div>
    ),
    customer: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "96px",
          height: "16px",
        }}
      >
        Philip Marshall
      </div>
    ),
    items: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$100.00</div>,
    source: <div className="table-content">Website</div>,
    type: <div className="table-content">Pickup</div>,
    salesperson: <div className="table-content">George James</div>,
    needed:<div className="table-content">22/07/2022</div> ,
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
    dots: (
      <Popover
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button
          style={{
            border: "0px solid #E2E8F0",
            color: "#475569",
            backgroundColor: "#fff",
          }}
        >
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "9",
    date: (
      <div style={{ fontSize: "14px", color: "#1E293B", fontWeight: "bolder" }}>
        09/07/2022
      </div>
    ),
    customer: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "96px",
          height: "16px",
        }}
      >
        Philip Marshall
      </div>
    ),
    items: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$100.00</div>,
    source: <div className="table-content">Website</div>,
    type: <div className="table-content">Pickup</div>,
    salesperson: <div className="table-content">George James</div>,
    needed:<div className="table-content">22/07/2022</div> ,
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
    dots: (
      <Popover
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button
          style={{
            border: "0px solid #E2E8F0",
            color: "#475569",
            backgroundColor: "#fff",
          }}
        >
          ...
        </Button>
      </Popover>
    ),
  },
];

const filterData = ["All", "Pickup", "Dropship", "Local Delivery"];

const data = {
  isCollapseTable: true,
  pageTitle: "Sales Orders",
  pageButtonTitle: "New Sales Order",
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

export default function SalesOrderInventory() {
  return (
    <CollapseTable
      columns={columns}
      data={data}
      filterData={filterData}
      showCheckBox
    />
  );
}
