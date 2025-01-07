import PropTypes from "prop-types";

const Foodcard = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div className="card bg-base-100 w-96 shadow-xl text-center">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="absolute right-5 top-3 bg-black text-white text-sm font-semibold px-4 py-2 rounded-lg">
        ${price}
      </p>
      <div className="card-body space-y-4">
        <h2 className="text-xl  font-bold">{name}</h2>
        <p>{recipe}</p>
        <div className=" text-center ">
          <button className="btn btn-primary ">Add to card</button>
        </div>
      </div>
    </div>
  );
};

Foodcard.propTypes = {
  item: PropTypes.object,
};

export default Foodcard;
