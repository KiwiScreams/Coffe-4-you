import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/images/coffe-logo.png";
const Header = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">home</NavLink>
          <NavLink to="/">coffe menu</NavLink>
          <NavLink to="/">about us</NavLink>
        </nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </header>
    </>
  );
};

export default Header;
