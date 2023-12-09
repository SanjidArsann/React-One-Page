
import "../Style/ActiveLink.css";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import About from "../About/About";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import BannerImage from "../../../public/hero-one-img-2.jpeg";
import ShapeOne from '../../../public/shape-1.png';
import CircleLogoOne from '../../../public/circle-logo-1.png';
import ShapeTwo from '../../../public/shape-2.png'
import Blog from "../Blog/Blog";


const Demos = () => {
  return (
    <main className="">
      <section className=" md:relative  mx-auto bg-image  h-screen bg-cover bg-no-repeat bg-top  ">
        <div className="grid grid-cols-2  md:pt-20 md:gap-20  md:mx-28">
          <div>
          
            <h1 className="text-3xl  lg:text-6xl  md:mt-36  mb-8 font-bold">
              Brand, Design & Development Agency
            </h1>
            <p className="md:text-md md:mt-16">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              molestias dicta facilis? Dolorem quisquam porro esse ullam
              deleniti corrupti quae amet, explicabo sit expedita, veniam
              similique totam. Excepturi, nesciunt exercitationem.
            </p>
            <button className="flex md:mt-20 py-4 px-12 text-white font-semibold rounded-lg bg-indigo-600 hover:bg-black transition ease-in-out duration-600">
              Let<span>{`'`}</span>s Talk Us
              <ChevronRightIcon className="  h-4 w-4 mt-1 " />
            </button>
          </div>
          <div>
            <img
              className="hidden sm:block h-30 ml-20 md:mt-20 rounded-full hover:transform hover:translate-x-4 hover:translate-y-0 transition-transform ease-in-out duration-500"
              src={BannerImage}
              alt="BannerImage"
            />
            
          </div>
          <div>
            <img
              className="md:absolute hidden top-28 left-9 sm:block hover:transform hover:translate-x-4 hover:translate-y-0 transition-transform ease-in-out duration-600"
              src={ShapeOne}
              alt="ShapeOne"
            />
          </div>
          <div>
            <img
              className="md:absolute hidden bottom-64 right-1/3 sm:block animate-bounce duration-500 ease-in-out "
              src={CircleLogoOne}
              alt="CircleLogoOne"
            />
          </div>
          <div>
            <img
              className="md:absolute hidden top-48 right-1/3 sm:block hover:transform hover:translate-x-4 hover:translate-y-0 transition-transform ease-in-out duration-600"
              src={ShapeTwo}
              alt="ShapeTwo"
            />
          </div>
        </div>
      </section>
      <About></About>
      <Services></Services>
      <Portfolio></Portfolio>
      <Blog></Blog>
    </main>
  );
};

export default Demos;
