import React from "react";

import CategoryBannerSkeleton from "./CategoryBannerSkeleton";
import ProductsSliderSkeleton from "./ProductsSliderSkeleton";

const OneCategorySkeleton = () => {
  return (
    <div className="relative w-full mb-[64px]">
      <div className=" relative flex flex-col space-y-3">
        <CategoryBannerSkeleton />
        {/* <ProductsSliderSkeleton /> */}
      </div>
    </div>
  );
};

export default OneCategorySkeleton;
