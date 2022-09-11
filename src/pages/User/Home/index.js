/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from "react";
import "./style.scss";
import pepsi1 from "../../../assets/pepsi001.png";
import pepsi2 from "../../../assets/pepsi002.png";
import pepsi3 from "../../../assets/pepsi003.png";
import Carousels from "./Carousel";

export default function Home() {
  const pepsi = useRef("");
  const bgSection2 = useRef("");
  const handleChangeImage = (value) => {
    if (value === pepsi1) {
      pepsi.current.src = pepsi1;
      bgSection2.current.style =
        "background-image: url(https://www.pepsi.com/en-us/uploads/images/nitro/Desktop_Background.png);";
    } else if (value === pepsi2) {
      pepsi.current.src = pepsi2;
      bgSection2.current.style = "background: #e74c3c";
    } else {
      pepsi.current.src = pepsi3;
      bgSection2.current.style =
        "background-image: url(https://www.pepsi.com/en-us/uploads/images/PZS-tile-background.png);";
    }
  };
  return (
    <>
      <section className="section_1">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 ">
              <img src="https://www.pepsi.com/en-us/uploads/images/nitro/Nitro_Pepsi_CAN_Glass@2x.png"></img>
            </div>
            <div className="col-xl-5 title">
              <img src="https://www.pepsi.com/en-us/uploads/images/nitro/Nitro_Logo@3x.png"></img>
            </div>
          </div>
        </div>
      </section>
      <section className="section_2" ref={bgSection2}>
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <img src="https://www.pepsi.com/en-us/uploads/images/PZS-headline.png"></img>
              <ul className="list-pepsi">
                <li onMouseEnter={() => handleChangeImage(pepsi1)}>
                  <img src={pepsi1}></img>
                </li>
                <li onMouseEnter={() => handleChangeImage(pepsi2)}>
                  <img src={pepsi2}></img>
                </li>
                <li onMouseEnter={() => handleChangeImage(pepsi3)}>
                  <img src={pepsi3}></img>
                </li>
              </ul>
            </div>
            <div className="col-xl-5 pepsi">
              <img
                src="https://www.pepsi.com/en-us/uploads/images/can-pzs.png"
                ref={pepsi}
              ></img>
            </div>
          </div>
        </div>
      </section>
      <Carousels />
    </>
  );
}
