import React, { useState, pageSize, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Input,
  Table,
  Form,
  Modal,
  Select,
  Progress,
  message,
  notification,
  Divider,
} from "antd";
import {
  ArrowLeftOutlined,
  CloseOutlined,
  SearchOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import CheckMark from "../Images/CheckMark.png";
import FormItem from "antd/es/form/FormItem";
import appConfig from "../config/AppConfig";
import { add, update, getDetails, list } from "../api/Apis";
import "react-phone-input-2/lib/style.css";
import ReactPhoneInput from "react-phone-input-2";
const { Option } = Select;

const columns = [
  {
    dataIndex: "firstName",
    reder: (firstName, record) => {
      return (
        <div>
          {record.firstName} 
        </div>
      );
    },
  },
  {
    dataIndex: "phone",
  },
  {
    dataIndex: "email",
  },
];
const data = [
  {
    key: "1",
    name: <b>Philip Marshall</b>,
    phone: "(770)996-1963",
    email: "debra.vargas@mail.com",
  },
  {
    key: "2",
    name: <b>Chad Ortiz</b>,
    phone: "(371)611-0042",
    email: "eliza.andrews@mail.com",
  },
  {
    key: "3",
    name: <b>Janet Weber</b>,
    phone: "(734)757-0236",
    email: "richard.bailey@mail.com",
  },
  {
    key: "4",
    name: <b>Larry Jordan</b>,
    phone: "(659)784-1559",
    email: "marie.williamson@mail.com",
  },
  {
    key: "5",
    name: <b>(470)282-5950</b>,
    phone: "New York No. 1 Lake Park",
    email: "joan.andrews@mail.com",
  },
  {
    key: "6",
    name: <b>Ruth Ellis</b>,
    phone: "(972)508-0988",
    email: "francine.henderson@mail.com",
  },
  {
    key: "7",
    name: <b>Carol Hoffman</b>,
    phone: "(371)611-0042",
    email: "philip.gilbert@mail.com",
  },
  {
    key: "8",
    name: <b>Carol Hoffman</b>,
    phone: "(371)611-0042",
    email: "philip.gilbert@mail.com",
  },
];

const itemsList = [
  {
    id: 1,
    code: "1032BB-118",
    name: "Millenium",
    subCode: "2602-PBK",
    description:
      "Two Light Vanity by Capital Lighting from the Arthur collection in Burnished Bronze finish",
    dimensions: '8.00"W x 22.00"H',
    finish: "Bronze / Dark",
    location: "Exterior Front Door",
    price: 279.8,
    subPrice: 39.9,
    qty: 0,
  },
  {
    id: 2,
    code: "1032BB-119",
    name: "Millenium",
    subCode: "2602-PBK",
    description:
      "Two Light Vanity by Capital Lighting from the Arthur collection in Burnished Bronze finish",
    dimensions: '6.00"W x 12.00"H',
    finish: "Copper",
    location: "Interior Front Door",
    price: 179.8,
    subPrice: 49.9,
    qty: 0,
  },
  {
    id: 3,
    code: "2012BB-209",
    name: "Millenium",
    subCode: "2002-POK",
    description:
      "Two Light Vanity by Capital Lighting from the Arthur collection in Burnished Bronze finish",
    dimensions: '4.00"W x 2.00"H',
    finish: "Dark",
    location: "Front Door",
    price: 89.8,
    subPrice: 40.0,
    qty: 0,
  },
  {
    id: 4,
    code: "3032CC-009",
    name: "Millenium",
    subCode: "2602-PBK",
    description:
      "Two Light Vanity by Capital Lighting from the Arthur collection in Burnished Bronze finish",
    dimensions: '6.00"W x 12.00"H',
    finish: "Bronze",
    location: "Interior Front Door",
    price: 10.5,
    subPrice: 20.3,
    qty: 0,
  },
  {
    id: 5,
    code: "AOC2CC-119",
    name: "Millenium",
    subCode: "1102-PSK",
    description:
      "Two Light Vanity by Capital Lighting from the Arthur collection in Burnished Bronze finish",
    dimensions: '4.00"W x 8.00"H',
    finish: "Silver",
    location: "Front Door",
    price: 85.0,
    subPrice: 22.5,
    qty: 0,
  },
];

export default function NewSalesOrder() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(1);
  const [budgetLimit, setBudgetLimit] = useState(0);
  const [productItems, setProductItems] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [percentValue, setPercentValue] = useState(0);
  const [clients, setClients] = useState([]);
  useEffect(() => {
    getClients();
  }, []);
  const onFinish = async (values) => {
    console.log(values, "values");
    let data = {
      entityData: values,
    };

    console.log(values, "vals", data);
    await add(appConfig["entityNames"]["clients"], data)
      .then((result) => {
        console.log(result, "ressss");
        if (result.success) {
          message.success("Client created successfully!");
          document.getElementById("myForm").reset();
        } else {
          message.error("Something went wrong.!");
          console.log("Error : ", result.error);
        }
      })
      .catch((err) => {
        console.log("Error : ", err);

        message.error("Something went wrong.!");
      });
  };
  const getClients = () => {
    try {
       list(appConfig["entityNames"]["clients"]).then((result) => {
        if (result.success) {
          console.log(result.data);
          setClients(result.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let items = itemsList;
    if (itemsList && itemsList !== undefined) {
      setProductItems(items);
    }
  }, []);

  useEffect(() => {
    let amount = 0;
    cartItems.map((item) => {
      amount = amount + item.price * item.qty;
    });
    setTotalAmount(amount);
    if (amount > parseInt(budgetLimit)) {
      notification.warning({
        placement: "topRight",
        top: 50,
        duration: 5,
        rtl: true,
        message: "Budget limit exceeded.",
        description: "remove some item(s) to generate invoice",
      });
    }
  }, [cartItems]);

  const searchProduct = () => {
    console.log("search", searchItem);
  };

  const getPercentage = () => {
    let percentageValue = (totalAmount / budgetLimit) * 100;
    return percentageValue.toFixed(0);
  };

  const updateQuantity = (item, type, fromCart) => {
    let filteredItems = productItems;
    let index = productItems.findIndex((i) => i.id === item.id);
    let qty = 0;
    if (fromCart === true) {
      qty = type == "add" ? item["qty"] + 1 : item["qty"] - item["qty"];
    } else {
      qty = type == "add" ? item["qty"] + 1 : item["qty"] - 1;
    }
    item["qty"] = qty;
    filteredItems[index] = item;
    setProductItems([...filteredItems]);
    addToCart(item);
  };

  const addToCart = (item) => {
    let itemsInCart = cartItems;
    let index = itemsInCart.findIndex((i) => i.id === item.id);
    if (item.qty === 0) {
      itemsInCart.splice(index, 1);
      setCartItems([...itemsInCart]);
    } else {
      if (index > -1) {
        itemsInCart[index] = item;
        setCartItems([...itemsInCart]);
      } else {
        setCartItems([...cartItems, item]);
      }
    }
  };
  const handleCancel = () => {
    open(false);
  };
  const removeItem = (product) => {
    let filterItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(filterItems);
    updateQuantity(product, "sub", true);
  };

  const findClient = () => {
    return (
      <Col>
        <Card>
          <Col>
            {" "}
            <h1 style={{ fontSize: "20px" }}>
              <b>Find a client</b>
            </h1>
          </Col>
          <Col span={24}>
            <Row>
              <Col span={20}>
                <Input
                  className="input-box"
                  placeholder="Search by name, phone or email… "
                  prefix={<SearchOutlined className="SearchOutlined" />}
                />
              </Col>
              <Col span={4}>
                <>
                  <Button
                    className="newClint"
                    type="primary"
                    onClick={() => setOpen(true)}
                  >
                    + New Client
                  </Button>
                  <Modal
                    title="Add new client"
                    centered
                    visible={open}
                    // onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                    width={1000}
                    footer={
                      <div>
                        <Button
                          onClick={handleCancel}
                          style={{
                            height: "35px",
                            width: "100px",
                            borderRadius: "5px",
                            marginRight: "25px",
                          }}
                          htmlType="reset"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="primary"
                          htmlType="submit"
                          style={{
                            height: "35px",
                            width: "100px",
                            borderRadius: "5px",
                          }}
                          columns
                          // loading={this.state.loading}
                          form={"myForm"}
                        >
                          Save
                        </Button>
                      </div>
                    }
                  >
                    <Form onFinish={onFinish} id="myForm">
                      <Col span={24}>
                        <Row justify="space-between">
                          <Col span={10}>
                            <label>
                              <b>First Name</b>
                            </label>
                            <Form.Item
                              name="firstName"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your contact Name!",
                                },
                              ]}
                            >
                              <Input
                                placeholder="Input Contact Name"
                                className="form-input"
                              />
                            </Form.Item>
                            <label>
                              {" "}
                              <b>Email</b>
                            </label>
                            <Form.Item
                              name="email"
                              rules={[
                                {
                                  required: true,

                                  message: "Please Enter Your Email!",
                                },
                                {
                                  type: "email",
                                  message: "The Input Is Not Valid Email",
                                },
                              ]}
                            >
                              <Input
                                className="form-input"
                                placeholder="Please Enter Your Email"
                              />
                            </Form.Item>
                            <label>
                              <b>Type</b>
                            </label>
                            <Form.Item
                              name="type"
                              // rules={[
                              //   {
                              //     required: true,
                              //     message: "Please Enter Your Phone!",
                              //   },
                              // ]}
                              initialValue={"Builder Referred"}
                            >
                              <Select
                                showSearch
                                allowClear
                                className="select_Height"
                                style={{ height: "40px" }}
                                placeholder="Select a contact"
                              >
                                <Option value="Builder Referred">
                                  Builder Referred
                                </Option>
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col span={10}>
                            <label>
                              {" "}
                              <b>Last Name</b>
                            </label>
                            <Form.Item
                              name="lastName"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your contact Name!",
                                },
                              ]}
                            >
                              <Input
                                placeholder="Input Contact Name"
                                className="form-input"
                              />
                            </Form.Item>
                            <label>
                              <b>Phone</b>
                            </label>
                            <Form.Item
                              name="phone"
                              rules={[
                                {
                                  required: true,

                                  message: "Please Enter Your Phone!",
                                },
                              ]}
                            >
                              <ReactPhoneInput
                                inputExtraProps={{
                                  name: "contactMainPhone",
                                  required: true,

                                  autoFocus: true,
                                }}
                                placeholder=""
                                country="us"
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>
                    </Form>
                  </Modal>
                </>
              </Col>
            </Row>
          </Col>
        </Card>
        <Card>
          <Col>
            <Table
              pagination={data.length > pageSize && { pageSize }}
              onRow={(record, rowIndex) => {
                return {
                  onClick: (event) => {
                    setStepIndex(stepIndex + 1);
                  },
                  onDoubleClick: (event) => {
                    setStepIndex(stepIndex + 1);
                  },
                };
              }}
              columns={columns}
              dataSource={clients}
              size="middle"
            />
          </Col>
        </Card>
      </Col>
    );
  };

  const setupBudget = () => {
    return (
      <div>
        <Card>
          <Row gutter={[16, 16]}>
            <Col>
              <h1 style={{ fontSize: "20px" }}>
                <b>Set up a budet</b>
              </h1>
              <Input
                className="setup-input"
                placeholder="Enter your budget limit"
                onChange={(e) => setBudgetLimit(e.target.value)}
                value={budgetLimit}
                type="number"
              />
            </Col>
          </Row>
        </Card>
        {budgetLimit > 0 && (
          <div style={{ float: "right" }}>
            <Button
              className="button-nex"
              onClick={() => setStepIndex(stepIndex + 1)}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    );
  };

  const viewItem = (item) => {
    return (
      <Col span={24} style={{ marginBottom: "5px" }}>
        <Row>
          <Col span={6}>
            {" "}
            <img src={CheckMark} width="70px" height="70px" />
          </Col>
          <Col span={18}>
            <Row justify="space-between">
              <Col>
                <h1 style={{ fontSize: "16px" }}>
                  <b>{item.code}</b>
                </h1>
              </Col>
              <Col>
                <div onClick={() => removeItem(item)}>
                  <CloseOutlined style={{ color: "#94A3B8" }} />
                </div>
              </Col>
            </Row>
            <Col>
              <Row justify="space-between">
                <Col>
                  <h1 className="item-qty">
                    {item.price} x {item.qty}
                  </h1>
                </Col>
                <Col>
                  <h1 style={{ fontSize: "16px" }}>
                    <b>${(item.price * item.qty).toFixed(2)}</b>
                  </h1>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
        <Divider style={{ color: "#747E8D" }} />
      </Col>
    );
  };

  const AddItems = () => {
    return (
      <Col span={24}>
        <Row gutter={[16, 16]}>
          <Col span={18}>
            <Card>
              <Row>
                <h1 style={{ fontSize: "20px" }}>
                  <b>Add Items</b>
                </h1>
              </Row>
              <Row gutter={[16, 16]}>
                {itemsList.map((item, index) => (
                  <Col span={24} key={index}>
                    <Card hoverable bodyStyle={{ padding: "15px 10px 10px" }}>
                      <Col span={24}>
                        <Row gutter={[8, 8]}>
                          <Col>
                            <img src={CheckMark} width="70px" height="70px" />
                          </Col>

                          <Col span={20}>
                            <Col span={24}>
                              <Row gutter={[8, 8]}>
                                <Col>
                                  <h1 className="itemcode">{item.code}</h1>
                                </Col>
                                <Col>
                                  <h1 className="itemname">{item.name}</h1>
                                </Col>
                                <Col>
                                  <h1 className="itemsubCode">
                                    {item.subCode}
                                  </h1>
                                </Col>
                              </Row>
                            </Col>
                            <Col span={24}>
                              <Row>
                                <Col span={20}>
                                  {" "}
                                  <h1 className="itemdescription">
                                    {item.description}
                                  </h1>
                                </Col>
                                <Col span={4}>
                                  <div style={{ float: "right" }}>
                                    <h6 className="itemprice">
                                      <b>${item.price}</b>
                                    </h6>
                                    <h6 className="itemsubPrice">
                                      Price: ${item.subPrice}
                                    </h6>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                          </Col>
                        </Row>

                        <Row gutter={[8, 8]} style={{ marginTop: "10px" }}>
                          <Col span={16}>
                            <Row gutter={[8, 8]}>
                              <Col span={8}>
                                <h1>DIMENSIONS</h1>
                                <h1 className="item-dimensions">
                                  {item.dimensions}
                                </h1>
                              </Col>
                              <Col span={8}>
                                <h1>FINISH</h1>
                                <h1 className="item-finish">{item.finish}</h1>
                              </Col>
                              <Col span={8}>
                                <h1>LOCATION</h1>
                                <h1 className="item-location">
                                  {item.location}
                                </h1>
                              </Col>
                            </Row>
                          </Col>
                          <Col span={8}>
                            <Col span={24}>
                              <div
                                style={{
                                  marginLeft: "150px",
                                }}
                              >
                                {item.qty > 0 ? (
                                  <div className="increment-btns">
                                    <Button
                                      className="inc-btn"
                                      onClick={() => {
                                        item.qty == 0
                                          ? addToCart(item)
                                          : updateQuantity(item, "sub");
                                      }}
                                    >
                                      <MinusOutlined color="black" size={20} />
                                    </Button>
                                    <div>
                                      <p className="item-qtyyy">{item.qty}</p>
                                    </div>
                                    <Button
                                      className="dec-bt"
                                      onClick={() => {
                                        updateQuantity(item, "add");
                                      }}
                                    >
                                      <PlusOutlined color="black" size={20} />
                                    </Button>
                                  </div>
                                ) : (
                                  <div>
                                    <Button
                                      className="AddtoCart-btn"
                                      onClick={() => {
                                        updateQuantity(item, "add");
                                      }}
                                    >
                                      Add to Cart
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </Col>
                          </Col>
                        </Row>
                      </Col>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Card>
                <Col>
                  <Row justify="space-between">
                    <h1
                      style={{
                        fontSize: "18px",
                        color:
                          getPercentage() > 100
                            ? "#E54B4B"
                            : getPercentage() === 100
                            ? "#00CAA6"
                            : getPercentage() > 75
                            ? "#E5A20D"
                            : "#00CAA6",
                      }}
                    >
                      <b>${(budgetLimit - totalAmount).toFixed(2)}</b>
                    </h1>
                    <Col>
                      <b>
                        {" "}
                        {getPercentage() > 100
                          ? "Spent over "
                          : "Left out of "}{" "}
                        ${budgetLimit}
                      </b>
                    </Col>
                  </Row>
                </Col>
                <Progress
                  showInfo={false}
                  percent={getPercentage()}
                  size="small"
                  strokeColor={
                    getPercentage() > 100
                      ? "#E54B4B"
                      : getPercentage() === 100
                      ? "#00CAA6"
                      : getPercentage() > 75
                      ? "#E5A20D"
                      : "#00CAA6"
                  }
                />
              </Card>
              <br />
              {getPercentage() > 0 && (
                <h1 style={{ fontSize: "14px", color: "#94A3B8" }}>SUMMARY</h1>
              )}
              {cartItems.map((item) => viewItem(item))}

              <Col>
                <Row justify="space-between">
                  <Col>
                    <h1 style={{ fontSize: "18px" }}>
                      <b>TOTAL</b>
                    </h1>
                  </Col>
                  <Col>
                    <h1 style={{ fontSize: "18px" }}>
                      <b>${totalAmount.toFixed(2)}</b>
                    </h1>
                  </Col>
                </Row>
              </Col>
              {getPercentage() > 0 && getPercentage() < 100 && (
                <Col>
                  <Button className="GenerateInvoice-btn"
                    type="Generate Invoice"
                    block
                   
                  >
                    Generate Invoice
                  </Button>
                </Col>
              )}
            </Card>
          </Col>
        </Row>
      </Col>
    );
  };

  return (
    <Col>
      <Row justify="space-between">
        <h1
          style={{ fontSize: "28px" }}
          onClick={() => {
            if (stepIndex !== 1) {
              setStepIndex(stepIndex - 1);
            }
          }}
        >
          <ArrowLeftOutlined /> <b>New Sales Order</b>
        </h1>

        <h1>
          <b>Step {stepIndex} of 3 </b>
        </h1>
      </Row>
      {stepIndex === 1
        ? findClient()
        : stepIndex === 2
        ? setupBudget()
        : AddItems()}
    </Col>
  );
}
