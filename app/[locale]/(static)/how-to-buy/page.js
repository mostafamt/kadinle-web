import { getTranslator } from "next-intl/server";
import Image from "next/image";

import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import { MainTitle } from "../../components/global/MainTitle";

export const metadata = {
  title: "KADINLE | How to buy",
};

const buy1 = "https://kadinle.com/media/images/buy1.png";
const buy2 = "https://kadinle.com/media/images/buy2.png";
const buy3 = "https://kadinle.com/media/images/buy3.png";
const buy4 = "https://kadinle.com/media/images/buy4.png";

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);

  return (
    <>
      <ScrollUpComponent />
      <div className="flex flex-col poppins">
        <MainTitle title={t("how_buy_msg10")} />

        <div className="flex justify-center mt-8 mb-10">
          <div className="flex flex-col container max-w-[1500px]">
            <div className="flex flex-col space-y-[1px]">
              <h2 className="text-[18px] lg:text-[20px] 2xl:text-[30px]">
                {t("how_buy_msg")}
              </h2>
              <div className="bg-opink w-[67px] 2xl:w-[100px] h-[8px] rounded-xl "></div>
            </div>

            <div className="flex flex-col mt-2 text-[15px] 2xl:text-[16px] max-w-[1000px] 2xl:max-w-[1500px]">
              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  1-
                </p>
                <p className="text-[14px] 2xl:text-[15px]">
                  {t("how_buy_msg2")}
                  <span className="font-semibold">”{t("add_to_cart")}”</span>
                  {t("add_to_cart_turkey")}
                </p>
              </div>

              <div className="flex ltr:ml-6 rtl:mr-6 mt-3">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  1-
                </p>
                <Image
                  className="w-[80%] lg:w-[700px] 2xl:w-[800px] object-cover mb-2 h-auto"
                  src={buy1}
                  alt="how to buy image 1"
                  height={500}
                  width={600}
                />
              </div>

              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] my-3 2xl:mt-3 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  2-
                </p>
                <p className="text-[14px] 2xl:text-[15px]">
                  {t("how_buy_msg3")}
                </p>
              </div>

              <div className="flex ltr:ml-6 rtl:mr-6 ">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  2-
                </p>
                <Image
                  className=" w-[80%] lg:w-[700px] 2xl:w-[800px] object-cover mb-2 h-auto"
                  src={buy2}
                  alt="how to buy image 2"
                  height={500}
                  width={600}
                />
              </div>

              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] my-2">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  3-
                </p>
                <p className="text-[14px] 2xl:text-[15px]">
                  {t("how_buy_msg41")}{" "}
                  <span className="font-semibold">{t("how_buy_msg42")}</span>
                  {t("how_buy_msg43")}
                </p>
              </div>
              <p className="text-[14px] 2xl:text-[15px] ltr:ml-6 rtl:mr-6 mb-3">
                <span className="text-opink">{t("note")}: </span>
                {t("how_buy_msg44")}
              </p>

              <div className="flex ltr:ml-6 rtl:mr-6 ">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  3-
                </p>
                <Image
                  className=" w-[80%] lg:w-[700px] 2xl:w-[800px] object-cover mb-2 h-auto"
                  src={buy3}
                  alt="how to buy image 3"
                  height={300}
                  width={600}
                />
              </div>

              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-2 2xl:mt-2 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  4-
                </p>
                <p className="text-[14px] 2xl:text-[15px]">
                  {t("how_buy_msg5")}
                </p>
              </div>

              <div className="flex  mt-3 ltr:ml-6 rtl:mr-6  ">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px]">{t("how_buy_msg6")}</p>
              </div>
              <div className="flex  mt-2 2xl:mt-3 ltr:ml-6 rtl:mr-6">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px]">{t("how_buy_msg7")}</p>
              </div>
              <div className="flex  mt-2 ltr:ml-6 rtl:mr-6  ">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px]">{t("how_buy_msg8")}</p>
              </div>
              <div className="flex  mt-2 ltr:ml-6 rtl:mr-6  ">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px]">{t("how_buy_msg9")}</p>
              </div>

              <div className="flex ltr:ml-6 rtl:mr-6 my-3">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  3-
                </p>
                <Image
                  className=" w-[80%] lg:w-[700px] 2xl:w-[800px] object-cover mb-2 h-auto"
                  src={buy4}
                  alt="how to buy image 4"
                  height={500}
                  width={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
