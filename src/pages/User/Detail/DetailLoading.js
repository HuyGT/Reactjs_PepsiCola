import Skeleton from "../../../components/Skeleton";
import React from "react";

export default function DetailLoading() {
  return (
    <>
      <div className="col-lg-6 detail-image">
        <Skeleton height={"480px"} width="250px" />
      </div>
      <div className="col-lg-6">
        <Skeleton height={"60px"} width="500px" mb="10px"/>
        <Skeleton height={"40px"} width="500px" mb="10px"/>
        <Skeleton height={"40px"} width="500px" mb="10px"/>
        <Skeleton height={"40px"} width="500px" mb="10px"/>
        <Skeleton height={"40px"} width="500px" mb="10px"/>
        <Skeleton height={"40px"} width="500px" mb="10px"/>
        <Skeleton height={"40px"} width="500px" mb="10px"/>
        <Skeleton height={"40px"} width="500px" mb="10px"/>
        <Skeleton height={"40px"} width="500px" mb="10px"/>


      </div>
    </>
  );
}
