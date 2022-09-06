import { Skeleton } from "antd";
import React from "react";

export default function DetailLoading() {
  return (
    <>
      <div className="col-lg-6 detail-image">
        <Skeleton.Image active/>
      </div>
      <div className="col-lg-6 detail-content">
        <div className="p-name">
          <Skeleton.Button active/>
        </div>
        <div>
          <Skeleton.Button active/>
        </div>
        <div>
          <Skeleton.Button active/>
        </div>
        <div>
          <Skeleton.Button active/>
        </div>
        <div className="btn btn-success">
          <Skeleton.Button active/>
        </div>
      </div>
    </>
  );
}
