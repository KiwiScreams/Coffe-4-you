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
  const navData = [
    {
      text: "home",
      to: "/",
    },
    {
      text: "menu",
      to: "/menu",
    },
    {
      text: "about us",
      to: "/about-us",
    },
  ];
  return (
    <>
      <header
        className={color ? "header desktop header-scroll" : "header desktop"}
      >
        <nav>
          {navData.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {item.text}
            </NavLink>
          ))}
        </nav>
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Coffe 4 You logo" />
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
