"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductSkeleton = () => {
  return (
    <div>
      <div className="flex gap-[65px] mt-5">
        <div className="w-[283px] md:w-[319px] lg:w-[360px] xl:w-[390px] relative">
          <div className="absolute right-[10px] top-[10px] flex flex-col gap-2 z-[1]">
            <div className="w-[35px] h-[35px] rounded bg-gray-400 animate-pulse" />
            <div className="w-[35px] h-[35px] rounded bg-gray-400 animate-pulse" />
          </div>
          <Swiper
            dir="ltr"
            direction="horizontal"
            spaceBetween={10}
            slidesPerView={1}
            className="mySwiper"
            showsPagination={true}
          >
            {Array(5)
              .fill()
              .map((_, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-gray-200 w-full animate-pulse h-[500px] lg:h-[600px]"></div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className="flex flex-col justify-between w-1/2">
          <div className="flex items-center gap-[55px] mb-1">
            <div className="bg-gray-200 w-4/5 rounded h-10 animate-pulse"></div>
            <div className="bg-gray-200 w-[15%] h-8 rounded-full animate-pulse"></div>
          </div>

          <div className="bg-gray-200 w-[150px] rounded animate-pulse h-8 mb-2"></div>
          <div className="bg-gray-200 w-[100px] rounded animate-pulse h-3"></div>
          <div className="flex items-center gap-6 mt-[10px]">
            <div className="bg-gray-200 w-[50px] rounded animate-pulse h-5"></div>
            <div className="bg-gray-200 w-[100px] rounded animate-pulse h-5"></div>
          </div>

          <div className="flex gap-9 my-4">
            <div className="bg-gray-200 w-12 h-12 rounded animate-pulse"></div>
            <div className="bg-gray-200 w-12 h-12 rounded animate-pulse"></div>
            <div className="bg-gray-200 w-12 h-12 rounded animate-pulse"></div>
            <div className="bg-gray-200 w-12 h-12 rounded animate-pulse"></div>
          </div>

          <div className="flex gap-5 items-center">
            <div className="flex gap-3">
              <div className="bg-gray-200 w-12 h-12 rounded animate-pulse"></div>
              <div className="bg-gray-200 w-12 h-12 rounded animate-pulse"></div>
              <div className="bg-gray-200 w-12 h-12 rounded animate-pulse"></div>
              <div className="bg-gray-200 w-12 h-12 rounded animate-pulse"></div>
            </div>
            <div className="bg-gray-200 w-[150px] h-5 rounded animate-pulse"></div>
          </div>

          <div className="flex flex-col w-full my-2">
            <div className="bg-gray-200 w-[50px] rounded animate-pulse h-5 mb-2"></div>{" "}
            <div className="flex gap-2 flex-wrap">
              <div className="bg-gray-200 w-[54px] h-20 rounded animate-pulse"></div>
              <div className="bg-gray-200 w-[54px] h-20 rounded animate-pulse"></div>
              <div className="bg-gray-200 w-[54px] h-20 rounded animate-pulse"></div>
            </div>
          </div>

          <div className="flex flex-col ">
            <div className="bg-gray-200 w-[50px] rounded animate-pulse h-5 mb-2"></div>
            <div className="flex gap-10">
              <div className="bg-gray-200 w-[90px] rounded animate-pulse h-9"></div>
              <div className="bg-gray-200 w-[90px] rounded animate-pulse h-9"></div>
            </div>
          </div>
          <div className="mt-4 w-full bg-white p-2 rounded-md text-sm">
            <div className="flex gap-1 flex-1 flex-col mb-2">
              <div className="flex gap-2 items-center justify-between">
                <div className="bg-gray-200 w-[90px] rounded animate-pulse h-5"></div>
                <div className="bg-gray-200 w-[90px] rounded animate-pulse h-5"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2 pb-[10px] border-b mb-2">
                <div className="bg-gray-200 min-w-[48px] rounded animate-pulse h-12" />
                <div className="flex flex-col gap-1">
                  <div className="bg-gray-200 min-w-[48px] rounded animate-pulse h-5"></div>
                  <div className="bg-gray-200 min-w-[150px] rounded animate-pulse h-5"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2 pb-[10px] mb-2">
                <div className="bg-gray-200 min-w-[48px] rounded animate-pulse h-12" />
                <div className="flex flex-col gap-1">
                  <div className="bg-gray-200 min-w-[48px] rounded animate-pulse h-5"></div>
                  <div className="bg-gray-200 min-w-[150px] rounded animate-pulse h-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
