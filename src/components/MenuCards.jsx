import PropTypes from "prop-types";

const MenuCards = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div className="flex gap-4 justify-between text-white">
      <img
        src={image}
        style={{ borderRadius: "0 200px 200px 200px", width: "100px" }}
        className="w-full object-cover"
      />

      <div className="space-y-2">
        <h2 className="uppercase text-lg">{name} -----------</h2>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

MenuCards.propTypes = {
  item: PropTypes.object,
};

export default MenuCards;
