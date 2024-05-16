"use client";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState, useTransition } from "react";
import Drawer from "../modal/Drawer";

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
    <Drawer open={showOptions} onClose={() => setShowOptions(true)}>
      <div className="flex flex-col gap-2">
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
                            let subCategoryContent = subCategory?.content?.find(
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
                      href={`/categories/${category?.category_id}?parent_id=${
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
    </Drawer>
  );
};
