import { getTranslator } from "next-intl/server";
import Image from "next/image";
import React from "react";
import { SectionTitle } from "../global/SectionTitle";
import Link from "next/link";

export const OurPartners = async ({ locale, partners }) => {
  const t = await getTranslator(locale);

  return (
    <div className="bg-gray-100 p-4 mt-4 relative">
      <div className="container">
        <SectionTitle title={"our partners"} containerClassName="!mt-0" />
        <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
          {partners?.map((partner, index) => (
            <Link
            key={index}
              href={partner?.link || ""}
              className="bg-white flex-col gap-2 rounded-md border hover:shadow p-2 flex items-center justify-center"
            >
              <Image
                src={
                  partner?.image
                    ? partner?.image
                    : "https://assets.stickpng.com/thumbs/62f901a6a8320dd346143bec.png"
                }
                alt={partner?.name}
                height={80}
                width={80}
                className="object-contain w-20 h-20"
              />
              <h3 className="text-gray-600 text-xs capitalize">
                {partner?.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
