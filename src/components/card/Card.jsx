import React from "react";
import "./card.css";
import Nature from "../../assets/nature.png";
import CategoriesButton from "../buttons/categoriesbutton/CategoriesButton";
import Arrow from "../../assets/arrow.svg";

const Card = () => {
  return (
    <div className="card__container">
      <img className="nature" src={Nature} />
      <div className="card__author">
        <h3>ლილე კვარაცხელია</h3>
        <p>02.11.2023</p>
      </div>
      <h2>EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა</h2>
      <div className="card__categories">
        <CategoriesButton />
      </div>
      <h4>
        6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
        სიზუსტისთვის, ეს პროცესი...
      </h4>
      <a href="">
        სრულად ნახვა <img className="arrow" src={Arrow} />
      </a>
    </div>
  );
};

export default Card;
