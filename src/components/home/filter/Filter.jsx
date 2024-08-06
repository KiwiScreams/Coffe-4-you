import { NavLink } from "react-router-dom";
import "./Filter.css";
import coffee from "../../../assets/images/coffe-filter.png";
import cake from "../../../assets/images/cake-filter.png";
import React from "react";
import { useState, useEffect, useRef } from "react";
import masterpiece from "../../../assets/images/masterpiece-filter.png";
const Filter = () => {
  return (
    <>
      <section className="filter-container">
        <NavLink>
          <div className="image">
            <img src={coffee} />
          </div>
          Coffee
        </NavLink>
        <NavLink>
          <div className="image">
            <img src={cake} />
          </div>
          Deserts
        </NavLink>
        <NavLink>
          <div className="image">
            <img src={masterpiece} />
          </div>
          Masterpiece
        </NavLink>
      </section>
    </>
  );
};

export default Filter;
