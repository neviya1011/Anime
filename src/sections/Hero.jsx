import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/hero.css";
import blobPurple from "../assets/images/blob purple.png";
import blobWhite from "../assets/images/blob white.png";
import blobPink from "../assets/images/blobPink.png";
import arrowRight from "../assets/images/Arrow Right.svg";
import mobile from "../assets/images/mobile.svg"

const Hero = () => {

  const mobileRef = useRef(null)

  useEffect(() => {
    gsap.to(mobileRef.current, {
      y:-20,
      duration:1.1,
      repeat:-1,
      yoyo:true,
      ease:"power1.out"
    })
  },[])

  return (
    <div className="w-screen min-h-[calc(90vh-100px)] bg-black relative flex justify-start pl-[200px]">
      <div>
        <img src={blobPurple} className="w-[250px] absolute right-0" />
        <img src={blobWhite} className="w-[600px] absolute right-26 top-12" />
        <img src={blobPink} className="w-[370px] absolute right-0 top-40" />
        <img ref = {mobileRef} src={mobile} className="w-[530px] absolute right-[280px] top-[40px] float" />
      </div>

      <div className="w-[800px] flex flex-col items-start justify-center">

        <button className="text-white text-xs font-bold items-center flex bg-[rgb(56,55,62)] px-[30px] py-[10px] rounded-2xl gap-2">
          <div className="bg-[rgb(122,61,237)] w-[10px] h-[10px] rounded-full text-white"></div>
          <p className="text-white">We Build Web</p>
        </button>

        <div>
          <p className=" text-white font-bold text-[60px] leading-[1.1] mb-5">Transorming<br/>your digital<br/>presence </p>
          <p className="text-white">we help fast growing companies build award winning <br /> websites</p>
          <button className="bg-white gap-2 flex px-[20px] py-[5px] rounded-2xl items-center mt-[10px]">Get in touch <span className="w-[20px]"><img src={arrowRight} /></span></button> 
        </div>

      </div>
    </div>
  );
};

export default Hero;
