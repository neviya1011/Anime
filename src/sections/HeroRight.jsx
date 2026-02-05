import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import blobPurple from "../assets/images/blob purple.png";
import blobWhite from "../assets/images/blob white.png";
import blobPink from "../assets/images/blobPink.png";
import mobile from "../assets/images/mobile.svg";

const HeroRight = () => {
  const mobileRef = useRef(null);

  useEffect(() => {
    gsap.to(mobileRef.current, {
      y: -40,
      duration: 1.1,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
    });
  }, []);

  return (
    <div className="Right flex-1 relative min-h-[500px]">
      <img src={blobPurple} className="absolute w-[clamp(200px,15vw,500px)] right-0" />
      <img
        src={blobWhite}
        className="absolute w-[clamp(350px,35vw,600px)] right-0 top-[50px]"
      />
      <img
        src={blobPink}
        className="absolute w-[clamp(300px,23vw,600px)] right-0 top-[180px] z-10"
      />
      <img
        ref={mobileRef}
        src={mobile}
        className="mob absolute w-[clamp(420px,40vw,530px)] h-[450px] flex items-center top-[70px] z-20"/>
    </div>
  );
};

export default HeroRight;
