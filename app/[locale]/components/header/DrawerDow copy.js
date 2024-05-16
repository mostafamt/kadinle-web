"use client";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState, useTransition } from "react";

export const DrawerDow = ({
  showOptions,
  setShowOptions,
  categories: allCategories,
  languageId,
}) => {
  const t = useTranslations();
  const { language } = useGlobalOptions();
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    typeof window === "object" && window.scrollTo(0, 0);
  }, [router?.pathname]);

  useEffect(() => {
    function generateTree(categories) {
      if (!categories?.length) return;
      let newList = [];
      for (const item of categories) {
        if (!item?.parent_id) {
          newList.push({
            ...item,
            children: categories.filter(
              (category) => category?.parent_id === item?.id
            ),
          });
        }
      }
      return newList;
    }

    setCategories(generateTree(allCategories));
  }, [allCategories]);

  return (
    <div className="flex ltr:bg-black rtl:bg-red-500 flex-col absolute ltr:left-0 rtl:right-0 top-14 w-full">
      <div
        className={`${
          showOptions ? "max-h-[1000px] " : "max-h-[0px] "
        } overflow-hidden z-[10000] flex w-full justify-center transition-all duration-[300ms] bg-[#F5F6F8]`}
      >
        <div className="flex flex-col items-center container">
          <div className=" flex items-start lg:items-start w-full flex-row justify-between py-5 lg:py-10 px-0 text-xs gap-4 lg:gap-0 md:space-y-0   ">
            <div className="flex flex-col space-y-6 2xl:space-y-8 justify-center text-[16px] md:text-[18px] lg:text-[22px] 2xl:text-[26px] w-[20%]">
              <button
                className={`ltr:text-left rtl:text-right cursor-pointer hover:text-primary font-[500]`}
              >
                {t("ALL")}
              </button>
              <Link
                onClick={() => setShowOptions(false)}
                href="/categories/flash-sale"
                className={`ltr:text-left rtl:text-right cursor-pointer hover:text-primary font-[500]`}
              >
                {t("flashSale")}
              </Link>
              <Link
                onClick={() => setShowOptions(false)}
                href="/categories/best-seller"
                className={`ltr:text-left rtl:text-right cursor-pointer hover:text-primary font-[500]`}
              >
                {t("Bestsellers")}
              </Link>
              <Link
                onClick={() => setShowOptions(false)}
                href="/categories/new-arrivals"
                className={`ltr:text-left rtl:text-right cursor-pointer hover:text-primary font-[500] `}
              >
                {t("Latest_Arrivals")}
              </Link>
              <Link
                onClick={() => setShowOptions(false)}
                href="/categories/dd53c86f-282f-462a-95e8-0ead41a6a657"
                className={`ltr:text-left rtl:text-right cursor-pointer hover:text-primary font-[500] `}
              >
                {t("Large_Sizes")}
              </Link>
              <Link
                onClick={() => setShowOptions(false)}
                href="/category/brands/cd3069e9-5844-475e-9f88-f5e7026b31a1"
                className={`ltr:text-left rtl:text-right cursor-pointer hover:text-primary font-[500] `}
              >
                {t("Brands")}
              </Link>
            </div>
            <div className="flex flex-col w-[50%] justify-between space-y-6 ">
              <div className="columns-1 md:columns-2  lg:columns-3 col">
                {categories?.length &&
                  categories
                    .sort((a, b) => b?.children?.length - a?.children?.length)
                    .map((category, index) => {
                      let categoryInfo = category?.content?.find(
                        (cate) => cate?.language_id === language?.id
                      );
                      return (
                        <div key={index} className="w-full inline-block p-2">
                          {category?.children?.length ? (
                            <>
                              <h4 className="font-semibold text-primary text-base">
                                {categoryInfo?.title}
                              </h4>
                              <ul>
                                {category?.children
                                  ?.slice(0, 5)
                                  ?.map((subCategory, idx) => {
                                    let subCategoryContent =
                                      subCategory?.content?.find(
                                        (c) => c?.language_id === language?.id
                                      );
                                    return (
                                      <li key={idx}>
                                        <Link
                                          className="text-sm cursor-pointer hover:text-primary font-[500]"
                                          href={`/categories/${
                                            subCategoryContent?.category_id
                                          }?parent_id=${
                                            subCategoryContent?.parent_id ||
                                            subCategoryContent?.category_id
                                          }`}
                                        >
                                          {subCategoryContent?.title}
                                        </Link>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </>
                          ) : (
                            <Link
                              className="font-semibold text-primary text-base"
                              href={`/categories/${
                                category?.category_id
                              }?parent_id=${
                                category?.parent_id || category?.category_id
                              }`}
                            >
                              {categoryInfo?.title}
                            </Link>
                          )}
                        </div>
                      );
                    })}
              </div>
            </div>

            <div className="flex flex-col md:gap-0 space-y-4 items-center justify-center pb-6 md:p-0 w-[20%]">
              <Image
                className=" md:w-none cursor-pointer"
                src="https://kadinle.com/media/images/option1.png"
                alt="category banner"
                height={140}
                width={200}
              />
              <Image
                className=" md:w-none hover:text-primary cursor-pointer"
                src="https://kadinle.com/media/images/option2.png"
                alt="category banner"
                height={140}
                width={200}
              />
              <Image
                className=" md:w-none hover:text-primary cursor-pointer"
                src="https://kadinle.com/media/images/option3.png"
                alt="category banner"
                height={140}
                width={200}
              />
              <Image
                className=" md:w-none hover:text-primary cursor-pointer"
                src="https://kadinle.com/media/images/option4.png"
                alt="category banner"
                height={140}
                width={200}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={(e) => setShowOptions(false)}
        className={`${
          showOptions ? " opacity-60 block" : "opacity-[0] hidden"
        } absolute min-w-[100vw] min-h-[100vh] bg-[#2A131B] transition-all duration-[1000ms]  z-[9000] `}
      ></div>
    </div>
  );
};
