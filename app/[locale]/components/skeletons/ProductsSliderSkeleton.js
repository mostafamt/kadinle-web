"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCardSkeleton from "./ProductCardSkeleton";
import SliderBtnSkeleton from "./SliderBtnSkeleton";

const ProductsSliderSkeleton = () => {
  return (
    <div className="flex items-center relative container-lrg w-[100%]">
      <SliderBtnSkeleton />
      <div className="container w-[100%] overflow-hidden">
        <Swiper
          dir="ltr"
          direction="horizontal"
          spaceBetween={10}
          slidesPerView={5}
          slidesPerGroup={3}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="mySwiper"
          showsPagination={true}
        >
          {Array(5)
            .fill()
            .map((_, idx) => (
              <SwiperSlide key={idx}>
                <ProductCardSkeleton />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <SliderBtnSkeleton rotate />
    </div>
  );
};

export default ProductsSliderSkeleton;
