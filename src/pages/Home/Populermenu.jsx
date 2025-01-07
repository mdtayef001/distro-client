import SectionTitle from "../../components/SectionTitle";
import MenuCards from "../../components/MenuCards";
import useMenu from "../../hooks/useMenu";
import { Link } from "react-router-dom";

const Populermenu = () => {
  const { menu } = useMenu();

  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-24">
      <SectionTitle heading={"from our menu"} subheading={"Check it out"} />
      <div className="mt-10 grid grid-cols-2 gap-6">
        {popular.map((item) => (
          <MenuCards key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to={"/menu"}
          className="btn uppercase
         btn-lg border-0 btn-outline border-b-4 "
        >
          View Full menu
        </Link>
      </div>
    </section>
  );
};

export default Populermenu;
