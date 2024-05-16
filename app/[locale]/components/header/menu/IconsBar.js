"use client";
import React from "react";
import HeartIcon from "../../Icons/HeartIcon";
import { CountriesBar } from "./CountriesBar";
import { LanguageBar } from "./LanguageBar";
import { CartBar } from "./CartBar";
import { MenuBar } from "./MenuBar";
import { UserBar } from "./UserBar";
import Link from "next/link";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import { useRouter } from "next/navigation";
import { FavoriteBar } from "./FavoriteBar";

export const IconsBar = ({ locale, languages, countries }) => {
  const router = useRouter();
  const { showOptions, setShowOptions, showAuthPopup, setShowAuthPopup } =
    useGlobalOptions();

  return (
    <div className="flex gap-2 lg:gap-4 items-center justify-between order-2 xs:order-3">
      <MenuBar />
      <CartBar />
      <UserBar />
      <FavoriteBar />
      <div className="h-[30px] bg-primary-gray w-[1px]" />
      <LanguageBar languages={languages} locale={locale} />
      <CountriesBar countries={countries} />
    </div>
  );
};
