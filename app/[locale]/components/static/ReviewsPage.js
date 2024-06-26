"use client";

import { getStoreReviews } from "@/app/api/supabase/reviews";
import { useTranslations } from "next-intl";
import React, { useContext, useEffect, useState } from "react";
import { TopRated } from "../reviews/TopRated";
import { StoreReviews } from "../reviews/StoreReviews";
import { ProductsReviews } from "../reviews/ProductsReviews";
import { MainTitle } from "../global/MainTitle";

const ReviewsPage = () => {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState("most_reviews");
  const [allData, setAllData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (min = 1, max = 20) => {
    setIsLoading(true);

    const response = await getStoreReviews(min, max);
    setAllData(response?.data);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mb-12">
      <MainTitle title={t("reviews")} />
      <div className="container mt-8">
        <div className="flex gap-4 items-center justify-between md:max-w-[700px] mx-auto">
          <button
            onClick={() => setActiveTab("most_reviews")}
            className={`bg-white rounded-2xl py-3 px-6 ${
              activeTab === "most_reviews"
                ? "!bg-opink !text-white"
                : "shadow text-black"
            }`}
          >
            {t("most_reviews")}
          </button>
          <button
            onClick={() => setActiveTab("store_reviews")}
            className={`bg-white rounded-2xl py-3 px-6 ${
              activeTab === "store_reviews"
                ? "!bg-opink !text-white"
                : "shadow text-black"
            }`}
          >
            {t("store_reviews")}
          </button>
          <button
            onClick={() => setActiveTab("products_reviews")}
            className={`bg-white rounded-2xl py-3 px-6 ${
              activeTab === "products_reviews"
                ? "!bg-opink !text-white"
                : "shadow text-black"
            }`}
          >
            {t("products_reviews")}
          </button>
        </div>
        <div className="mt-8">
          {activeTab === "most_reviews" ? (
            <TopRated topRated={allData?.top_rated} loading={isLoading} />
          ) : null}
          {activeTab === "store_reviews" ? (
            <StoreReviews
              storeReviews={allData?.kadinle_reviews}
              loading={isLoading}
            />
          ) : null}
          {activeTab === "products_reviews" ? (
            <ProductsReviews
              productsReviews={allData?.latest_comments}
              loading={isLoading}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
