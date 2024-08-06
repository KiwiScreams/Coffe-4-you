import { deserts } from "../../assets/data/data";
import MenuItem from "../../components/menu/menu-item/MenuItem";
import "./Menu.css";
const Menu = () => {
  return (
    <>
      <section className="menu-section">
        <h3>Desserts</h3>
        <div className="menu-container">
          {deserts.map((data) => (
            <MenuItem key={data.id} data={data} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
