/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import "./style.scss";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { actLogout } from "../../redux/actions/userAction";
import { Link, useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";

export default function ProfileDropdown() {
  const profile = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const avatar = JSON.parse(localStorage.getItem("Account"))?.avatar;

  const handleDropdown = (value) => {
    if (!value) {
      setActive(!active);
      profile.current.style = "display: block !important";
    } else {
      setActive(!active);
      profile.current.style = " display: none !important";
    }
  };
  const handleLogout = () => {
    dispatch(actLogout());
    history.push(ROUTER_PATH.LOGIN.path);
  };
  return (
    <div className="dropdown">
      <div className="profile" onClick={() => handleDropdown(active)}>
        <img
          src={
            avatar
              ? avatar
              : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          }
        ></img>
      </div>
      <div className="option" ref={profile}>
        <Link to={ROUTER_PATH.PROFILE.path}>
          <div>
            <CgProfile />
            Profile
          </div>
        </Link>
        <div onClick={() => handleLogout()}>
          <FiLogOut />
          Log out
        </div>
      </div>
    </div>
  );
}
