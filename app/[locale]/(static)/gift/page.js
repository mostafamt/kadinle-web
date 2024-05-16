import { getTranslator } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import { MainTitle } from "../../components/global/MainTitle";

export const metadata = {
  title: "KADINLE | Gift",
};

const Gift = "https://kadinle.com/media/images/gift2.svg";

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);

  return (
    <>
      <ScrollUpComponent />
      <div className="flex flex-col poppins mb-10">
        <MainTitle title={t("Gift_Cards")} />
        <div className="flex justify-center mt-6 text-[12px] md:text-[14px] 2xl:text-[15px]">
          <div className="flex flex-col container max-w-[1500px] ">
            <div className="w-[40%] 2xl:w-[45%] self-center mb-5">
              <Image
                src={Gift}
                alt="Gift"
                className="w-full h-auto object-contain"
                height={250}
                width={300}
              />
            </div>

            <div className="">
              <div className="flex-col w-[90%]">
                <div className="flex flex-col space-y-[1px]">
                  <h2 className="text-[20px] 2xl:text-[26px]">
                    {t("gift_msg1")}
                  </h2>
                  <div className="bg-opink w-[70px] 2xl:w-[90px] h-[8px] rounded-xl "></div>
                </div>

                <p className="text-[12px] md:text-[14px] 2xl:text-[15px] mt-5">
                  {t("gift_msg2")}
                </p>

                <p className="text-[13px] md:text-[16px] 2xl:text-[18px] font-[500]  mt-3">
                  {t("gift_msg3")}
                </p>
                <p>{t("gift_msg4")}</p>

                <p className="my-3">{t("gift_msg5")} </p>

                <p className="text-opink font-[700]">{t("gift_msg6")}</p>
                <div className="flex ltr:ml-12 rtl:mr-12  mt-3 ">
                  <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
                  <p className="">{t("gift_msg7")}</p>
                </div>
                <div className="flex ltr:ml-12 rtl:mr-12  mt-1 ">
                  <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
                  <p className="">{t("gift_msg8")}</p>
                </div>
                <div className="flex ltr:ml-12 rtl:mr-12  mt-1 ">
                  <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
                  <p className="">{t("gift_msg9")}</p>
                </div>

                <p className="my-3">{t("gift_msg10")}</p>
                <div className=" flex ltr:ml-12 rtl:mr-12  mt-3 ">
                  <p className="invisible text-opink ltr:mr-[6px] rtl:ml-[6px]">
                    -{}
                  </p>
                  <p className="">
                    <span className="font-[700]">{t("gift_msg11")} </span>
                    {t("gift_msg12")}
                  </p>
                </div>
                <div className=" flex ltr:ml-12 rtl:mr-12  mt-2 ">
                  <p className="invisible text-opink ltr:mr-[6px] rtl:ml-[6px] ">
                    -{}
                  </p>
                  <p className="">
                    <span className="font-[700]">{t("gift_msg13")}</span>
                    {t("gift_msg14")}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[90%]">
              <p className="text-opink font-[700] mt-4 mb-1">
                {t("Purchase_Vouchers")}
              </p>
              <p>{t("gift_msg15")}</p>

              <p className="text-opink font-[700] mt-4 mb-1">
                {t("gift_msg16")}
              </p>
              <p>{t("gift_msg17")}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-[#F8F9FA] py-4 mt-7 text-[12px] md:text-[14px] 2xl:text-[15px]">
          <div className="flex flex-col container max-w-[1500px]">
            <h3 className="text-[13px] md:text-[16px] 2xl:text-[18px] font-[500] ">
              {t("gift_msg18")}
            </h3>

            <div className="flex ltr:ml-12 rtl:mr-12 leading-[25px] mt-3">
              <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                1-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">{t("gift_msg19")}</p>
            </div>
            <div className="flex ltr:ml-12 rtl:mr-12 leading-[25px] mt-1 2xl:mt-2 ">
              <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                2-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">{t("gift_msg20")}</p>
            </div>
            <div className="flex ltr:ml-12 rtl:mr-12 leading-[25px] mt-1 2xl:mt-2">
              <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                3-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">{t("gift_msg21")}</p>
            </div>
            <div className="flex ltr:ml-12 rtl:mr-12 leading-[25px] mt-1 2xl:mt-2 ">
              <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                4-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">{t("gift_msg22")}</p>
            </div>
            <div className="flex ltr:ml-12 rtl:mr-12 leading-[25px] mt-1 2xl:mt-2 ">
              <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                5-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">{t("gift_msg24")}</p>
            </div>
            <div className="flex ltr:ml-12 rtl:mr-12 leading-[25px] mt-1 2xl:mt-2 ">
              <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                6-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">{t("gift_msg25")}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center text-[12px] md:text-[14px] 2xl:text-[15px] mt-5">
          <div className="flex flex-col container max-w-[1500px]">
            <h3 className="text-[13px] md:text-[16px] 2xl:text-[18px] font-[500] ">
              {t("gift_msg26")}
            </h3>
            <p className="mt-1">{t("gift_msg27")}</p>

            <p className="text-[13px] md:text-[16px] 2xl:text-[18px] font-[500] mt-4">
              {t("gift_msg28")}
            </p>
            <p className="mt-1">{t("gift_msg29")}</p>

            <p className="text-opink font-[700] mt-4 mb-1">{t("gift_msg30")}</p>

            <div className="flex ltr:ml-12 rtl:mr-12  mt-2 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("gift_msg31")}</p>
            </div>
            <div className="flex ltr:ml-12 rtl:mr-12  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("gift_msg32")}</p>
            </div>
            <div className="flex ltr:ml-12 rtl:mr-12  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("gift_msg33")}</p>
            </div>
            <div className="flex ltr:ml-12 rtl:mr-12  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("gift_msg34")}</p>
            </div>
            <div className="flex ltr:ml-12 rtl:mr-12  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("gift_msg35")}</p>
            </div>
            <div className="flex ltr:ml-12 rtl:mr-12  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("gift_msg36")}</p>
            </div>
            <div className="flex ltr:ml-12 rtl:mr-12  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">
                {t("gift_msg37")} (
                <Link href={"/send-gift"} className="text-opink">
                  {t("gift_msg38")}
                </Link>
                )
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4  bg-[#F8F9FA] py-3 text-[12px] md:text-[14px] 2xl:text-[15px]">
          <div className="flex flex-col container max-w-[1500px]">
            <h3 className="text-[13px] md:text-[16px] 2xl:text-[18px] font-[500] ">
              {t("gift_msg39")}
            </h3>
            <div className="flex ltr:ml-12 rtl:mr-12  mt-2">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("gift_msg40")}</p>
            </div>
            <div className="flex ltr:ml-12 rtl:mr-12  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("gift_msg41")}</p>
            </div>

            <p className="mt-2">{t("gift_msg42")}</p>
            <div className="flex ltr:ml-12 rtl:mr-12  mt-2">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("gift_msg43")}</p>
            </div>

            <p className="mt-2">{t("gift_msg44")}</p>
            <div className="flex ltr:ml-12 rtl:mr-12  mt-2">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("gift_msg45")}</p>
            </div>

            <p className="mt-2">{t("gift_msg46")}</p>
            <div className="flex ltr:ml-12 rtl:mr-12  mt-2">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("gift_msg47")}</p>
            </div>

            <p className="mt-2">{t("gift_msg48")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
