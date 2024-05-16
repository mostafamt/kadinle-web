"use client";
import { getFormatPrice } from "@/app/api/lib/functions";
import {
  addRequestReturnOrder,
  getCombineOrders,
  getReasons,
} from "@/app/api/supabase/user";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { UploadIcon } from "../Icons/UploadIcon";
import { LoadingSpinier } from "../global/LoadingSpinier";

export const ReturnOrderForm = ({ setOpenFormReturn, locale }) => {
  const t = useTranslations();
  const { language, currency } = useGlobalOptions();
  const [variantId, setVariantId] = useState("");
  const [orderId, setOrderId] = useState("");
  const [reason, setReason] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [orders, setOrders] = useState([]);
  const [reasons, setReasons] = useState([]);
  const [selectedReason, setSelectedReason] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState({});
  const [agree, setAgree] = useState(false);
  const [filesPreview, setFilesPreview] = useState([]);
  const [files, setFiles] = useState([]);
  const [responseLoading, setResponseLoading] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const getOrders = async () => {
    setLoading(true);
    getCombineOrders().then((res) => {
      setOrders(
        res?.data?.filter((order) => order?.order_status?.numerical === 5)
      );
      setLoading(false);
    });
  };

  const getReturnReasons = async () => {
    getReasons().then((res) => {
      setReasons(res?.data?.filter((r) => r?.language_id === language?.id));
    });
  };

  useEffect(() => {
    setSelectedOrder(orders?.find((order) => order?.id === orderId));
  }, [orderId]);

  useEffect(() => {
    getReturnReasons();
    getOrders();
  }, []);

  const onChangeFiles = (e) => {
    const media = Array.from(e.target.files);
    let previews = [];
    for (const file of media) {
      previews?.push(URL.createObjectURL(file));
    }
    setFilesPreview(previews);
    setFiles(media);
  };

  const onSelectOrder = (order_id, variant_id) => {
    setOrderId(order_id);
    setVariantId(variant_id);
  };

  const submitReturn = async (e) => {
    e.preventDefault();
    if (!orderId || !variantId) {
      toast.error(t("return_fill_fields"));
      return;
    }
    setResponseLoading(true);
    const response = await addRequestReturnOrder(
      {
        orderId,
        variantId,
        return_reason_id: +selectedReason,
        other_reason: reason,
        return_status: "c869bbbc-4679-43e8-8860-d90dcf186842",
        files,
      },
      locale
    );
    if (response?.error) toast.error(t("error_return"));
    else {
      toast.success(t("success_return"));
      setReason("");
      setIsConfirmed(true);
      setTimeout(() => {
        setIsConfirmed(false);
        setOpenFormReturn(false);
      }, 3000);
    }
    setResponseLoading(false);
  };

  return (
    <>
      {closeModal ? (
        <div
          className="bg-[#00000040] fixed top-0 left-0 w-full h-full z-[11100]"
          onClick={() => setCloseModal(false)}
        >
          <div className="bg-white rounded-md absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[70%]">
            <div className="overflow-auto min-w-[300px] p-4 text-sm max-h-full">
              {loading ? (
                <p>{t("loading")}</p>
              ) : (
                <>
                  {orders?.length ? (
                    <>
                      {orders?.map((order) => {
                        return order?.order_content?.map((variant) => {
                          let product = variant?.product_variant?.product;
                          let content = product?.product_content?.find(
                            (c) => c?.language_id === language?.id
                          );
                          return (
                            <div
                              key={order?.order_number}
                              className="flex border-b p-2 hover:bg-gray-100 items-center cursor-pointer"
                              onClick={() => {
                                onSelectOrder(order?.id, variant?.variant_id);
                                setCloseModal(false);
                              }}
                            >
                              <Image
                                src={product?.product_image?.[0]?.image}
                                alt={content?.name}
                                className="ltr:border-r-2 ltr:pr-2 ltr:mr-4 rtl:border-l-2 rtl:pl-2 rtl:ml-4  w-12 h-16 object-contain p-[2px] bg-white"
                                height={64}
                                width={48}
                              />
                              <div className="flex-1  flex flex-col gap-1">
                                <strong>
                                  {t("Order_Number")}: {order?.order_number}
                                </strong>
                                <h3 className="capitalize font-medium">
                                  {content?.name}
                                </h3>
                                <span>
                                  {t("Price")}:{" "}
                                  {getFormatPrice(product?.price, currency)}
                                </span>
                              </div>
                            </div>
                          );
                        });
                      })}
                    </>
                  ) : (
                    <p>{t("empty_msg")}</p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
      <div className="">
        {isConfirmed ? (
          <div className="flex flex-col items-center justify-center gap-2">
            <h3>{t("accept_return_request")}</h3>
            <p>{t("return_time")}</p>
          </div>
        ) : (
          <form className="flex flex-col gap-6 mt-4" onSubmit={submitReturn}>
            <div className="flex gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <label className="capitalize">{t("product_name")}</label>
                <button
                  type="button"
                  className="p-2 rounded-md bg-white border-gray-200 border"
                  onClick={() => setCloseModal(true)}
                >
                  {t("choose")}
                </button>
              </div>
            </div>
            {selectedOrder?.order_number ? (
              <div className="bg-white shadow p-2 border-">
                <div className="flex items-center cursor-pointer">
                  <Image
                    src={selectedOrder?.product?.product_image?.[0]?.image}
                    alt={selectedOrder?.product?.product_content?.[0]?.name}
                    className="ltr:border-r-2 ltr:pr-2 ltr:mr-4 rtl:border-l-2 rtl:pl-2 rtl:ml-4  w-12 h-16 object-contain p-[2px] bg-white"
                    height={64}
                    width={48}
                  />
                  <div className="flex-1 flex flex-col gap-1">
                    <strong>
                      {t("Order_Number")}: {selectedOrder?.order_number}
                    </strong>
                    <p>
                      {
                        selectedOrder?.product?.product_content?.find(
                          (c) => c?.language_id === language?.id
                        )?.name
                      }
                    </p>
                    <span>
                      {t("Price")}:{" "}
                      {getFormatPrice(selectedOrder?.product?.price, currency)}
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
            <div className="flex flex-col">
              <label className="capitalize">{t("reason")}</label>
              <select
                className="p-3 text-sm bg-red-200 text-red-500 rounded-md"
                value={selectedReason}
                onChange={(e) => setSelectedReason(e.target.value)}
              >
                {reasons?.map((reason) => (
                  <option
                    key={reason?.return_reason_id}
                    value={reason?.return_reason_id}
                  >
                    {reason?.reason}
                  </option>
                ))}
              </select>
            </div>
            {+selectedReason === 8 ? (
              <textarea
                className="min-h-[140px] p-3"
                name=""
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder={t("reason")}
              />
            ) : null}
            <div className="h-16 bg-gray-200 gap-2 relative border text-gray-600 border-gray-300 rounded-md flex items-center justify-center">
              <UploadIcon />
              <input
                type="file"
                multiple
                onChange={onChangeFiles}
                className="absolute opacity-0 top-0 left-0 z-10 w-full h-full"
              />
              <label>{t("please_attach_image")}</label>
            </div>
            {filesPreview ? (
              <div className="flex flex-wrap gap-4 ">
                {filesPreview?.map((img) => (
                  <Image
                    key={img}
                    src={img}
                    alt="product attachment"
                    className="h-20 w-16 object-contain border border-gray-500 p-[2px] rounded-md"
                    height={80}
                    width={64}
                  />
                ))}
              </div>
            ) : null}
            <label className="flex gap-2 items-center">
              <input
                type="checkbox"
                onChange={(e) => setAgree(e.target.checked)}
              />
              {t("are_u_sure")}
            </label>
            {agree && !["3", "4", "5"]?.includes(selectedReason) ? (
              <p className="text-yellow-600 my-2 bg-yellow-100 p-2 rounded-md text-sm">
                {t("return_warning")}
              </p>
            ) : null}
            {responseLoading ? (
              <LoadingSpinier />
            ) : (
              <button
                disabled={!agree}
                className="bg-opink disabled:bg-gray-300 text-white text-sm p-2 rounded-md px-8"
              >
                {t("confirm_return")}
              </button>
            )}
          </form>
        )}
      </div>
    </>
  );
};
