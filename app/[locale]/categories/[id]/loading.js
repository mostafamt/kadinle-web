import React from "react";
import CategoryBannerSkeleton from "../../components/skeletons/CategoryBannerSkeleton";
import ProductCardSkeleton from "../../components/skeletons/ProductCardSkeleton";

const loading = () => {
  return (
    <div className="flex flex-col gap-2  mx-auto ">
      <CategoryBannerSkeleton />
      <div className="grid grid-cols-5 gap-4">
        {Array(8)
          .fill(0)
          ?.map((r, index) => (
            <ProductCardSkeleton key={index} />
          ))}
      </div>
    </div>
  );
};

export default loading;
