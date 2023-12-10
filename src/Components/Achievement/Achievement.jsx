import { useEffect, useState } from "react";
import BorderOne from "../../../public/border-1.png";
import Achieve from "./Achieve";
const Achievement = () => {
  const [achieves, setAchieves] = useState([]);
  useEffect(() => {
    fetch("json/achievement.json")
      .then((res) => res.json())
      .then((data) => setAchieves(data));
  }, []);
  return (
    <main className=" relative">
      <section className="mx-28 pt-28 mb-20">
        <div>
          <h3 className="text-center pt-6 text-indigo-600 font-semibold text-2xl ">
            Agency Statistics
          </h3>

          <div className="flex justify-center">
            <img
              className="absolute top-[110px] w-[220px] h-18"
              src={BorderOne}
              alt="BorderOne"
            />
          </div>
          <h2 className="text-3xl  lg:text-5xl  mt-10  mb-8 font-bold text-center">
            Why People’s Like Us
          </h2>
          <p className="text-xl font-semibold text-center text-sans-serif text-gray-400">
            Professional Design Agency to provide solutions
          </p>
        </div>
        <div className="grid grid-cols-4 mt-16">
          {achieves?.map((achieve) => (
            <Achieve
              key={achieve.completedProjects}
              achieve={achieve}
            ></Achieve>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Achievement;
