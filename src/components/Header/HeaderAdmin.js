import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoMailRead } from "react-icons/go";

import ProfileDropdown from "../Dropdown/ProfileDropdown";

export default function HeaderAdmin() {
  const [show,setShow] = useState(true)
  const handleToggleSB = () => {
    setShow(!show)
    if(show){
      document.getElementById("sb-admin").style = "margin-left: -200px"
    }else{
      document.getElementById("sb-admin").style = "margin-left: 0px"
    }
  }
  return (
    <div className="header-admin">
      <button onClick={() => {handleToggleSB()}}>
        <FaList />
      </button>
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
