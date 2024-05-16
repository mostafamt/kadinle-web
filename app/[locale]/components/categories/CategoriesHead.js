"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { ViewAs } from "./ViewAs";

export const CategoriesHead = ({ categories, setFormat, format }) => {
  const t = useTranslations();
  return (
    <div>
      <div className="w-full relative">
        <Image
          className="mb-2 w-full object-cover max-w-[1500px]"
          src={"https://kadinle.com/media/static/general_1258_517.jpg"}
          height={350}
          width={1500}
          priority
          alt="background"
        />
      </div>
      <div className="flex justify-between w-full my-1 items-center px-2 mt-4">
        <div className="text-opink font-medium items-center flex gap-1 capitalize">
          {t("categories")} :
          {!!categories?.length && (
            <span className="bg-opink text-white px-1 rounded-xl ">
              {categories?.length}
            </span>
          )}
        </div>
        <ViewAs setFormat={setFormat} format={format} />
      </div>
    </div>
  );
};
