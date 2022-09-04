import { Carousel } from "antd";
import React from "react";

export default function Carousels() {
  return (
    <Carousel autoplay>
      <div>
        <img
          className="d-block w-100"
          src="https://www.pepsi.com/nitro/static/media/carousel-img-3.81f52ad5e07d4c00de09.jpg"
          alt="First slide"
        ></img>
      </div>
      <div>
        <img
          className="d-block w-100"
          src="https://www.pepsi.com/nitro/static/media/carousel-img-5.5648b2c1373524646f29.jpg"
          alt="First slide"
        ></img>
      </div>
      <div>
        <img
          className="d-block w-100"
          src="https://www.pepsi.com/nitro/static/media/carousel-img-2.57c68646b855fee873cf.jpg"
          alt="First slide"
        ></img>
      </div>
      <div>
        <img
          className="d-block w-100"
          src="https://www.pepsi.com/nitro/static/media/carousel-img-1.5e75fb7bbd9c4237fa32.jpg"
          alt="First slide"
        ></img>
      </div>
    </Carousel>
  );
}
