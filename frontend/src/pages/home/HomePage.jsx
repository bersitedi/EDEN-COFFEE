import React from "react";
import MainLayout from "../../components/MainLayout";
import HeroPage from "./container/HeroPage";
import Aboutus from "./container/Aboutus";
import Sidebar from "./container/Sidebar";

const HomePage = () => {
  return (
    <MainLayout>
      <HeroPage />
      <Sidebar />
      <Aboutus />
    </MainLayout>
  );
};

export default HomePage;
