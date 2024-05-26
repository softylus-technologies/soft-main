import { Link } from "gatsby";
import React from "react";

function BlogCard({ item }) {
  return (
    <div
      key={item.id}
      class=" max-w-xl bg-mainDark rounded-lg ease-out duration-300 md:hover:h-[110%] transition-all shadow w-fit  h-full mx-auto relative overflow-hidden group"
    >
      <img class="rounded-t-lg w-full" src={item.imgUrl} alt="" />

      <div class="px-3 py-4">
        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900  ">
          {item.title}
        </h5>

        <p class="mb-3 md:text-base text-sm font-normal text-gray-700 dark:text-gray-400 clamp-4-lines">
          {item.desc}
        </p>
        <Link
          to={item.url}
          className="no-underline md:absolute  md:group-hover:translate-y-[0px]  ease-out duration-300 transition-all inline-flex  md:translate-y-[80px] items-center justify-center px-3 py-2 text-base font-medium text-white bg-main hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto "
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
