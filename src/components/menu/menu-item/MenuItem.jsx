import { useState, useEffect, useSelector, useDispatch } from "react";
import { Link } from "react-router-dom";
import "./MenuItem.css"
const MenuItem = (props) => {
  const { id, name, data, image } = props.data;
  return (
    <>
      <div className="menu-item">
        <div className="menu-item-image">
          <img src={image} alt="" />
        </div>
        <div className="menu-item-body">
          <Link to={data}><h2 className="name">{name}</h2></Link>
        </div>
        <br />
      </div>
    </>
  );
};

export default MenuItem;
