import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Categories from "./Categories";
import Featured from "./Featured";
import Populermenu from "./Populermenu";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <section>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Categories />
      <Populermenu />
      <Featured />
      <Testimonial />
    </section>
  );
};

export default Home;
