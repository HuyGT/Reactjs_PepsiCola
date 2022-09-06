/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.scss";
import { FaSearch, FaRegHeart, FaOpencart } from "react-icons/fa";
import { useHistory, generatePath } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";

export default function Product({ product }) {
  const history = useHistory();

  const handleClickDetail = (id) => {
    history.push(
      generatePath(ROUTER_PATH.DETAIL.path, {
        id: id,
      })
    );
  };
  return (
    <div className="card">
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
          <li>
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
