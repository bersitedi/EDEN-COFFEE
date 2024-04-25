import React from "react";
import MainLayout from "../../components/MainLayout";
import HeroPage from "./container/HeroPage";
import Sidebar from "./container/Sidebar";

const HomePage = () => {
  return (
    <MainLayout>
      <HeroPage />
      <Sidebar />
    </MainLayout>
  );
};

export default HomePage;
