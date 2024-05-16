import React from "react";
import CategoryBannerSkeleton from "../components/skeletons/CategoryBannerSkeleton";
import CategoryCardSkeleton from "../components/skeletons/CategoryCardSkeleton";

const loading = () => {
  return (
    <div className=" flex flex-col gap-2 mx-auto ">
      <CategoryBannerSkeleton />
      <div className="container">
        <div className="grid grid-cols-4 gap-4">
          {Array(8)
            .fill(0)
            ?.map((r, index) => (
              <CategoryCardSkeleton key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default loading;
