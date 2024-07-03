import { Link } from "gatsby";
import React from "react";

function BlogCard({ item, heightType = "hey" }) {
  return (
    <div
      key={item.id}
      className={heightType + " blog-card w-4/5 bg-mainDark rounded-lg ease-out duration-300 transition-all shadow mx-auto relative overflow-hidden group"}
    >
      <div className="article-thumbnail-container">
      <img className="rounded-t-lg w-full" src={item.imgUrl} alt="" />
      </div>

      <div className="content-preview-container px-3 py-4">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900  ">
          {item.title}
        </h5>

        <p className="mb-3 md:text-base text-sm font-normal text-gray-700 dark:text-gray-400 clamp-4-lines">
          {item.desc}
        </p>
        <Link
          to={item.url}
          className="read-more-btn no-underline md:group-hover:translate-y-[0px]  ease-out duration-300 transition-all inline-flex  md:translate-y-[80px] items-center justify-center px-3 py-2 text-base font-medium text-white bg-main hover:opacity-85 border-0 rounded-full  focus:ring-10 "
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
