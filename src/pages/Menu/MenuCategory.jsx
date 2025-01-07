import PropTypes from "prop-types";
import MenuCards from "../../components/MenuCards";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title = "" }) => {
  return (
    <div>
      <div className="mt-10 grid grid-cols-2 gap-6">
        {items.map((item) => (
          <MenuCards key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to={`/order/${title}`}
          className="btn uppercase
             btn-lg border-0 btn-outline border-b-4 "
        >
          Order Your Favorite Food
        </Link>
      </div>
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
};

export default MenuCategory;
