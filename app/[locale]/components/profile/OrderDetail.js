"use client";
import { getFormatPrice } from "@/app/api/lib/functions";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useContext } from "react";
import { OrderStatusBar } from "./OrderStatusBar";
import { addToUser_cart } from "@/app/api/supabase/user";

const no = "https://kadinle.com/media/images/no.png";
const prepare = "https://kadinle.com/media/images/prepare.png";
const received = "https://kadinle.com/media/images/received.png";
const roundImage = "https://kadinle.com/media/images/roundImage.png";
const shipping2 = "https://kadinle.com/media/images/shipping2.png";
const taken = "https://kadinle.com/media/images/taken.png";
const yes = "https://kadinle.com/media/images/yes.png";

const OrderDetail = ({ order, regionId, setTarget, orderStatus }) => {
  const t = useTranslations();
  const { currency, language, setRefresh } = useGlobalOptions();

  const handleReorder = async () => {
    const products = order?.orderProducts;
    let hash = {};
    for (const item of products) {
      hash[item?.id] = item?.id;
    }
    for (let variantId of Object.keys(hash)) {
      await addToUser_cart(variantId, 1);
    }
    setRefresh((p) => !p);
  };

  return (
    <div className="flex flex-col h-full">
      <OrderStatusBar
        orderStatus={orderStatus}
        statusNumber={
          orderStatus?.[order?.orderDetails?.order_status]?.numerical
        }
      />

      <div className="flex flex-col mt-6 bg-owhite h-full ">
        <div className="flex bg-opink text-owhite rounded-t-[20px] py-4 text-[10px] md:text-[11px] xl:text-[14px] 2xl:text-[16px] px-[10px] md:px-[20px]">
          {/* <div className='w-[50px] invisible'></div> */}
          <div className="min-w-[calc(20%+40px)] lg:min-w-[calc(20%+50px)] md:w-[20%] mr-[6px]  ">
            <h3 className="">{t("Product")}</h3>
          </div>
          <div className="min-w-[9%] md:w-[12%] flex justify-center">
            <h3 className="text-center">{t("Color")}</h3>
          </div>
          <div className="min-w-[9%] md:w-[12%] flex justify-center">
            <h3 className="text-center">{t("Size")}</h3>
          </div>
          <div className="min-w-[9%] md:w-[12%] flex justify-center">
            <h3 className="text-center">{t("Amount")}</h3>
          </div>
          <div className="min-w-[9%] md:w-[12%] flex justify-center">
            <h3 className="text-center">{t("Price")}</h3>
          </div>
          {/* <div className='w-[23%] md:w-[16%] flex justify-center'>
            <p className='text-center'>Order Number</p>
          </div> */}
          <div className="w-[23%] md:w-[16%] flex justify-center">
            <h3 className="text-center">{t("Order_Date")}</h3>
          </div>
        </div>

        <div className="flex flex-col px-[10px] md:px-[20px] bg-owhite ">
          {order?.orderProducts?.map((product) => {
            let size = product?.sizeContent?.find((c) => {
              return c?.region_id === regionId;
            });
            let content = product?.content?.find((c) => {
              return c?.language_id === language?.id;
            });
            let color = product?.colorContent?.find((c) => {
              return c?.language_id === language?.id;
            });
            return (
              <div
                key={product?.id}
                className="cursor-pointer flex items-center py-4 text-[10px] xl:text-[12px] 2xl:text-[17px] border-b"
              >
                <div className="min-w-[40px] max-w-[40px] h-[40px] lg:min-w-[50px] lg:h-[50px]">
                  <Image
                    className="min-w-[40px] h-[40px] max-w-[40px] lg:min-w-[50px] lg:h-[50px] object-cover rounded-full"
                    src={product?.image}
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className=" min-w-[20%] md:w-[calc(20%-50px)] ltr:ml-[6px]  rtl:mr-[6px]">
                  <div className="flex flex-col space-y-[1px]">
                    <h4 className=" text-[10px] xl:text-[12px] 2xl:text-[16px]">
                      {content?.name}
                    </h4>
                    <p className="text-[#C4C4C4] text-[9px] xl:text-[11px] 2xl:text-[14px]">
                      {product?.product_sku}
                    </p>
                  </div>
                </div>
                <div className="min-w-[9%] md:w-[12%] flex justify-center">
                  <h4 className="">{color?.name}</h4>
                </div>
                <div className="min-w-[9%] md:w-[12%] flex justify-center">
                  <h4>{size?.name}</h4>
                </div>
                <div className="min-w-[9%] md:w-[12%] flex justify-center">
                  <h4>{product?.quantity}</h4>
                </div>
                <div className="min-w-[9%] md:w-[12%] flex justify-center">
                  <h4>
                    {getFormatPrice(
                      product?.product_details?.[0]?.price,
                      currency
                    )}
                  </h4>
                </div>

                {/* <div className='w-[23%] md:w-[16%] flex justify-center'>
                    <p>{order?.orderDetails?.order_number}</p>
                  </div> */}
                <div className="w-[23%] md:w-[16%] flex justify-center">
                  <h4>
                    {new Date(
                      order?.orderDetails?.created_at
                    ).toLocaleDateString("en-UK")}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex self-end h-full">
          <button
            onClick={handleReorder}
            className="text-[12px] 2xl:text-[14px] h-fit self-end mb-6 ltr:mr-6 rtl:ml-6 flex items-center justify-center py-2 bg-opink text-owhite cursor-pointer hover:border hover:border-opink hover:bg-owhite hover:text-[#000000] rounded-full w-[120px]"
          >
            {t("REORDER")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
