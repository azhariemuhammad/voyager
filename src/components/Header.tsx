import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

import Avatar from "./Avatar";

const Header = () => {
  const { pathname } = useLocation();

  const activePath = useMemo(() => {
    return {
      stories: pathname === "/stories",
      about: pathname === "/",
    };
  }, [pathname]);

  return (
    <>
      <Avatar />
      <h1 className="lg:text-4xl mt-2 md:text-6xl my-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Azharie Muhammad
      </h1>

      <ul className="list-none flex lg:mt-8 md:mt-16 md:mb-24 lg:mb-16">
        <li className="md:pr-4 lg:pr-2 text-[#9999]">
          <Link
            to="/"
            className={`my-4 lg:text-base md:text-4xl ${
              activePath.about && "text-amber-500"
            } hover:text-amber-500`}
          >
            About
          </Link>
        </li>
        <li className="md:px-4 lg:px-2 text-[#9999]">
          <Link
            to="/stories"
            className={`my-4 lg:text-base md:text-4xl ${
              activePath.stories && "text-amber-500"
            } hover:text-amber-500`}
          >
            Stories
          </Link>
        </li>
        {/* <li className="md:px-4 lg:px-2 text-[#9999]">
          <Link
            to="/stories"
            className={`my-4 lg:text-base md:text-4xl ${
              activePath.stories && "text-amber-500"
            } hover:text-amber-500`}
          >
            Tweets
          </Link>
        </li> */}
      </ul>
    </>
  );
};

export default Header;
