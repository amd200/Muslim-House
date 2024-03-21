import React from "react";
import TitleSection from "../Components/Home/TitleSection";
import AzkarSection from "../Components/Home/AzkarSection";
import Ayah from "../Components/Home/Ayah";
import TitleWebsite from "../Components/Home/TitleWebsite";
import Services from "../Components/Home/Services";
function Home() {
  return (
    <div className="home-page">
      <div className="container">
        <TitleWebsite />
        <Services />
        <Ayah />
        <AzkarSection />
      </div>
    </div>
  );
}

export default Home;
