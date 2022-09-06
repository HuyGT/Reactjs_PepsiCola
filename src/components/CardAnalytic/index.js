import React from "react";
import "./style.scss";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

export default function CardAnalytic({ user, order, product, income }) {
  return (
    <div className="col-sm-6 col-lg-3">
      <div className="card-style">
        <div className="card-body">
          <div
            className={
              user
                ? "bg-primary-gradient"
                : order
                ? "bg-warning-gradient"
                : product
                ? "bg-info-gradient"
                : income && "bg-danger-gradient "
            }
          >
            <div className="card-title">
              <div className="parameter">26k</div>
              <div className="percent">
                12.7%
                <BsArrowDown />
                <BsArrowUp />
              </div>
            </div>
            <div className="p-3">Users</div>
          </div>
        </div>
      </div>
    </div>
  );
}
