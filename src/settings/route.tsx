import React from "react";
import { Routes, Route } from "react-router-dom";

import Top from "../page/top/top.tsx";
import About from "../page/about/about.tsx";
import Demo from "../page/demo/demo.tsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/about" element={<About />} />
      <Route path="/demo" element={<Demo />} />
    </Routes>
  );
};

export default Router;
