/* eslint-disable jsx-a11y/alt-text */
import { Form, InputNumber, Rate } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { actAddToCart } from "../../../redux/actions/cartAction";

export default function DetailContent({ product }) {
  const { listBrand } = useSelector((state) => state?.brandReducer);
  const dispatch = useDispatch();

  const handleAddCart = (value) => {
    dispatch(actAddToCart({ ...product, ...value }));
    toast.success("Add to cart success", { autoClose: 1000 });
  };
  return (
    <>
      <div className="p-title p-border">{product.productName}</div>
      <div className="p-rate p-border">
        <div className="rate-number">5.5</div>
        <Rate disabled defaultValue={5} className="mb-1" />
        <div>| 5 ratings</div>
        <div>| {product.sold} sold</div>
      </div>
      <div className="p-price p-border">${product.price}</div>
      <div className="p-border">{product.description}</div>
      <div className="p-brand p-border">
        BRAND
        <img src={listBrand[product.brandId - 1]?.image}></img>
      </div>
      <div className="p-border">Quantity: {product.quantity}</div>
      <div className="p-border text-end">% Daily Value *</div>
      <div className="p-border d-flex justify-content-between">
        Total Fat 0g <div>0%</div>
      </div>
      <div className="p-border d-flex justify-content-between">
        Sodium 30mg <div>1%</div>
      </div>
      <div className="p-border d-flex justify-content-between">
        Total Carbohydrate 41g <div>41%</div>
      </div>
      <Form
        onFinish={handleAddCart}
        initialValues={{ cartQuantity: 1 }}
        className="mt-3 "
      >
        <Form.Item name="cartQuantity" className="m-0">
          <InputNumber min={1} max={product.quantity} style={{}} />
        </Form.Item>
        <Form.Item>
          <button className="btn-add">Add to Cart</button>
        </Form.Item>
      </Form>
    </>
  );
}
