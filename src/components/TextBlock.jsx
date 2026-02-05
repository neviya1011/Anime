import React, { useEffect, useRef } from "react";
import SvgBlock from "./SvgBlock";
import gsap from "gsap";

const TextBlock = (props) => {

    const bounceRef = useRef(null);

    useEffect(() => {
    gsap.from(bounceRef.current,{
        y:-30,
        duration:1.5,
        repeat:-1,
        yoyo:true,
    })
  },[])


  return (
    <div className="w-full max-w-7xl flex flex-col justify-center items-center relative">
      <div className="bounce w-screen flex items-end justify-center z-10 absolute h-full right-60 top-20">
        <img ref={bounceRef} src={props.back} className="md:min-w-[200px] opacity-45"/>
      </div>

      <div className="flex flex-col z-20">
        <div className=" w-screen flex items-center justify-evenly">
          <div className="textblock">
            <button className="flex gap-2 items-center w-fit px-[14px] py-[10px] mb-[10px] rounded-3xl bg-[rgb(54,53,63)]">
              <div className="w-[15px] h-[15px] rounded-full bg-[rgb(119,68,205)]"></div>
              <p className="text-[15px] font-bold">{props.btn}</p>
            </button>

            <div className="content lg:w-[600px] md:w-[500px]">
              <h1 className="lg:text-[70px] md:text-[50px] font-bold leading-tight">
                {props.head1}
              </h1>
              <p className="lg:text-[22px] md:text-[20px] text-[rgb(52,53,64)] font-bold">
                {props.txt}
              </p>
            </div>
          </div>

          <div className="z-20">
            <SvgBlock img={props.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBlock;
