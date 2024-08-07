import { useState, useEffect, useSelector, useDispatch } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MenuItem.css";
const MenuItem = (props) => {
  const { id, name, data, image } = props.data;
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(data);
  };
  return (
    <>
      <div className="menu-item" onClick={handleNavigation}>
        <div className="menu-item-image">
          <img src={image} alt="" />
        </div>
        <div className="menu-item-body">
          <h2 className="name">{name}</h2>
        </div>
        <br />
      </div>
    </>
  );
};

export default MenuItem;
