import { useEffect, useState } from "react";
import BorderOne from "../../../public/border-1.png";
import Project from "./project";

const Portfolio = () => {
    const[projects,setProjects] = useState([]);
    useEffect(()=>{
        fetch('../../../public/json/project.json')
        .then(res => res.json())
        .then(data =>setProjects(data))
    },[])
  return (
    <main className="bg-gray-100">
      <div className="mx-28 pb-28 pt-10">
        <div className="relative">
          <img
            className="absolute top-24 left-2"
            src={BorderOne}
            alt="BorderOne"
          />

          <h3 className="pt-28 text-indigo-600 font-semibold pl-8 text-2xl">
            Latest Work
          </h3>
          <h1 className="text-3xl  lg:text-5xl  mt-10  mb-8 font-bold">
            Professional Experience
          </h1>
          <p className="text-xl font-bold text text-gray-400">
            Professional Design Agency to provide solutions
          </p>
        </div>
        <div className="mt-14">
          <a
            className="mr-2 bg-white px-4 py-1 font-semibold text-lg rounded-lg shadow-lg"
            href=""
          >
            Show All
          </a>
          <a
            className="mr-2  px-4 py-1 font-semibold text-lg hover:bg-white hover:rounded-lg hover:shadow-lg transition-shadow duration-500 ease-in-out"
            href=""
          >
            Design
          </a>
          <a
            className="mr-2  px-4 py-1 font-semibold text-lg hover:bg-white hover:rounded-lg hover:shadow-lg transition-shadow duration-500 ease-in-out"
            href=""
          >
            Branding
          </a>
          <a
            className="mr-2 px-4 py-1 font-semibold text-lg hover:bg-white hover:rounded-lg hover:shadow-lg transition-shadow duration-500 ease-in-out "
            href=""
          >
            Development
          </a>
          <a
            className="mr-2 px-4 py-1 font-semibold text-lg hover:bg-white hover:rounded-lg hover:shadow-lg transition-shadow duration-500 ease-in-out"
            href=""
          >
            SEO
          </a>
          <a
            className="mr-2 px-4 py-1 font-semibold text-lg hover:bg-white hover:rounded-lg hover:shadow-lg transition-shadow duration-500 ease-in-out "
            href=""
          >
            UX/UI Design{" "}
          </a>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-14">
         {
            projects.map(project=> <Project
            key={project.id}
            project={project}
            ></Project>)
         }
          
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
