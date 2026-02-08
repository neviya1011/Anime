import React, { useEffect, useRef } from "react";
import "../styles/about.css";
import wave from "../assets/images/waves.svg";
import rocket from "../assets/images/rocket image.png";
import man from "../assets/images/human.svg";
import hand from "../assets/images/hand.svg";
import gsap from "gsap";

const About = () => {
  const rocketRef = useRef(null);

  useEffect(() => {
    gsap.to(rocketRef.current, {
      y: -40,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div id="about" className="aboutSec relative w-screen">
      <img src={wave} className="block w-full -mt-[1px] h-auto" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">

        {/* LEFT SECTION */}
        <div className="w-full md:w-1/2 relative">
          <div className="about">
            <h1 className="text-5xl font-bold mt-6 md:text-[44px]">
              About Us
              <div className="underline mt-2"></div>
            </h1>
          </div>

          <div className="relative mt-10 flex justify-center">
            <img
              ref={rocketRef}
              src={rocket}
              className="rocket max-w-[320px] w-full"
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="content w-full relative">
          <img
            src={man}
            className=" man w-[210px] absolute lg:-top-97 lg:right-50 md:right-10 md:-top-[300px]"
          />

          <p className=" words text-[rgb(85,93,100)] text-2xl font-bold max-w-[460px] md:text-[20px] md:absolute md:top-1 lg:text-2xl lg:absolute lg:right-[200px] lg:-top-[95px]">
            We help our customers to tell about themselves, to grow and stand
            out in an increasingly competitive digital world, through creative
            projects that are able to attract and involve, creating strategic
            value.
          </p>

          <div className="pallete flex gap-6 mt-8 md:absolute md:top-[140px] lg:absolute lg:right-[555px] lg:top-[80px] ">
            <div className="w-[30px] h-[30px] rounded-full bg-[rgb(130,61,229)] md:w-[20px] md:h-[20px] md:rounded-full"></div>
            <div className="w-[30px] h-[30px] rounded-full bg-[rgb(226,165,244)] md:w-[20px] md:h-[20px] md:rounded-full"></div>
            <div className="w-[30px] h-[30px] rounded-full bg-[rgb(9,15,18)] md:w-[20px] md:h-[20px] md:rounded-full"></div>
          </div>
        </div>

        <img
          src={hand}
          className="hand absolute bottom-0 right-0 md:w-[180px] lg:w-[300px]"
        />
      </div>
    </div>
  );
};

export default About;
