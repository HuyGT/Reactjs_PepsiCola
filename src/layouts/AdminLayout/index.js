import React from "react";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import SideBar from "../../components/SideBar";
import "./style.scss";
export default function AdminLayout({ children }) {
  
  return (
    <div className="wrapper">
      <SideBar />
      <div className="main-layout">
        <HeaderAdmin />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
