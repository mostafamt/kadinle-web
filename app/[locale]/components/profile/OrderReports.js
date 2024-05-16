"use client";
import { getFormatPrice } from "@/app/api/lib/functions";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import { useTranslations } from "next-intl";
import React, { useContext } from "react";

export const OrderReports = ({ orderReports }) => {
  const t = useTranslations();
  const { currency } = useGlobalOptions();

  return (
    <div>
      {orderReports?.length ? (
        <>
          {orderReports?.map((report) => (
            <div className="shadow bg-white mb-4" key={report?.id}>
              <ul className="flex gap-2 border-gray-200 bg-gray-100 rounded-t-md border">
                <li className="flex-[2] p-2 flex items-center justify-between text-sm">
                  {t("Order_Date")}{" "}
                  <span className="bg-opink text-white px-1 rounded">
                    {new Date(report?.created_at).toLocaleDateString("en-US")}
                  </span>
                </li>
                <li className="flex-1 p-2 flex items-center justify-between text-sm border-x">
                  {t("order_number")}{" "}
                  <span className="bg-opink text-white px-1 rounded">
                    {report?.order?.order_number}
                  </span>
                </li>
                <li className="flex-1 p-2 flex items-center justify-between text-sm">
                  {t("Price")}
                  <span className="bg-opink text-white px-1 rounded">
                    {getFormatPrice(report?.order?.price, currency)}
                  </span>
                </li>
              </ul>
              <p className="p-4 text-sm text-gray-500">{report?.report}</p>
            </div>
          ))}
        </>
      ) : (
        <p className="text-red-500 ">{t("no_results")}</p>
      )}
    </div>
  );
};
