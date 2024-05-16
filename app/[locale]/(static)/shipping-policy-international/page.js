import { getTranslator } from "next-intl/server";

import { MainTitle } from "../../components/global/MainTitle";
import ScrollUpComponent from "../../components/global/ScrollUpComponent";

export const metadata = { title: "KADINLE | Shipping policy international" };

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);

  return (
    <>
    <ScrollUpComponent />
    <div className="flex flex-col poppins">
      <MainTitle
        title={t("shippingPolicyTitle")}
      />

      <div className="container">
        <div className="flex flex-col max-w-[1500px]">
          <div className="flex flex-col space-y-[1px]">
            <h2 className="text-[18px] lg:text-[20px] 2xl:text-[30px]">
              {t("shippingPolicySubtitle1")}
            </h2>
            <div className="bg-opink w-[67px] 2xl:w-[100px] h-[8px] rounded-xl "></div>
          </div>
        </div>
        <div className="flex mt-6">
          <div className="flex justify-center items-center h-[22px]">
            <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px]"></div>
          </div>
          <p className="leading-[22px]">
            {t("shippingPolicySection0")}
          </p>
        </div>
        <div className="flex mt-6">
          <div className="flex justify-center items-center h-[22px]">
            <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px]"></div>
          </div>
          <p className="leading-[22px]">
            {t("shippingPolicySection1")}
          </p>
        </div>
      </div>
      <div className="bg-[#F8F9FA] py-6 mt-10">
        <div className="container">
          <div className="flex flex-col text-[15px] 2xl:text-[16px] max-w-[1040px] 2xl:max-w-[1180px]">
            <h3 className="text-[16px] 2xl:text-[22px] font-medium">
              {t("shippingPolicySection2")}
            </h3>
            <div className="flex rtl:mr-6 ltr:ml-6 mt-1 items-center">
              <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
                1-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("shippingPolicySection2Item1")}
              </p>
            </div>
            <div className="flex rtl:mr-5 ltr:ml-5 items-center">
              <p className="text-opink  text-[18px] 2xl:text-[24px] rtl:ml-[6px] ltr:mr-[6px]">
                2-
              </p>
              <p className="text-[14px] 2xl:text-[15px]">
                {t("shippingPolicySection2Item2")}
              </p>
            </div>
            {/* <p className="text-[#707070] text-[13px] 2xl:text-[14px] mt-1">
              <span className="text-opink font-[600]">
                {t("Note")}:
              </span>
              {t("shippingPolicySection2Note")}
            </p> */}
          </div>
        </div>
      </div>
      <div className="container">
        <p className="text-[16px] 2xl:text-[22px] mt-10 font-medium">
          {t("Delivery")}
        </p>
        <div className="flex mt-1">
          <div className="flex justify-center items-center h-[22px]">
            <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px]"></div>
          </div>
          <p className="leading-[22px]">
            {t("shippingPolicyDeliverySection1")}
          </p>
        </div>
        <div className="flex mt-5">
          <div className="flex justify-center items-center h-[22px]">
            <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px]"></div>
          </div>
          <p className="leading-[22px]">
            {t("shippingPolicyDeliverySection2")}
          </p>
        </div>
        <div className="flex mt-5">
          <div className="flex justify-center items-center h-[22px]">
            <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px]"></div>
          </div>
          <p className="leading-[22px]">
            {t("shippingPolicyDeliverySection3")}
          </p>
        </div>
        <div className="flex mt-5">
          <div className="flex justify-center items-center h-[22px]">
            <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px]"></div>
          </div>
          <p className="leading-[22px]">
            {t("shippingPolicyDeliverySection4")}
          </p>
        </div>
        <div className="flex mt-5">
          <div className="flex justify-center items-center h-[22px]">
            <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px]"></div>
          </div>
          <p className="leading-[22px]">
            {t("shippingPolicyDeliverySection5")}
          </p>
        </div>
        <div className="flex mt-5">
          <div className="flex justify-center items-center h-[22px]">
            <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px]"></div>
          </div>
          <p className="leading-[22px]">
            {t("shippingPolicyDeliverySection6")}
          </p>
        </div>
      </div>
      <div className="bg-[#F8F9FA] mt-10 py-6">
        <div className="container">
          <p className="text-[16px] 2xl:text-[22px] font-medium capitalize">
            {t("shippingPolicy")}
          </p>
          <div className="flex mt-5">
            <div className="flex justify-center items-center h-[22px]">
              <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px]"></div>
            </div>
            <p className="leading-[22px]">
              {t("shippingPolicyDurationSection1")}
            </p>
          </div>
          <div className="flex mt-5">
            <div className="flex justify-center items-center h-[22px]">
              <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px]"></div>
            </div>
            <p className="leading-[22px]">
              {t("shippingPolicyDurationSection2")}
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default page;
