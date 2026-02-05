import React, { useEffect, useRef } from "react";
import "../styles/services.css";
import TextBlock from "../components/TextBlock";
import design from "../assets/images/Design.svg";
import develop from "../assets/images/Develope.svg";
import support from "../assets/images/Support.svg";
import tube from "../assets/images/3dtube.png";
import triangle from "../assets/images/3dtriangle.png";
import capsule from "../assets/images/3dcapsule.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const blocksRef = useRef([]);
  const arrowRef = useRef(null);

  const content = [
    {
      btn: "Design",
      head1: "We build award winning designs",
      txt: "We help clients to build great designs to attract more customers",
      img: design,
      back:tube,
    },
    {
      btn: "Develop",
      head1: "We build high quality Web & App",
      txt: "We build appropriate solution to develop your website & app",
      img: develop,
      back:triangle,
    },
    {
      btn: "Support",
      head1: "We provide support for your digital presence",
      txt: "We stay on hand to provide technical support and maintenance",
      img: support,
      back:capsule,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hide all blocks initially
      gsap.set(blocksRef.current, { opacity: 0, y: 50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
        },
      });

      // Arrow shrink
      tl.to(arrowRef.current, {
        scaleY: 0.3,
        transformOrigin: "top",
        duration: 1,
      });

      // Blocks appear one by one
      blocksRef.current.forEach((block) => {
        tl.to(block, { opacity: 1, y: 0, duration: 1 })
          .to(block, { opacity: 0, y: -50, duration: 1 }, "+=0.5");
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-screen h-screen bg-black text-white flex justify-center"
    >
      <div className="flex flex-col items-center">
        {/* Heading */}
        <div className="mt-8 text-center flex flex-col items-center">
          <h1 className="text-4xl font-bold">What We Do</h1>
          <div className="bord"></div>
        </div>

        {/* Arrow */}
        <div ref={arrowRef} className="h-[200px] flex flex-col items-center mt-6">
          <div className="arrow-line"></div>
          <div className="arrow-tri"></div>
        </div>

        {/* Blocks */}
        <div className="relative h-[300px] w-full flex justify-center items-start">
          {content.map((elem, i) => (
            <div
              key={i}
              ref={(el) => (blocksRef.current[i] = el)}
              className="absolute -top-[100px]"
            >
              <TextBlock {...elem} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
