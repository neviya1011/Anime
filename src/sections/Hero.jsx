import React from "react";
import "../styles/hero.css";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <div
      className="hero h-screen w-screen min-h-[calc(90vh-100px)] bg-black relative flex flex-col md:flex-row">
      <HeroLeft />
      <HeroRight />
    </div>
  );
};

export default Hero;
