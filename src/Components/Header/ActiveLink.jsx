import React from "react";
import { NavLink } from "react-router-dom";
import "../Style/ActiveLink.css";

const ActiveLink = ({ to, children }) => {
  return (
    <div>
        <NavLink
          to={to}
          className={({ isActive }) =>
            isActive
              ? "flex justify-normal active font-bold text-lg  px-10 py-6 text-indigo-600 hover:text-indigo-600 "
              : "hover:text-indigo-600  px-10 py-6 text-lg font-bold text-gray-600 active flex justify-normal "
          }
        >
          {children}
        </NavLink>
    </div>
  );
};

export default ActiveLink;
