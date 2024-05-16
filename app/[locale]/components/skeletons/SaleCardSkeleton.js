import React from "react";

const SaleCardSkeleton = () => {
  return (
    <div className="relative overflow-hidden rounded-lg animate-pulse">
      <div className="bg-gray-200 h-[200px] lg:h-[250px]"></div>
      <div className="absolute h-[85%] w-[80%] flex flex-col space-y-2 xl:space-y-8 top-[10%] left-[10%]">
        <div className="flex gap-2 px-[2px] !mt-auto w-fit md:w-none justify-center md:justify-start md:gap-6 items-center bg-white    text-white rounded-3xl cursor-pointer animate-pulse">
          <div className="w-[120px] lg:w-[130px] h-[21px] rounded-3xl"></div>
          <div className="w-[35px] h-[21px] rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default SaleCardSkeleton;
