import React from "react";
import "./style.scss";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer>
      <div className="container-xl">
        <div className="row">
          <div className="col-sm-2">
            <ul>
              <li>asdasds</li>
              <li>asdasds</li>
              <li>asdasds</li>
            </ul>
          </div>
          <div className="col-sm-2">
            <ul>
              <li>asdasds</li>
              <li>asdasds</li>
              <li>asdasds</li>
            </ul>
          </div>
          <div className="col-sm-2">
            <ul>
              <li>asdasds</li>
              <li>asdasds</li>
              <li>asdasds</li>
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
