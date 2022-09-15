import React from "react";
import { FaList } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoMailRead } from "react-icons/go";

import ProfileDropdown from "../Dropdown/ProfileDropdown";

export default function HeaderAdmin() {
  const handleToggleSB = () => {
    document.getElementById("sb-admin").classList.toggle("active");
    document.querySelector(".btn-toggle").classList.toggle("active");
  };
  return (
    <div className="header-admin">
      <button
      className="btn-toggle"
        onClick={() => {
          handleToggleSB();
        }}
      >
        <FaList />
      </button>
      <div></div>
      <div className="profile">
        <div className="icon">
          <IoMdNotificationsOutline />
          <span className="badge">5</span>
        </div>
        <div className="icon">
          <GoMailRead />
          <span className="badge bg-primary">6</span>
        </div>
        <ProfileDropdown />
      </div>
    </div>
  );
}
