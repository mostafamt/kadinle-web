import React from "react";

const OffersSkeleton = () => {
  return (
    <div className="container relative rounded-xl overflow-hidden animate-pulse my-6">
      <div className="bg-gray-200 rounded-xl overflow-hidden h-[300px]"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10 py-10 px-8">
        <div className="w-[100px] h-7 bg-white rounded"></div>
        <div className="w-[150px] bg-white h-5 rounded"></div>
      </div>
    </div>
  );
};

export default OffersSkeleton;
