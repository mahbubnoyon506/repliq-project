import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="md:mt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
