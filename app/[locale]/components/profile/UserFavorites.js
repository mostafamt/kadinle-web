"use client";
import { listUser_like } from "@/app/api/supabase/user";
import { useTranslations } from "next-intl";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../cards/ProductCard";
import { Loading } from "../global/Loading";

export const UserFavorites = () => {
  const t = useTranslations();
  const [loading, setLoading] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    setLoading(true);
    listUser_like().then((res) => {
      setFavoriteList(res?.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-[73%] md:w-[70%] min-w-[calc(100%-320px)]">
      <h3 className="text-[17px] md:text-[19px] 2xl:text-[22px]">
        {t("Favorites")}
      </h3>
      <div className="flex flex-wrap gap-y-2">
        {!loading ? (
          <>
            {favoriteList?.length ? (
              <>
                {favoriteList?.map((item) => (
                  <div
                    key={item?.id}
                    className="w-[47%] 2xl:w-[24%] ltr:mr-2 rtl:ml-2"
                  >
                    <ProductCard key={item?.id} item={item} />
                  </div>
                ))}
              </>
            ) : (
              <div className="p-2  text-center my-3 bg-yellow-100 text-yellow-700 w-full">
                <p>{t("There_are_no_products_in_favorites")}</p>
              </div>
            )}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
