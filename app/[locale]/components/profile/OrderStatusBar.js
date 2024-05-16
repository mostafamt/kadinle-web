"use client";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import { useTranslations } from "next-intl";
import React from "react";
import { useContext } from "react";
import { CompletedOrderIcon } from "../Icons/CompletedOrderIcon";
import { HourLessIcon } from "../Icons/HourLessIcon";
import { ShippingIcon } from "../Icons/ShippingIcon";
import { TrunkFlatIcon } from "../Icons/TrunkFlatIcon";
import { PendingIcon } from "../Icons/PendingIcon";

export const OrderStatusBar = ({ statusNumber: status, orderStatus }) => {
  const t = useTranslations();
  const { language } = useGlobalOptions();

  return (
    <div className="w-[550px] mb-6 mt-10 mx-auto">
      <div className="flex items-center  mx-auto mt-2 w-[550px]">
        <div className="flex flex-col relative">
          <CompletedOrderIcon
            className={`absolute -top-8 ltr:-left-1 w-6 h-6 rtl:-right-1 ${
              status >= 1 ? "text-opink" : ""
            }`}
          />
          <span
            className={`${
              status >= 1 ? "before:border-opink" : " before:border-[#727C8E]"
            } ${
              status >= 1 ? "bg-opink" : "bg-[#727C8E]"
            } h-3 w-3 rounded-full relative z-10 before:-top-1 before:-left-1 before:absolute before:w-5 before:h-5 before:rounded-full before:border`}
          />
          {/* <p className='text-xs text-opink text-center absolute -bottom-6 ltr:-left-9 rtl:-right-5 whitespace-nowrap'>{fetchWord('Order_Taken', lang)}</p> */}
          <h4 className="text-xs text-opink text-center absolute -bottom-6 ltr:-left-9 rtl:-right-5 whitespace-nowrap">
            {
              orderStatus?.["1"]?.order_status_content?.find(
                (c) => c?.language_id === language?.id
              )?.status
            }
          </h4>
        </div>
        <div
          className={`flex-1 h-[2px] ${
            status >= 2 ? "bg-opink" : "bg-[#727C8E]"
          }`}
        />
        <div className="flex flex-col relative">
          <HourLessIcon
            className={`absolute -top-8 ltr:-left-1 w-6 h-6 rtl:-right-1 ${
              status >= 2 ? "text-opink" : ""
            }`}
          />
          <span
            className={`${
              status >= 2 ? "before:border-opink" : " before:border-[#727C8E]"
            } ${
              status > 2 ? "bg-opink" : "bg-[#727C8E]"
            } h-3 w-3 rounded-full relative z-10 before:-top-1 before:-left-1 before:absolute before:w-5 before:h-5 before:rounded-full before:border`}
          />
          {/* <p className='text-xs text-opink text-center absolute -bottom-6 ltr:-left-9 rtl:-right-5 whitespace-nowrap'>{fetchWord('Preparing_Order', lang)}</p> */}
          <h4 className="text-xs text-opink text-center absolute -bottom-6 ltr:-left-9 rtl:-right-5 whitespace-nowrap">
            {
              orderStatus?.["2"]?.order_status_content?.find(
                (c) => c?.language_id === language?.id
              )?.status
            }
          </h4>
        </div>
        <div
          className={`flex-1 h-[2px] ${
            status >= 3 ? "bg-opink" : "bg-[#727C8E]"
          }`}
        />
        <div className="flex flex-col relative">
          <ShippingIcon
            className={`absolute -top-8 ltr:-left-3 w-7 h-7 rtl:-right-1 ${
              status >= 3 ? "text-opink" : ""
            }`}
          />
          <span
            className={`${
              status >= 3 ? "before:border-opink" : " before:border-[#727C8E]"
            } ${
              status >= 2 ? "bg-opink" : "bg-[#727C8E]"
            } h-3 w-3 rounded-full relative z-10 before:-top-1 before:-left-1 before:absolute before:w-5 before:h-5 before:rounded-full before:border`}
          />
          {/* <p className='text-xs text-opink text-center absolute -bottom-6 ltr:-left-9 rtl:-right-5 whitespace-nowrap'>{fetchWord('Shipping_Order', lang)}</p> */}
          <h4 className="text-xs text-opink text-center absolute -bottom-6 ltr:-left-9 rtl:-right-5 whitespace-nowrap">
            {
              orderStatus?.["3"]?.order_status_content?.find(
                (c) => c?.language_id === language?.id
              )?.status
            }
          </h4>
        </div>
        <div
          className={`flex-1 h-[2px] ${
            status >= 4 ? "bg-opink" : "bg-[#727C8E]"
          }`}
        />
        <div className="flex flex-col relative">
          <TrunkFlatIcon
            className={`absolute block ${
              language?.code?.toLowerCase() === "ar" ? "icon-flipped" : ""
            } -left-2 -top-8 w-7 h-7  ${status >= 4 ? "text-opink" : ""}`}
          />
          <span
            className={`${
              status >= 4 ? "before:border-opink" : " before:border-[#727C8E]"
            } ${
              status > 4 ? "bg-opink" : "bg-[#727C8E]"
            } h-3 w-3 rounded-full relative z-10 before:-top-1 before:-left-1 before:absolute before:w-5 before:h-5 before:rounded-full before:border`}
          />
          {/* <p className='text-xs text-opink text-center absolute -bottom-6 ltr:-left-9 rtl:-right-5 whitespace-nowrap'>{fetchWord('Order_Received', lang)}</p> */}
          <h4 className="text-xs text-opink text-center absolute -bottom-6 ltr:-left-9 rtl:-right-5 whitespace-nowrap">
            {
              orderStatus?.["4"]?.order_status_content?.find(
                (c) => c?.language_id === language?.id
              )?.status
            }
          </h4>
        </div>
        <div
          className={`flex-1 h-[2px] ${
            status >= 5 ? "bg-opink" : "bg-[#727C8E]"
          }`}
        />
        <div className="flex flex-col relative">
          <PendingIcon
            className={`absolute -top-7 ltr:-left-1 w-5 h-5 rtl:-right-1 ${
              status >= 5 ? "text-opink" : ""
            }`}
          />
          <span
            className={`${
              status >= 5 ? "before:border-opink" : " before:border-[#727C8E]"
            } ${
              status > 5 ? "bg-opink" : "bg-[#727C8E]"
            } h-3 w-3 rounded-full relative z-10 before:-top-1 before:-left-1 before:absolute before:w-5 before:h-5 before:rounded-full before:border`}
          />
          {/* <p className='text-xs text-opink text-center absolute -bottom-6 ltr:-left-9 rtl:-right-5 whitespace-nowrap'>{fetchWord('Order_Received', lang)}</p> */}
          <h4 className="text-xs text-opink text-center absolute -bottom-6 ltr:-left-9 rtl:-right-5 whitespace-nowrap">
            {
              orderStatus?.["5"]?.order_status_content?.find(
                (c) => c?.language_id === language?.id
              )?.status
            }
          </h4>
        </div>
      </div>
    </div>
  );
};
