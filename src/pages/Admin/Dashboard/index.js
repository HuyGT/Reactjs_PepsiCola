import React from "react";
import CardAnalytic from "../../../components/CardAnalytic";
import { VectorMap } from "@south-paw/react-vector-maps";
import worldLowRes from "./world.json";
import "./style.scss";
import "../style.scss";
import Calendar from "../../../components/Calendar";
export default function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <CardAnalytic user />
        <CardAnalytic order />
        <CardAnalytic product />
        <CardAnalytic income />
      </div>
      <div className="row d-flex">
        <div className="col-lg-8">
          <div className="card world-map">
            <VectorMap
              className="map"
              {...worldLowRes}
              checkedLayers={["us", "jp", "vn", "cn", "gb", "gl", "au"]}
            />
          </div>
        </div>
        <div className="col-lg-4 ">
          <div className="card">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}
