import React from "react";
import "./style.scss";
import Footer from "../../components/Footer";
import HeaderUser from "../../components/Header/HeaderUser";
export default function UserLayout({ children }) {
  return (
    <div>
      <main>
        <HeaderUser />
        <div className="main-content">{children}</div>
        <Footer />
      </main>
    </div>
  );
}
