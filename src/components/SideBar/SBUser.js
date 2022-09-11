/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { RiFileList3Line } from "react-icons/ri";
import { AiOutlineUnlock } from "react-icons/ai";
import { useSelector } from "react-redux";
import { ROUTER_PATH } from "../../common/routerLink";
import { Link } from "react-router-dom";

export default function SBUser() {
  const { detailUser } = useSelector((state) => state?.userReducer);

  return (
    <div className="sb-user">
      <div className="sb-user-head">
        <img
          src={
            detailUser?.avatar
              ? detailUser?.avatar
              : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          }
        ></img>
        <div className="head-content">
          <h1>{detailUser?.fullName ? detailUser?.fullName : "Anonymous"}</h1>
          <h3 className="text-uppercase">{detailUser?.role}</h3>
        </div>
      </div>
      <div className="sb-user-body">
        <div className="body-content">
          <ul>
            <Link to={ROUTER_PATH.PROFILE.path}>
              <li>
                <CgProfile />
                Profile
              </li>
            </Link>
            <Link to={ROUTER_PATH.CHANGE_PASSWORD.path}>
              <li>
                <AiOutlineUnlock />
                Change Password
              </li>
            </Link>
            <Link to={ROUTER_PATH.CART.path}>
              <li>
                <FiShoppingCart />
                Cart
              </li>
            </Link>
            <Link to={ROUTER_PATH.ORDER_USER.path}>
              <li>
                <RiFileList3Line />
                Order
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
