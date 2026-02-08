import React, { useEffect, useRef, useState } from "react";
import "../styles/header.css";
import Logo from "../assets/images/logo.svg";
import { Minus } from "lucide-react";
import gsap from "gsap";

const Header = () => {
  const [roti_1, setRoti_1] = useState(false);
  const navRef = useRef(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setRoti_1(false);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled) {
      gsap.fromTo(
        navRef.current,
        { y: -100 },
        {
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
      );
    }
  }, [scrolled]);

  return (
    <div id="home" className="home w-screen">
      <div
        ref={navRef}
        className={`bar w-full h-[100px] px-[60px] flex items-center justify-between bg-[rgb(54,53,62)] text-white ${scrolled ? "fixed top-0 left-0 navbar-scroll" : "relative"}`}
      >
        <div className="logo flex items-center font-bold text-4xl">
          <img src={Logo} className="w-[60px]" />
          <h1 className="text-[25px]">BYTES</h1>
        </div>

        <nav
          className={`flex gap-10 justify-center items-center ${roti_1 ? "nav-open" : "nav-close"}`}
        >
          <a
            className="navs font-bold text-[20px] py-0.5"
            onClick={() => scrollToSection("home")}
          >
            Home
          </a>
          <a
            className="navs font-bold text-[20px] py-0.5"
            onClick={() => scrollToSection("about")}
          >
            About Us
          </a>
          <a
            className="navs font-bold text-[20px] py-0.5"
            onClick={() => scrollToSection("service")}
          >
            Services
          </a>
          <button
            className="contact font-bold text-[20px] py-0.5 bg-[rgb(126,61,225)] px-[20px] py-[10px] rounded-4xl outline-none border-none"
            onClick={() => scrollToSection("contact")}
          >
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
