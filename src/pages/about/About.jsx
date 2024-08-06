import AboutText from "../../components/about/abouttext/AboutText";
import AboutContent from "../../components/about/Content/Content";
import Ornament from "../../components/shared/ornament/Ornament";
import "./About.css"
const AboutUs = () => {
  return (
    <>
        <AboutText />
        <Ornament />
        <AboutContent />
        <Ornament style={{ paddingBottom: "140px"}}/>
    </>
  );
};

export default AboutUs;
