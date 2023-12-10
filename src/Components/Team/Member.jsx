import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Member = ({ member }) => {
  return (
    <div>
      <div className="relative group ">
        <img
          className=" h-[325px] w-[270px] rounded-full"
          src={member.image}
          alt="member"
        />
        <div className="social-link  ">
          <ul className="flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-1000 ">
            <li className="absolute  bg-white opacity-100 bottom-[65px] flex justify-center align-middle m-4 p-2 h-10 w-10 rounded-full shadow-lg">
              <a href="#">
                <FontAwesomeIcon
                  className="text-indigo-600"
                  icon={faFacebookF}
                />
              </a>
            </li>
            <li className="absolute  bg-white opacity-100 bottom-[90px] left-10 flex justify-center align-middle m-2 p-2 h-10 w-10 rounded-full shadow-lg">
              <a href="#">
                <FontAwesomeIcon className="text-indigo-600" icon={faTwitter} />
              </a>
            </li>
            <li className="absolute bg-white opacity-100 bottom-[90px] right-10 flex justify-center align-middle m-2 p-2 h-10 w-10 rounded-full shadow-lg">
              <a href="#">
                <FontAwesomeIcon
                  className="text-indigo-600"
                  icon={faLinkedinIn}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center mt-6 ">
          <a
            href="#"
            className=" text-3xl font-semibold hover:text-indigo-600  transition ease-in-out duration-500"
          >
            {member.name}
          </a>
        </div>
        <p className="text-center text-lg text-gray-400 mt-2 font-semibold">
          {member.designation}
        </p>
      </div>
    </div>
  );
};
Member.propTypes = {
  member: PropTypes.object.isRequired,
};
export default Member;
