    import React, { useEffect, useRef } from "react";
    import gsap from "gsap";
    import blobPurple from "../assets/images/blob purple.png";
    import blobWhite from "../assets/images/blob white.png";
    import blobPink from "../assets/images/blobPink.png";
    import mobile from "../assets/images/mobile.svg";

    const HeroRight = () => {

    const mobileRef = useRef(null);

    useEffect(() => {
        gsap.to(mobileRef.current, {
        y: -20,
        duration: 1.1,
        repeat: -1,
        yoyo: true,
        ease: "power1.out",
        });
    }, []);

    return (
        <div className="Right flex-1 h-full">

        <img src={blobPurple} className="blobP w-[250px] absolute right-0" />
        <img src={blobWhite} className="blobW w-[600px] absolute right-26 top-12"/>
        <img src={blobPink} className="blobPi w-[370px] absolute right-0 top-40"/>
        <img ref={mobileRef} src={mobile} className="mob w-[530px] absolute right-[280px] top-[40px]"/>

        </div>
    );
    };

    export default HeroRight;
