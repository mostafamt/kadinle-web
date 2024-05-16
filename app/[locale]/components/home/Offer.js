import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Offer = ({ offer, languageId }) => {
  const content = offer?.offer_content?.find(
    (c) => c?.language_id === languageId
  );

  return (
    <div className="container !my-4">
      <Link
        href={`/category/offer/${offer?.id}`}
        className="offerBanner relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#000080b3] cursor-pointer overflow-hidden text-white rounded-xl h-60 flex items-center justify-center"
      >
        <span className="absolute top-4 ltr:left-4 rtl:right-4 animate-pulse">
          <Image
            src="https://kadinle.com/media/images/flash.png"
            alt="flash icon"
            className="w-[120px] h-[150px] mx-auto"
            height={150}
            width={120}
          />
        </span>
        <div className="chippyBannerOffer bg-yellow-400 absolute z-[11] w-1/3 min-w-[200px] h-full md:text-[30px] lg:text-[50px] flex items-center ltr:justify-end lg:justify-center px-4 top-0 ltr:right-0 rtl:left-0 opacity-90 rtl:rotate-180">
          <span className="bg-clip-text uppercase text-center text-transparent bg-gradient-to-r from-black to-violet-500 font-extrabold ltr:lg:ml-6 rtl:lg:mr-6 rtl:rotate-180">
            {content?.title?.split(" ")?.map((item) => (
              <span key={item} className="block">
                {" "}
                {item}
              </span>
            ))}
          </span>
        </div>
        <div className="relative z-10 w-2/3 ltr:pr-14 rtl:pl-14">
          <h2 className="text-3xl lg:text-5xl">{content?.description}</h2>
        </div>
      </Link>
    </div>
  );
};
