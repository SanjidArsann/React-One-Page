import FooterLogo from "../../../public/footer-logo-1.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="mx-28 ">
        <div className="border-b-[2px]">
          <div className="grid grid-cols-2 mb-12 ">
            <div className="mt-12 h-20 pt-3 border-r-[2px] ">
              <img className="h-16" src={FooterLogo} alt="FooterLogo" />
            </div>
            <div className="mt-8 h-20  text-[40px] font-bold">
              <h2 className="ml-36">
                Modern Solutionsd For{" "}
                <span className="text-indigo-600">Creative Agency</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-14 border-b-[2px]">
          <div>
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
            <div className="mt-6 py-2 px-2 rounded-md grid grid-cols-2 gap-2 bg-gray-200">
              <input
                type="text"
                placeholder="Email Address"
                className="pl-2 appearance-none border-none bg-transparent focus:outline-none  placeholder-black"
              />
              <button className="py-2 ml-8 px-4 text-white font-semibold rounded-lg bg-indigo-600 hover:bg-black transition ease-in-out duration-600">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between my-6">
          <div>
            <p className="text-lg font-medium text-gray-500">
              © 2022. All rights reserved design by Webtend
            </p>
          </div>
          <div>
            <ul className="flex justify-end">
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
    </footer>
  );
};

export default Footer;
