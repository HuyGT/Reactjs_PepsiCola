/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.scss";
import { FaSearch, FaRegHeart, FaOpencart } from "react-icons/fa";
import { useHistory, generatePath } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
import { useDispatch } from "react-redux";
import { actAddToCart } from "../../redux/actions/cartAction";
import { toast } from "react-toastify";
export default function Product({ product }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickDetail = (id) => {
    history.push(
      generatePath(ROUTER_PATH.DETAIL.path, {
        id: id,
      })
    );
  };
  const handleAddCart = (product) => {
    dispatch(actAddToCart({ ...product, cartQuantity: 1 }));
    toast.success("Add to cart success", {
      position: "top-center",
      autoClose: 1000,
    });
  };
  return (
    <div className="card card-product">
      <p>{product?.productName}</p>
      <div className="bg-hover"></div>
      <div className="imgBx">
        <img src={product?.image}></img>
        <p>${product?.price}</p>
        <ul className="action">
          <li
            onClick={() => {
              handleClickDetail(product?.id);
            }}
          >
            <FaSearch />
          </li>
          <li
            onClick={() => {
              handleAddCart(product);
            }}
          >
            <FaOpencart />
          </li>
          <li>
            <FaRegHeart />
          </li>
        </ul>
      </div>
    </div>
  );
}
