import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";
// img
import menuBanner from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";

const Menu = () => {
  const { dessert, pizza, salad, soup, drinks, offered } = useMenu();

  return (
    <section className="space-y-16 mb-24">
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuBanner} title={"our menu"} />
      <div className="space-y-5">
        <SectionTitle subheading={"Don't Miss"} heading={"Today's offer"} />
        <MenuCategory items={offered} title="salad" />
      </div>
      <div className="space-y-5">
        <Cover img={dessertImg} title={"Dessert"} />
        <MenuCategory items={dessert} title={"dessert"} />
      </div>
      <div className="space-y-5">
        <Cover img={pizzaImg} title={"Pizza"} />
        <MenuCategory items={pizza} title={"pizza"} />
      </div>
      <div className="space-y-5">
        <Cover img={saladImg} title={"salad"} />
        <MenuCategory items={salad} title={"salad"} />
      </div>
      <div className="space-y-5">
        <Cover img={soupImg} title={"soup"} />
        <MenuCategory items={soup} title={"soup"} />
      </div>
      <div className="space-y-5">
        <Cover img={menuBanner} title={"Drinks"} />
        <MenuCategory items={drinks} title={"drinks"} />
      </div>
    </section>
  );
};

export default Menu;
