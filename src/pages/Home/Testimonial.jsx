import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { ImQuotesLeft } from "react-icons/im";
// import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get("/reviews").then((res) => setReviews(res.data));
  }, []);

  return (
    <section className="mb-24">
      <SectionTitle
        subheading={"What Our Client Say"}
        heading={"testimonial"}
      />
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        slidesPerView={1}
        spaceBetween={0}
        navigation
        className="mt-10"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="m-16 text-center space-y-4">
              <Rating
                style={{ maxWidth: 180, margin: "0 auto" }}
                value={review.rating}
                readOnly
              />
              <div className="flex items-center justify-center text-9xl">
                <ImQuotesLeft />
              </div>
              <p className="text-lg font-medium">{review.details}</p>
              <h2 className="text-4xl text-yellow-500 font-bold ">
                {review.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
