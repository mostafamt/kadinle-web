"use client";
import React, { useContext, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { useTranslations } from "next-intl";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import Link from "next/link";
import Image from "next/image";
import SmallCard from "../cards/SmallCard";

SwiperCore.use([Pagination, Navigation]);
const backArrow = "https://kadinle.com/media/images/backArrow.svg";

const OurNew = ({ products, sectionSettings }) => {
  const t = useTranslations();
  const { language } = useGlobalOptions();
  const swiperRef = useRef(null);

  const sliderNextHandler = () => {
    language?.code?.toLowerCase() === "ar"
      ? swiperRef.current?.slideNext()
      : swiperRef.current?.slidePrev();
  };

  const sliderPrevHandler = () => {
    language?.code?.toLowerCase() === "ar"
      ? swiperRef.current?.slidePrev()
      : swiperRef.current?.slideNext();
  };

  return (
    <div
      style={{
        order: sectionSettings?.section_order,
        display: !sectionSettings?.display_home && "none !important",
      }}
      className={`flex flex-col justify-center mt-[60px] `}
    >
      <div className="container-lrg w-full flex items-center justify-between">
        <div className="flex flex-col space-y-1 self-center mb-[18px]">
          <h2 className="text-2xl">{t("Our_New")}</h2>
          <div className="bg-primary w-[60px] h-[8px] rounded-xl "></div>
        </div>
        <Link
          href="/categories/new-arrivals"
          className="capitalize text-lg text-primary no-underline cursor-pointer"
        >
          {t("SEE_MORE")}
        </Link>
      </div>
      <div className="relative bg-primary pb-[60px] px-4">
        <div className="flex items-center container-v-lrg w-[100%] max-w-[100%]">
          {products?.length > 5 ? (
            <div
              onClick={sliderNextHandler}
              className="lg:min-w-[32px] cursor-pointer rounded-full bg-white w-[20px] h-[20px] lg:w-[32px] lg:h-[32px] flex items-center justify-center hover:border hover:border-white"
            >
              <Image
                className="w-2 md:w-none rtl:rotate-180 object-contain"
                src={backArrow}
                alt="back"
                height={12}
                width={12}
              />
            </div>
          ) : null}
          <div className="flex flex-col container-lrg w-[100%] pt-5  items-center">
            <p className="text-white text-xl md:text-[20px]   text-center md:self-start mb-2 ">
              {t("finest_models")}
            </p>
            <div className="w-[100%]">
              <Swiper
                dir="ltr"
                modules={[Pagination]}
                spaceBetween={20}
                direction="horizontal"
                slidesPerGroup={6}
                slidesPerView={6}
                breakpoints={{
                  640: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  1024: { slidesPerView: 6 },
                }}
                pagination={{
                  renderBullet: function (index, className) {
                    return `<span className="${className}"></span>`;
                  },
                  clickable: true,
                  bulletClass: "swiper-bullet",
                  bulletActiveClass:
                    "swiper-bullet-active our-new-active-bullet",
                }}
                className="mySwiper"
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                showsPagination={true}
              >
                {products?.slice(0, 30)?.map((product, idx) => (
                  <SwiperSlide key={product?.product_id || idx}>
                    <SmallCard product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {products?.length > 5 ? (
            <div
              onClick={sliderPrevHandler}
              className="cursor-pointer rotate-180 rounded-full bg-white w-[32px] min-w-[32px] h-[32px] flex items-center justify-center hover:border hover:border-white"
            >
              <Image
                className="w-2 md:w-none rtl:rotate-180 object-contain"
                src={backArrow}
                alt="back"
                height={12}
                width={12}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default OurNew;
