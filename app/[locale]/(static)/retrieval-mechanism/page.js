import { supabase } from "@/app/api/supabase/supabase.config";
import { getTranslator } from "next-intl/server";
import Link from "next/link";
import React, { useContext } from "react";

import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import { MainTitle } from "../../components/global/MainTitle";

export const metadata = { title: "KADINLE | Retrieval and mechanism" };

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <ScrollUpComponent />
      <div className="flex flex-col poppins mb-10">
        <MainTitle title={t("Retrieval_mechanism")} />
        <div className="container">
          <p className="text-opink mx-auto w-fit my-8">
            <span className="block text-center">{t("thanks_Kadinle")}</span>
            <span
              className="block text-center
            "
            >
              {t("thanks_Kadinle_msg")}
            </span>
          </p>
          <div className="flex flex-col space-y-[1px]">
            <h2 className="text-[18px] lg:text-[20px] 2xl:text-[30px]">
              {t("return_order")}
            </h2>
            <div className="bg-opink w-[67px] 2xl:w-[100px] h-[8px] rounded-xl "></div>
          </div>

          <div className="flex flex-col mt-4 text-[15px] 2xl:text-[16px] max-w-[1040px] 2xl:max-w-[1180px]">
            {/* <div className="flex ltr:ml-8 rtl:mr-8 mt-3  ">
              <div className="flex justify-center items-center h-[22px]">
                <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px] "></div>
              </div>
              <p className="leading-[22px]">
                {t("return_order_msg1")}
                <Link href="/support" className="text-opink">
                  {t("return_order_msg2")}
                </Link>
                {t("return_order_msg3")}
              </p>
            </div> */}
            <div className="flex ltr:ml-8 rtl:mr-8 mt-2 2xl:mt-3">
              <div className="flex justify-center items-center h-[22px]">
                <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px] "></div>
              </div>
              <p className="leading-[22px]">
                {t("log")}{" "}
                <Link href="/profile" className="text-opink">
                  {t("yourAccount")}
                </Link>
                {t("inKadinle")}
              </p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8 mt-3  ">
              <div className="flex justify-center items-center h-[22px]">
                <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px] "></div>
              </div>
              <p className="leading-[22px]">{t("submit_log")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8 mt-2 2xl:mt-3">
              <div className="flex justify-center items-center h-[22px]">
                <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px] "></div>
              </div>
              <p className="leading-[22px]">{t("deliver_log")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8 mt-3  ">
              <div className="flex justify-center items-center h-[22px]">
                <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px] "></div>
              </div>
              <p className="leading-[22px]">{t("shipment_log")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8 mt-2 2xl:mt-3">
              <div className="flex justify-center items-center h-[22px]">
                <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px] "></div>
              </div>
              <p className="leading-[22px]">{t("returned_product")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8 mt-2 2xl:mt-3">
              <div className="flex justify-center items-center h-[22px]">
                <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px] "></div>
              </div>
              <p className="leading-[22px]">{t("funds")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
