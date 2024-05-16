"use client";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import { useTranslations } from "next-intl";
import React, { useContext, useState } from "react";
import { CustomModal } from "../modal/CustomModal";
import { OrderBill } from "./OrderBill";
import { getFormatPrice } from "@/app/api/lib/functions";

export const BillReports = ({ billReports }) => {
  const t = useTranslations();
  const { currency } = useGlobalOptions();
  const [orderId, setOrderId] = useState("");

  return (
    <>
      {orderId ? (
        <OrderBill
          order_id={orderId}
          open={orderId}
          onClose={() => setOrderId("")}
        />
      ) : null}
      {billReports?.length ? (
        <>
          {billReports?.map((report) => (
            <div className="shadow bg-white mb-4" key={report?.id}>
              <ul className="flex border-gray-200 bg-gray-100 rounded-t-md border">
                <li className="flex-[2] p-2 flex items-center justify-between text-sm">
                  {t("Order_Date")}{" "}
                  <span className="bg-opink text-white px-1 rounded">
                    {new Date(report?.created_at).toLocaleDateString("en-US")}
                  </span>
                </li>
                <li className="flex-1 p-2 flex items-center justify-between text-sm ltr:border-l rtl:border-r">
                  {t("shipping_cost")}
                  <span className="bg-opink text-white px-1 rounded">
                    {getFormatPrice(report?.bill?.shipping_cost, currency)}
                  </span>
                </li>
                <li className="flex-1 p-2 flex items-center justify-between text-sm border-x">
                  {t("total")}{" "}
                  <span className="bg-opink text-white px-1 rounded">
                    {getFormatPrice(report?.bill?.total, currency)}
                  </span>
                </li>
                <li className="p-2 items-center text-sm">
                  <button
                    onClick={() => setOrderId(report?.bill?.order_id)}
                    className="bg-blue-500 capitalize text-white  text-xs p-1 rounded-md "
                  >
                    {t("view_bill")}
                  </button>
                </li>
              </ul>
              <p className="p-4 text-sm text-gray-500">{report?.report}</p>
            </div>
          ))}
        </>
      ) : (
        <p>{t("no_results")}</p>
      )}
    </>
  );
};
