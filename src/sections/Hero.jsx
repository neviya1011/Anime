import React from "react";
import "../styles/hero.css";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";


const Hero = () => {



  return (
    <div className="hero w-screen min-h-[calc(90vh-100px)] bg-black relative flex justify-start pl-[200px]">
      <HeroLeft />
      <HeroRight />
    </div>
  );
};

export default Hero;
