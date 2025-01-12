import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/Loading";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const { menu, refetch, loading } = useMenu();
  const axiosSecure = useAxiosSecure();

  if (loading) {
    return <Loading />;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menus/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <section className="space-y-5">
      <div>
        <SectionTitle heading={"manage all items"} subheading={"Hurry up"} />
      </div>
      <div>
        <h2 className="text-2xl font-semibold">
          Total Menu Item: {menu.length}
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <th>
                    <Link
                      to={`/dashboard/update/${item._id}`}
                      className="btn btn-ghost  bg-orange-400"
                    >
                      <FaEdit className="text-2xl text-white" />
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost "
                    >
                      <FaTrash className="text-2xl text-red-500" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageItems;
