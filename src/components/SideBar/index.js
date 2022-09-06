/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
import { AiOutlineHome } from "react-icons/ai";
import { GoDashboard } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import { SiPepsi, SiInstacart } from "react-icons/si";
import { RiLuggageCartLine } from "react-icons/ri";
import "./style.scss";
export default function SideBar() {
  return (
    <div className="sb-admin" id="sb-admin">
      <span className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEqQ0prbLYwFWZy74zposvhTqpYXJi-Z_ew&usqp=CAU"></img>
      </span>
      <ul>
        <Link to={ROUTER_PATH.HOME.path}>
          <li>
            <AiOutlineHome />
            <div>Home</div>
          </li>
        </Link>
        <Link to={ROUTER_PATH.ADMIN.path}>
          <li>
            <GoDashboard />
            <div>Dashboard</div>
          </li>
        </Link>
        <Link to={ROUTER_PATH.BRANDS.path}>
          <li>
            <SiPepsi />
            <div>Brands</div>
          </li>
        </Link>
        <Link to={ROUTER_PATH.PRODUCTS.path}>
          <li>
            <SiInstacart />
            <div>Products</div>
          </li>
        </Link>
        <Link to={ROUTER_PATH.USERS.path}>
          <li>
            <FiUsers />
            <div>Users</div>
          </li>
        </Link>
        <Link to={ROUTER_PATH.ORDERS.path}>
          <li>
            <RiLuggageCartLine />
            <div>Orders</div>
          </li>
        </Link>
      </ul>
    </div>
  );
}
