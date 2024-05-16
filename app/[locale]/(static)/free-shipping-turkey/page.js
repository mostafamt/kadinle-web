import { getTranslator } from "next-intl/server";
import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import { MainTitle } from "../../components/global/MainTitle";

export const metadata = { title: "KADINLE | Free shipping turkey" };

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);

  return (
    <>
    <ScrollUpComponent />
    <div className="flex flex-col poppins mb-10">
      <MainTitle
        title={t("Free_Shipping_in_turkey")}
      />

      <div className="flex justify-center mt-6">
        <div className="flex flex-col container max-w-[1500px]">
          <div className="flex flex-col space-y-[1px]">
            <h2 className="text-[20px] lg:text-[22px] font-semibold">
              {t("Free_Shipping_policy_turkey")}
            </h2>
            <div className="bg-opink w-[67px] 2xl:w-[100px] h-[8px] rounded-xl "></div>
          </div>

          <div className="flex flex-col mt-4 text-[15px] 2xl:text-[16px] max-w-[1040px] 2xl:max-w-[1180px]">
            <p>{t("shipping_turkey_ms2")}</p>
            <p>{t("shipping_turkey_ms3")}</p>
            <h3 className="font-semibold text-lg mb-2 mt-4">
              {t("shipping_turkey_ms4")}
            </h3>
            <p>{t("shipping_turkey_ms5")}</p>
            <h3 className="font-semibold text-lg mb-2 mt-4">
              {t("shipping_turkey_ms6")}
            </h3>
            <p className="text-indent">
              {t("shipping_turkey_ms7")}
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default page;
