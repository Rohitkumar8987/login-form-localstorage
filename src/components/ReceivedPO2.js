import React, { useState } from "react";
import { Select, Button, Steps, Table } from "antd";
import "../Stylesheet/_header.scss";
const { Option } = Select;
const handleChange = (value) => {};
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
    title: "QUANTITY REQUESTED",
    dataIndex: "quantityRequest",
  },
  {
    title: "QUANTITY RECEIVED",
    dataIndex: "quantityReceived",
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
    dataIndex: "buttons",
  },
];
const data = [
  {
    key: "1",
    id: "6565232",
    description:
      "Two Light Vanity by Capital Lighting from the Arthur collection in Burnished Bronze finish",
    quantityRequest: <b>10</b>,
    quantityReceived: (
      <>
        <Select
          className="ant-select-selector"
          defaultValue="10"
          onChange={handleChange}
        >
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
          <Option value="6">6</Option>
          <Option value="7">7</Option>
          <Option value="8">8</Option>
          <Option value="9">9</Option>
          <Option value="10">10</Option>
        </Select>
      </>
    ),
    location: (
      <>
        <Select
          className="ant-select-selector"
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
          className="ant-select-selector"
          defaultValue="2B4M"
          onChange={() => console.log("")}
        >
          <Option value="2B4M">2B4M</Option>
        </Select>
      </>
    ),
    buttons: (
      <Button className="conformed" onClick={() => console.log("")}>
        Confirm
      </Button>
    ),
  },
  {
    key: "2",
    id: "6565232",
    description:
      "Two Light Vanity by Capital Lighting from the Arthur collection in Burnished Bronze finish",
    quantityRequest: <b>10</b>,
    quantityReceived: (
      <>
        <Select
          className="ant-select-selector"
          defaultValue="2"
          onChange={handleChange}
        >
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
          <Option value="6">6</Option>
          <Option value="7">7</Option>
          <Option value="8">8</Option>
          <Option value="9">9</Option>
          <Option value="10">10</Option>
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
          className="ant-select-selector"
          defaultValue="2B4M"
          onChange={() => console.log("")}
        >
          <Option value="2B4M">2B4M</Option>
        </Select>
      </>
    ),
    buttons: (
      <Button className="conformed" onClick={() => console.log("")}>
        Confirm
      </Button>
    ),
  },
  {
    key: "3",
    id: "6565232",
    description:
      "Two Light Vanity by Capital Lighting from the Arthur collection in Burnished Bronze finish",
    quantityRequest: <b>5</b>,
    quantityReceived: (
      <>
        <Select
          className="ant-select-selector"
          defaultValue="10"
          onChange={handleChange}
        >
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
          <Option value="6">6</Option>
          <Option value="7">7</Option>
          <Option value="8">8</Option>
          <Option value="9">9</Option>
          <Option value="10">10</Option>
        </Select>
      </>
    ),
    location: (
      <>
        <Select
          className="ant-select-selector"
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
          className="ant-select-selector"
          defaultValue="2B4M"
          onChange={() => console.log("")}
        >
          <Option value="2B4M">2B4M</Option>
        </Select>
      </>
    ),
    buttons: (
      <Button className="conformed" onClick={() => console.log("")}>
        Confirm
      </Button>
    ),
  },
  {
    key: "4",
    id: "6565232",
    description:
      "Two Light Vanity by Capital Lighting from the Arthur collection in Burnished Bronze finish",
    quantityRequest: <b>1</b>,
    quantityReceived: (
      <>
        <Select
          className="ant-select-selector"
          defaultValue="10"
          onChange={handleChange}
        >
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
          <Option value="6">6</Option>
          <Option value="7">7</Option>
          <Option value="8">8</Option>
          <Option value="9">9</Option>
          <Option value="10">10</Option>
        </Select>
      </>
    ),
    location: (
      <>
        <Select
          className="ant-select-selector"
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
          className="ant-select-selector"
          defaultValue="2B4M"
          onChange={() => console.log("")}
        >
          <Option value="2B4M">2B4M</Option>
        </Select>
      </>
    ),
    buttons: (
      <Button className="conformed" onClick={() => console.log("")}>
        Confirm
      </Button>
    ),
  },
];

const { Step } = Steps;

export default function ReceivedPO2() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div style={{ background: "#FFF" }}>
      <center>
        <h1
          style={{
            fontSize: "30px",
            color: "#1E293B",
            fontWeight: "semiBold",
            marginTop: "20px",
          }}
        >
          Received PO
        </h1>
        <div style={{ width: "150px", marginTop: "1vw", marginBottom: "3vw" }}>
          <Steps
            size="small"
            onChange={() => {
              "";
            }}
          >
            <Step title="" description="" />
            <Step title="" description="" />
          </Steps>
        </div>
        <h2
          style={{
            marginTop: "1vw",
            width: "348px",
            heigth: "24px",
            fontSize: "20px",
            color: "#1E293B",
            fontWeight: "semibold",
          }}
        >
          Confirm Received Items & Locations
        </h2>
        <h3 style={{ color: "#94A3B8" }}>PO #122343</h3>
        <div>
          {/* <Input style={{width:"648px",height:"38px",borderRadius:"5px",border:"1px solid #E2E8F0"}} placeholder="Find Purchase Order #" /> */}
        </div>
      </center>

      <Table
        style={{ backgroundColor: "white" }}
        columns={columns}
        dataSource={data}
        pagination={{ hideOnSinglePage: true }}
      />

      {/* <CollapseTable columns={columns} data={data} /> */}

      <center style={{ backgroundColor: "#F1F5F9" }}>
        <Button
          className="receivedPo2"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {isHovering ? "Received" : "Finish"}
        </Button>
      </center>
    </div>
  );
}
