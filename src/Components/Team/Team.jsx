import { useEffect, useState } from "react";
import BorderOne from "../../../public/border-1.png";
import Member from "./Member";

const Team = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("json/members.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <main className=" relative">
      <section className="   pt-28 mb-20">
        <div className="container mx-auto">
        <div>
          <h3 className="text-center pt-6 text-indigo-600 font-semibold text-2xl ">
            Meet Our Team
          </h3>

          <div className="flex justify-center">
            <img
              className="absolute top-[110px] w-[220px] h-18"
              src={BorderOne}
              alt="BorderOne"
            />
          </div>
          <h2 className="text-3xl  lg:text-5xl  mt-10  mb-8 font-bold text-center">
            Experience Team Members
          </h2>
          <p className="text-xl font-semibold text-center text-sans-serif text-gray-400">
            Professional Design Agency to provide solutions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-8 mt-16">
          {members?.map((member) => (
            <Member key={member.id} member={member}></Member>
          ))}
        </div>
        </div>
      </section>
    </main>
  );
};

export default Team;
