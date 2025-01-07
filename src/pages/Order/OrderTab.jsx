import PropTypes from "prop-types";
import Foodcard from "../../components/Foodcard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-10">
      {items.map((item) => (
        <Foodcard key={item._id} item={item} />
      ))}
    </div>
  );
};

OrderTab.propTypes = {
  items: PropTypes.array,
};

export default OrderTab;
