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
        { text: "Tbilisi, Pekini st. No. 43" },
        { text: "+995 558 19 55" },
        { text: "Tbilisi, Kostava st. No. 28" },
        { text: "+995 258 58 54" },
        { text: "---" },
        { text: "info@coffee4you.ge" },
      ],
    },
    {
      title: "Company",
      items: [
        {
          text: "About us",
          onClick: handleNavigateToAboutPage,
          className: "pointer",
        },
        { text: "Vacancy" },
        { text: "Branches" },
      ],
    },
    {
      title: "Production",
      items: [
        { text: "Drinks" },
        {
          text: "Desserts",
          onClick: handleNavigateToMenuPage,
          className: "pointer",
        },
        { text: "Snacks" },
      ],
    },
    {
      title: "Help",
      items: [
        { text: "Instruction" },
        { text: "Help Center" },
        { text: "Problem with the site" },
      ],
    },
  ];
  const footerBottomData = [
    {
      items: ["Terms and Conditions", "license", "Privacy Policy"],
    },
  ];
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-main">
            {footerData.map((section, index) => (
              <ul key={index}>
                <h3>{section.title}</h3>
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    onClick={item.onClick}
                    className={item.className ? item.className : ""}
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="footer-bottom">
            <ul>
              {footerBottomData[0].items.map((item, index) => (
                <li key={index} className="pointer">
                  {item}
                </li>
              ))}
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
