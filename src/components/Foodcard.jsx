import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Foodcard = ({ item }) => {
  const { name, image, recipe, price } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      const cartItems = {
        menuId: food._id,
        email: user.email,
        price: food.price,
      };

      axios
        .post("http://localhost:5000/carts", cartItems)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${food.name} Added to cart`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        });
    } else {
      Swal.fire({
        title: "You are not Logged In?",
        text: "You won't be able to place this order!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/auth/login", { state: location });
        }
      });
    }
  };

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
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-primary "
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

Foodcard.propTypes = {
  item: PropTypes.object,
};

export default Foodcard;
