import React from "react";
import HeaderUser from "./HeaderUser";

export default function Header({ admin, user }) {
  return <>{user && <HeaderUser />}</>;
}
