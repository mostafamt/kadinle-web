import React, { useContext } from "react";

import Image from "next/image";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import { useTranslations } from "next-intl";
import { getFormatPrice } from "@/app/api/lib/functions";
import Link from "next/link";
const done = "https://kadinle.com/media/images/done.svg";

const Done = ({ total, orderId, order_number }) => {
  const t = useTranslations();
  const { currency, user } = useGlobalOptions();

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-[23px] 2xl:text-[26px]">{t("thank_you_order")}</h2>
      <p className="text-[12px] 2xl:text-[15px] text-[#7C7C7C] mt-1 w-[310px] text-center">
        {t("thank_email")} {user?.email}
      </p>
      <div className="mt-2">
        <Image
          src={done}
          alt="Complete"
          height={350}
          width={280}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col mt-8">
        <div className="flex justify-between w-[550px]">
          <div className="flex gap-8 text-[12px] 2xl:text-[16px]">
            <h4 className="w-[100px] 2xl:w-[130px]">{t("Order_Summary")}</h4>
            {/* order redirection */}
            <Link
              href="/profile"
              state={{ target: 1 }}
              className="w-[70px] 2xl:w-[90px] text-opink text-[11px] 2xl:text-[14px]"
            >
              {t("view_details")}
            </Link>
          </div>

          <div className="flex gap-8 text-[12px] 2xl:text-[16px]">
            <h4 className="w-[150px]">{t("Order_Number")}</h4>
            <p className="w-[60px] text-[#6C8394] text-[11px] 2xl:text-[14px]">
              {order_number ? order_number : orderId}
            </p>
            {/* order id */}
          </div>
        </div>

        <div className="flex justify-between w-[550px] mt-2">
          <div className="flex gap-8 text-[12px] 2xl:text-[16px]">
            <h4 className="w-[100px] 2xl:w-[130px]">{t("Order_Total")}</h4>
            <p className="w-[70px] 2xl:w-[90px] text-opink text-[11px] 2xl:text-[14px]">
              {getFormatPrice(total, currency)}
            </p>
          </div>

          <div className="flex gap-8 text-[12px] 2xl:text-[16px]">
            <h4 className="w-[150px]">{t("Payment_Method")}</h4>
            <p className="w-[60px] text-[#6C8394] text-[11px] 2xl:text-[14px]">
              {t("card")}
            </p>
          </div>
        </div>
        <div className="rounded-full self-center py-2 2xl:py-3 mt-8 text-owhite  w-[100px] 2xl:w-[120px] bg-opink flex items-center justify-center hover:bg-owhite hover:text-[#000000] hover:border cursor-pointer hover:border-opink">
          <Link href="/" className="text-[11px] 2xl:text-[14px] ">
            {t("GO_TO_HOME")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Done;
