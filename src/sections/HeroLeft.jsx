import React from "react";
import arrowRight from "../assets/images/Arrow Right.svg";

const HeroLeft = () => {
  return (
    <div className="Left flex-1 min-h-[calc(90vh-100px)] flex flex-col justify-center items-center px-6 md:px-8">
      <div className="web">
        <button className="build text-white text-xs font-bold items-center w-fit flex bg-[rgb(56,55,62)] px-[30px] py-[10px] mb-[15px] rounded-2xl gap-2">
          <div className="bg-[rgb(122,61,237)] w-[15px] h-[15px] rounded-full text-white"></div>
          <p className=" text-white text-[15px]">We Build Web</p>
        </button>

        <div className="content">
          <p className="max-w-[300px] text-white font-bold text-[50px] leading-[1.1] mb-5">
            Transforming
            your digital
            presence
          </p>

          <p className="text-white max-w-[400px]">
            we help fast growing companies build award winning websites
          </p>

          <button className="touch  bg-white w-fit gap-2 flex px-[20px] py-[7px] rounded-2xl items-center mt-[30px]">
            Get in touch
            <span className="w-[20px]">
              <img src={arrowRight} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
