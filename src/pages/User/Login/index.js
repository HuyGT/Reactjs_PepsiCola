/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";

export default function Login() {
  const [active, setActive] = useState(false);
  const bg = useRef(null);
  const handleRedirectForm = (value) => {
    if (!value) {
      setActive(!active);
      bg.current.style = "transform: translateX(0%);";
    } else {
      setActive(!active);
      bg.current.style = "transform: translateX(100%);";
    }
  };

  return (
    <div>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="bg-form" ref={bg}>
              <img src="https://www.pepsi.com/en-us/uploads/images/twil-can.png"></img>
            </div>
            <div className="col-xl-6 container-form">
              <FormLogin />
              <h2>
                Don't have account?
                <p onClick={() => handleRedirectForm(active)}>Sign up now!</p>
              </h2>
            </div>
            <div className="col-xl-6 container-form">
              <FormRegister/>
              <h2>
                Already have an account?
                <p onClick={() => handleRedirectForm(active)}>Sign in now!</p>
              </h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
