"use client";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import React, { useContext, useEffect, useState } from "react";
import ScrollUpComponent from "../global/ScrollUpComponent";
import { MainTitle } from "../global/MainTitle";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { getFormatPrice } from "@/app/api/lib/functions";

const ARAMeX_LOGO = "https://kadinle.com/media/images/aramex_logo.png";
const background = "https://kadinle.com/media/images/background.png";
const DHL_LOGO = "https://kadinle.com/media/images/dhl.png";

const ShippingInformationPage = ({ warehouses }) => {
  const t = useTranslations();
  const { currency } = useGlobalOptions();
  const [selectedInfo, setSelectedInfo] = useState({});
  const [country, setCountry] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!country) return;
    setSelectedInfo(
      warehouses?.find((warehouse) => warehouse.country_id === country)
    );
    setIndex(0);
  }, [country, warehouses]);

  return (
    <>
      <ScrollUpComponent />
      <div className="flex flex-col poppins mb-10">
        <MainTitle title={t("shippingInfoTitle")} />

        <div className="flex justify-center mt-8">
          <div className="flex flex-col container max-w-[1500px]">
            <div className="flex flex-col space-y-[1px]">
              <h2 className="text-[18px] lg:text-[20px] 2xl:text-[30px]">
                {t("shippingInfoSection1")}
              </h2>
              <div className="bg-opink w-[67px] 2xl:w-[100px] h-[8px] rounded-xl "></div>
            </div>

            <div className="flex flex-col mt-2 text-[15px] 2xl:text-[16px] max-w-[1000px] 2xl:max-w-[1500px]">
              <h3 className="mt-2 ltr:ml-8 rtl:mr-8">
                {t("shippingInfoSection2")}
              </h3>

              <div className="flex flex-col mt-10 max-w-3xl">
                <div className="flex flex-col gap-1">
                  <label>{t("choose_country")}</label>
                  <select
                    onChange={(e) => setCountry(e.target.value)}
                    className="flex-1 rounded-md max-w-[300px] border border-[#707070] py-2 ltr:pl-4 rtl:pr-4 outline-none h-full bg-owhite"
                  >
                    <option value="">{t("country")}</option>
                    {warehouses
                      ?.sort((a, b) =>
                        a?.country?.name?.localeCompare(b?.country?.name)
                      )
                      ?.map((warehouse) => (
                        <option
                          key={warehouse?.country?.id}
                          value={warehouse?.country?.id}
                        >
                          {warehouse?.country?.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="flex flex-col border border-opink rounded-[10px] w-full  mt-6">
                  <div className="flex border-b border-[#F457B0] border-opacity-30">
                    <div className="py-2 ltr:pl-3 rtl:pr-3 ltr:border-r  rtl:border-l w-1/4">
                      <p className="font-[300]">{t("shippingMethod")}</p>
                    </div>
                    <div className="py-2 ltr:pl-3 rtl:pr-3 ltr:border-r  rtl:border-l w-1/4 ">
                      <p className="font-[300] text-center">
                        {t("deliveryTime")}
                      </p>
                    </div>
                    <div className="py-2 ltr:pl-3 rtl:pr-3 ltr:border-r  rtl:border-l w-1/4 ">
                      <p className="font-[300] text-center">
                        {t("The_Weight")}
                      </p>
                    </div>
                    <div className="py-2 ltr:pl-3 rtl:pr-3 ltr:border-r  rtl:border-l w-1/4 ">
                      <p className="font-[300] text-center">
                        {t("shippingCost")}
                      </p>
                    </div>
                  </div>
                  {selectedInfo?.shipping ? (
                    <div className="flex w-full min-h-[40px]">
                      <div className="text-center py-2 w-1/4">
                        {selectedInfo?.shipping?.min_fast_duration === 2 ? (
                          "---"
                        ) : (
                          <div className="flex flex-col justify-center items-center gap-2">
                            <Image
                              className=" w-16 object-contain"
                              src={DHL_LOGO}
                              alt={"DHL_LOGO"}
                              height={40}
                              width={64}
                            />
                            <Image
                              className=" w-16 object-contain"
                              src={ARAMeX_LOGO}
                              alt={"ARAMeX_LOGO"}
                              height={40}
                              width={64}
                            />
                          </div>
                        )}
                      </div>
                      <div className="text-center flex items-center justify-center py-2 w-1/4">
                        {selectedInfo?.shipping?.min_fast_duration} -{" "}
                        {selectedInfo?.shipping?.max_fast_duration} {t("days")}
                      </div>
                      <div className="w-1/4 py-2 text-center">
                        <div className="rounded-md mx-auto w-[80%] text-center border border-gray-200 relative">
                          <select
                            className="px-4 py-1 w-full rounded-md font-medium"
                            value={index}
                            onChange={(e) => setIndex(e.target.value)}
                          >
                            {Object.keys(
                              selectedInfo?.shipping?.fast_price
                            )?.map((weight, index) => (
                              <option key={index} value={index}>
                                {weight}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="w-1/4 py-2 text-center">
                        <span>
                          {getFormatPrice(
                            Object.values(selectedInfo?.shipping?.fast_price)?.[
                              index
                            ],
                            currency
                          )}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center w-full min-h-[40px]">
                      <div className="h-[1px] w-[80%] mx-auto bg-gray-300" />
                    </div>
                  )}
                </div>

                {selectedInfo?.shipping?.min_fast_duration === 2 ? (
                  <p></p>
                ) : (
                  <p className="mt-4 text-yellow-500 bg-yellow-100 font-medium p-2 rounded-md text-center">
                    {t("shipping_information_note")}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingInformationPage;
