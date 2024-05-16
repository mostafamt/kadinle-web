import Image from "next/image";
import Link from "next/link";
import React from "react";

const PriceLimitCard = ({ text, link, img }) => {
  return (
    <Link
      href={link}
      className="flex-1 h-[220px] relative rounded-lg overflow-hidden"
    >
      <Image
        src={img}
        alt={text}
        className="w-full object-cover h-full"
        height={200}
        width={200}
      />
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold capitalize text-center text-[24px]">
        {text}
      </p>
    </Link>
  );
};

export default PriceLimitCard;
