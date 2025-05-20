import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/educator/NavBar";
import SideBar from "../../components/educator/SideBar";
import { assets } from "../../assets/assets";
import Footer from "../../components/educator/Footer";

const Educator = () => {
  return (
    <div className="text-default min-h-screen bg-white flex flex-col">
      <NavBar />

      <div className="flex flex-1">
        <SideBar />
        <div className="flex-1 p-4 overflow-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Educator;
