import { getTranslator } from "next-intl/server";
import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import Image from "next/image";
import Link from "next/link";
import { MainTitle } from "../../components/global/MainTitle";

export const metadata = { title: "KADINLE | Send gift" };

const Gifts = "https://kadinle.com/media/images/Gifts.svg";

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);

  return (
    <>
      <ScrollUpComponent />
      <div className="flex flex-col poppins mb-10">
        <MainTitle title={t("sendGift")} />

        <div className="flex justify-center mt-6 text-[12px] md:text-[14px] 2xl:text-[15px]">
          <div className="flex flex-col container max-w-[1500px]">
            <div className="flex justify-between lg:gap-14 xl:gap-[80px]">
              <div className="flex-col w-[90%]">
                <div className="flex flex-col space-y-[1px]">
                  <h3 className="text-[20px] 2xl:text-[26px]">
                    {t("send_gift_text1")}
                  </h3>
                  <div className="bg-opink w-[70px] 2xl:w-[90px] h-[8px] rounded-xl "></div>
                </div>

                <p className="text-[12px] md:text-[14px] 2xl:text-[15px] mt-5">
                  {t("send_gift_text2")}
                </p>

                <p className="my-3 mt-10 text-[13px] md:text-[16px] 2xl:text-[18px] font-medium">
                  {t("send_gift_text4")}
                </p>

                <p className="">{t("send_gift_text5")}</p>

                <div className="flex ltr:ml-12 rtl:mr-12 leading-[25px] mt-1 2xl:mt-2 ">
                  <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                    1-
                  </p>
                  <p className="text-[14px] 2xl:text-[15px]">
                    {t("send_gift_text6")}
                  </p>
                </div>
                <div className="flex ltr:ml-12 rtl:mr-12 leading-[25px] mt-1 2xl:mt-2">
                  <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                    2-
                  </p>
                  <p className="text-[14px] 2xl:text-[15px]">
                    {t("send_gift_text7")}
                  </p>
                </div>

                <p className="mt-2">
                  {t("send_gift_text8")}{" "}
                  <Link href="/cart" className="text-opink font-[500]">
                    {t("click_here")}
                  </Link>
                  .
                </p>
              </div>

              <div className="w-[40%] 2xl:w-[45%] ">
                <Image
                  src={Gifts}
                  alt="Gifts"
                  className="w-full h-auto object-contain"
                  height={300}
                  width={350}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-[#F8F9FA] py-4 mt-7 text-[12px] md:text-[14px] 2xl:text-[15px]">
          <div className="flex flex-col container max-w-[1500px]">
            <h3 className="my-3 text-[13px] md:text-[16px] 2xl:text-[18px] font-medium">
              {t("send_gift_text9")}
            </h3>

            <div className="flex ltr:ml-12 rtl:mr-12 leading-[25px] mt-1 2xl:mt-2 ">
              <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                1-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("send_gift_text10")}
              </p>
            </div>
            <div className="flex ltr:ml-12 rtl:mr-12 leading-[25px] mt-1 2xl:mt-2">
              <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                2-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("send_gift_text11")}
              </p>
            </div>
            <div className="flex ltr:ml-12 rtl:mr-12 leading-[25px] mt-1 2xl:mt-2">
              <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                3-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("send_gift_text12")}
              </p>
            </div>

            <p className="mt-2 mb-2">{t("send_gift_text13")}</p>
          </div>
        </div>

        <div className="flex justify-center text-[12px] md:text-[14px] 2xl:text-[15px] mt-5">
          <div className="flex flex-col container max-w-[1500px]">
            <h3 className="my-1 text-[13px] md:text-[16px] 2xl:text-[18px] font-medium">
              {t("send_gift_text14")}
            </h3>

            <div className="flex ltr:ml-12 rtl:mr-12 leading-[25px] mt-2">
              <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                1-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("send_gift_text15")}
              </p>
            </div>
            <div className="flex ltr:ml-12 rtl:mr-12 leading-[25px] mt-1 2xl:mt-2 ">
              <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                2-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("send_gift_text16")}
              </p>
            </div>
            <div className="flex ltr:ml-12 rtl:mr-12 leading-[25px] mt-1 2xl:mt-2">
              <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                3-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("send_gift_text17")}
              </p>
            </div>
            <div className="flex ltr:ml-12 rtl:mr-12 leading-[25px] mt-1 2xl:mt-2 ">
              <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                4-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("send_gift_text18")}
              </p>
            </div>
            <div className="flex ltr:ml-12 rtl:mr-12 leading-[25px] mt-1 2xl:mt-2 ">
              <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                5-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("send_gift_text19")}
              </p>
            </div>
            <div className="flex gap-4 items-center justify-center mt-4">
              <Link
                href="/new-arrivals"
                className="bg-opink text-white rounded-md p-2 "
              >
                {t("send_products")}
              </Link>
              <Link
                state={{ target: 8 }}
                href="/profile"
                className="bg-opink text-white rounded-md p-2 "
              >
                {t("send_money")}
              </Link>
            </div>

            {/* <p className="mt-10">{t("send_gift_text20")}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
