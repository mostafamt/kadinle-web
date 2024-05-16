"use client";
import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { Fragment } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";
import Link from "next/link";
import { PrimaryArrowIcon } from "../Icons/PrimaryArrowIcon";
import { useTranslations } from "next-intl";
import VideoCard from "./VideoCard";
import { SectionTitle } from "../global/SectionTitle";
import VideosSliderSkeleton from "../skeletons/VideosSliderSkeleton";
SwiperCore.use([Pagination, Navigation]);

export const VideoSection = ({
  head,
  videos,
  layout,
  sectionSettings,
  locale,
  order
}) => {
  const [loadingClient, setLoadingClient] = useState(true);
  const t = useTranslations();
  const swiperRef = useRef(null);
  const [swiper, setSwiper] = useState(null);
  const [target, setTarget] = useState(0);

  const videosIds = videos?.map((v) => v.id);
  const randomVideoId = Math.floor(Math.random() * videosIds?.length);
  const randomVideo = randomVideoId
    ? videos?.[randomVideoId]?.id
    : videos?.[0]?.id;

  useEffect(() => {
    if (swiper !== null) {
      swiper.slideTo(target);
    }
  }, [target]);

  useEffect(() => {
    setLoadingClient(false);
  }, [swiper]);

  const sliderNextHandler = () => {
    locale === "ar"
      ? swiperRef.current?.slideNext()
      : swiperRef.current?.slidePrev();
  };

  const sliderPrevHandler = () => {
    locale === "ar"
      ? swiperRef.current?.slidePrev()
      : swiperRef.current?.slideNext();
  };

  if (loadingClient) return <VideosSliderSkeleton  order={order}/>;

  return (
    <Fragment>
      {videos?.length && (
        <div
          style={{
            order: sectionSettings?.section_order,
            display: !sectionSettings?.display_home && "none !important",
          }}
          className={`my-[64px] container`}
        >
          <div className="flex flex-col space-y-3">
            <div className="container w-full flex justify-between items-center">
              <SectionTitle title={head} containerClassName="!w-auto" />
              <Link
                href={`/videos`}
                state={{ id: randomVideo, layout }}
                className="capitalize text-lg text-primary no-underline cursor-pointer"
              >
                {t("SEE_MORE")}
              </Link>
            </div>
            <div className="w-[100%] flex items-center container-lrg relative">
              {videos.length > 5 ? (
                <button onClick={sliderNextHandler}>
                  <PrimaryArrowIcon arrowClassName="rtl:!-rotate-90 ltr:!rotate-90" />
                </button>
              ) : null}

              <div className="container w-[100%] overflow-hidden">
                <Swiper
                  dir="ltr"
                  onSwiper={setSwiper}
                  pagination={{
                    renderBullet: function (index, className) {
                      return `<span className="${className}"></span>`;
                    },
                    clickable: true,
                    bulletClass: "swiper-bullet",
                    bulletActiveClass: "swiper-bullet-active",
                    paginationClass: "flex gap-2 -bottom-8",
                  }}
                  modules={[Pagination]}
                  direction="horizontal"
                  spaceBetween={10}
                  breakpoints={{
                    0: { slidesPerView: 1, slidesPerGroup: 1 },
                    500: { slidesPerView: 2, slidesPerGroup: 2 },
                    768: { slidesPerView: 3, slidesPerGroup: 3 },
                    1024: { slidesPerView: 5, slidesPerGroup: 3 },
                  }}
                  onSlideChange={() => {
                    setTarget(swiperRef.current.realIndex);
                  }}
                  className="mySwiper"
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  showsPagination={true}
                >
                  {videos.slice(0, 31)?.map((review) => (
                    <SwiperSlide key={review?.id}>
                      <VideoCard review={review} layout={layout} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {videos?.length > 5 ? (
                <button onClick={sliderPrevHandler}>
                  <PrimaryArrowIcon />
                </button>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
