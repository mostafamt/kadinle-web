import { getTranslator } from "next-intl/server";
import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import Link from "next/link";
import { MainTitle } from "../../components/global/MainTitle";

export const metadata = { title: "KADINLE | Return" };

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);

  return (
    <>
      <ScrollUpComponent />
      <div className="flex flex-col poppins mb-10">
        <MainTitle title={t("return_page_text")} />

        <div className="container mt-8">
          <div className="flex flex-col space-y-[1px] mb-5">
            <p className="text-[18px] lg:text-[20px] 2xl:text-[30px]">
              {t("return_page_text1")}
            </p>
            <div className="bg-opink w-[67px] 2xl:w-[100px] h-[8px] rounded-xl "></div>
          </div>

          <div className="container mt-6">
            <p className="font-[700] mb-1">{t("return_page_text2")}</p>
            <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-1 2xl:mt-2 ">
              <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
                1-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("return_page_text4")}
              </p>
            </div>
            <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-1 2xl:mt-2">
              <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
                2-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("return_page_text5")}
              </p>
            </div>
            <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-1 2xl:mt-2 ">
              <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
                3-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("return_page_text6")}
              </p>
            </div>
            <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-1 2xl:mt-2 ">
              <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
                4-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("return_page_text7")}
              </p>
            </div>
          </div>
        </div>
<div className="!mt-6 container">

        <p className="font-[700] mb-1">{t("return_page_text28")}</p>
        <div className="flex items-center gap-1 mt-3 ltr:ml-3 rtl:mr-3">
          <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
            1-
          </p>
          <p className="text-[14px] 2xl:text-[15px]">
            {t("return_page_text29")}
          </p>
        </div>
        <div className="flex items-center gap-1 mt-3 ltr:ml-3 rtl:mr-3">
          <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
            2-
          </p>
          <p className="text-[14px] 2xl:text-[15px]">
            {t("return_page_text30")}
          </p>
        </div>
        <div className="flex items-center gap-1 mt-3 ltr:ml-3 rtl:mr-3">
          <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
            3-
          </p>
          <p className="text-[14px] 2xl:text-[15px]">
            {t("return_page_text31")}
          </p>
        </div>
        <div className="flex items-center gap-1 mt-3 ltr:ml-3 rtl:mr-3">
          <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
            4-
          </p>
          <p className="text-[14px] 2xl:text-[15px]">
            {t("return_page_text32")}
          </p>
        </div>
        </div>

        <div className="bg-[#F8F9FA] py-6 mt-10">
          <div className="container">
            <p className="font-[700]">{t("return_page_text8")}</p>

            <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
              <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
                1-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("return_page_text9")}
              </p>
            </div>
            <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-2">
              <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
                2-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("return_page_text10")}
              </p>
            </div>
            <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-2">
              <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
                3-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("return_page_text11")}
              </p>
            </div>
            <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-2">
              <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
                4-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("return_page_text12")}
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-6">
          <p className="font-[700]">{t("return_page_text13")}</p>

          <div className="flex ltr:ml-6 rtl:mr-6 mt-3">
            <div className="flex justify-center items-center h-[22px]">
              <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px]"></div>
            </div>
            <p className="leading-[22px]">{t("return_page_text14")}</p>
          </div>
          <div className="flex ltr:ml-6 rtl:mr-6 mt-1 2xl:mt-2 ">
            <div className="flex justify-center items-center h-[22px]">
              <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px]"></div>
            </div>
            <p className="leading-[22px]">{t("return_page_text15")}</p>
          </div>
          {/* <div className="flex ltr:ml-6 rtl:mr-6 mt-1 2xl:mt-2 ">
          <div className="flex justify-center items-center h-[22px]">
            <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px]"></div>
          </div>
          <p className="leading-[22px]">
            {t("return_page_text16")}
          </p>
        </div> */}
          <div className="flex ltr:ml-6 rtl:mr-6 mt-1 2xl:mt-2">
            <div className="flex justify-center items-center h-[22px]">
              <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px]"></div>
            </div>
            <p className="leading-[22px]">{t("return_page_text17")}</p>
          </div>
          <div className="flex ltr:ml-6 rtl:mr-6 mt-1 2xl:mt-2 ">
            <div className="flex justify-center items-center h-[22px]">
              <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px]"></div>
            </div>
            <p className="leading-[22px]">{t("return_page_text18")}</p>
          </div>
          <div className="flex ltr:ml-6 rtl:mr-6 mt-1 2xl:mt-2 ">
            <div className="flex justify-center items-center h-[22px]">
              <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px]"></div>
            </div>
            <p className="leading-[22px]">{t("return_page_text19")}</p>
          </div>
        </div>

        <div className="bg-[#F8F9FA] py-6 mt-10">
          <div className="container">
            <p className="font-[700]">{t("return_page_text20")}</p>

            {/* <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
            <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
              1-
            </p>
            <p className="text-[14px] 2xl:text-[15px]">
              {t("return_page_text21")}
            </p>
          </div> */}
            <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3  ">
              <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
                1-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("return_page_text22")}
              </p>
            </div>
            <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
              <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
                2-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("return_page_text22_3")}
              </p>
            </div>
            <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
              <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
                3-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("return_page_text23")}
              </p>
            </div>
            <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3  ">
              <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
                4-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("return_page_text24")}
              </p>
            </div>
            <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
              <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
                5-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("return_page_text25")}
              </p>
            </div>
            <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3  ">
              <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
                6-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("return_page_text26")}
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <Link
            href="/profile"
            state={{ target: 15 }}
            className="w-[170px] 2xl:w-[240px] border border-opink  hover:bg-owhite hover:text-[#000000] px-2 mt-10 py-3 2xl:py-4 text-[12px] 2xl:text-[16px] rounded-full bg-opink text-owhite flex flex-col justify-center items-center"
          >
            {t("return_page_text27")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
