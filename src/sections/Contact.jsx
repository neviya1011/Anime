import React from "react";
import "../styles/contact.css";
import Footer from "../components/Footer";
import facebook from "../assets/images/facebook-square-brands.svg";
import linkedIn from "../assets/images/linkedin-brands.svg";
import twitter from "../assets/images/twitter-square-brands.svg";
import instagram from "../assets/images/instagram-square-brands.svg";
import ScrollToTop from "../components/ScrollToTop";

const Contact = () => {
  return (
    <div id="contact" className="contacts w-screen h-screen relative">
      <div className="w-full h-[650px] bg-black flex flex-col justify-evenly items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white font-bold text-3xl">Get in touch</h1>
          <div className="unders"></div>
        </div>

        <div className="flex gap-10">
          <img src={facebook} className="logo w-[50px]" />
          <img src={linkedIn} className="logo w-[50px]" />
          <img src={twitter} className="logo w-[50px]" />
          <img src={instagram} className="logo w-[50px]" />
        </div>

        <form action="">
          <div className="text-white flex flex-col gap-6">
            <div className="flex gap-6">
              <input
                type="text"
                placeholder="Enter your name"
                className=" bg-[rgb(63,61,86)] p-[10px] outline-none border-none"
              />
              <input
                type="text"
                placeholder="Email Id"
                className=" bg-[rgb(63,61,86)] p-[10px] outline-none border-none"
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                className="bg-[rgb(63,61,86)] p-[10px] md:w-[455px] resize-none outline-none border-none"
              ></textarea>
            </div>
          </div>
        </form>

        <button className="bg-white px-[60px] py-[15px] rounded-3xl text-[20px]">
          Submit
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
