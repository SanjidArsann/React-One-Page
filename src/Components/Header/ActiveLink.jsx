import { NavLink } from "react-router-dom";
import "../Style/ActiveLink.css";
import PropTypes from "prop-types";

const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "flex justify-normal active md:font-semibold lg:font-bold lg:text-md  lg:px-4 pt-8 text-indigo-600 hover:text-indigo-600 "
            : "hover:text-indigo-600 pt-8 md:px-1 lg:px-4  md:font-semibold lg:font-bold lg:text-md text-gray-600 active flex justify-normal "
        }
      >
        {children}
      </NavLink>
    </div>
  );
};
ActiveLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};
export default ActiveLink;
