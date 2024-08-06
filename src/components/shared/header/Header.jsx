import { NavLink } from "react-router-dom";
import "./Header.css";
import { useState, useEffect } from "react";
import logo from "../../../assets/images/coffe-logo.png";
const Header = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, [changeColor]);

  return (
    <>
      <header className={color ? "header header-scroll" : "header"}>
        <nav>
          <NavLink to="/">home</NavLink>
          <NavLink to="/menu">coffe menu</NavLink>
          <NavLink to="/about-us">about us</NavLink>
        </nav>
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
