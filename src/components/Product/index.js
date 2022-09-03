/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.scss";
import { FaSearch, FaRegHeart, FaOpencart } from "react-icons/fa";
export default function Product() {
  return (
    <div className="card">
      <p>Pepsi zero sugar</p>
      <div className="bg-hover"></div>
      <div className="imgBx">
        <img src="https://www.pepsi.com/en-us/uploads/images/can-pepsi.png?mtime=20180110134757"></img>
        <p>$0.99</p>
        <ul className="action">
          <li>
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
