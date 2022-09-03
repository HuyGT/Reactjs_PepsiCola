/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { ROUTER_PATH } from "../../common/routerLink";

export default function HeaderUser() {
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
        <li>WHAT'S NEW</li>
        <li>CONTACT</li>
      </ul>
      <button>Login</button>
    </header>
  );
}
