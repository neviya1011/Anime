import React from "react";

const SvgBlock = (props) => {
  return (
    <div className="svg">
      <img src={props.img} className="lg:w-[500px]" />
    </div>
  );
};

export default SvgBlock;
