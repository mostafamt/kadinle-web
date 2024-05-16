"use client";
import React, { useContext, useEffect, useRef, useState } from "react";

import { useMemo } from "react";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import Link from "next/link";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

const CategoryBar = ({ categories }) => {
  const searchQuery = useSearchParams();
  const pathname = usePathname();
  const params = useParams();
  const { language } = useGlobalOptions();
  const myRef = useRef(null);
  const [sticky, setSticky] = useState(false);
  const [originalTop, setOriginalTop] = useState(null);
  const [showCategoryBar, setShowCategoryBar] = useState(false);

  const categoryId = pathname?.indexOf("/categories") !== -1 && params?.id;
  const categoryParentId = searchQuery.get("parent_id") || categoryId;

  useEffect(() => {
    if (pathname?.indexOf("/categories") !== -1 && categoryId)
      setShowCategoryBar(true);
    else setShowCategoryBar(false);
  }, [pathname, categoryId]);

  useEffect(() => {
    setOriginalTop(myRef?.current?.offsetTop);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentTop = myRef?.current?.getBoundingClientRect().top;
      // const elementHeight = myRef.current.offsetHeight;
      if (sticky && document.documentElement.scrollTop <= 127) {
        setSticky(false);
      } else if (currentTop <= 0) {
        setSticky(true);
      }
    };
    if (typeof window !== "object") return;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [originalTop, sticky, myRef.current]);

  const subCategories = useMemo(() => {
    const sub = categories?.filter(
      (category) => category?.parent_id === categoryId
    );
    if (sub?.length) return sub;

    const siblings = categories?.filter(
      (category) => category?.parent_id === categoryParentId
    );

    return siblings;
  }, [categories, categoryParentId, categoryId]);

  if (!showCategoryBar) return;
  return (
    <>
      {subCategories?.length ? (
        <div className="relative z-20 menu">
          <div
            ref={myRef}
            className={`${
              sticky === true ? "fixed " : "relative"
            } bg-opink flex justify-center top-0 ltr:left-0 rtl:right-0 z-20 w-full`}
          >
            <ul className="flex overflow-scroll container scroll-hide justify-between items-center gap-5 text-white ltr:pl-0 rtl:pr-0 ltr:pr-0 rtl:pl-0 py-4 text-[11px] ">
              {subCategories?.map((cate) => {
                let category = cate?.content?.find(
                  (c) => c?.language_id === language?.id
                );

                return (
                  <li className="text-base" key={cate?.id}>
                    <Link
                      href={`/categories/${category?.category_id}?parent_id=${categoryParentId}`}
                      className={`whitespace-nowrap text-[#e1cad8] cursor-pointer text-center hover:text-[#FFFFFF] capitalize ${
                        category?.category_id === categoryId
                          ? "text-white font-medium"
                          : ""
                      }`}
                    >
                      {category?.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CategoryBar;
