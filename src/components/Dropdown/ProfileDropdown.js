/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import "./style.scss";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { actLogout } from "../../redux/actions/userAction";
import { useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";

export default function ProfileDropdown() {
  const profile = useRef();
  const history = useHistory();
  const [active, setActive] = useState(false);
  const dispatch = useDispatch()
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
    dispatch(actLogout())
    history.push(ROUTER_PATH.LOGIN.path);
  }
  return (
    <div className="dropdown">
      <div className="profile" onClick={() => handleDropdown(active)}>
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"></img>
      </div>
      <div className="option" ref={profile}>
        <div>
          <CgProfile />
          Profile
        </div>
        <div onClick={() => handleLogout()}>
          <FiLogOut />
          Log out
        </div>
      </div>
    </div>
  );
}
