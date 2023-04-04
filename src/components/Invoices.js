import React from "react";
import { Button, Popover } from "antd";
import "../Stylesheet/_header.scss";
import CollapseTable from "../Common/CollapsTable";
import { Link } from "react-router-dom";

const text = "";
const content = (
  <div>
    <Link to="/invoiceOut">
      <p style={{ color: "#FFFFFF", width: "46px" }}>Details</p>
    </Link>
    <p>Edit</p>
    <p>Download PDF</p>
    <p>Delete</p>
  </div>
);

const columns = [
  {
    title: <div className="table-titles">INVOICE</div>,
    dataIndex: "invoice",
  },
  {
    title: <div className="table-titles">TOTAL</div>,
    dataIndex: "total",
  },
  {
    title: <div className="table-titles">STATUS</div>,
    dataIndex: "status",
  },
  {
    title: <div className="table-titles">CUSTOMER</div>,
    dataIndex: "customer",
  },
  {
    title: <div className="table-titles">ISSUED ON</div>,
    dataIndex: "issued",
  },
  {
    title: <div className="table-titles">PAID ON</div>,
    dataIndex: "paidOn",
  },
  {
    title: "",
    dataIndex: "edit",
  },
];
const subData = [
  {
    key: "1",
    invoice: (
      <div
        style={{
          color: "#005BF0",
          fontSize: "14px",
          width: "60px",
          fontWeight: "bold",
        }}
      >
        #312345
      </div>
    ),
    total: (
      <div
        style={{
          fontSize: "14px",
          color: "#E80101",
          width: "54px",
          fontWeight: "bolder",
        }}
      >
        $123.00
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#E8010115",
          borderRadius: "14px",
          width: "68px",
        }}
      >
        <h4
          style={{
            color: "#E80101",
            marginLeft: "10px",
            fontSize: "12px",
            position: "relative",
            top: "2px",
          }}
        >
          Overdue
        </h4>
      </div>
    ),
    customer: <div className="invoice-customers">Julie McCoy</div>,
    issued: <div className="invoice-issued">22/07/2022</div>,

    paidOn: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "80px",
        }}
      >
        --
      </div>
    ),

    edit: (
      <Popover
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
    invoice: (
      <div
        style={{
          color: "#005BF0",
          fontSize: "14px",
          width: "60px",
          fontWeight: "bold",
        }}
      >
        #312345
      </div>
    ),
    total: (
      <div
        style={{
          fontSize: "14px",
          color: "#0BA811",
          width: "54px",
          fontWeight: "bolder",
        }}
      >
        $123.00
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#0BA81115",
          borderRadius: "14px",
          width: "45px",
        }}
      >
        <h4
          style={{
            color: "#0BA811",
            marginLeft: "10px",
            fontSize: "12px",
            position: "relative",
            top: "2px",
          }}
        >
          Paid
        </h4>
      </div>
    ),
    customer: <div className="invoice-customers">Julie McCoy</div>,
    issued: <div className="invoice-issued">22/07/2022</div>,

    paidOn: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "80px",
          fontWeight: "500",
        }}
      >
        22/07/2022
      </div>
    ),

    edit: (
      <Popover
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
    invoice: (
      <div
        style={{
          color: "#005BF0",
          fontSize: "14px",
          width: "60px",
          fontWeight: "bold",
        }}
      >
        #312345
      </div>
    ),
    total: (
      <div
        style={{
          fontSize: "14px",
          color: "#E8B301",
          width: "54px",
          fontWeight: "bolder",
        }}
      >
        $123.00
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#E8B30115",
          borderRadius: "14px",
          width: "43px",
        }}
      >
        <h4
          style={{
            color: "#E8B301",
            marginLeft: "10px",
            fontSize: "12px",
            position: "relative",
            top: "2px",
          }}
        >
          Due
        </h4>
      </div>
    ),
    customer: <div className="invoice-customers">Julie McCoy</div>,
    issued: <div className="invoice-issued">22/07/2022</div>,

    paidOn: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "80px",
          fontWeight: "500",
        }}
      >
        22/07/2022
      </div>
    ),

    edit: (
      <Popover
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
    invoice: (
      <div
        style={{
          color: "#005BF0",
          fontSize: "14px",
          width: "60px",
          fontWeight: "bold",
        }}
      >
        #312345
      </div>
    ),
    total: (
      <div
        style={{
          fontSize: "14px",
          color: "#0BA811",
          width: "54px",
          fontWeight: "bolder",
        }}
      >
        $123.00
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#0BA81115",
          borderRadius: "14px",
          width: "73px",
        }}
      >
        <h4
          style={{
            color: "#0BA811",
            marginLeft: "10px",
            fontSize: "12px",
            position: "relative",
            top: "2px",
          }}
        >
          Paid 50%
        </h4>
      </div>
    ),
    customer: <div className="invoice-customers">Julie McCoy</div>,
    issued: <div className="invoice-issued">22/07/2022</div>,

    paidOn: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "80px",
          fontWeight: "500",
        }}
      >
        22/07/2022
      </div>
    ),

    edit: (
      <Popover
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
    invoice: (
      <div
        style={{
          color: "#005BF0",
          fontSize: "14px",
          width: "60px",
          fontWeight: "bold",
        }}
      >
        #312345
      </div>
    ),
    total: (
      <div
        style={{
          fontSize: "14px",
          color: "#E80101",
          width: "54px",
          fontWeight: "bolder",
        }}
      >
        $123.00
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#E8010115",
          borderRadius: "14px",
          width: "68px",
        }}
      >
        <h4
          style={{
            color: "#E80101",
            marginLeft: "10px",
            fontSize: "12px",
            position: "relative",
            top: "2px",
          }}
        >
          Overdue
        </h4>
      </div>
    ),
    customer: <div className="invoice-customers">Julie McCoy</div>,
    issued: <div className="invoice-issued">22/07/2022</div>,

    paidOn: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "80px",
        }}
      >
        --
      </div>
    ),

    edit: (
      <Popover
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
    invoice: (
      <div
        style={{
          color: "#005BF0",
          fontSize: "14px",
          width: "60px",
          fontWeight: "bold",
        }}
      >
        #312345
      </div>
    ),
    total: (
      <div
        style={{
          fontSize: "14px",
          color: "#E80101",
          width: "54px",
          fontWeight: "bolder",
        }}
      >
        $123.00
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#E8010115",
          borderRadius: "14px",
          width: "68px",
        }}
      >
        <h4
          style={{
            color: "#E80101",
            marginLeft: "10px",
            fontSize: "12px",
            position: "relative",
            top: "2px",
          }}
        >
          Overdue
        </h4>
      </div>
    ),
    customer: <div className="invoice-customers">Julie McCoy</div>,
    issued: <div className="invoice-issued">22/07/2022</div>,

    paidOn: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "80px",
        }}
      >
        --
      </div>
    ),

    edit: (
      <Popover
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
    invoice: (
      <div
        style={{
          color: "#005BF0",
          fontSize: "14px",
          width: "60px",
          fontWeight: "bold",
        }}
      >
        #312345
      </div>
    ),
    total: (
      <div
        style={{
          fontSize: "14px",
          color: "#E80101",
          width: "54px",
          fontWeight: "bolder",
        }}
      >
        $123.00
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#E8010115",
          borderRadius: "14px",
          width: "68px",
        }}
      >
        <h4
          style={{
            color: "#E80101",
            marginLeft: "10px",
            fontSize: "12px",
            position: "relative",
            top: "2px",
          }}
        >
          Overdue
        </h4>
      </div>
    ),
    customer: <div className="invoice-customers">Julie McCoy</div>,
    issued: <div className="invoice-issued">22/07/2022</div>,

    paidOn: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "80px",
        }}
      >
        --
      </div>
    ),

    edit: (
      <Popover
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
    invoice: (
      <div
        style={{
          color: "#005BF0",
          fontSize: "14px",
          width: "60px",
          fontWeight: "bold",
        }}
      >
        #312345
      </div>
    ),
    total: (
      <div
        style={{
          fontSize: "14px",
          color: "#E80101",
          width: "54px",
          fontWeight: "bolder",
        }}
      >
        $123.00
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#E8010115",
          borderRadius: "14px",
          width: "68px",
        }}
      >
        <h4
          style={{
            color: "#E80101",
            marginLeft: "10px",
            fontSize: "12px",
            position: "relative",
            top: "2px",
          }}
        >
          Overdue
        </h4>
      </div>
    ),
    customer: <div className="invoice-customers">Julie McCoy</div>,
    issued: <div className="invoice-issued">22/07/2022</div>,

    paidOn: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "80px",
        }}
      >
        --
      </div>
    ),

    edit: (
      <Popover
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
    invoice: (
      <div
        style={{
          color: "#005BF0",
          fontSize: "14px",
          width: "60px",
          fontWeight: "bold",
        }}
      >
        #312345
      </div>
    ),
    total: (
      <div
        style={{
          fontSize: "14px",
          color: "#E80101",
          width: "54px",
          fontWeight: "bolder",
        }}
      >
        $123.00
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#E8010115",
          borderRadius: "14px",
          width: "68px",
        }}
      >
        <h4
          style={{
            color: "#E80101",
            marginLeft: "10px",
            fontSize: "12px",
            position: "relative",
            top: "2px",
          }}
        >
          Overdue
        </h4>
      </div>
    ),
    customer: <div className="invoice-customers">Julie McCoy</div>,
    issued: <div className="invoice-issued">22/07/2022</div>,

    paidOn: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "80px",
        }}
      >
        --
      </div>
    ),

    edit: (
      <Popover
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
]; // rowSelection object indicates the need for row selection

const data = {
  isCollapseTable: true,
  pageTitle: "Invoices",
  pageButtonTitle: "Create Invoice",
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

const filterData = ["All", "Paid", "Due", "Overdue"];

export default function Invoices() {
  return (
    <CollapseTable
      columns={columns}
      data={data}
      filterData={filterData}
      showCheckBox
    />
  );
}
