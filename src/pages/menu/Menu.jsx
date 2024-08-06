import { deserts } from "../../assets/data/data";
import MenuItem from "../../components/menu/menu-item/MenuItem";

const Menu = () => {
  return (
    <>
      <div className="cars-container">
        {deserts.map((data) => (
          <MenuItem key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default Menu;
