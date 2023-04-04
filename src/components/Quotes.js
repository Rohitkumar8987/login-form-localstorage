import React from "react";
import { Button, Popover } from "antd";
import "../Stylesheet/_header.scss";
import CollapseTable from "../Common/CollapsTable";
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
  },
  {
    title: <div className="table-titles">CUSTOMER</div>,
    dataIndex: "customer",
  },
  {
    title: (
      <div className="table-titles">
        ITEMS
        <br /> ORDERED
      </div>
    ),
    dataIndex: "items",
  },
  {
    title: <div className="table-titles">ORDER COST</div>,
    dataIndex: "ordercost",
  },
  {
    title: <div className="table-titles">SOURCE</div>,
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
    title: <div className="table-titles">PRICE</div>,
    dataIndex: "price",
  },
  {
    title: "",
    dataIndex: "edit",
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
          width: "80px",
          fontWeight: "bold",
        }}
      >
        09/07/2022
      </div>
    ),
    customer: <div className="table-content">Philip Marshall</div>,
    items: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$100.00</div>,
    source: <div className="table-content">Website</div>,
    type: <div className="table-content">Pickup</div>,
    salesperson: <div className="table-content">George James</div>,
    needed: <div className="table-content">22/07/2022</div>,
    price: <div className="table-content">$123.00</div>,

    edit: (
      <div className="table-content">
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
      </div>
    ),
  },
  {
    key: "2",
    date: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "80px",
          fontWeight: "bold",
        }}
      >
        09/07/2022
      </div>
    ),
    customer: <div className="table-content">Nancy Elliot</div>,
    items: <div className="table-content">1</div>,
    ordercost: <div className="table-content">$102.00</div>,
    source: <div className="table-content">Website</div>,
    type: <div className="table-content">Pickup</div>,
    salesperson: <div className="table-content">George James</div>,
    needed: <div className="table-content">22/07/2022</div>,
    price: <div className="table-content">$123.00</div>,

    edit: (
      <div className="table-content">
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
      </div>
    ),
  },
  {
    key: "3",
    date: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "80px",
          fontWeight: "bold",
        }}
      >
        09/07/2022
      </div>
    ),
    customer: <div className="table-content">Joan Chavez</div>,
    items: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$98.00</div>,
    source: <div className="table-content">Website</div>,
    type: <div className="table-content">Pickup</div>,
    salesperson: <div className="table-content">George James</div>,
    needed: <div className="table-content">22/07/2022</div>,
    price: <div className="table-content">$123.00</div>,

    edit: (
      <div className="table-content">
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
      </div>
    ),
  },
  {
    key: "4",
    date: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "80px",
          fontWeight: "bold",
        }}
      >
        09/07/2022
      </div>
    ),
    customer: <div className="table-content">Ronald Estrada</div>,
    items: <div className="table-content">5</div>,
    ordercost: <div className="table-content">$1000.00</div>,
    source: <div className="table-content">Website</div>,
    type: <div className="table-content">Pickup</div>,
    salesperson: <div className="table-content">George James</div>,
    needed: <div className="table-content">22/07/2022</div>,
    price: <div className="table-content">$123.00</div>,

    edit: (
      <div className="table-content">
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
      </div>
    ),
  },
  {
    key: "5",
    date: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "80px",
          fontWeight: "bold",
        }}
      >
        09/07/2022
      </div>
    ),
    customer: <div className="table-content">Louis Andrews</div>,
    items: <div className="table-content">2</div>,
    ordercost: <div className="table-content">$1023.00</div>,
    source: <div className="table-content">Website</div>,
    type: <div className="table-content">Pickup</div>,
    salesperson: <div className="table-content">George James</div>,
    needed: <div className="table-content">22/07/2022</div>,
    price: <div className="table-content">$123.00</div>,

    edit: (
      <div className="table-content">
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
      </div>
    ),
  },
  {
    key: "6",
    date: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "80px",
          fontWeight: "bold",
        }}
      >
        09/07/2022
      </div>
    ),
    customer: <div className="table-content">Christine Oliver</div>,
    items: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$230.00</div>,
    source: <div className="table-content">Website</div>,
    type: <div className="table-content">Pickup</div>,
    salesperson: <div className="table-content">George James</div>,
    needed: <div className="table-content">22/07/2022</div>,
    price: <div className="table-content">$123.00</div>,

    edit: (
      <div className="table-content">
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
      </div>
    ),
  },
  {
    key: "7",
    date: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "80px",
          fontWeight: "bold",
        }}
      >
        09/07/2022
      </div>
    ),
    customer: <div className="table-content">Diana Hill</div>,
    items: <div className="table-content">3</div>,
    ordercost: <div className="table-content">$3450.00</div>,
    source: <div className="table-content">Website</div>,
    type: <div className="table-content">Pickup</div>,
    salesperson: <div className="table-content">George James</div>,
    needed: <div className="table-content">22/07/2022</div>,
    price: <div className="table-content">$123.00</div>,

    edit: (
      <div className="table-content">
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
      </div>
    ),
  },
  {
    key: "8",
    date: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "80px",
          fontWeight: "bold",
        }}
      >
        09/07/2022
      </div>
    ),
    customer: <div className="table-content">Patricia Sullivan</div>,
    items: <div className="table-content">1</div>,
    ordercost: <div className="table-content">$1300.00</div>,
    source: <div className="table-content">Website</div>,
    type: <div className="table-content">Pickup</div>,
    salesperson: <div className="table-content">George James</div>,
    needed: <div className="table-content">22/07/2022</div>,
    price: <div className="table-content">$123.00</div>,

    edit: (
      <div className="table-content">
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
      </div>
    ),
  },
  {
    key: "9",
    date: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "80px",
          fontWeight: "bold",
        }}
      >
        09/07/2022
      </div>
    ),
    customer: <div className="table-content">Beatrice Hughes</div>,
    items: <div className="table-content">1</div>,
    ordercost: <div className="table-content">$10.00</div>,
    source: <div className="table-content">Website</div>,
    type: <div className="table-content">Pickup</div>,
    salesperson: <div className="table-content">George James</div>,
    needed: <div className="table-content">22/07/2022</div>,
    price: <div className="table-content">$123.00</div>,

    edit: (
      <div className="table-content">
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
      </div>
    ),
  },
];
const data = {
  isCollapseTable: true,
  pageTitle: "Quotes",
  pageButtonTitle: "Generate from LA",
  collapseButtonTitle: "",
  icon: false,
  search: false,
  collapseButtonIcon:false,
  
  collapseTableData: [
    {
      id: "1",
      collapseTitle: "Quotes",
      // collapseSubTitle: "",
      collapseData: subData,
      constraints: false,
    },
  ],
};

export default function Quotes() {
  return <CollapseTable columns={columns} data={data} showCheckBox />;
}
