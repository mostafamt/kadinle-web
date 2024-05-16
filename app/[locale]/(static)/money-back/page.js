import { getTranslator } from "next-intl/server";

import { ShopNowBtn } from "../../components/global/ShopNowBtn";
import { MainTitle } from "../../components/global/MainTitle";
import Image from "next/image";
import Link from "next/link";

const Money1 = "https://kadinle.com/media/images/Money1.svg";
const Money2 = "https://kadinle.com/media/images/Money2.svg";

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);

  return (
    <div className="flex flex-col poppins">
      <MainTitle title={t("Money_Back_Guarantee")} />

      <div className="flex flex-col space-y-[1px] self-center mt-8">
        <h2 className="text-[18px] lg:text-[20px] 2xl:text-[30px]">
          {t("money_back_msg1")}
        </h2>
        <div className="bg-opink w-[67px] 2xl:w-[100px] h-[8px] rounded-xl "></div>
      </div>

      <div className="flex justify-center mt-7">
        <div className="flex flex-col container max-w-[1500px]">
          <div className="flex items-center justify-between gap-8 lg:gap-[100px]">
            <div className="flex flex-col  text-[12px] md:text-[14px] 2xl:text-[15px]">
              <div className="flex  ">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <h2 className="leading-[22px] text-[14px] md:text-[20px]">
                  {t("money_back_msg2")}
                </h2>
              </div>
              <p className="mt-3 ltr:ml-6 rtl:mr-6">{t("money_back_msg3")}</p>
            </div>

            <div className="min-w-[40%] 2xl:min-w-[50%]">
              <Image
                src={Money1}
                className="w-full object-contain h-auto"
                alt="money back image 1"
                height={450}
                width={1500}
              />
            </div>
          </div>
        </div>
      </div>

      {/* second */}
      <div className="w-full bg-[#F8F9FA] flex justify-center mt-5 py-10 pt-6">
        <div className="flex items-center justify-between gap-8 lg:gap-[100px]  container max-w-[1500px]">
          <div className="min-w-[40%]">
            <Image
              src={Money2}
              className="w-full object-contain"
              alt="money back image 1"
              height={450}
              width={1500}
            />
          </div>

          <div className="flex flex-col mt-14 text-[12px] md:text-[14px] 2xl:text-[15px]">
            <div className="flex">
              <div className="flex justify-center items-center h-[22px]">
                <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
              </div>
              <p className="leading-[22px] text-[14px] md:text-[20px]">
                {t("money_back_msg4")}
              </p>
            </div>
            <p className="text-opink mt-2 ltr:ml-6 rtl:mr-6">
              {t("money_back_msg5")}
            </p>

            <div className="ltr:ml-9 rtl:mr-9">
              {/* <div className="flex  mt-3">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px] ">
                  {t("money_back_msg6")}
                </p>
              </div> */}
              <div className="flex  mt-2">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px] ">{t("money_back_msg7")}</p>
              </div>
              <div className="flex  mt-2">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px] ">{t("money_back_msg8")}</p>
              </div>
              <div className="flex  mt-2">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px] ">{t("money_back_msg9")}</p>
              </div>
              <div className="flex  mt-2">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px] ">{t("money_back_msg10")}</p>
              </div>
              <div className="flex  mt-2">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px] ">{t("money_back_msg11")}</p>
              </div>
              <div className="flex  mt-2">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px] ">{t("money_back_msg12")}</p>
              </div>
              <div className="flex  mt-2">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px] ">{t("money_back_msg13")}</p>
              </div>
              <div className="flex  mt-2">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px] ">{t("money_back_msg14")}</p>
              </div>
              <p>
                {t("money_note_msg")}{" "}
                <Link href="/return" className="text-opink underline">
                  {t("desc19msg2")}
                </Link>{" "}
              </p>
            </div>
            <div className="flex mt-8">
              <ShopNowBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
