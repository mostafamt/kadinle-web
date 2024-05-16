"use client";

import { upperMenu } from "@/app/api/static/links";
import Link from "next/link";

export const UpperMenu = ({ categories }) => {
  return (
    <nav className="flex flex-col relative bg-[#e1e1e1] menu ">
      <div className="relative">
        <div className="container-lrg w-[100%]">
          <ul className="flex justify-between px-4 items-center gap-5 text-white py-4">
            {upperMenu?.map((link) => (
              <Link
                href={link?.path}
                className="text-[15px] font-normal"
                key={link?.path}
              >
                <span className="text-gray-500 whitespace-nowrap min-w-fit flex-1 capitalize cursor-pointer text-center hover:text-[#111] hover:font-medium ">
                  {link?.name}
                </span>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
