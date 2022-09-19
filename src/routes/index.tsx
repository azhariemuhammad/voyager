import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";

import About from "../pages/About";
import Blog from "../pages/Blog";

export const routes = (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<About />} />
      <Route path="/stories" element={<Blog />}></Route>
    </Route>
  </Routes>
);
