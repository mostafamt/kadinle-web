import React from "react";

const CategoryBannerSkeleton = () => {
  return (
    <div className="container relative w-full animate-pulse">
      <div className="bg-gray-200 rounded-2xl overflow-hidden h-[320px] lg:h-[350px]"></div>
      <div className="absolute bottom-[15%] -translate-x-2/4  left-1/2 flex flex-col justify-center items-center space-y-4 md:space-y-4">
        <div className="bg-white h-10 w-[180px] rounded-lg"></div>
        <div className="bg-white h-10 w-[120px] lg:w-[130px] rounded-3xl"></div>
      </div>
    </div>
  );
};

export default CategoryBannerSkeleton;
