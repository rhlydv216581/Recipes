import React from "react";
import Slider from "react-slick";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";
import "./Cusine.css";

const Cusine = () => {
const cuisines = [
  "Italian",
  "Asian",
  "American",
  "Mexican",
  "Mediterranean",
  "Pakistani",
  "Japanese",
  "Moroccan",
  "Korean",
  "Greek",
  "Thai",
  "Indian",
  "Turkish",
  "Smoothie",
  "Russian",
  "Lebanese",
  "Brazilian"
];

    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear"
  };

  return (
    <div className="cuisine-container">
      
      <h1 className="cuisine-title">
        <Globe />
        GLOBE Cuisine
      </h1>

      <Slider {...settings}>
        {cuisines.map((item) => (
          <div key={item} className="cuisine-slide">
            <Link to={`/cuisine/${item}`} className="cuisine-button">
              {item}
            </Link>
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default Cusine;