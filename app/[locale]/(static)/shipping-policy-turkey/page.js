import { getTranslator } from "next-intl/server";
import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import { MainTitle } from "../../components/global/MainTitle";

export const metadata = { title: "KADINLE | Shipping policy turkey" };

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);

  return (
    <>
      <ScrollUpComponent />
      <div className="flex flex-col poppins mb-10">
        <MainTitle
          title={t("Shipping_policy_in_turkey")}
        />

        <div className="flex justify-center mt-8">
          <div className="flex flex-col container max-w-[1500px]">
            <div className="flex flex-col space-y-[1px]">
              <h2 className="text-[18px] lg:text-[20px] 2xl:text-[30px]">
                {t("Shipping_policy")}
              </h2>
              <div className="bg-opink w-[67px] 2xl:w-[100px] h-[8px] rounded-xl "></div>
            </div>

            <div className="flex flex-col mt-4 text-[15px] 2xl:text-[16px] max-w-[1040px] 2xl:max-w-[1180px]">
              <div className="flex ltr:ml-8 rtl:mr-8   mt-1 ">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <h3 className="leading-[22px]">
                  {t("shipping_turkey_msg1")}
                </h3>
              </div>
              <div className="flex ltr:ml-8 rtl:mr-8  mt-1">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px]">
                  {t("shipping_turkey_msg2")}
                </p>
              </div>
              <div className="flex ltr:ml-8 rtl:mr-8  mt-1">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px]">
                  {t("shipping_turkey_msg3")}
                </p>
              </div>

              <div className="flex ltr:ml-[90px] rtl:mr-[90px]  mt-3">
                <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
                <p className="">{t("shipping_turkey_msg4")}</p>
              </div>
              <div className="flex ltr:ml-[90px] rtl:mr-[90px]  mt-1 ">
                <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
                <p className="">{t("shipping_turkey_msg5")}</p>
              </div>
              <div className="flex ltr:ml-[90px] rtl:mr-[90px]  mt-1 ">
                <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
                <p className="">{t("shipping_turkey_msg6")}</p>
              </div>

              <h3 className="text-[16px] 2xl:text-[22px] mt-6 font-medium">
                {t("Delivery_Mechanisms")}:
              </h3>
              <div className="flex ltr:ml-2 rtl:mr-2 mt-1 items-center">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  1-
                </p>
                <p className="">{t("shipping_turkey_msg7")}</p>
              </div>
              <div className="flex ltr:ml-2 rtl:mr-2   items-center">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  2-
                </p>
                <p className="">{t("shipping_turkey_msg8")}</p>
              </div>
              <div className="flex ltr:ml-2 rtl:mr-2   items-center">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  3-
                </p>
                <p className="">{t("shipping_turkey_msg9")}</p>
              </div>
              <div className="flex ltr:ml-2 rtl:mr-2   items-center">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  4-
                </p>
                <p className="">{t("shipping_turkey_msg10")}</p>
              </div>
              <div className="flex ltr:ml-2 rtl:mr-2   items-center">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  5-
                </p>
                <p className="">{t("shipping_turkey_msg11")}</p>
              </div>
              <div className="flex ltr:ml-2 rtl:mr-2   items-center">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  6-
                </p>
                <p className="">{t("shipping_turkey_msg12")}</p>
              </div>

              {/* <p className="text-[16px] 2xl:text-[22px] mt-6 font-medium">
                {t("Delivery_term")}
              </p>
              <div className="flex ltr:ml-8 rtl:mr-8  mt-2">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px]">
                  {t("shipping_turkey_msg13")}
                </p>
              </div>
              <div className="flex ltr:ml-8 rtl:mr-8  mt-1 ">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px]">
                  {t("shipping_turkey_msg14")}
                </p>
              </div>
              <div className="flex ltr:ml-8 rtl:mr-8  mt-1 ">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px]">
                  {t("shipping_turkey_msg15")}
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
