import { getTranslator } from "next-intl/server";
import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import { MainTitle } from "../../components/global/MainTitle";

export const metadata = { title: "KADINLE | Privacy" };

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);

  return (
    <>
    <ScrollUpComponent />
    <div className="flex flex-col poppins mb-10">
      <MainTitle
        title={t("policy_msg1")}
      />

      <div className="flex justify-center mt-6">
        <div className="flex flex-col container max-w-[1500px]">
          <div className="flex flex-col space-y-[1px]">
            <h2 className="text-[18px] lg:text-[20px] 2xl:text-[30px]">
              {t("policy_msg2")}
            </h2>
            <div className="bg-opink w-[70px] 2xl:w-[100px] h-[8px] rounded-xl "></div>
          </div>

          <div className="flex flex-col mt-4 text-[14px] 2xl:text-[16px] max-w-[970px] 2xl:max-w-[1500px]">
            <p className="text-[16px] 2xl:text-[19px] font-medium">
              {t("policy_msg3")}
            </p>

            <div className="flex ltr:ml-8 rtl:mr-8 items-center mt-3 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg4")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8 mt-1">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px] ">-{}</p>
              <p className=" ">
                {t("policy_msg5")}
                <br />
                {t("policy_msg6")}
              </p>
            </div>

            <p className="text-[16px] 2xl:text-[19px] mt-4 font-medium">
              {t("policy_msg7")}
            </p>

            <div className="flex ltr:ml-8 rtl:mr-8  mt-2">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg8")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg9")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg10")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg11")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg12")}</p>
            </div>

            <p className="text-[18px] 2xl:text-[20px] mt-3 font-medium">
              {t("policy_msg13")}
            </p>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-2 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg14")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg15")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg16")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg17")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg18")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg19")}</p>
            </div>

            <p className="text-[18px] 2xl:text-[20px] mt-3 font-medium">
              {t("policy_msg20")}
            </p>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-2 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg21")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg22")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg23")}</p>
            </div>

            <p className="text-[18px] 2xl:text-[20px] mt-3 font-medium">
              {t("policy_msg24")}
            </p>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-2 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg25")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg26")}</p>
            </div>

            <p className="text-[18px] 2xl:text-[20px] mt-3 font-medium">
              {t("policy_msg27")}
            </p>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-2 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg28")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-2 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg29")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-2 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg30")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-2 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg31")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-2 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg32")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-2 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg32_3")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg33")}</p>
            </div>
            <div className="flex ltr:ml-8 rtl:mr-8  mt-1 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px]">-{}</p>
              <p className="">{t("policy_msg34")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default page;
