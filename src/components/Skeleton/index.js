import React from "react";

export default function Skeleton({ width, height, mb, children }) {
  return (
    <div
      className="skeleton"
      style={{ width: width || "100%", height: height, marginBottom: mb }}
    >
      {children}
    </div>
  );
}
