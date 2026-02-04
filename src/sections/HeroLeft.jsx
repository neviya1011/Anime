import React from "react";
import arrowRight from "../assets/images/Arrow Right.svg";

const HeroLeft = () => {
  return (
    <div className="Left w-full md:w-[720px] min-h-[calc(90vh-100px)] flex flex-col justify-center px-8">
      <div>

        <button className="text-white text-xs font-bold items-center flex bg-[rgb(56,55,62)] px-[30px] py-[10px] rounded-2xl gap-2">
          <div className="bg-[rgb(122,61,237)] w-[15px] h-[15px] rounded-full text-white"></div>
          <p className="text-white text-[15px]">We Build Web</p>
        </button>

        <p className=" text-white font-bold text-[60px] leading-[1.1] mb-5">
          Transorming
          <br />
          your digital
          <br />
          presence{" "}
        </p>

        <p className="text-white">
          we help fast growing companies build award winning <br /> websites
        </p>

        <button className="bg-white gap-2 flex px-[20px] py-[5px] rounded-2xl items-center mt-[10px]">
          Get in touch{" "}
          <span className="w-[20px]">
            <img src={arrowRight} />
          </span>
        </button>

      </div>
    </div>
  );
};

export default HeroLeft;
