import React from "react";
import { Redirect } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
import SBUser from "../SideBar/SBUser";
import "./style.scss";
export default function LayoutProfile({ title, content }) {
  const account = JSON.parse(localStorage.getItem("Account"));
  
  return (
    <>
      {account ? (
        <div className="container container-profile">
          <div className="row">
            <div className="col-lg-4">
              <SBUser />
            </div>
            <div className="col-lg-8">
              <div className="card-profile">
                <h1>{title}</h1>
                {content}
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
