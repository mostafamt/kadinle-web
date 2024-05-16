import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="relative flex flex-col border bg-owhite border-opink p-2 md:p-2 rounded-lg animate-pulse">
      <div className="w-[100%] bg-gray-200 h-[300px] rounded-t-lg" />
      <div className="flex justify-between items-center  gap-2 mt-2">
        <div className="flex flex-col w-[65%]">
          <div className="bg-gray-200 h-4 mb-1 w-full"></div>
          <div className="bg-gray-200 h-3 w-3/5"></div>
        </div>
        <div className="flex gap-1 text-white items-center px-4 py-1 lg:py-2 w-[27%] lg:w-none bg-gray-200 h-9 rounded-md lg:rounded-lg" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
