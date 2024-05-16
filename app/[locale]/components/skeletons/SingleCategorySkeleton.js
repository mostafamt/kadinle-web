import React from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";

const SingleCategorySkeleton = ({ layout }) => {
  return (
    <div className="w-full flex flex-col poppins overflow-hidden mb-10">
      <div className="w-full flex justify-center mt-1 ">
        <div className="w-full flex flex-col items-center">
          <div className="container">
            {layout === "search" ? (
              <div className="bg-gray-200 w-[150px] h-8 animate-pulse mt-4" />
            ) : (
              <div className="rounded-lg w-full max-w-none h-[250px] lg:h-[300] xl:h-[370px] bg-gray-200" />
            )}
          </div>
          {layout === "flash-sale" && (
            <div className="bg-gray-200 w-full h-[73px] animate-pulse mt-4" />
          )}
          <div className="container flex w-full justify-between mt-5 gap-5">
            <div className="w-[280px]">
              <div className="w-[100px] h-10 bg-gray-200 animate-pulse mb-[90px] md:mb-9"></div>
              <div className="w-full flex flex-col gap-5">
                <div className="h-[72px] bg-gray-200 animate-pulse w-full"></div>
                <div className="h-[72px] bg-gray-200 animate-pulse w-full"></div>
                <div className="h-[72px] bg-gray-200 animate-pulse w-full"></div>
                <div className="h-[72px] bg-gray-200 animate-pulse w-full"></div>
              </div>
            </div>
            <div className="flex flex-col xl:w-[calc(100%-320px)] lg:w-[calc(100%-300px)] md:w-[calc(100%-320px)] sm:w-[calc(100%-320px)]">
              <div className="flex gap-4 flex-wrap lg:gap-12">
                <div className="flex items-center gap-2 lg:gap-6">
                  <div className="h-[27px] w-[140px] bg-gray-200 animate-pulse"></div>
                  <div className="rounded-2xl h-[35px] w-[70px] bg-gray-200 animate-pulse"></div>
                </div>
                <div className="flex items-center gap-2 lg:gap-6">
                  <div className="h-[27px] w-[50px] bg-gray-200 animate-pulse"></div>
                  <div className="rounded-2xl h-[35px] w-[160px] bg-gray-200 animate-pulse"></div>
                </div>
              </div>
              <div className="gap-4 mt-[40px] grid md:grid-cols-2 lg:grid-cols-4">
                {Array(24)
                  .fill()
                  .map((_, index) => (
                    <div key={index}>
                      <ProductCardSkeleton />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCategorySkeleton;
