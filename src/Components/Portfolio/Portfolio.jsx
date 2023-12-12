import { useEffect, useState } from "react";
import BorderOne from "../../../public/border-1.png";
import Exibhition from "./Exibhition";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("json/project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const filterProjects = (category) => {
    setSelectedCategory(category);
  };

  const resetFilter = () => {
    setSelectedCategory(null);
  };

  return (
    <main className="bg-gray-100">
      <div className=" lg:mx-20 xl:mx-28 mx-4 lg:pb-28 pb-10 pt-16">
        <div className="relative">
          <img
            className="absolute md:top-24 md:left-2"
            src={BorderOne}
            alt="BorderOne"
          />

          <h3 className="md:pt-28 pt-4 text-indigo-600 font-semibold pl-8 text-2xl">
            Latest Work
          </h3>
          <h1 className="text-3xl  lg:text-5xl  mt-10  mb-8 font-bold">
            Professional Experience
          </h1>
          <p className="text-xl font-bold text text-gray-400">
            Professional Design Agency to provide solutions
          </p>
        </div>
        <div className="md:mt-14 mt-4">
          <button
            onClick={resetFilter}
            className={`mr-2 px-2 md:px-4 py-1 font-semibold lg:text-lg  ${
              selectedCategory === null ? "bg-white rounded-lg shadow-lg" : ""
            }`}
          >
            Show All
          </button>
          {Array.from(new Set(projects.map((project) => project.category))).map(
            (category) => (
              <button
                key={category}
                onClick={() => filterProjects(category)}
                className={`mr-2 md:px-4 py-1 font-semibold lg:text-lg hover:bg-white hover:rounded-lg hover:shadow-lg transition-shadow duration-500 ease-in-out ${
                  selectedCategory === category
                    ? "bg-white rounded-lg shadow-lg transition-shadow duration-500 ease-in-out"
                    : ""
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 mt-14">
          {projects
            .filter((project) =>
              selectedCategory ? project.category === selectedCategory : true
            )
            .map((project) => (
              <Exibhition key={project.id} project={project}></Exibhition>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
