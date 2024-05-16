"use client";

import React, { useState } from "react";

import Image from "next/image";
import { useTranslations } from "next-intl";
import CloseIcon from "../Icons/CloseIcon";
import { ShopNowBtn } from "../global/ShopNowBtn";
import { PlayCircleIcon } from "../Icons/PlayCircleIcon";

export const Banner = () => {
  const t = useTranslations();
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <main className="relative max-h-[700px] text-white w-full overflow-hidden ">
      {openVideo ? (
        <div className=" w-full relative bg-gray-700">
          <button
            className="absolute top-4 ltr:left-4 rtl:right-4 z-10 h-10 w-10 flex items-center justify-center bg-[#00000050] transition-colors hover:bg-[#ffffff60] rounded-full"
            onClick={() => setOpenVideo(false)}
          >
            <CloseIcon />{" "}
          </button>
          <video
            src={`https://kadinle.com/media/static/kadinle_home.mp4`}
            controls
            className="max-w-full object-contain mx-auto  object-center h-full"
          />
        </div>
      ) : (
        <div className="flex transition-all duration-1000 z-50">
          <div className="w-full relative">
            <div className="w-full  ">
              <Image
                className="object-cover object-top w-full"
                src={`https://kadinle.com/media/static/general_1920_1080.jpg`}
                alt="kadinle home banner "
                height={450}
                width={1200}
                priority
              />
            </div>

            <div className="absolute flex top-1/2 -translate-y-1/2 ltr:left-[10vw] rtl:right-[10vw] justify-between w-full px-5">
              <div className="flex gap-10 items-center">
                <div className="flex flex-col space-y-2 md:space-y-2 lg:space-y-4">
                  <h1 className="flex capitalize flex-col gap-2">
                    <span className="text-[30px] capitalize md:text-[45px] lg:text-[60px] italic font-bold lg:leading-[2.25rem]">
                      60%
                    </span>
                    <span className="text-[25px] capitalize md:text-[30px] lg:text-4xl max-w-[320px] font-bold leading-[30px] md:leading-[35px] lg:leading-[50px]">
                      {t("sale_msg")}
                    </span>
                  </h1>
                  <div className="flex gap-2 md:gap-4 items-center">
                    <ShopNowBtn />
                    <button
                      onClick={() => setOpenVideo(true)}
                      className="flex gap-2 items-center cursor-pointer uppercase border hover:bg-primary  px-2 py-2 2xl:w-[190px] justify-center 2xl:py-3 text-[12px] 2xl:text-[16px] rounded-full"
                    >
                      <PlayCircleIcon className="text-primary w-7 h-7 lg:h-9 lg:w-9 fill-white" />
                      <span className="">{t("Play_video")}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
