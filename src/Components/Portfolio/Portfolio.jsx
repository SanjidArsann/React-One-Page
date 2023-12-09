import BorderOne from "../../../public/border-1.png";
import ImageOne from "../../../public/img-1 (2).jpeg";
import ImageTwo from "../../../public/img-2 (1).jpeg";
import ImageThree from "../../../public/img-3 (2).jpeg";
import ImageFour from "../../../public/img-4 (1).jpeg";
import ImageFive from "../../../public/img-5.jpeg";
import ImageSix from "../../../public/img-6.jpeg";

const Portfolio = () => {
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
          <div className="Cart">
            <div className="relative group">
              <img src={ImageOne} alt="ImageOne" />
              <div className="absolute inset-0 bg-indigo-800 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <span className="text-white text-5xl font-semibold transform -translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500">
                  +
                </span>
              </div>
            </div>
            <div className="mt-8">
              <a
                className="text-2xl font-bold hover:text-indigo-600  transition ease-in-out duration-500"
                href="">Dashboard Design </a>
              <br />
              <div className="mt-2 text-lg font-semibold text-gray-500 hover:text-indigo-600 ">
                <a href="">Creative Design</a>
              </div>
            </div>
          </div>
          <div className="Cart">
            <div className="relative group">
              <img src={ImageTwo} alt="ImageTwo" />
              <div className="absolute inset-0 bg-indigo-800 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <span className="text-white text-5xl font-semibold transform -translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500">
                  +
                </span>
              </div>
            </div>
            <div className="mt-8">
              <a
                className="text-2xl font-bold hover:text-indigo-600  transition ease-in-out duration-500"
                href="">Landing Pages </a>
              <br />
              <div className="mt-2 text-lg font-semibold text-gray-500 hover:text-indigo-600 ">
                <a href="">Creative Design</a>
              </div>
            </div>
          </div>
          <div className="Cart">
            <div className="relative group">
              <img src={ImageThree} alt="ImageThree" />
              <div className="absolute inset-0 bg-indigo-800 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <span className="text-white text-5xl font-semibold transform -translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500">
                  +
                </span>
              </div>
            </div>
            <div className="mt-8">
              <a
                className="text-2xl font-bold hover:text-indigo-600  transition ease-in-out duration-500"
                href="">Illustration Design</a>
              <br />
              <div className="mt-2 text-lg font-semibold text-gray-500 hover:text-indigo-600 ">
                <a href="">Creative Design</a>
              </div>
            </div>
          </div>
          <div className="Cart">
            <div className="relative group">
              <img src={ImageFour} alt="ImageFour" />
              <div className="absolute inset-0 bg-indigo-800 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <span className="text-white text-5xl font-semibold transform -translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500">
                  +
                </span>
              </div>
            </div>
            <div className="mt-8">
              <a
                className="text-2xl font-bold hover:text-indigo-600  transition ease-in-out duration-500"
                href="">Dashboard Design </a>
              <br />
              <div className="mt-2 text-lg font-semibold text-gray-500 hover:text-indigo-600 ">
                <a href="">Creative Design</a>
              </div>
            </div>
          </div>
          <div className="Cart">
            <div className="relative group">
              <img src={ImageFive} alt="ImageFive" />
              <div className="absolute inset-0 bg-indigo-800 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <span className="text-white text-5xl font-semibold transform -translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500">
                  +
                </span>
              </div>
            </div>
            <div className="mt-8">
              <a
                className="text-2xl font-bold hover:text-indigo-600  transition ease-in-out duration-500"
                href="">App Development </a>
              <br />
              <div className="mt-2 text-lg font-semibold text-gray-500 hover:text-indigo-600 ">
                <a href="">Creative Design</a>
              </div>
            </div>
          </div>
          <div className="Cart">
            <div className="relative group">
              <img src={ImageSix} alt="ImageSix" />
              <div className="absolute inset-0 bg-indigo-800 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <span className="text-white text-5xl font-semibold transform -translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500">
                  +
                </span>
              </div>
            </div>
            <div className="mt-8">
              <a
                className="text-2xl font-bold hover:text-indigo-600  transition ease-in-out duration-500"
                href="">Web Development </a>
              <br />
              <div className="mt-2 text-lg font-semibold text-gray-500 hover:text-indigo-600 ">
                <a href="">Creative Design</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
