import React from "react";
import Product from "../../../components/Product";
import "./style.scss";
export default function Shop() {
  return (
    <>
      <nav>asdasdasdasds</nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <Product />
          </div>
          <div className="col-lg-3">
            <Product />
          </div>
          <div className="col-lg-3">
            <Product />
          </div>
          <div className="col-lg-3">
            <Product />
          </div>
          <div className="col-lg-3">
            <Product />
          </div>
        </div>
      </div>
    </>
  );
}
