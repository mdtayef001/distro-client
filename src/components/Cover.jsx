import PropTypes from "prop-types";
import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <section>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the img"
        strength={-200}
      >
        <div className="hero h-[700px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-5xl  p-10 text-white bg-black bg-opacity-45">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

Cover.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};

export default Cover;
