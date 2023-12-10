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
            ? "flex justify-normal active font-bold text-md  px-4 pt-8 text-indigo-600 hover:text-indigo-600 "
            : "hover:text-indigo-600  px-4 pt-8 text-md font-bold text-gray-600 active flex justify-normal "
        }
      >
        {children}
      </NavLink>
    </div>
  );
};
ActiveLink.propTypes = {
  to: PropTypes.isRequired,
  children: PropTypes.isRequired,
};
export default ActiveLink;
