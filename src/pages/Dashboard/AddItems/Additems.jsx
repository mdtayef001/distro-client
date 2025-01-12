import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Additems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const imageFile = {
      image: data.image[0],
    };

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuData = {
        name: data.name,
        recipe: data.recipe,
        category: data.category,
        image: res.data.data.display_url,
        price: parseFloat(data.price),
      };
      const menuRes = await axiosSecure.post("/menus", menuData);
      if (menuRes.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} is added to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    }
  };
  return (
    <section>
      <div>
        <SectionTitle heading={"add an item"} subheading={"what's new"} />
      </div>
      <div className="max-w-screen-md mx-auto p-5 bg-base-200 rounded-lg">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex  gap-6  items-end">
            <div className="w-full">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue={"default"}
                {...register("category", { required: true })}
                className="select select-primary w-full"
              >
                <option value={"default"} disabled>
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="dessert">Dessert</option>
                <option value="dessert">Soup</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Photo URL*</span>
            </div>
            <input
              type="url"
              {...register("image")}
              placeholder="https://"
              className="input input-bordered w-full "
            />
          </label> */}

          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </label>
          <div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <div className="w-full">
            <button className="btn btn-lg w-full bg-orange-500 text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Additems;
