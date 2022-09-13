import React from "react";
import { actClearCart } from "../../../redux/actions/cartAction";
import { toast } from "react-toastify";
import { ROUTER_PATH } from "../../../common/routerLink";
import { useHistory } from "react-router-dom";
import { Status } from "../../../common/types";
import { useDispatch } from "react-redux";
import { FaCcVisa } from "react-icons/fa";
import { BsPaypal, BsCashCoin } from "react-icons/bs";
import { addOrder } from "../../../apis/orderApi";
import { editProduct } from "../../../apis/productApi";
import { rules } from "../../../common/form";
import { Form, Input, Radio } from "antd";

export default function Checkout({ totalCart, cart, setRun }) {
  const email = JSON.parse(localStorage.getItem("Account"))?.email;
  const dispatch = useDispatch();
  const history = useHistory();
  const handleCheckout = async (value) => {
    await addOrder({
      ...value,
      email: email,
      total: totalCart,
      status: Status.PROCESSING,
      cart: cart,
      dateAdd: new Date().getTime(),
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
      history.push(ROUTER_PATH.ORDER_USER.path);
    }, 3000);
  };

  return (
    <>
      <Form layout="vertical" onFinish={handleCheckout}>
        <Form.Item
          label="Address"
          name={["address"]}
          rules={[...rules.ruleAddress]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Phone" name={["phone"]} rules={[...rules.rulePhone]}>
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
    </>
  );
}
