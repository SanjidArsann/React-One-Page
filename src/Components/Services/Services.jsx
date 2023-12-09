import { useEffect, useState } from "react";
import Service from "./Service"
import BorderOne from '../../../public/border-1.png'

const Services = () => {
const [services, setServices] = useState([]);
useEffect(() =>{
    fetch('json/service.json')
    .then(res => res.json())
    .then(data => setServices(data))
},[])
  return (
    <main className=" relative">
      <section className="py-28">
        <div>
          <h3 className="text-center pt-3 text-indigo-600 font-semibold text-3xl ">
            Services
          </h3>

          <div className="flex justify-center">
            <img
              className="absolute top-[110px]"
              src={BorderOne}
              alt="BorderOne"
            />
          </div>
          <h2 className="text-3xl  lg:text-5xl  mt-10  mb-8 font-bold text-center">Creative Design Solutions</h2>
          <p className='text-xl font-semibold text-center text-sans-serif text-gray-400'>Professional Design Agency to provide solutions</p>
        </div>
        <div className="grid grid-cols-3 gap-8 mx-24 mt-16">
            {
                services.map(service => <Service
                    key= {service.id}
                    service={service}
                ></Service> )
            }
        </div>

      </section>
    </main>
  );
};

export default Services;
