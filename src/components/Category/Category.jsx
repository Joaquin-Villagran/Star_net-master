import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";

const Category = ({ param }) => {
  return (
    <div>
      <Link to={`/category/${param}`}>
        <h1 className="center">{param}</h1>
      </Link>
    </div>
  );
};
export default Category;
