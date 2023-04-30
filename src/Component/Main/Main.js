import React from "react";
import { Outlet } from "react-router-dom";
import About from "../About/About";
import Academic from "../Academic/Academic";
import Header from "../Header/Header";

import LeftNav from "../Home/LeftNav";
import Skills from "../Skills/Skills";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Academic></Academic>
      <Skills></Skills>
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <LeftNav></LeftNav>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
