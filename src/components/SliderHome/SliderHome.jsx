import React from "react";
import { Carousel } from "antd";

const SliderHome = () => {
  return (
    <div className="carousel_slider max-w-8xl mx-auto my-auto w-full mt-2">
      <Carousel
        autoplay
        nextArrow={
          <div>
            <i class="fa-light fa-circle-arrow-right"></i>
          </div>
        }
        prevArrow={
          <div>
            <i class="fa-light fa-circle-arrow-left"></i>
          </div>
        }
        dots={true}
        arrows={true}
      >
        <div>
          <img
            className="slider"
            src="https://i.imgur.com/oZTbnz1.jpg"
            alt="..."
          />
        </div>
        <div>
          <img
            className="slider"
            src="https://i.imgur.com/Fzk3zS4.png"
            alt="..."
          />
        </div>
        <div>
          <img
            className="slider"
            src="https://i.imgur.com/NuvfKwh.jpeg"
            alt="..."
          />
        </div>
        <div>
          <img
            className="slider"
            src="https://i.imgur.com/8AFfBT6.png"
            alt="..."
          />
        </div>
        <div>
          <img
            className="slider"
            src="https://i.imgur.com/rDn1LhV.png"
            alt="..."
          />
        </div>
        <div>
          <img
            className="slider"
            src="https://i.imgur.com/Yd2LiuX.jpeg"
            alt="..."
          />
        </div>
      </Carousel>
    </div>
  );
};

export default SliderHome;
