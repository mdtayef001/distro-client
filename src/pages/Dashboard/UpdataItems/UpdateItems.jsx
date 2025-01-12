import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItems = () => {
  const { _id, name, category, recipe, price } = useLoaderData();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

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
      const updateData = {
        name: data.name,
        recipe: data.recipe,
        category: data.category,
        image: res.data.data.display_url,
        price: parseFloat(data.price),
      };
      const upDateRes = await axiosSecure.patch(`/menus/${_id}`, updateData);
      if (upDateRes.data.modifiedCount > 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} is added to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <section>
      <SectionTitle heading={"update items"} subheading={"info"} />
      <div>
        <section>
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
                  defaultValue={name}
                  className="input input-bordered w-full"
                />
              </label>
              <div className="flex  gap-6  items-end">
                <div className="w-full">
                  <div className="label">
                    <span className="label-text">Category*</span>
                  </div>
                  <select
                    defaultValue={category}
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
                    defaultValue={price}
                    placeholder="price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>

              <label className="form-control">
                <div className="label">
                  <span className="label-text">Recipe Details*</span>
                </div>
                <textarea
                  {...register("recipe", { required: true })}
                  className="textarea textarea-bordered h-24"
                  placeholder="Recipe Details"
                  defaultValue={recipe}
                ></textarea>
              </label>
              <div>
                <input
                  {...register("image", { required: true })}
                  type="file"
                  className="file-input w-full max-w-xs"
                />
                {errors.image ? (
                  <div role="alert" className="alert alert-error">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Image is required</span>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="w-full">
                <button className="btn btn-lg w-full bg-orange-500 text-white">
                  Update
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default UpdateItems;
