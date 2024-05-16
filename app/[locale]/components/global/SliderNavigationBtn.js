"use client";
import Image from "next/image";
import React from "react";

const arrow = "https://kadinle.com/media/images/whiteArrow.png";

const SliderNavigationBtn = ({ onClick, rotate,btnClassName }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded-full bg-opink w-[32px] h-[32px] min-w-[32px] z-10 flex items-center justify-center ${
        rotate && "rotate-180"
      } ${btnClassName}`}
    >
      <Image
        className="w-2 md:w-none rtl:rotate-180 object-contain"
        src={arrow}
        height={16}
        width={12}
        alt="arrow"
      />
    </button>
  );
};

export default SliderNavigationBtn;
