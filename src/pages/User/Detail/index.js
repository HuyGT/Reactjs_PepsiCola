/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  actGetAllProduct,
  actGetProductById,
} from "../../../redux/actions/productAction";

import "./style.scss";
import DetailImage from "./DetailImage";
export default function Detail() {
  const id = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state?.productReducer);

  useEffect(() => {
    dispatch(actGetProductById(id));
    dispatch(actGetAllProduct());
  }, []);

  useEffect(() => {
    dispatch(actGetProductById(id));
  }, [id]);
  return (
    <div className="container-lg pt-5 pb-5 detail">
      <div className="row ">
        <div className="col-lg-6 detail-image">
          <DetailImage id={id} image={product.image} />
        </div>
        <div className="col-lg-6 detail-content">
          <div className="p-name">{product.productName}</div>
          <div>Price: ${product.price}</div>
          <div>Quantity: {product.quantity}</div>
          <div>Sold: {product.sold}</div>
          <div className="btn btn-success">Add to Cart</div>
        </div>
      </div>
    </div>
  );
}
