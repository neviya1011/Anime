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
    <div id="about" className="w-screen relative flex flex-col items-start justify-center">
      <img src={wave} className="w-full -mt-1" />

      <div className="about w-full mx-auto px-6 flex items-center justify-center">
        {/* LEFT SECTION */}
        <div className="w-1/2 relative flex flex-col justify-center items-center">
          <div className="about flex justify-center items-start">
            <h1 className="text-5xl font-bold mt-6 md:text-[44px]">
              About Us
              <div className="underline mt-2"></div>
            </h1>
          </div>

          <div className="relative mt-16 flex justify-center items-start">
            <img
              ref={rocketRef}
              src={rocket}
              className="rocket max-w-[400px] w-full"
            />
          </div>
        </div>

        {/* RIGHT SECTION */}

        <div className="content w-1/2 h-full relative flex flex-col justify-center items-center">
          <div className="content flex flex-col justify-center items-end">
            <img src={man} className=" man lg:w-[210px] lg:absolute lg:-top-[300px] md:w-[190px] md:absolute md:-top-[270px]" />

            <div className="txt flex flex-col justify-center items-start">
              <p className="text-[rgb(85,93,100)] lg:text-2xl font-bold max-w-[460px] flex justify-center items-center md:text-[20px]">
                We help our customers to tell about themselves, to grow and
                stand out in an increasingly competitive digital world, through
                creative projects that are able to attract and involve, creating
                strategic value.
              </p>

              <div className="flex gap-6 mt-8">
                <div className="w-[30px] h-[30px] rounded-full bg-[rgb(130,61,229)] md:w-[20px] md:h-[20px] md:rounded-full"></div>
                <div className="w-[30px] h-[30px] rounded-full bg-[rgb(226,165,244)] md:w-[20px] md:h-[20px] md:rounded-full"></div>
                <div className="w-[30px] h-[30px] rounded-full bg-[rgb(9,15,18)] md:w-[20px] md:h-[20px] md:rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <img
          src={hand}
          className="hand absolute bottom-0 right-0 md:w-[170px] lg:w-[250px]"
        />
      </div>
    </div>
  );
};

export default About;
