/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { ROUTER_PATH } from "../../common/routerLink";
import ProfileDropdown from "../Dropdown/ProfileDropdown";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { actGetCart } from "../../redux/actions/cartAction";
import { Dropdown, Menu } from "antd";
export default function HeaderUser() {
  const userLocal = localStorage.getItem("Account") || null;
  const role = JSON.parse(localStorage.getItem("Account"))?.role;

  const { cart, cartLength } = useSelector((state) => state?.cartReducer);
  const dispatch = useDispatch();

  const itemCart = cart?.map((c) => {
    return {
      label: (
        <div className="d-flex align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-3">
            <img src={c.image} style={{ height: "30px", width: "20px" }}></img>
            {c.productName}
          </div>
          <div className="">${(c.price * c.cartQuantity).toFixed(2)}</div>
        </div>
      ),
      key: c.id,
    };
  });

  const menuCart = <Menu items={itemCart} />;

  useEffect(() => {
    dispatch(actGetCart());
  }, []);
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
      <div className="header-end">
        <div className="shopping-cart">
          <Dropdown overlay={menuCart}>
            <Link to={ROUTER_PATH.CART.path}>
              <div>
                <AiOutlineShoppingCart />
                {cartLength !== 0 && (
                  <span className="badge-cart">{cartLength}</span>
                )}
              </div>
            </Link>
          </Dropdown>
        </div>
        {userLocal === null ? (
          <Link to={ROUTER_PATH.LOGIN.path}>
            <button>Login </button>
          </Link>
        ) : (
          <ProfileDropdown />
        )}
      </div>
    </header>
  );
}
