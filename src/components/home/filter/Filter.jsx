import { NavLink } from "react-router-dom";
import "./Filter.css";
import coffee from "../../../assets/images/coffe-filter.png";
import coffeeHover from "../../../assets/images/coffe-logo.png";
import cake from "../../../assets/images/cake-filter.png";
import React from "react";
import { useState, useEffect, useRef } from "react";
import masterpiece from "../../../assets/images/masterpiece-filter.png";
const Filter = () => {
  const [isHovered, setIsHovered] = useState({
    coffee: false,
    cake: false,
    masterpiece: false,
  });

  const handleMouseOver = (type) => {
    setIsHovered((prev) => ({ ...prev, [type]: true }));
  };

  const handleMouseOut = (type) => {
    setIsHovered((prev) => ({ ...prev, [type]: false }));
  };
  return (
    <>
      <section className="filter-container">
      <NavLink
        onMouseOver={() => handleMouseOver("coffee")}
        onMouseOut={() => handleMouseOut("coffee")}
      >
        <img src={isHovered.coffee ? coffeeHover : coffee} />
        Coffee
      </NavLink>
        <NavLink>
          <img src={cake} />
          Deserts
        </NavLink>
        <NavLink>
          <img src={masterpiece} />
          Masterpiece
        </NavLink>
      </section>
    </>
  );
};

export default Filter;
