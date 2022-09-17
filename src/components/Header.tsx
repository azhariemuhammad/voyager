import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

import Avatar from "./Avatar";

const Header = () => {
  const { pathname } = useLocation();
  console.log({ location: location.pathname });

  const activePath = useMemo(() => {
    return {
      blog: pathname === "/",
      about: pathname === "/about",
    };
  }, [pathname]);

  console.log({ activePath });
  return (
    <>
      <Avatar />
      <h1 className="text-4xl my-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Azharie Muhammad
      </h1>
      <ul className="list-none flex my-5">
        <li className="pr-2 text-[#9999]">
          <Link
            to="/"
            className={`my-4 text-lg ${
              activePath.blog && "text-amber-500"
            } hover:text-amber-500`}
          >
            Blog
          </Link>
        </li>
        <li className="px-2 text-[#9999]">
          <Link
            to="/about"
            className={`my-4 text-lg ${
              activePath.about && "text-amber-500"
            } hover:text-amber-500`}
          >
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
      {/* <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <div className="flex-grow border-t border-gray-300"></div>
      </div> */}
    </>
  );
};

export default Header;
