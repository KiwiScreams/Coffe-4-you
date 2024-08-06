import CoffePanel from "../../components/home/coffe-panel/CoffePanel";
import Main from "../../components/home/main/Main";
import Recipe from "../../components/home/recipe/Recipe";
import Ornament from "../../components/shared/ornament/Ornament";

const Home = () => {
  return (
    <>
      <Main />
      <Recipe />
      <CoffePanel />
      <Ornament />
    </>
  );
};

export default Home;
