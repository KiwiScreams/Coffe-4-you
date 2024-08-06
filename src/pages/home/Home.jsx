import CoffePanel from "../../components/home/coffe-panel/CoffePanel";
import Filter from "../../components/home/filter/Filter";
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
      <Filter />
    </>
  );
};

export default Home;
