import { getTranslator } from "next-intl/server";
import Link from "next/link";

import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import { MainTitle } from "../../components/global/MainTitle";

export const metadata = { title: "KADINLE | We care about you" };

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);

  return (
    <>
      <ScrollUpComponent />
      <div className="flex flex-col poppins mb-10">
        <MainTitle title={t("weCareAboutYou")} />
        <div className="flex justify-center mt-8">
          <div className="flex flex-col container max-w-[1500px]">
            <div className="flex flex-col space-y-[1px] mb-4">
              <h2 className="text-[20px] 2xl:text-[26px]">
                {t("weCareAboutYou")}
              </h2>
              <div className="bg-opink w-[70px] 2xl:w-[90px] h-[8px] rounded-xl "></div>
            </div>
            <div className="flex flex-col text-[15px] 2xl:text-[16px] max-w-[1000px] 2xl:max-w-[1180px]">
              {/* 1 */}
              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  1-
                </p>
                <p className="text-[14px] 2xl:text-[15px] font-[700]">
                  {t("desc1")}
                </p>
              </div>

              <p className="mt-1 ltr:ml-6 rtl:mr-6">{t("desc1msg")}</p>

              {/* 2 */}

              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  2-
                </p>
                <p className="text-[14px] 2xl:text-[15px] font-[700]">
                  {t("desc2")}
                </p>
              </div>

              <p className="mt-1 ltr:ml-6 rtl:mr-6">{t("desc2msg")}</p>

              <div className="flex">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  2-
                </p>

                <div className="flex flex-col ltr:ml-6 rtl:mr-6">
                  <div className="flex  mt-3  ">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">
                      {t("Login_to")}{" "}
                      <Link href="/profile" className="text-opink">
                        {t("My_Account")}{" "}
                      </Link>
                      {t("page")}
                    </p>
                  </div>
                  <div className="flex  mt-2 2xl:mt-3">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">
                      {t("Go_to")}{" "}
                      <Link href="/profile" className="text-opink">
                        “{t("My_Orders")}”{" "}
                      </Link>
                      {t("page")}
                    </p>
                  </div>
                  <div className="flex  mt-2 2xl:mt-3">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("select_order")}</p>
                  </div>
                  <div className="flex  mt-2 2xl:mt-3">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <h3 className="leading-[22px]">{t("select_order_msg")}</h3>
                  </div>
                </div>
              </div>

              <p className="mt-2 ltr:ml-6 rtl:mr-6 ">
                <span className="text-[#DE1D1D]">{t("Note")}:</span>{" "}
                {t("if_order")}
                {t("note_msg")}
              </p>

              {/* 3 */}

              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  3-
                </p>
                <p className="text-[14px] 2xl:text-[15px] font-[700]">
                  {t("desc3")}
                </p>
              </div>

              <div className="flex">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  3-
                </p>
                <div className="flex flex-col ltr:ml-6 rtl:mr-6">
                  <div className="flex  mt-2  ">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("desc3msg")}</p>
                  </div>
                  <div className="flex  mt-2 2xl:mt-3">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("desc3msg2")}</p>
                  </div>
                </div>
              </div>

              {/* 4 */}
              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  4-
                </p>
                <p className="text-[14px] 2xl:text-[15px] font-[700]">
                  {t("desc4")}
                </p>
              </div>

              <div className="flex ">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  4-
                </p>
                <div className="flex flex-col ltr:ml-6 rtl:mr-6">
                  <div className="flex  mt-2  ">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("desc4msg")}</p>
                  </div>
                  <div className="flex  mt-2 2xl:mt-3">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("desc4msg2")}</p>
                  </div>
                </div>
              </div>

              {/* 5 */}

              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  5-
                </p>
                <p className="text-[14px] 2xl:text-[15px] font-[700]">
                  {t("desc5")}
                </p>
              </div>

              <p className="mt-1 ltr:ml-6 rtl:mr-6">{t("desc5msg")}</p>

              <div className="flex">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  2-
                </p>

                <div className="flex flex-col ltr:ml-6 rtl:mr-6">
                  <div className="flex  mt-3  ">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("desc5msg2")}</p>
                  </div>
                  <div className="flex  mt-2 2xl:mt-3">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("desc5msg3")}</p>
                  </div>
                  <div className="flex  mt-2 2xl:mt-3">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("desc5msg4")}</p>
                  </div>
                  <div className="flex  mt-2 2xl:mt-3">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("desc5msg5")}</p>
                  </div>
                </div>
              </div>

              {/* 6 */}

              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  6-
                </p>
                <p className="text-[14px] 2xl:text-[15px] font-[700]">
                  {t("desc6")}
                </p>
              </div>

              <p className="mt-1 ltr:ml-6 rtl:mr-6">{t("desc6msg")}</p>

              {/* 7 */}

              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  7-
                </p>
                <p className="text-[14px] 2xl:text-[15px] font-[700]">
                  {t("desc7")}
                </p>
              </div>

              <p className="mt-1 ltr:ml-6 rtl:mr-6">{t("desc7msg")}</p>

              <div className="flex">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  8-
                </p>

                <div className="flex flex-col ltr:ml-6 rtl:mr-6">
                  <div className="flex  mt-3  ">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("desc8")}</p>
                  </div>
                  <div className="flex  mt-2 2xl:mt-3">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("click_apply")}</p>
                  </div>
                </div>
              </div>

              <p className="mt-2 ltr:ml-6 rtl:mr-6">{t("desc8msg")}</p>

              {/* 8 */}

              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  8-
                </p>
                <p className="text-[14px] 2xl:text-[15px] font-[700]">
                  {t("desc9")}
                </p>
              </div>

              <p className="mt-1 ltr:ml-6 rtl:mr-6">{t("desc9msg")}</p>

              {/* 9 */}

              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  9-
                </p>
                <p className="text-[14px] 2xl:text-[15px] font-[700]">
                  {t("desc10")}
                </p>
              </div>

              <p className="mt-1 ltr:ml-6 rtl:mr-6">{t("desc10msg")}</p>

              <div className="flex">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  11-
                </p>

                <div className="flex flex-col ltr:ml-6 rtl:mr-6">
                  <div className="flex  mt-3  ">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("Visa")}</p>
                  </div>
                  <div className="flex  mt-2 2xl:mt-3">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("Master_Card")}</p>
                  </div>
                  <div className="flex  mt-3  ">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("Google_Play")}</p>
                  </div>
                  <div className="flex  mt-2 2xl:mt-3">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("Apple_Pay")}</p>
                  </div>
                  <div className="flex  mt-3  ">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("American_Express")}</p>
                  </div>
                  <div className="flex  mt-2 2xl:mt-3">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("Alipay")}</p>
                  </div>
                </div>
              </div>

              {/* 10 */}

              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  10-
                </p>
                <p className="text-[14px] 2xl:text-[15px] font-[700]">
                  {t("desc11")}
                </p>
              </div>

              <p className="mt-1 ltr:ml-6 rtl:mr-6">{t("desc11msg")}</p>

              {/* 11 */}

              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  11-
                </p>
                <p className="text-[14px] 2xl:text-[15px] font-[700]">
                  {t("desc12")}
                </p>
              </div>

              <p className="mt-1 ltr:ml-6 rtl:mr-6">{t("desc12msg")}</p>

              <div className="flex">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  14-
                </p>

                <div className="flex flex-col ltr:ml-6 rtl:mr-6">
                  <div className="flex  mt-3  ">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("desc13")}</p>
                  </div>
                  <div className="flex  mt-2 2xl:mt-3">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("desc13msg")}</p>
                  </div>
                  <div className="flex  mt-3  ">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("desc13msg2")}</p>
                  </div>
                </div>
              </div>

              <p className="mt-2 ltr:ml-6 rtl:mr-6">{t("desc13msg3")}</p>

              {/* 12 */}

              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  12-
                </p>
                <p className="text-[14px] 2xl:text-[15px] font-[700]">
                  {t("desc14")}
                </p>
              </div>

              <p className="mt-1 ltr:ml-6 rtl:mr-6">{t("desc14msg")}</p>

              <div className="flex">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  16-
                </p>

                <div className="flex flex-col ltr:ml-6 rtl:mr-6">
                  <div className="flex  mt-3  ">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("desc15")}</p>
                  </div>
                  <div className="flex  mt-2 2xl:mt-3">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("desc15msg")}</p>
                  </div>
                  <div className="flex  mt-3  ">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("desc15msg2")}</p>
                  </div>
                  <div className="flex  mt-3  ">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("desc15msg3")}</p>
                  </div>
                </div>
              </div>

              <p className="mt-2 ltr:ml-6 rtl:mr-6">{t("desc15msg4")}</p>

              {/* 13 */}
              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  13-
                </p>
                <p className="text-[14px] 2xl:text-[15px] font-[700]">
                  {t("desc16")}
                </p>
              </div>

              <p className="mt-1 ltr:ml-6 rtl:mr-6">{t("desc16msg")}</p>

              {/* 14 */}
              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  14-
                </p>
                <p className="text-[14px] 2xl:text-[15px] font-[700]">
                  {t("desc17")}
                </p>
              </div>

              <p className="mt-1 ltr:ml-6 rtl:mr-6">{t("desc17msg")}</p>

              {/* 15 */}

              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  15-
                </p>
                <p className="text-[14px] 2xl:text-[15px] font-[700]">
                  {t("desc18")}
                </p>
              </div>

              <div className="flex">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  16-
                </p>

                <div className="flex flex-col ltr:ml-6 rtl:mr-6">
                  <div className="flex  mt-3  ">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">{t("desc19")}</p>
                  </div>
                  <div className="flex  mt-2 2xl:mt-3">
                    <div className="flex justify-center items-center h-[22px]">
                      <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                    </div>
                    <p className="leading-[22px]">
                      {t("desc19msg")}
                      <Link href="/return" className="text-opink">
                        {t("desc19msg2")}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* 16 */}

              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  17-
                </p>
                <p className="text-[14px] 2xl:text-[15px] font-[700]">
                  {t("desc20")}
                </p>
              </div>

              <p className="mt-1 ltr:ml-6 rtl:mr-6">{t("desc20msg")}</p>

              {/* 17 */}
              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  18-
                </p>
                <p className="text-[14px] 2xl:text-[15px] font-[700]">
                  {t("desc21")}
                </p>
              </div>

              <p className="mt-1 ltr:ml-6 rtl:mr-6">{t("desc21msg")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
