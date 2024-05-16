"use client";
import { generateMail } from "@/app/api/emails/sender";
import { getFormatPrice } from "@/app/api/lib/functions";
import {
  getOrderStatus,
  listUserOrders,
  sendOrderReport,
} from "@/app/api/supabase/user";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { InputField } from "../forms/InputField";
import { Loading } from "../global/Loading";
import { CustomModal } from "../modal/CustomModal";
import { OrderBill } from "./OrderBill";
import OrderDetail from "./OrderDetail";

export const UserOrders = ({ setActiveTab, orders, orderStatus }) => {
  const t = useTranslations();
  const [status, setStatus] = useState(0);
  const [details, setDetails] = useState(false);
  const { language, currency, user } = useGlobalOptions();
  const [loading, setLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [ordersFilter, setOrdersFilter] = useState(orders);
  const [orderReport, setOrderReport] = useState({});
  const [selectedOrder, setSelectedOrder] = useState({});

  const openOrderPopup = (order, action) => {
    setSelectedOrder(order);
    setOpenForm(action);
    if (action === "bill") return;
    setOrderReport({ order_id: order?.orderDetails?.id, user_id: user?.id });
  };

  const onChangeField = (e) => {
    setOrderReport((prev) => {
      return {
        ...prev,
        report: e.target.value,
      };
    });
  };

  const onSubmitReport = async (e) => {
    e.preventDefault();
    if (!orderReport?.report) return;
    const response = await sendOrderReport(orderReport);
    if (response?.error) {
      toast.error(t("order_report_failed"));
    } else {
      // generateMail("order_daily_msg", user?.email, {
      //   customer_name: `${user?.user_metadata?.first_name} ${
      //     user?.user_metadata?.last_name ? user?.user_metadata?.last_name : ""
      //   }`,
      //   link: `https://kadinle.com/profile`,
      //   carrier: "",
      //   status:
      //     orderStatus?.[selectedOrder?.orderDetails?.order_status]?.status,
      //   timeframe: "",
      //   lang: locale,
      // });
      toast.success(t("order_report_success"));
      setOrderReport({});
    }
    setOpenForm(false);
  };

  const getItemsLength = (items) => {
    return items?.reduce((result, cur) => {
      return (result += cur?.content?.length);
    }, 0);
  };

  const filterOrders = (status) => {
    setStatus(status);
    if (status === 0) {
      setOrdersFilter(orders);
    } else {
      let newOrders = orders?.filter((order) => {
        return (
          orderStatus?.[order?.orderDetails?.order_status]?.numerical === status
        );
      });
      setOrdersFilter(newOrders);
    }
  };

  return (
    <>
      {openForm === "bill" ? (
        <OrderBill
          open={openForm}
          onClose={() => setOpenForm(false)}
          order_id={selectedOrder?.orderDetails?.id}
        />
      ) : (
        <CustomModal open={openForm} onClose={() => setOpenForm(false)}>
          <form onSubmit={onSubmitReport} className="flex flex-col gap-4 py-4">
            <h3 className="mb-2 text-center text-opink text-xl font-semibold capitalize">
              {t("send_order_report")}
            </h3>
            <p className="bg-gray-200 capitalize w-fit px-4 p-1 rounded-md">
              {t("order_number")}: {selectedOrder?.orderDetails?.order_number}
            </p>
            <InputField
              long
              onChange={onChangeField}
              value={orderReport?.report}
              fieldClassName="min-h-[100px] min-w-[300px] md:min-w-[500px] p-4"
            />
            <button
              disabled={!orderReport?.report}
              className="mt-6 text-white disabled:bg-slate-400 bg-opink p-2 rounded-md px-4 capitalize"
            >
              {t("send")}
            </button>
          </form>
        </CustomModal>
      )}
      <div className="w-[73%] md:w-[70%] min-w-[calc(100%-320px)] bg-white p-2">
        {details && (
          <OrderDetail
            orderStatus={orderStatus}
            setActiveTab={setActiveTab}
            regionId={currency?.region_id}
            order={details}
            language={language}
          />
        )}
        {!details && (
          <div className="flex flex-col ">
            <div className="flex gap-8 md:gap-16 text-[11px] md:text-[12px] xl:text-[15px] 2xl:text-[17px] h-[52px] ltr:pl-[60px] rtl:pr-[60px] ltr:2xl:pl-[130px] rtl:2xl:pr-[130px] mb-4">
              <div className=" cursor-pointer flex flex-col justify-center items-center">
                <button
                  onClick={() => filterOrders(0)}
                  className="text-[#707070]"
                >
                  {t("ALL")}
                </button>
                <div
                  className={`h-[2px] w-[40px] ${
                    status === 0 ? "visible" : "invisible"
                  } bg-opink`}
                ></div>
              </div>

              <div className=" cursor-pointer flex flex-col justify-center items-center">
                <button
                  onClick={() => filterOrders(5)}
                  className="text-[#00C922]"
                >
                  {t("DELIVERED")}
                </button>
                <div
                  className={`h-[2px] w-[65px] ${
                    status === 5 ? "visible" : "invisible"
                  } bg-opink`}
                ></div>
              </div>

              <div className=" cursor-pointer flex flex-col justify-center items-center">
                <button
                  onClick={() => filterOrders(1)}
                  className="text-[#00ADC9]"
                >
                  {t("PENDING")}
                </button>
                <div
                  className={`h-[2px] w-[55px] ${
                    status === 1 ? "visible" : "invisible"
                  } bg-opink`}
                ></div>
              </div>

              <div className=" cursor-pointer flex flex-col justify-center items-center">
                <button
                  onClick={() => filterOrders(6)}
                  className="text-[#F23468]"
                >
                  {t("CANCELLED")}
                </button>
                <div
                  className={`h-[2px] w-[65px] ${
                    status === 6 ? "visible" : "invisible"
                  } bg-opink`}
                ></div>
              </div>
            </div>

            <div className="flex flex-col ">
              <div className="flex bg-opink text-owhite rounded-t-[20px] py-4 text-[10px] md:text-[11px] gap-2 2xl:gap-3 xl:text-[14px] 2xl:text-[16px] px-[10px] md:px-[20px]">
                <div className="w-[50px] 2xl:w-[60px] invisible"></div>
                <div className="w-[calc(23%-50px)] 2xl:w-[calc(23%-60px)]">
                  <p className="text-center">{t("Order")}</p>
                </div>
                <div className="w-[16%] flex justify-center">
                  <p className="text-center">{t("Reference")}</p>
                </div>
                <div className="w-[16%] flex justify-center">
                  <p className="text-center">{t("Order_Date")}</p>
                </div>
                <div className="w-[16%] flex justify-center">
                  <p className="text-center">{t("Shipping_Date")}</p>
                </div>
                <div className="w-[16%] flex justify-center">
                  <p className="text-center">{t("Quantity")}</p>
                </div>
                <div className="w-[16%] flex justify-center">
                  <p className="text-center">{t("Amount_Total")}</p>
                </div>
                <div className="w-[16%] flex justify-center">
                  <p className="text-center">{t("action")}</p>
                </div>
              </div>
              {loading ? (
                <Loading />
              ) : (
                <div className="flex flex-col px-[10px] md:px-[20px] bg-owhite pb-4">
                  {ordersFilter?.length ? (
                    <>
                      {ordersFilter?.map((order, index) => {
                        let content = order?.orderProducts?.[0]?.content?.find(
                          (c) => {
                            return c?.language_id === language?.id;
                          }
                        );
                        return (
                          <div
                            key={`${order?.orderDetails?.order_number}-${index}`}
                            onClick={(e) => setDetails(order)}
                            className="cursor-pointer flex items-center py-4 gap-2 2xl:gap-3  text-[10px] xl:text-[12px] 2xl:text-[17px] border-b"
                          >
                            <div className="w-[50px] h-[50px] 2xl:min-w-[60px] 2xl:h-[60px]">
                              <Image
                                className="w-[50px] h-[50px] object-cover rounded-full"
                                src={order?.orderProducts?.[0]?.image}
                                alt={content?.name}
                                height={50}
                                width={50}
                              />
                            </div>
                            <div className="w-[calc(23%-50px)] 2xl:w-[calc(23%-60px)]">
                              <div className="flex flex-col space-y-[1px]">
                                <p className=" text-[10px] xl:text-[12px] 2xl:text-[15px]">
                                  {content?.name}
                                </p>
                                <p className="text-[#C4C4C4] text-[9px] xl:text-[11px] 2xl:text-[14px]">
                                  {order?.orderProducts?.[0]?.product_sku}
                                </p>
                              </div>
                            </div>
                            <div className="w-[16%] flex justify-center">
                              <p className="text-opink underline">
                                {order?.orderDetails?.order_number}
                              </p>
                            </div>
                            <div className="w-[16%] flex justify-center">
                              <p>
                                {new Date(
                                  order?.orderDetails?.created_at
                                ).toLocaleDateString("en-UK")}
                              </p>
                            </div>
                            <div className="w-[16%] flex justify-center">
                              <p>
                                {order?.orderDetails?.shipping_date
                                  ? `${order?.orderDetails?.shipping_date} ${t(
                                      "days"
                                    )} `
                                  : t("soon")}
                              </p>
                            </div>
                            <div className="w-[16%] flex justify-center">
                              <p>{getItemsLength(order?.orderProducts)}</p>
                            </div>

                            <div className="w-[16%] flex justify-center">
                              <p>
                                {getFormatPrice(
                                  order?.orderDetails?.price,
                                  currency
                                )}
                              </p>
                            </div>
                            <div className="w-[16%] flex flex-col gap-1 justify-center">
                              <button
                                className="bg-red-500 text-white px-4 py-1 rounded-md text-xs"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openOrderPopup(order, "report");
                                }}
                              >
                                {t("report")}
                              </button>
                              <button
                                className="bg-blue-500 text-white px-4 py-1 rounded-md text-xs"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openOrderPopup(order, "bill");
                                }}
                              >
                                {t("view_bill")}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <p className="text-red-500 bg-red-100 mt-4 p-2 text-center">
                      {t("order_msg_empty")}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
