import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/testimonials.css";
import Card from "../components/Card";
import per1 from "../assets/images/avatar-1.jpg";
import per2 from "../assets/images/avatar-2.jpg";
import per3 from "../assets/images/avatar-3.jpg";
import per4 from "../assets/images/avatar-4.jpg";

const Testimonials = () => {
  const users = [
    {
      photo: per1,
      review:"Working with Bytes was a smooth and professional experience. Their team understood our requirements clearly and delivered exactly what we needed on time.",
      name: "Sarah(TechNova)",
    },
    {
      photo: per2,
      review:"Bytes helped us scale our product faster than we expected. The communication was great and the quality of work was consistently impressive.",
      name: "Daniel(GrowStack)",
    },
    {
      photo: per3,
      review:"From planning to execution, Bytes handled everything flawlessly. Their attention to detail and problem-solving approach really stood out.",
      name: "Emily(CodeWave)",
    },
    {
      photo: per4,
      review:"Choosing Bytes was one of the best decisions for our business. They delivered a reliable solution and supported us even after launch.",
      name: "Aarav(StartEdge)",
    },
  ];

  // ✅ DUPLICATE CONTENT
  const cards = [...users, ...users];
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const animation = gsap.to(slider, {
      xPercent: -50,
      duration: 15,
      ease: "linear",
      repeat: -1,
    });

    slider.addEventListener("mouseenter", () => animation.pause());
    slider.addEventListener("mouseleave", () => animation.play());

    return () => animation.kill();
  }, []);

  return (
    <div id="testimonial" className="w-screen h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="max-w-full text-4xl pt-[30px] font-bold text-center">
          Few good words about us!
        </h1>
        <div className="under"></div>
      </div>

      {/* VIEWPORT */}
      <div className="flex mt-[20px] justify-center items-center">
        <div className="slide w-full overflow-hidden pt-[110px]">
          {/* TRACK */}
          <div ref={sliderRef} className=" flex gap-10 w-max">
            {cards.map((elem, idx) => (
              <Card key={idx} {...elem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
