import { useEffect, useState } from 'react';
import BorderOne from '../../../public/border-1.png';
import News from './News';
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
useEffect(() =>{
    fetch('json/news.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
},[])
    return (
        <main className=" relative">
      <section className="pt-28 mb-20">
        <div>
          <h3 className="text-center pt-3 text-indigo-600 font-semibold text-2xl ">
          Articles News
          </h3>

          <div className="flex justify-center">
            <img
              className="absolute top-[110px] w-48 h-18"
              src={BorderOne}
              alt="BorderOne"
            />
          </div>
          <h2 className="text-3xl  lg:text-5xl  mt-10  mb-8 font-bold text-center">Latest News & Blogs</h2>
          <p className='text-xl font-semibold text-center text-sans-serif text-gray-400'>Professional Design Agency to provide solutions</p>
        </div>
        <div className="grid grid-cols-3 gap-8 mx-24 mt-16">
            {
                blogs.map(news => <News
                    key= {news.id}
                    news={news}
                ></News> )
            }
            
        </div>
        <div className='flex justify-center'>
        <button className="flex mt-10 py-4 px-12 text-white font-semibold rounded-lg bg-indigo-600 hover:bg-black transition ease-in-out duration-600">
              Let<span>{`'`}</span>s Talk Us
              <ChevronRightIcon className="  h-4 w-4 mt-1 " />
            </button>
        </div>
        

      </section>
    </main>
    );
};

export default Blog;