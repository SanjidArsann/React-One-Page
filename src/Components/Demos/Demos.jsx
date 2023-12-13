import "../Style/ActiveLink.css";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import About from "../About/About";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import BannerImage from "../../../public/hero-one-img-2.jpeg";
import ShapeOne from "../../../public/shape-1.png";
import CircleLogoOne from "../../../public/circle-logo-1.png";
import ShapeTwo from "../../../public/shape-2.png";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import Work from "../Work/Work";
import Achievement from "../Achievement/Achievement";
import Team from "../Team/Team";
import Contact from "../Contact/Contact";

const Demos = () => {
  return (
    <main >
      <section className="relative conatiner mx-auto bg-image  h-screen bg-cover bg-no-repeat bg-top  ">
        <div className="grid lg:grid-cols-2 p-4 sm:p-10 md:pt-10 lg:gap-20 lg:mx-20 xl:mx-28">
          <div>
            <h1 className="text-5xl  md:text-6xl  mt-36 mb-6 lg:mb-8 font-bold">
              Brand, Design & Development Agency
            </h1>
            <p className="text-md mb-10 md:mt-16">
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
              className="hidden lg:block w-full lg:ml-20 mt-36 rounded-full hover:transform hover:translate-x-4 hover:translate-y-0 transition-transform ease-in-out duration-500"
              src={BannerImage}
              alt="BannerImage"
            />
            <div>
              <img
                className="md:absolute hidden bottom-40 right-1/3 lg:block animate-bounce duration-500 ease-in-out "
                src={CircleLogoOne}
                alt="CircleLogoOne"
              />
            </div>
          </div>
          <div>
            <img
              className="absolute  md:top-28 top-16 left-9  hover:transform hover:translate-x-4 hover:translate-y-0 transition-transform ease-in-out duration-600"
              src={ShapeOne}
              alt="ShapeOne"
            />
          </div>

          <div>
            <img
              className="absolute  lg:top-48 top-36 right-1/3 block hover:transform hover:translate-x-4 hover:translate-y-0 transition-transform ease-in-out duration-600"
              src={ShapeTwo}
              alt="ShapeTwo"
            />
          </div>
        </div>
      </section>

      <About></About>
      <Services></Services>
      <Portfolio></Portfolio>
      <Work></Work>
      <Achievement></Achievement>
      <Blog></Blog>
      <Team></Team>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
};

export default Demos;
