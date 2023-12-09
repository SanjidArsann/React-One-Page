import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Service = ({ service }) => {
  return (
    <div>
      <div className="group border-[1px] rounded-lg  border-solid pt-[40px] pl-[50px] pb-[30px] hover:border-white hover:shadow-top hover:shadow transition-shadow duration-500 ease-in-out ">
        <img src="service.png" alt="" />
        <h2 className="text-2xl font-semibold my-5">{service.name}</h2>
        <div className="flex mb-5 text-gray-500 group-hover:text-black">
          <ArrowRightIcon className=" mr-3 h-5 w-5 mt-1 " />
          <span className="text-lg font-semibold ">{service.features[0]}</span>
        </div>
        <div className="flex mb-5 text-gray-500 group-hover:text-black">
          <ArrowRightIcon className=" mr-3 h-5 w-5 mt-1 " />
          <span className="text-lg font-semibold ">{service.features[1]}</span>
        </div>
        <div className="flex mb-5 text-gray-500 group-hover:text-black">
          <ArrowRightIcon className=" mr-3 h-5 w-5 mt-1 " />
          <span className="text-lg font-semibold ">{service.features[2]}</span>
        </div>
        <div className="flex text-indigo-500 font-bold hover:text-indigo-700">
          <a className="underline text-lg " href="">
            Read More
          </a>
          <ArrowRightIcon className="h-4 w-4 mt-2 ml-2" />
        </div>
      </div>
    </div>
  );
};

export default Service;
