"use client";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useRef, useState } from "react";
import HomeSliderSkeleton from "../skeletons/HomeSliderSkeleton";
import { getFormatPrice } from "@/app/api/lib/functions";
import Image from "next/image";
export const CustomSlider = ({ lists, sectionSettings }) => {
  const t = useTranslations();
  const { language, currency } = useGlobalOptions();
  const router = useRouter();
  const [target, setTarget] = useState(0);
  const [option, setOption] = useState(null);
  const [intervalFunc, setIntervalFunc] = useState(null);
  const [reverse, setReverse] = useState(false);
  const [selectedProductsList, setSelectedProductsList] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!lists && option !== null) return;
    typeof lists === "object" &&
      Object.values(lists)?.forEach((item, idx) => {
        if (item !== null && option === null) {
          setOption(idx);
        }
      });
  }, [lists, option]);

  useEffect(() => {
    if (option === 1) {
      setSelectedProductsList(lists?.best);
    } else if (option === 2) {
      setSelectedProductsList(lists?.views);
    } else {
      setSelectedProductsList(lists?.likes);
    }
    setTarget(0);
  }, [option, lists]);

  useEffect(() => {
    const listLength = selectedProductsList?.length;
    if (target >= listLength - 1) setReverse(true);
    if (target < 1) setReverse(false);
  }, [target, selectedProductsList]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTarget((prev) => {
        if (reverse) return prev - 1;
        return prev + 1;
      });
    }, 2000);
    setIntervalFunc(interval);
    return () => clearInterval(interval);
  }, [target, reverse]);

  useEffect(() => {
    const percent =
      target === 0 ? 33.333 : target === 1 ? 0 : (target - 1) * -33.333;
    if (sliderRef?.current)
      sliderRef.current.style.transform = `translateX(${percent}%)`;
  }, [target]);

  const cardClickHandler = (index, product_sku) => {
    if (index === target) {
      router?.push(`/product/${product_sku}`);
      return;
    }
    setTarget(index);
    clearInterval(intervalFunc);
  };

  if (!selectedProductsList?.length) return <HomeSliderSkeleton />;

  return (
    <div
      className="my-16"
      style={{
        order: sectionSettings?.section_order,
        display: !sectionSettings?.display_home && "none !important",
      }}
    >
      <div className="flex justify-center items-center mb-24 gap-6 ">
        {lists?.best?.length ? (
          <button
            onClick={() => setOption(0)}
            className={`transition-all duration-[200ms] capitalize ${
              option === 0
                ? "bg-[#E264AD] text-white"
                : "bg-white text-black drop-shadow-md"
            } rounded-full p-3 px-7 text-[12px]   min-w-[150px]`}
          >
            {t("bestSeller")}
          </button>
        ) : null}
        {lists?.likes?.length ? (
          <button
            onClick={() => setOption(1)}
            className={`transition-all duration-[200ms] capitalize ${
              option === 1
                ? "bg-[#E264AD] text-white"
                : "bg-white text-black drop-shadow-md"
            } rounded-full p-3 px-7 text-[12px]   min-w-[150px]`}
          >
            {t("moreLike")}
          </button>
        ) : null}
        {lists?.views?.length ? (
          <button
            onClick={() => setOption(2)}
            className={`transition-all duration-[200ms] capitalize ${
              option === 2
                ? "bg-[#E264AD] text-white"
                : "bg-white text-black drop-shadow-md"
            } rounded-full p-3 px-7 text-[12px]   min-w-[150px]`}
          >
            {t("moreInteractive")}
          </button>
        ) : null}
      </div>
      <div className="w-full flex relative  overflow-y-visible overflow-x-clip max-w-4xl mx-auto">
        <div
          className="flex transition-all duration-1000 translate-x-[33.333%] direction-ltr w-full"
          ref={sliderRef}
          style={{ maxWidth: `${100}%` }}
        >
          {" "}
          {selectedProductsList?.map((item, index) => {
            let price = item?.discount
              ? item?.price - (item?.discount / 100) * item?.price
              : item?.price;

            let content = item?.content?.find(
              (content) => content?.language_id === language?.id
            );
            return (
              <div
                key={index}
                onClick={() => cardClickHandler(index, item?.product_sku)}
                className="w-1/3 relative"
              >
                <figure
                  className={`cursor-pointer  min-w-[350px] relative text-black min-h-[290px] duration-300 transition-transform`}
                >
                  <Image
                    className={`cursor-pointer w-full relative text-black min-h-[290px] h-full object-cover duration-300 transition-transform shadow ${
                      target === index &&
                      "z-50 -translate-y-4  border-2 border-opink rounded-xl text-white "
                    } `}
                    src={item.image ? item.image : ""}
                    alt={content?.name}
                    height={290}
                    width={350}
                  />
                </figure>
                <div
                  className={`${
                    target === index ? "opacity-1" : "opacity-0"
                  }  transition-all duration-[1000ms] z-[51] absolute bottom-12 ltr:left-6 rtl:right-6 flex flex-col space-y-[1px] lg:space-y-[8px]`}
                >
                  <h3 className="font-bold inve text-[10px] md:text-[14px]">
                    {content?.name}
                  </h3>
                  <div className="flex gap-4">
                    {item?.discount ? (
                      <del className="diagonalCross text-[12px] md:text-[17px] text-[#939393] font-semibold">
                        {getFormatPrice(item?.price, currency)}
                      </del>
                    ) : null}
                    <p className="text-[12px] md:text-[18px] font-semibold">
                      {getFormatPrice(price, currency)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center  items-center gap-2 mt-[40px] lg:mt-[4%] direction-ltr">
        {Array(Math.ceil(selectedProductsList?.length / 3) || 0)
          .fill()
          ?.map((p, index) => (
            <div
              key={index}
              onClick={(e) => setTarget(index * 3)}
              className={
                Math.floor(target / 3) === index
                  ? "h-3 w-12 bg-primary rounded-xl cursor-pointer"
                  : "h-3 w-3 bg-primary-light rounded-xl cursor-pointer"
              }
            ></div>
          ))}
      </div>
    </div>
  );
};
