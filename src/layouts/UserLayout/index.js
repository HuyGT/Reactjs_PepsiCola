import React from "react";
import "./style.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
export default function UserLayout({ children }) {
  return (
    <div>
      <main>
        <Header user />
        {children}
        <Footer />
      </main>
    </div>
  );
}
