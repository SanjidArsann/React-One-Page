import BorderOne from "../../../public/border-1.png";
import banner from "../../../public/img-1 (1).jpeg";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
const Work = () => {
  return (
    <div className="relative pb-20">
      <div className="bg-indigo-500">
      <div className="container mx-auto">
        <div className="xl:mx-28 md:mx-20 mx-12 pb-20 ">
          <div className="relative">
            <img
              className="absolute top-24 left-2"
              src={BorderOne}
              alt="BorderOne"
            />

            <h3 className="md:pt-28 pt-10 text-white font-semibold pl-8 text-lg md:text-xl">
              Latest Work
            </h3>
            <div className="grid xl:grid-cols-2 mt-3">
              <div className=" ">
                <h1 className="text-2xl lg:text-5xl leading-8 lg:mt-10 mb-8 font-bold">
                  <span className="text-white">Experience & innovative</span>{" "}
                  solutions <span className="text-white">for</span>{" "}
                  <span className="font-crimson-pro">creative</span>{" "}
                  <span className="text-white font-">design & development</span>{" "}
                  agency
                </h1>
                <button className="flex md:mt-20 py-4 px-12 border-solid  border-white border-[1px] font-semibold rounded-lg bg-indigo-500 text-white  hover:bg-black transition ease-in-out duration-500 hover:border-black">
                  Let<span>{`'`}</span>s Work Together
                  <ChevronRightIcon className="  h-4 w-4 mt-1 " />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className=" hidden xl:block absolute bottom-0 right-28">
        <img className=" rounded-full" src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Work;
