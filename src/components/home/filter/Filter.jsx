import "./Filter.css";
import coffee from "../../../assets/images/coffe-filter.png";
import cake from "../../../assets/images/cake-filter.png";
import React from "react";
import masterpiece from "../../../assets/images/masterpiece-filter.png";
const Filter = () => {
  return (
    <>
      <section className="filter-container">
        <button>
          <div className="image">
            <img src={coffee} />
          </div>
          Coffee
        </button>
        <button>
          <div className="image">
            <img src={cake} />
          </div>
          Deserts
        </button>
        <button>
          <div className="image">
            <img src={masterpiece} />
          </div>
          Masterpiece
        </button>
      </section>
    </>
  );
};

export default Filter;
