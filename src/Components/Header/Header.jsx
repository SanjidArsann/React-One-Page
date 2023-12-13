import ActiveLink from "./ActiveLink";
import "../Style/ActiveLink.css";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import LogoOne from "../../../public/logo-1.png";
import Dot from "../../../public/dot.png";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed md:block w-full z-40">
      <div className="md:h-[90px] px-16 bg-cover bg-center bg-gradient-to-r from-slate-50 via-slate-50 to-white">
        <div className="continer mx-auto px-5 flex justify-between items-center"> 
          <div className="flex md:align-middle  md:justify-center justify-between pt-5 ">
            <img className="h-11" src={LogoOne} alt="LogoOne" />
            <div onClick={() => setOpen(!open)} className="md:hidden">
              <span>
                {open === true ? (
                  <XMarkIcon className="h-10 w-10 text-black hover:text-indigo-600" />
                ) : (
                  <Bars3Icon className="h-10 w-10 text-black hover:text-indigo-600 " />
                )}
              </span>
            </div>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className={`md:flex md:static  align-middle  absolute duration-1000  bg-gradient-to-r from-slate-50 via-slate-50 to-slate-45 px-10 pr-64 pb-10 rounded-bl-lg ${
              open ? "top-18" : "-top-96"
            } `}
          >
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
          <div className="hidden lg:block">
            <div className=" h-12 w-12 mt-5 rounded-md  flex  justify-start items-middle bg-indigo-600 ">
              <a href="#" className=" p-4">
                <img
                  className=" w-full   flex align-middle"
                  src={Dot}
                  alt="Dot"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-[1px] border-gray mx-16"></div>
    </nav>
  );
};

export default Header;
