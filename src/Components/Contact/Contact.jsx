import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import AnimatedImage from "../../../public/shape-4 (1).png";

const Contact = () => {
  return (
    <main className="relative">
      <section className="pt-16 mx-28 pb-32 ">
        <div className="mx-auto">
          <div className="flex flex-row align-center">
            <div className="w-2/3 pr-12">
              <div className=" mb-8">
                <h2 className="text-7xl font-bold mb-10">
                  Have Any on <span className="text-indigo-600">Project</span>{" "}
                  Mind!
                  <span className="text-indigo-600">Contact</span> Us
                </h2>
                <p className="mb-8 font-semibold text-md text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae libero aut autem, sed minima corporis debitis
                  inventore laudantium minus veniam ullam odit repellendus
                  quibusdam et, fugiat numquam perspiciatis, dolor nulla.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className=" mb-2 ">
                    <div className="text-indigo-600">
                      <FontAwesomeIcon icon={faMailBulk} />
                      <span className="ml-2 text-lg font-semibold">
                        Email Us
                      </span>
                    </div>
                    <div className="info">
                      <h4 className="text-2xl font-bold">
                        <a href="mailto:support@gmail.com">support@gmail.com</a>
                      </h4>
                    </div>
                  </div>
                  <div className="information-style-one">
                    <div className="text-indigo-600">
                      <FontAwesomeIcon icon={faPhoneAlt} />
                      <span className="ml-2 text-lg font-semibold">
                        Phone Us
                      </span>
                    </div>
                    <div className="info">
                      <h4 className="text-2xl font-bold">
                        <a href="tel:+880 1764818704">+880 1764818704</a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <form>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          className="p-2 appearance-none focus:outline-none w-[100%] h-16 rounded-md border-[1px] pl-8 placeholder-black "
                          placeholder="Full Name"
                          name="name"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          className="p-2 appearance-none focus:outline-none w-[100%] h-16 rounded-md border-[1px] pl-8 placeholder-black "
                          placeholder="Email Address"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <textarea
                        className=" p-2  appearance-none focus:outline-none  w-[100%] h-28 rounded-md border-[1px] pl-8 placeholder-black"
                        placeholder="Write Message"
                        name="message"
                      ></textarea>
                    </div>
                    <div className="mt-4">
                      <button className="flex  py-4 px-12 text-white font-semibold rounded-md bg-indigo-600 hover:bg-black transition ease-in-out duration-600">
                        Send Us Message
                        <ChevronRightIcon className="  h-4 w-4 mt-1 " />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-1/3  ">
              <div>
                <img src={AnimatedImage} alt="AnimatedImage" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
