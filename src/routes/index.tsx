import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";

import About from "../pages/About";
import Stories from "../pages/Stories";

export const routes = (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<About />} />
      <Route path="/stories" element={<Stories />}></Route>
    </Route>
  </Routes>
);
