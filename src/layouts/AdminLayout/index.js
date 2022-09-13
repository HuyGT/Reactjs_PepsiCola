import React from "react";
import { Redirect } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import SideBar from "../../components/SideBar";
import "./style.scss";
export default function AdminLayout({ children }) {
  const role = JSON.parse(localStorage.getItem("Account"))?.role;
  return (
    <>
      {role === "admin" ? (
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
      ) : (
        <Redirect to={ROUTER_PATH.LOGIN.path} />
      )}
    </>
  );
}
