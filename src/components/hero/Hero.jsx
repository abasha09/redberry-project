import React from "react";
import "./hero.css";
import Image from "../../assets/redberry-figures.png";

const Hero = () => {
  return (
    <div className="hero__container">
      <h1>ბლოგი</h1>
      <img src={Image} />
    </div>
  );
};

export default Hero;
