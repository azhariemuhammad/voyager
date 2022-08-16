import React from "react";
import { Link } from "react-router-dom";

import Avatar from "./Avatar";

const Header = () => {
  return (
    <>
      <Avatar />
      <h1 className="text-4xl my-4 font-bold">Azharie Muhammad</h1>
      <ul className="list-none flex my-5">
        <li className="pr-2 text-[#9999]">
          <Link to="/" className="my-4 text-amber-500 hover:text-amber-500">
            Blog
          </Link>
        </li>
        <li className="px-2 text-[#9999]">
          <Link to="/about" className="my-4">
            About
          </Link>
        </li>
        {/* <li className="px-2 text-[#9999]">
          <a href="#" className="my-4 hover:text-amber-500">
            Tweets
          </a>
        </li>
        <li className="px-2 text-[#9999]">
          <a href="#" className="my-4">
            Projects
          </a>
        </li> */}
      </ul>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
    </>
  );
};

export default Header;
