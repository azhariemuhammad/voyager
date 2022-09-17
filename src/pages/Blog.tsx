import React from "react";
import dayjs from "dayjs";
import useGetMediumRSS from "../hooks/useGetMediumRSS";

const Blog = () => {
  const { data, error } = useGetMediumRSS();

  console.log({ data, error });
  const feedItems = data?.items || [];

  return (
    <div className="mt-8">
      {feedItems.map((item, idx) => {
        const index = idx + 1;
        return (
          <a
            className="flex group"
            href={item.link}
            target="_blank"
            key={item.guid}
          >
            <div className="mr-16 text-amber-500">{index}</div>
            <div className="w-full">
              <div className="title text-md group-hover:text-amber-500 font-semibold">
                {item.title}
              </div>
              <div>
                <p className="text-xs text-gray-600">
                  {dayjs(item.pubDate).format("MMMM DD, YYYY")}
                </p>
              </div>

              <div className="w-full relative flex py-5 items-center mt-5">
                <div className="flex-grow border-t border-gray-300"></div>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Blog;
