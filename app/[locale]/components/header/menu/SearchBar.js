"use client";

import React, { useContext, useState } from "react";

import SearchIcon from "../../Icons/SearchIcon";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export const SearchBar = () => {
  const t = useTranslations();
  const router = useRouter();
  const [search, setSearch] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      router?.push(`/search/${search}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="order-3 xs:order-1 flex justify-between text-sm  border px-4 py-1  rounded-[9px] md:w-[300px] lg:w-[400px]"
    >
      <div className="Search flex items-center gap-2 w-[80%] ">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("search")}
          className="w-full outline-0   montserrat text flex-1"
        />
      </div>
      <button className="cursor-pointer m-[5px]">
        <SearchIcon className="text-primary h-5 w-5" />

      </button>
    </form>
  );
};
