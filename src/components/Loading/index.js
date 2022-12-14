import React from "react";
import "./style.scss"
export default function Loading() {
  return (
    <div className="loading-display">
      <div className="loading">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}
