/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";

export default function Login() {
  const handleRedirectForm = () => {
    const bg = document.getElementById("bg-form");
    bg.classList.toggle("active");
  };

  return (
    <div>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="bg-form" id="bg-form">
              <img src="https://www.pepsi.com/en-us/uploads/images/twil-can.png"></img>
            </div>
            <div className="col-xl-6 container-form">
              <FormLogin />
              <h2>
                Don't have account?
                <p onClick={() => handleRedirectForm()}>Sign up now!</p>
              </h2>
            </div>
            <div className="col-xl-6 container-form">
              <FormRegister />
              <h2>
                Already have an account?
                <p onClick={() => handleRedirectForm()}>Sign in now!</p>
              </h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
