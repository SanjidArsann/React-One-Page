import { ChevronRightIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import BorderOne from "../../../public/border-1.png";
import AboutImg from "../../../public/about-1.jpeg";
import CircleLogoTwo from "../../../public/circle-logo-2.png";

const About = () => {
  return (
    <main >
      <section className="container  mx-auto bg bg-white h-screen bg-cover bg-no-repeat bg-top  ">
        <div className="pt-32 lg:grid grid-cols-2 p-4 md:gap-20  lg:mx-20 xl:mx-28">
          <div className="relative ">
            <img className="rounded-full lg:mt-28 " src={AboutImg} alt="AboutImg" />
            <div>
            <img
              src={CircleLogoTwo}
              className=" animate-bounce duration-1000 ease-in-out absolute left-0 bottom-0"
              alt="CircleLogoTwo"
            />
          </div>
          </div>

          <div className="relative">
          <div className="">
          <h3 className="mt-20 p-4 lg:pt-0 text-indigo-600 font-semibold pl-8 text-3xl">
              About us
            </h3>
            <img className="absolute top-0 lg:top-16" src={BorderOne} alt="Border-one" />
          </div>

            
            <h1 className="text-3xl  lg:text-5xl  mt-10  mb-8 font-bold">
              We’re Creative Agency Since 1993
            </h1>
            <p className="text-xl font-bold text text-indigo-600">
              Professional Design Agency to provide solutions
            </p>
            <p className="md:text-md md:mt-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              molestias dicta facilis? Dolorem quisquam porro esse ullam
              deleniti corrupti quae amet, explicabo sit
            </p>
            <div className="mt-8">
              <div className="flex mt-5">
                <CheckCircleIcon className="text-indigo-600  h-7 w-7 " />
                <p className="pl-3 text-lg font-semibold">
                  Digital Creative Agency
                </p>
              </div>
              <div className="flex mt-5">
                <CheckCircleIcon className="text-indigo-600  h-7 w-7 " />
                <p className="pl-3 text-lg font-semibold">
                  Professional Problem Solutions
                </p>
              </div>
              <div className="flex mt-5">
                <CheckCircleIcon className="text-indigo-600  h-7 w-7 " />
                <p className="pl-3 text-lg font-semibold">
                  Web Design & Development
                </p>
              </div>
            </div>
            <button className="flex mt-10 py-4 px-12 border-solid border-2 border-indigo-600 font-semibold rounded-lg bg-white text-indigo-600 hover:text-white hover:bg-indigo-600 transition ease-in-out duration-600">
              Let<span>{`'`}</span>s Talk Us
              <ChevronRightIcon className="  h-4 w-4 mt-1 " />
            </button>
          </div>
          
        </div>
      </section>
    </main>
  );
};

export default About;
