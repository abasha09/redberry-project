import React from "react";
import "./gobackbutton.css";
import GoBackArrow from "../../../assets/gobackarrow.svg";

const GoBackButton = () => {
  return (
    <button className="goback__btn">
      <img className="goback__img" src={GoBackArrow} />
    </button>
  );
};

export default GoBackButton;
