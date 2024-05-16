import React from "react";
import PriceLimitCard from "./PriceLimitCard";
import { SectionTitle } from "../global/SectionTitle";

const PriceLimit = ({ t }) => {
  const DATA = [
    {
      img: "https://kadinle.com/media/images/girl6.png",
      link: "/price-less-15",
      text: t("lessThanFifteen"),
    },
    {
      img: "https://kadinle.com/media/images/girl7.png",
      link: "/price-less-25",
      text: t("lessThanTwentyFive"),
    },
    {
      img: "https://kadinle.com/media/images/mainImage.png",
      link: "/price-less-35",
      text: t("lessThanThirtyFive"),
    },
  ];

  return (
    <div className="w-full px-2 mb-8">
      <SectionTitle title={t("lessThan")} />
      <div className="container w-full flex items-center gap-[25px]">
        {DATA.map((item) => (
          <PriceLimitCard key={item.text} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PriceLimit;
