import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "../pages/About";
import Blog from "../pages/Blog";

export const routes = (
  <Routes>
    {/* <Route path="/" element={<About />} /> */}
    <Route path="/" element={<Blog />} />
  </Routes>
);
