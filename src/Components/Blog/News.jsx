import PropTypes from "prop-types";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const News = ({ news }) => {
  return (
    <div >
      <div className="group relative border-[1px] rounded-lg h-96 border-solid pt-[40px] pl-[50px] pb-[30px] hover:border-white hover:shadow-top hover:shadow transition-shadow duration-500 ease-in-out ">
        <button className="bg-indigo-600 rounded-lg py-2 px-6 text-lg text-white hover:text-gray-300">Design</button>
        
        <h2 className="text-2xl font-semibold my-5">{news.news_title}</h2>
        <div className=" absolute bottom-20 flex mb-5 text-lg pr-5 text-gray-500 group-hover:text-black">
          <p>{news.news_description}</p>
        </div>
        
        <div className="flex absolute bottom-10 text-indigo-500 font-bold hover:text-indigo-700">
          <a className="underline text-lg " href="">
            Read More
          </a>
          <ArrowRightIcon className="h-4 w-4 mt-2 ml-2" />
        </div>
      </div>
    </div>
    
  );
};

News.propTypes = {
  news: PropTypes.isRequired,
};
export default News;
