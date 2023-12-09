import PropTypes from "prop-types";

const Exibhition = ({project}) => {
    return (
        <div>
            <div className="Cart">
            <div className="relative group">
              <img src={project.image} alt="ImageOne" />
              <div className="absolute inset-0 bg-indigo-800 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <span className="text-white text-5xl font-semibold transform -translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500">
                  +
                </span>
              </div>
            </div>
            <div className="mt-8">
              <a
                className="text-2xl font-bold hover:text-indigo-600  transition ease-in-out duration-500"
                href="">{project.category} </a>
              <br />
              <div className="mt-2 text-lg font-semibold text-gray-500 hover:text-indigo-600 ">
                <a href="">{project.Type}</a>
              </div>
            </div>
          </div>
        </div>
    );
};
Exibhition.propTypes = {
    project: PropTypes.isRequired,
  };
export default Exibhition;