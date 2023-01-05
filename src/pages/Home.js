import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import AboutComponent from "../components/AboutComponent";
import Services from "../components/Services";
const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <AboutComponent />
      <Services />
    </div>
  );
};

export default Home;
