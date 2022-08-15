import React from "react";

import Avatar from "./Avatar";

const Header = () => {
  return (
    <>
      <Avatar />
      <h1 className="text-4xl my-4 font-bold">Azharie</h1>
      <ul className="list-none flex my-5">
        <li className="pr-2">
          <a href="/" className="text-lg my-4">
            About
          </a>
        </li>
        <li className="px-2 text-[#9999]">
          <a href="/blog" className="text-lg my-4">
            Blog
          </a>
        </li>
        <li className="px-2 text-[#9999]">
          <a href="#" className="text-lg my-4">
            Stats
          </a>
        </li>
      </ul>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
    </>
  );
};

export default Header;
