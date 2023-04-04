import React from "react";
import { Button, Steps } from "antd";
import "../Stylesheet/_header.scss";
import { Link } from "react-router-dom";

const { Step } = Steps;

export default function ReceivedPO() {
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
            width: "217px",
            heigth: "24px",
            fontSize: "20px",
            color: "#1E293B",
            fontWeight: "semibold",
          }}
        >
          Find Purchase Order #
        </h2>
        <div>
          <Link to="receivedPO2">
            <Button
              style={{
                width: "648px",
                height: "38px",
                borderRadius: "5px",
                color: "#94A3B8",
                marginBottom: "35%",
              }}
            >
              Find Purchase Order #{" "}
            </Button>
          </Link>
        </div>
      </center>
    </div>
  );
}
