import React from "react";
import Slider from "react-slick";

export default function Pictures() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{width: '90%', marginLeft: '4vw'}}>
      <Slider {...settings}>
        <div>
          <img
            src="https://images.pexels.com/photos/5898430/pexels-photo-5898430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            style={{ marginLeft: "15vw" }}
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/7035350/pexels-photo-7035350.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            style={{ marginLeft: "20vw" }}
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/6784752/pexels-photo-6784752.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            style={{ marginLeft: "20vw" }}
          />
        </div>
      </Slider>
    </div>
  );
}
