import React from "react";

const OurNewCardSkeleton = () => {
  return (
    <div className="flex flex-col space-y-[3px] bg-white overflow-hidden p-2">
      <div className="w-[100%] max-w-[100%] h-[300px] bg-gray-200 animate-pulse" />
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <div className="w-[150px] h-4 rounded bg-gray-200 overflow-hidden mt-1 mb-2 animate-pulse"></div>
          <div className="w-[90px] h-4 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default OurNewCardSkeleton;
