"use client";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { DrawerDow } from "./DrawerDow";
import { upperMenu } from "@/app/api/static/links";
import { usePathname } from "next/navigation";

export const SubMenu = ({ categories }) => {
  const t = useTranslations();
  const { language } = useGlobalOptions();
  const pathname = usePathname();
  const { showOptions, setShowOptions } = useGlobalOptions();
  const [sticky, setSticky] = useState(false);
  const [originalTop, setOriginalTop] = useState(null);
  const myRef = useRef(null);

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

  const categoriesTopLevel = useMemo(() => {
    return categories?.filter((c) => !c?.parent_id);
  }, [categories?.length]);

  if (pathname?.indexOf("/categories/") !== -1) return;

  return (
    <div className="relative ">
      <nav className="flex flex-col relative menu">
        <div className="relative">
          <div
            ref={myRef}
            className={`${
              sticky === true ? "fixed " : "relative"
            }   bg-[#e1e1e1] flex justify-center top-0 ltr:left-0 rtl:right-0 z-[6000] w-full`}
          >
            <div className="container-lrg w-[100%]">
              <ul className="flex justify-between px-4 items-center gap-5 text-white py-4">
                {categoriesTopLevel
                  ?.sort((a, b) => b?.numeric - a?.numeric)
                  ?.map((category) => {
                    const content = category?.content?.find(
                      (c) => c?.language_id === language?.id
                    );
                    return (
                      <li className="text-base" key={category?.id}>
                        <Link
                          href={`/categories/${category?.id}`}
                          className="text-gray-600 capitalize cursor-pointer text-center hover:text-black hover:font-semibold whitespace-nowrap "
                        >
                          {content?.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <DrawerDow
        languageId={language}
        categories={categories}
        showOptions={showOptions}
        setShowOptions={setShowOptions}
      />
    </div>
  );
};
