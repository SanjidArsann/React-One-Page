import PropTypes from "prop-types";
const Achieve = ({ achieve }) => {
  return (
    <div>
      <div className="flex flex-col  items-center  p-8 shadow-md ">
        <img className="rounded-lg h-24 w-24" src={achieve?.image} alt="logo" />
        <h2 className="text-5xl mt-6 font-bold">{achieve.completedProjects}</h2>
        <p className="text-lg my-6 font-medium text-gray-400">
          {achieve.category}
        </p>
      </div>
    </div>
  );
};
Achieve.propTypes = {
  achieve: PropTypes.object.isRequired,
};

export default Achieve;
