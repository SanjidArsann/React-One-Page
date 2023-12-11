import ActiveLink from "./ActiveLink";
import "../Style/ActiveLink.css";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import LogoOne from "../../../public/logo-1.png";
import Dot from "../../../public/dot.png";

const Header = () => {
  return (
    <nav className="fixed hidden lg:block w-full  z-40">
      <div className="flex h-[90px] justify-between align-middle px-16 bg-cover bg-center bg-gradient-to-r from-slate-50 via-slate-50 to-white  ">
        <div className="flex align-middle justify-center pt-5 ">
          <img className="h-11" src={LogoOne} alt="LogoOne" />
        </div>

        <div className="flex align-middle">
          <ActiveLink to="/">
            <span>Demos</span>
            <ChevronDownIcon className=" h-4 w-4 mt-2  hover:text-indigo-600" />
          </ActiveLink>
          <ActiveLink to="/services">
            <span>Services</span>
            <ChevronDownIcon className="h-4 w-4 mt-2 hover:text-indigo-600" />
          </ActiveLink>
          <ActiveLink to="/portfolio">
            <span>Portfolio</span>
            <ChevronDownIcon className=" h-4 w-4 mt-2 hover:text-indigo-600" />
          </ActiveLink>
          <ActiveLink to="/team">
            <span>Team</span>
            <ChevronDownIcon className=" h-4 w-4 mt-2 hover:text-indigo-600" />
          </ActiveLink>
          <ActiveLink to="/blog">
            <span>Blog</span>
            <ChevronDownIcon className=" h-4 w-4 mt-2 hover:text-indigo-600" />
          </ActiveLink>
          <ActiveLink to="/about">
            <span>About Us</span>
            <ChevronDownIcon className=" h-4 w-4 mt-2 hover:text-indigo-600" />
          </ActiveLink>
        </div>
        <div className=" h-12 w-12 mt-5 rounded-md flex  justify-start items-middle bg-indigo-600 ">
          <a href="#" className=" p-4">
            <img className=" w-full   flex align-middle" src={Dot} alt="Dot" />
          </a>
        </div>
      </div>

      <div className="border-b-[1px] border-gray mx-16"></div>
    </nav>
  );
};

export default Header;
