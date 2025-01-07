import SectionTitle from "../../components/SectionTitle";
import featureImg from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section className="bg-[url('./assets/home/featured.jpg')]  bg-fixed bg-cover  py-10  px-12 mb-24">
      <SectionTitle heading={"from out menu"} subheading={"Check it out"} />
      <div className="flex items-center justify-center gap-6 bg-black ">
        <div>
          <img src={featureImg} alt="" />
        </div>
        <div className="space-y-6">
          <p>March 2, 2025</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            aliquid placeat voluptates, illum qui ipsum sit! Molestias maxime
            incidunt enim laborum quod pariatur, commodi, fugit exercitationem,
            quasi voluptates culpa consectetur quam fuga saepe architecto ab
            aliquid aperiam perferendis molestiae voluptas necessitatibus
            corporis at. Neque pariatur molestias, alias tempore doloremque
            assumenda!
          </p>
          <button className="btn border-0 btn-outline border-b-4 ">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
