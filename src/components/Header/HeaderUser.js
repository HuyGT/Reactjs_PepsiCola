/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { ROUTER_PATH } from "../../common/routerLink";
import ProfileDropdown from "../Dropdown/ProfileDropdown";

export default function HeaderUser() {
  const userLocal = localStorage.getItem("Account") || null;
  const role = JSON.parse(localStorage.getItem("Account"))?.role
  return (
    <header>
      <img
        src="https://www.pepsi.com/en-us/assets/images/logo.44fea4ca40e8a8843bb0fdf07d618439.png"
        className="logo"
      ></img>
      <ul>
        <Link to={ROUTER_PATH.HOME.path}>
          <li>HOME</li>
        </Link>
        <Link to={ROUTER_PATH.SHOP.path}>
          <li>SHOP</li>
        </Link>
        <li>CONTACT</li>
        {role === "admin" && (
          <Link to={ROUTER_PATH.ADMIN.path}>
            <li>ADMIN</li>
          </Link>
        )}
      </ul>
      {userLocal === null ? (
        <Link to={ROUTER_PATH.LOGIN.path}>
          <button>Login </button>
        </Link>
      ) : (
        <ProfileDropdown />
      )}
    </header>
  );
}
