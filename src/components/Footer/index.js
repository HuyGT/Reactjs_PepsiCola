import React from "react";
import "./style.scss";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer>
      <div className="container-xl">
        <div className="row">
          <div className="col-sm-4 col-lg-2">
            <ul>
              <li>CONTACT US</li>
              <li>TERMS </li>
              <li>PRIVACY POLICY</li>
            </ul>
          </div>
          <div className="col-sm-4 col-lg-2">
            <ul>
              <li>COPYRIGHT</li>
              <li>PRODUCT FACTS</li>
              <li>STORE LOCATOR</li>
            </ul>
          </div>
          <div className="col-sm-4 col-lg-2">
            <ul>
              <li>SERVE PEPSI</li>
              <li>ABOUT OUR ADS</li>
              <li>CAREERS</li>
            </ul>
          </div>
          <div className="col-xxl-6">
            <ul className="social">
              <li className="icon facebook">
                <span>
                  <FaFacebookF />
                </span>
              </li>
              <li className="icon twitter">
                <span>
                  <FaTwitter />
                </span>
              </li>
              <li className="icon linkedin">
                <span>
                  <FaLinkedinIn />
                </span>
              </li>
              <li className="icon github">
                <span>
                  <FaGithub />
                </span>
              </li>
              <li className="icon gmail">
                <span>
                  <SiGmail />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
