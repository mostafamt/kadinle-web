import React from "react";
import { getTranslator } from "next-intl/server";
import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import { MainTitle } from './../../components/global/MainTitle';

export const metadata = { title: "KADINLE | Free shipping international" };

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);

  return (
    <>
      <ScrollUpComponent />
      <div className="flex flex-col poppins mb-10">
        <MainTitle

          title={t("Free_Shipping_international")}
        />

        <div className="flex justify-center mt-6">
          <div className="flex flex-col container max-w-[1500px]">
            <div className="flex flex-col space-y-[1px]">
              <p className="text-[20px] lg:text-[22px] font-medium">
                {t("Free_Shipping_policy")}
              </p>
              <div className="bg-opink w-[67px] 2xl:w-[100px] h-[8px] rounded-xl "></div>
            </div>

            <div className="flex flex-col mt-4 text-gray-500 text-[15px] 2xl:text-[16px] max-w-[1040px] 2xl:max-w-[1180px]">
              <p className="text-base font-medium">
                {t("Free_Shipping_msg2")}
              </p>
              <p className="text-base font-medium">
                {t("Free_Shipping_msg3")}
              </p>
              <h3 className="mt-4 mb-1 text-black text-[18px] 2xl:text-[20px] font-medium">
                {t("Free_Shipping_msg4")}
              </h3>
              <p className="text-base font-medium">
                {t("Free_Shipping_msg5")}
              </p>
              <h3 className="mt-4 mb-1 text-black text-[18px] 2xl:text-[20px] font-medium">
                {t("Free_Shipping_msg6")}
              </h3>
              <p className="text-base font-medium text-indent">
                {t("Free_Shipping_msg7")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
