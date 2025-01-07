import PropTypes from "prop-types";

const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="text-center w-96 mx-auto text-white">
      <p className="text-lg text-yellow-500">---{subheading}---</p>
      <div className="divider"></div>
      <h1 className="text-4xl font-semibold uppercase">{heading}</h1>
      <div className="divider"></div>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
};

export default SectionTitle;
