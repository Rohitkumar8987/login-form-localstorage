import React, { useState, useEffect, boolean, any } from "react";
import { Card, Col, Row } from "antd";
import { Line, Pie } from "@ant-design/plots";
import ShoppingBag from "../Images/ShoppingBag.png";
import Product from "../Images/Product.png";
import Todo from "../Images/Todo.png";
import PackingList from "../Images/PackingList.png";

export default function Dashboard() {
  const data = [
    { month: "1 Aug", price: 2 },
    { month: "2 Aug", price: 4 },
    { month: "3 Aug", price: 2 },
    { month: "4 Aug", price: 12 },
    { month: "5 Aug", price: 4 },
    { month: "6 Aug", price: 2 },
    { month: "7 Aug", price: 5 },
    { month: "8 Aug", price: 10 },
    { month: "9 Aug", price: 5 },
    { month: "10 Aug", price: 8 },
    { month: "11 Aug", price: 15 },
    { month: "12 Aug", price: 12 },
    { month: "13 Aug", price: 7 },
  ];
  const config = {
    data,
    // height: 400,
    xField: "month",
    yField: "price",
    point: {
      // size: 5,
      shape: "diamond | circule",
    },
    tooltip: {
      formatter: (data) => {
        return {
          name: "",
          value: any,
        };
      },
      customContent: (name, data) =>
        `<div>${data?.map((item) => {
          return `<div class="tooltip-chart" >
              <span class="tooltip-item-name">${item?.name}</span>
              <span class="tooltip-item-value">${item?.value}</span>
            </div>`;
        })}</div>`,
      showMarkers: boolean,
      showContent: boolean,
      position: "right | left",
      showCrosshairs: boolean,
    },
  };

  const DemoPie = () => {
    const data = [
      {
        type: "Online",
        value: 48,
      },
      {
        type: "Shop",
        value: 52,
      },
    ];
    const config = {
      appendPadding: 10,
      data,
      angleField: "value",
      colorField: "type",
      radius: 0.8,
      label: {
        type: "outer",
      },

      state: {
        active: {
          style: {
            lineWidth: 0,
            fillOpacity: 0.65,
          },
        },
      },

      interactions: [
        {
          type: "element-single-selected",
        },
        {
          type: "element-active",
        },
      ],
    };
    return <Pie {...config} />;
  };

  const reportCard = (icon, count, title) => {
    return (
      <Col span={12}>
        <Card>
          <Row gutter={[16, 16]}>
            <div
              style={{
                width: "86px",
                height: "86px",
                backgroundColor: "#EAF2FA",
                marginRight: "20px",
                textAlign: "center",
              }}
            >
              <h1>{icon}</h1>
            </div>
            <div>
              <h1 style={{ fontSize: "28px" }}>{count}</h1>
              <h4 style={{ fontSize: "15px", color: "#475569" }}>{title}</h4>
            </div>
          </Row>
        </Card>
      </Col>
    );
  };

  const listItem = (title, subTitle, amount) => {
    return (
      <Card bodyStyle={{ padding: "10px 20px" }}>
        <Row gutter={[16, 16]} justify="space-between">
          <div>
            <h1 style={{ fontSize: "16px", fontWeight: "600" }}>{title}</h1>
            <h4 style={{ fontSize: "12px", color: "#06B20C" }}>{subTitle}</h4>
          </div>
          <div>
            <h1 style={{ fontSize: "16px", fontWeight: "600" }}>${amount}</h1>
            <h4
              style={{
                fontSize: "12px",
                fontWeight: "600",
                backgroundColor: "#00CAA6",
                padding: "3px 10px",
                color: "#FFF",
                borderRadius: "5px",
              }}
            >
              Convert to PO
            </h4>
          </div>
        </Row>
      </Card>
    );
  };

  return (
    <Col span={24}>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Row gutter={[16, 16]}>
            {reportCard(
              <img
                src={PackingList}
                width="30"
                height="30px"
                style={{ marginTop: "25px" }}
              />,
              "1234",
              "Sales Orders"
            )}
            {reportCard(
              <img
                src={ShoppingBag}
                width="30px"
                height="30px"
                style={{ marginTop: "25px" }}
              />,
              "12",
              "Purchase Orders"
            )}
            {reportCard(
              <img
                src={Todo}
                width="30px"
                height="30px"
                style={{ marginTop: "25px" }}
              />,
              "2",
              "PO Ledgers"
            )}
            {reportCard(
              <img
                src={Product}
                width="30px"
                height="30px"
                style={{ marginTop: "25px" }}
              />,
              "109",
              "Items Received"
            )}

            <Col span={24}>
              <Card title="Sales Orders" style={{ height: "36.5vw" }}>
                <h1 style={{ height: "26vw" }}>
                  <Line {...config} />
                </h1>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card title="PO Ledgers" bodyStyle={{ padding: "0px" }}>
                {listItem(
                  "Quorum",
                  "Free Freight at $99 anytime of week",
                  "560"
                )}
                {listItem(
                  "Capital",
                  "Free Freight if PO = $500 any time of the week",
                  "980"
                )}
                {listItem(
                  "Craftmade",
                  "Free Freight anytime of week or total PO (No constraints)",
                  "50"
                )}
                {listItem(
                  "Bulbrite",
                  "Minimum Order must be $100. Free Freight Allowance at $800",
                  "260"
                )}
                {listItem(
                  "American",
                  "Free Freight at $120 anytime of weekn",
                  "40"
                )}
              </Card>
            </Col>

            <Col span={24}>
              <Card title="Orders">{DemoPie()}</Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}
