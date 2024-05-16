"use client";
import React, { useContext } from "react";

import { useTranslations } from "next-intl";
import Link from "next/link";

export const ShopNowBtn = () => {
  const t = useTranslations();
  return (
    <Link
      href="/new-arrivals"
      className="w-[170px] 2xl:w-[240px] border border-primary  hover:bg-white hover:text-[#000000] px-2  py-3 2xl:py-4 text-[12px] 2xl:text-[16px] rounded-full bg-primary text-white flex flex-col justify-center items-center"
    >
      {t("SHOP_NOW")}
    </Link>
  );
};
