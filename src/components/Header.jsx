import React, { useState } from "react";
import "../styles/header.css";
import Logo from "../assets/images/logo.svg";
import { Minus } from "lucide-react";
// import gsap from "gsap";

const Header = () => {
  const [roti_1, setRoti_1] = useState(false);

  // useEffect(() => {
  //   gsap.from(".contact", {
  //     y: -30,
  //     opacity: 0,
  //     scale: 0.9,
  //     duration: 1,
  //     delay: 1,
  //     ease: "power2.out",
  //   });

  //   gsap.from(".logo, .navs", {
  //     y: -30,
  //     opacity: 0,
  //     duration: 1,
  //     delay: 1,
  //     stagger: 0.2,
  //   });
  // }, []);

  return (
    <div className=" w-screen relative">
      <div className="bar w-full h-[100px] px-[60px] flex items-center justify-between bg-[rgb(54,53,62)] text-white">
        <div className="logo flex items-center font-bold text-4xl">
          <img src={Logo} className="w-[60px]" />
          <h1 className="text-[25px]">BYTES</h1>
        </div>

        <nav
          className={`flex gap-10 items-center ${roti_1 ? "nav-open" : "nav-close"}`}
        >
          <a href="Home" className="navs font-bold text-[20px] py-0.5">
            Home
          </a>
          <a href="About Us" className="navs font-bold text-[20px] py-0.5">
            About Us
          </a>
          <a href="Services" className="navs font-bold text-[20px] py-0.5">
            Services
          </a>
          <button className="contact font-bold text-[20px] py-0.5 bg-[rgb(126,61,225)] px-[20px] py-[10px] rounded-4xl outline-none border-none">
            Contact Us
          </button>
        </nav>

        <div
          className="cross relative w-[50px] h-[50px] flex items-center justify-center hidden"
          onClick={() => {
            setRoti_1(!roti_1);
          }}
        >
          <Minus
            color="#ebe5e5"
            strokeWidth={1.5}
            size={50}
            className={`absolute top-0 transition-transform duration-300 ${
              roti_1 ? "rotate-45 " : "rotate-0"
            }`}
          />

          <Minus
            color="#ebe5e5"
            strokeWidth={1.5}
            size={50}
            className={`absolute top-3 transition-transform duration-300 ${
              roti_1 ? "-rotate-45 -translate-y-3" : "rotate-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
