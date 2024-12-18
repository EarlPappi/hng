import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="MainLayout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
