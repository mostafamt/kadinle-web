import React from "react";
import { SkeletonText } from "./SkeletonText";
import { SkeletonIcon } from "./SkeletonIcon";

const SaleTimerSkeleton = () => {
  return (
    <div className="flex gap-20 h-20 items-center justify-center bg-gray-100">
      <div className="flex flex-col gap-2">
        <SkeletonText />
        <SkeletonText />
      </div>
      <div className="flex gap-6">
        <SkeletonIcon className="!rounded-md" />
        <SkeletonIcon className="!rounded-md" />
        <SkeletonIcon className="!rounded-md" />
        <SkeletonIcon className="!rounded-md" />
      </div>
    </div>
  );
};

export default SaleTimerSkeleton;
