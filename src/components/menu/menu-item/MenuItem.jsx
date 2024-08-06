import { useState, useEffect, useSelector, useDispatch } from "react";
import { Link } from "react-router-dom";
const MenuItem = (props) => {
  const { id, name, data } = props.data;
  return (
    <>
      <div className="car">
        <div className="car-image">
          {/* <img src={image} alt="" /> */}
        </div>
        <div className="car-body">
          <h2 className="name">{name}</h2>
          {/* <span>starting from $ {price}</span> */}
        </div>
        <button className="btn">
          <Link to={data}>see details</Link>
        </button>
        <br />
      </div>
    </>
  );
};

export default MenuItem;
