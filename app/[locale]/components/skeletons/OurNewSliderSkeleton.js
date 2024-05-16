"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderBtnSkeleton from "./SliderBtnSkeleton";
import OurNewCardSkeleton from "./OurNewCardSkeleton";

const OurNewSliderSkeleton = () => {
  return (
    <div className="flex flex-col justify-center mt-[60px]">
      <div className="container-lrg w-full flex items-center justify-between">
        <div className="flex flex-col space-y-1 self-center mb-[18px]">
          <div className="h-11 w-[100px] bg-gray-200 animate-pulse rounded"></div>
          <div className="bg-gray-200 w-[60px] h-[8px] animate-pulse rounded"></div>
        </div>
        <div className="w-20 h-7 bg-gray-200 animate-pulse rounded"></div>
      </div>
      <div className="relative bg-opink pb-[60px]">
        <div className="flex items-center container-v-lrg w-[100%] max-w-[100%]">
          <SliderBtnSkeleton />
          <div className="flex flex-col container-lrg w-[100%] pt-5">
            <div className="bg-gray-200 mx-auto md:mx-0 mb-2 h-7 w-[250px] rounded animate-pulse"></div>
            <div className="w-[100%]">
              <Swiper
                dir="ltr"
                spaceBetween={20}
                direction="horizontal"
                slidesPerGroup={6}
                slidesPerView={6}
                breakpoints={{
                  640: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  1024: { slidesPerView: 6 },
                }}
                className="mySwiper"
                showsPagination={true}
              >
                {Array(8)
                  .fill()
                  .map((_, idx) => (
                    <SwiperSlide key={idx}>
                      <OurNewCardSkeleton />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
          <SliderBtnSkeleton rotate />
        </div>
        <div className="flex justify-center items-center gap-2 relative bottom-[10px] animate-pulse">
          {Array(5)
            .fill()
            ?.map((_, index) => {
              return (
                <div
                  key={index}
                  className={
                    index === 0
                      ? "h-3 w-[40px] bg-gray-200 rounded-xl cursor-pointer"
                      : "h-3 w-3 bg-gray-200 rounded-xl cursor-pointer"
                  }
                ></div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default OurNewSliderSkeleton;
