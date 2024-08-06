import "./Recipe.css";
import image from "../../../assets/images/recipe1.png";
const Recipe = () => {
  return (
    <>
      <section className="recipe-container">
        <div className="image-container">
          <img src={image} alt="" />
        </div>
        <div className="text-container">
          <h3>Chocolate cake</h3>
          <div className="text">
            <p>
              From its humble beginnings, it has evolved into a symbol of
              indulgence and celebration, cherished worldwide for its rich,
              velvety texture and irresistible flavor. It has been perfected and
              adapted by various cultures, each adding its own unique touch to
              this beloved dessert. Today, chocolate cake stands as a timeless
              classic.
            </p>
            <ol>
              <li>Unsweetened cocoa powder</li>
              <li>Baking soda</li>
              <li>Salt</li>
              <li>Granulated sugar</li>
              <li>Eggs</li>
              <li>Milk or buttermilk</li>
              <li>Melted butter</li>
              <li>Vanilla extract</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipe;
