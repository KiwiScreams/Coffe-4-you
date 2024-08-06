import { useState, useEffect, useSelector, useDispatch } from "react";
import { Link } from "react-router-dom";
const MenuItem = (props) => {
  const { id, name, price, image, data, monthPrice } = props.data;
//   const carts = useSelector((store) => store.cart.items);
//   const dispatch = useDispatch();
  return (
    <>
      <div className="car">
        <div className="car-image">
          <img src={image} alt="" />
        </div>
        <div className="car-body">
          <h2 className="name">{name}</h2>
          <span>starting from $ {price}</span>
          <h2 className="month-price">$ {monthPrice}/mo</h2>
        </div>
        <button className="btn">
          <Link to={data}>see details</Link>
        </button>
        <br />
        {/* <button onClick={handleAddToCart}>+</button> */}
      </div>
    </>
  );
};

export default MenuItem;
