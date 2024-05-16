"use client";

import { POINTS_STATUS } from "@/app/api/static/constants";
import { getUserData, getUserPoints } from "@/app/api/supabase/user";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Loading } from "../global/Loading";

const empty = "https://kadinle.com/media/images/empty.png";
const imgPoints = "https://kadinle.com/media/images/points.png";

export const UserPoints = () => {
  const t = useTranslations();
  const [loading, setLoading] = useState(false);
  const [target, setTarget] = useState("all");
  const [points, setPoints] = useState();
  const [filterPoints, setFilterPoints] = useState();
  const [totalPoints, setTotalPoints] = useState();

  useEffect(() => {
    setLoading(true);
    getUserPoints().then((res) => {
      setPoints(res?.data);
      setFilterPoints(res?.data);
      setLoading(false);
    });
    getUserData().then((res) => {
      setTotalPoints(res.data?.at(0)?.points);
    });
  }, []);

  const onFilterPoints = (filter) => {
    setTarget(filter);
    if (filter === "all") {
      setFilterPoints(points);
    } else {
      let newFilter = points.filter((point) => point?.status === filter);
      setFilterPoints(newFilter);
    }
  };

  return (
    <div className="w-[73%] md:w-[70%] min-w-[calc(100%-320px)]">
      <div className="flex flex-col">
        <div className="min-h-[52px] flex items-center">
          <h3 className="text-[17px] md:text-[19px] 2xl:text-[22px]">
            {t("My_Points")}!
          </h3>
        </div>

        <p className="mb-2  text-[#7C7C7C]  text-[14px] md:text-[16px] 2xl:text-[18px]">
          {t("What_are_you_thinking")}
        </p>

        <div className="flex items-start justify-between flex-col lg:flex-row text-[11px] md:text-[13px] 2xl:text-[15px]">
          <div className="flex flex-col bg-owhite items-center w-[70%] py-4 px-4 order-2 lg:order-1">
            <h4 className="text-[13px] md:text-[15px] 2xl:text-[19px]">
              {t("Total_Points")}
            </h4>
            <p className="text-opink font-[700] text-[23px] md:text-[25px] 2xl:text-[31px]">
              {totalPoints}
            </p>
            <div className="flex flex-col self-start mt-2">
              <p>{t("Details_points")}</p>
            </div>
            <div className=" mb-8 flex justify-between w-full text-[11px] md:text-[13px] 2xl:text-[15px] mt-3">
              <button
                onClick={(e) => onFilterPoints("all")}
                className={`cursor-pointer ${
                  target === "all" ? "text-opink" : "text-[#7E7E7E]"
                } `}
              >
                {t("All")}
              </button>
              <button
                onClick={(e) => onFilterPoints("Acquired")}
                className={`cursor-pointer ${
                  target === "Acquired" ? "text-opink" : "text-[#7E7E7E]"
                } `}
              >
                {t("Acquired")}
              </button>
              <button
                onClick={(e) => onFilterPoints("Used")}
                className={`cursor-pointer ${
                  target === "Used" ? "text-opink" : "text-[#7E7E7E]"
                } `}
              >
                {t("Used")}
              </button>
              <button
                onClick={(e) => onFilterPoints("Expired")}
                className={`cursor-pointer ${
                  target === "Expired" ? "text-opink" : "text-[#7E7E7E]"
                } `}
              >
                {t("Expired")}
              </button>
            </div>
            {loading ? (
              <Loading />
            ) : (
              <>
                {filterPoints?.length ? (
                  <>
                    {filterPoints?.map((point) => (
                      <div
                        key={point?.cause}
                        className="flex gap-3 mb-4 border rounded-md p-1 w-full relative"
                      >
                        <span
                          className={`rounded-md flex items-center justify-center text-xl w-20 text-white ${
                            point?.status === POINTS_STATUS?.[1] &&
                            "bg-green-500"
                          } ${
                            point?.status === POINTS_STATUS?.[2] &&
                            "bg-orange-500"
                          } ${
                            point?.status === POINTS_STATUS?.[3] && "bg-red-500"
                          }`}
                        >
                          {point?.point}
                        </span>
                        <div className="">
                          <h3 className="text-opink font-medium">
                            {t(point?.status)}
                          </h3>
                          <p className="text-gray-500 text-sm">
                            {point?.cause}
                          </p>
                        </div>
                        <span className="absolute top-2 ltr:right-2 rtl:left-2 text-xs text-gray-500">
                          {new Date(point?.created_at).toLocaleString("en-UK")}
                        </span>
                      </div>
                    ))}
                  </>
                ) : (
                  <Image
                    className="w-[55px] object-contain"
                    src={empty}
                    alt="empty points"
                    height={60}
                    width={55}
                  />
                )}
              </>
            )}
          </div>
          <div className="relative w-[300px] h-[300px] order-1 lg:order-2">
            <Image
              className=" object-contain h-auto"
              src={imgPoints}
              alt="my points"
              fill="layout"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
