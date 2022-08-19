import React from "react";
import { hydrateRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import "./style.css";
import App from "./App";

const container = document.getElementById("app-root");
hydrateRoot(
  container,
  <BrowserRouter>
    <App />,
  </BrowserRouter>
);
