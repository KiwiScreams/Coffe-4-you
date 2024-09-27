import "./Footer.css";
import footerImage from "../../../assets/images/footer-coffe.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navigate = useNavigate();
  const handleNavigateToAboutPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/about-us");
  };
  const handleNavigateToMenuPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/menu");
  };
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-main">
            <ul>
              <h3>Contact</h3>
              <li>Tbilisi, Pekini st. No. 43</li>
              <li>+995 558 19 55</li>
              <li>Tbilisi, Kostava st. No. 28</li>
              <li>+995 258 58 54</li>
              <li>---</li>
              <li>info@coffee4you.ge</li>
            </ul>
            <ul>
              <h3>Company</h3>
              <li onClick={handleNavigateToAboutPage}>About us</li>
              <li>Vacancy</li>
              <li>Branches</li>
            </ul>
            <ul>
              <h3>Production</h3>
              <li>Drinks</li>
              <li onClick={handleNavigateToMenuPage}>Desserts</li>
              <li>Snacks</li>
            </ul>
            <ul>
              <h3>Help</h3>
              <li>Instruction</li>
              <li>Help Center</li>
              <li>Problem with the site</li>
            </ul>
          </div>
          <div className="footer-bottom">
            <ul>
              <li>Terms and Conditions</li>
              <li>license</li>
              <li>Privacy Policy</li>
            </ul>
            <p>2024© All rights reserved</p>
            <li>
              Created by{" "}
              <a href="https://github.com/KiwiScreams" target="_blank" id="SLM">
                <span>S</span>
                <span>L</span>
                <span>M</span>
              </a>
            </li>
          </div>
        </div>
        <div
          className="footer-image"
        >
          <img src={footerImage} alt="Coffe 4 You" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
