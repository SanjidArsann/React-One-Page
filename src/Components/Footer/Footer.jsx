import FooterLogo from "../../../public/footer-logo-1.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto">
      <div className=" lg:mx-28 md:mx-20 ">
        <div className="border-b-[2px]">
          <div className="grid lg:grid-cols-2 mb-12 ">
            <div className="mt-12 h-20 mb-5 lg:mb-0 pl-10 lg:pl-0 lg:pt-3 lg:border-r-[2px] lg:border-0 border-b-[2px] ">
              <img className="h-16" src={FooterLogo} alt="FooterLogo" />
            </div>
            <div className="lg:mt-12  h-20 lg:text-3xl xl:text-[40px] font-bold">
              <h2 className="lg:ml-28">
                Modern Solutionsd For{" "}
                <span className="text-indigo-600">Creative Agency</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2  gap-10 lg:gap-2 mt-14 border-b-[2px]">
          <div >
            <h2 className="text-2xl font-bold">Services</h2>
            <ul className="my-6 text-[18px] font-semibold">
              <li className="mb-6 text-gray-400 hover:text-indigo-600 hover:underline">
                <a href="#">UI/UX Design</a>
              </li>
              <li className="mb-6 text-gray-400 hover:text-indigo-600 hover:underline">
                <a href="#">Web Development</a>
              </li>
              <li className="mb-6 text-gray-400 hover:text-indigo-600 hover:underline">
                <a href="#">SEO Optimization</a>
              </li>
              <li className="mb-6 text-gray-400 hover:text-indigo-600 hover:underline">
                <a href="#">Product Design</a>
              </li>
              <li className="mb-6 text-gray-400 hover:text-indigo-600 hover:underline">
                <a href="#">Logo Design</a>
              </li>
              <li className="mb-6 text-gray-400 hover:text-indigo-600 hover:underline">
                <a href="#">Brand Design</a>
              </li>
              <a href="#"></a>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Links</h2>
            <ul className="my-6 text-[18px] font-semibold">
              <li className="mb-6 text-gray-400 hover:text-indigo-600 hover:underline">
                <a href="#">UI/UX Design</a>
              </li>
              <li className="mb-6 text-gray-400 hover:text-indigo-600 hover:underline">
                <a href="#">Web Development</a>
              </li>
              <li className="mb-6 text-gray-400 hover:text-indigo-600 hover:underline">
                <a href="#">SEO Optimization</a>
              </li>
              <li className="mb-6 text-gray-400 hover:text-indigo-600 hover:underline">
                <a href="#">Product Design</a>
              </li>
              <li className="mb-6 text-gray-400 hover:text-indigo-600 hover:underline">
                <a href="#">Logo Design</a>
              </li>
              <li className="mb-6 text-gray-400 hover:text-indigo-600 hover:underline">
                <a href="#">Brand Design</a>
              </li>
              <a href=""></a>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Follow</h2>
            <ul className="my-6 text-[18px] font-semibold">
              <li className="mb-6 text-gray-400 hover:text-indigo-600 hover:underline">
                <a href="#">UI/UX Design</a>
              </li>
              <li className="mb-6 text-gray-400 hover:text-indigo-600 hover:underline">
                <a href="#">Web Development</a>
              </li>
              <li className="mb-6 text-gray-400 hover:text-indigo-600 hover:underline">
                <a href="#">SEO Optimization</a>
              </li>
              <li className="mb-6 text-gray-400 hover:text-indigo-600 hover:underline">
                <a href="#">Product Design</a>
              </li>
              <li className="mb-6 text-gray-400 hover:text-indigo-600 hover:underline">
                <a href="#">Logo Design</a>
              </li>
              <li className="mb-6 text-gray-400 hover:text-indigo-600 hover:underline">
                <a href="#">Brand Design</a>
              </li>
              <a href="#"></a>
            </ul>
          </div>
          <div>
            <h2 className="text-[40px] font-bold">Subscribe Our Newsletter</h2>
            <p className="mt-6 text-[18px] text-gray-400 font-medium">
              Natus errorsit voluptatem accusa dolore mque quae{" "}
              <a href="#">abillo inventore verita</a> achitec beatae vitae dicta
              sunt explicabo.
            </p>
            <div className="my-6  py-2 px-2 rounded-md grid grid-cols-2 gap-2 bg-gray-200">
              <input
                type="text"
                placeholder="Email Address"
                className="pl-2 appearance-none border-none bg-transparent focus:outline-none  placeholder-black"
              />
              <button className="py-2 2xl:ml-8 px-4 text-white font-semibold rounded-lg bg-indigo-600 hover:bg-black transition ease-in-out duration-600">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-between my-12">
          <div>
            <p className="text-lg text-center font-medium text-gray-500">
              © 2022. All rights reserved design by Webtend
            </p>
          </div>
          <div>
            <ul className="flex justify-center items-center lg:justify-between m-4 lg:mt-0 ">
              <li className="pr-10 text-lg font-medium text-gray-500 hover:text-indigo-600">
                <a href="#">Settings & Privacy</a>
              </li>
              <li className="pr-10 text-lg font-medium text-gray-500 hover:text-indigo-600">
                <a href="#">Faqs</a>
              </li>
              <li className="pr-10 text-lg font-medium text-gray-500 hover:text-indigo-600">
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
