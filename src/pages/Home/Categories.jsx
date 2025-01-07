import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle";

const Categories = () => {
  return (
    <section className="my-24 space-y-10">
      <SectionTitle
        subheading={"From 11:00am to 10:00pm"}
        heading={"Order online"}
      />
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={4}
        pagination={{ clickable: true, dynamicBullets: true }}
      >
        <SwiperSlide>
          <img className="w-full" src={slide1} alt="" />
          <h3 className="text-5xl shadow-xl uppercase text-white text-center -mt-20">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide2} alt="" />
          <h3 className="text-5xl shadow-xl uppercase text-white text-center -mt-20">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide3} alt="" />
          <h3 className="text-5xl shadow-xl uppercase text-white text-center -mt-20">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide4} alt="" />
          <h3 className="text-5xl shadow-xl uppercase text-white text-center -mt-20">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide5} alt="" />
          <h3 className="text-5xl shadow-xl uppercase text-white text-center -mt-20">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Categories;
