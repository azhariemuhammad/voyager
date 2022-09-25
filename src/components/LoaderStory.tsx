import React from "react";

const LoaderStory = () => {
  return (
    <div className="w-full h-24 mt-2">
      <div className="flex animate-pulse flex-row items-center h-full  space-x-5">
        <div className="w-2 mr-5 lg:mr-6 bg-gray-300 h-7 rounded-md "></div>
        <div className="w-full flex flex-col space-y-3">
          <div className="w-80 bg-gray-300 h-6 rounded-md "></div>
          <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
        </div>
      </div>
    </div>
  );
};

export default LoaderStory;
