import { Form, Input, Radio, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { columnsAll } from "../../../common/table";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaTrash, FaCcVisa } from "react-icons/fa";
import { BsPaypal, BsCashCoin } from "react-icons/bs";
import { addOrder } from "../../../apis/orderApi";
import { editProduct } from "../../../apis/productApi";
import { rules } from "../../../common/form";
import Confetti from "react-confetti";
import "./style.scss";
import {
  actAddToCart,
  actClearCart,
  actRemoveCart,
} from "../../../redux/actions/cartAction";
import { toast } from "react-toastify";
import { ROUTER_PATH } from "../../../common/routerLink";
import { useHistory } from "react-router-dom";
import { Status } from "../../../common/types";
export default function Cart() {
  const { cart } = useSelector((state) => state?.cartReducer);
  const email = JSON.parse(localStorage.getItem("Account"))?.email;
  const [run, setRun] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  let totalCart = 0;
  cart.forEach((c) => {
    totalCart += c.price * c.cartQuantity;
  });
  const handleRemoveCart = (product) => {
    dispatch(actRemoveCart(product));
  };
  const handleMinus = (product) => {
    dispatch(actAddToCart({ ...product, cartQuantity: -1 }));
  };
  const handlePlus = (product) => {
    dispatch(actAddToCart({ ...product, cartQuantity: 1 }));
  };
  const handleCheckout = async (value) => {
    await addOrder({
      ...value,
      email: email,
      total: totalCart,
      status: Status.PROCESSING,
      cart: cart,
    });
    cart.forEach((c) => {
      editProduct(
        {
          ...c,
          quantity: c.quantity - c.cartQuantity,
          sold: c.sold + c.cartQuantity,
        },
        c.id
      );
    });
    dispatch(actClearCart());
    toast.success("Checkout success", { autoClose: 1000 });
    setRun(true);
    setTimeout(() => {
      history.push(ROUTER_PATH.ORDER.path);
    }, 3000);
  };
  const columns = [
    ...columnsAll.columnCart,
    {
      title: "Choose",
      render: (record) => (
        <div className="change-quantity">
          <div className="icon icon-minus" onClick={() => handleMinus(record)}>
            <AiOutlineMinus />
          </div>
          <Input value={record.cartQuantity}></Input>
          <div className="icon icon-plus" onClick={() => handlePlus(record)}>
            <AiOutlinePlus />
          </div>
        </div>
      ),
    },
    {
      title: "Amount",
      render: (record) => (
        <div>${(record.price * record.cartQuantity).toFixed(2)}</div>
      ),
    },
    {
      title: "Action",
      render: (record) => (
        <button
          className="btn btn-danger"
          onClick={() => {
            handleRemoveCart(record);
          }}
        >
          <FaTrash />
        </button>
      ),
    },
  ];
  return (
    <>
      {run && <Confetti run={run} />}

      <div className="container container-cart">
        <div className="row">
          <div className="col-lg-8">
            <h1>Shopping Cart</h1>
            <Table
              columns={columns}
              dataSource={cart}
              rowKey="id"
              pagination={false}
            />
            <div className="total">Total: ${totalCart.toFixed(2)}</div>
          </div>
          <div className="col-lg-4">
            <div className="checkout">
              <h1>Payment Info</h1>
              <Form layout="vertical" onFinish={handleCheckout}>
                <Form.Item
                  label="Address"
                  name={["address"]}
                  rules={[...rules.ruleAddress]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Phone"
                  name={["phone"]}
                  rules={[...rules.rulePhone]}
                >
                  <Input
                    style={{
                      width: "100%",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  rules={[...rules.rulePayment]}
                  name="payment"
                  label="Payment Method"
                >
                  <Radio.Group>
                    <Radio value="paypal">
                      <div className="d-flex align-items-center gap-2">
                        <BsPaypal />
                        Paypal
                      </div>
                    </Radio>
                    <Radio value="visa">
                      <div className="d-flex align-items-center gap-2">
                        <FaCcVisa />
                        Visa
                      </div>
                    </Radio>
                    <Radio value="cash">
                      <div className="d-flex align-items-center gap-2">
                        <BsCashCoin />
                        Cash
                      </div>
                    </Radio>
                  </Radio.Group>
                </Form.Item>
                <div className="text-center">
                  <button className="btn-place">Checkout</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
