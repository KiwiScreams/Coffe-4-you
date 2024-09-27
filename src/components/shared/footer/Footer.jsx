import "./Footer.css";
import footerImage from "../../../assets/images/footer-coffe.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const handleNavigateToAboutPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/about-us");
  };
  const handleNavigateToMenuPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/menu");
  };
  const footerData = [
    {
      title: "Contact",
      items: [
        "Tbilisi, Pekini st. No. 43",
        "+995 558 19 55",
        "Tbilisi, Kostava st. No. 28",
        "+995 258 58 54",
        "---",
        "info@coffee4you.ge",
      ],
    },
    {
      title: "Company",
      items: [
        { text: "About us", onClick: handleNavigateToAboutPage },
        "Vacancy",
        "Branches",
      ],
    },
    {
      title: "Production",
      items: [
        "Drinks",
        { text: "Desserts", onClick: handleNavigateToMenuPage },
        "Snacks",
      ],
    },
    {
      title: "Help",
      items: ["Instruction", "Help Center", "Problem with the site"],
    },
  ];
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
            <li className="pointer">
              Created by
              <a href="https://github.com/KiwiScreams" target="_blank" id="SLM">
                <span>S</span>
                <span>L</span>
                <span>M</span>
              </a>
            </li>
          </div>
        </div>
        <div className="footer-image">
          <img src={footerImage} alt="Coffe 4 You" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
