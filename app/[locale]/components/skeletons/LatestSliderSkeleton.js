"use client";

import React from "react";
import SliderBtnSkeleton from "./SliderBtnSkeleton";
import { SwiperSlide, Swiper } from "swiper/react";
import SaleCardSkeleton from "./SaleCardSkeleton";

const LatestSliderSkeleton = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center relative container-lrg w-[100%]">
        <div className="flex items-center relative container-lrg w-[100%]">
          <SliderBtnSkeleton />
          <div className="container w-[100%] overflow-hidden">
            <Swiper
              dir="ltr"
              direction="horizontal"
              spaceBetween={25}
              slidesPerGroup={3}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="mySwiper"
              showsPagination={true}
            >
              {Array(3)
                .fill()
                .map((_, idx) => (
                  <SwiperSlide key={idx}>
                    <SaleCardSkeleton />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <SliderBtnSkeleton rotate />
        </div>
      </div>
    </div>
  );
};

export default LatestSliderSkeleton;
