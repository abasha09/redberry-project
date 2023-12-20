import React from "react";
import "./blogcard.css";
import Nature from "../../assets/nature.png";
import CategoriesButton from "../buttons/categoriesbutton/CategoriesButton";
import Arrow from "../../assets/arrow.svg";
import { Link } from "react-router-dom";

const BlogCard = () => {
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
      <Link to={`/blogs/${blog.id}`}>
        სრულად ნახვა <img className="arrow" src={Arrow} />
      </Link>
    </div>
  );
};

export default BlogCard;
