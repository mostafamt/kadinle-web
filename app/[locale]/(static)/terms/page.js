import { getTranslator } from "next-intl/server";
import Link from "next/link";

import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import { MainTitle } from "../../components/global/MainTitle";

export const metadata = { title: "KADINLE | Terms and Conditions" };

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);

  return (
    <>
      <ScrollUpComponent />
      <div className="flex flex-col poppins mb-10">
        <MainTitle title={t("Terms_of_use")} />

        <div className="flex justify-center mt-6">
          <div className="flex flex-col container max-w-[1500px]">
            <div className="flex flex-col space-y-[1px]">
              <h2 className="text-[20px] 2xl:text-[26px]">
                {t("Terms_of_use")}
              </h2>
              <div className="bg-opink w-[70px] 2xl:w-[90px] h-[8px] rounded-xl "></div>
            </div>

            <div className="flex flex-col mt-5 text-[14px] max-w-[800px] 2xl:max-w-[935px]">
              <p>{t("terms_msg")}</p>

              <p className="mt-5">{t("terms_msg_2")}</p>

              <p className="text-[20px] mt-12">{t("terms_msg_3")}</p>

              <p className="ltr:ml-8 rtl:mr-8 mt-2">
                <span className="text-opink">-{"   "}</span>
                {t("terms_msg_4")}
              </p>
              <p className="ltr:ml-8 rtl:mr-8 mt-1">
                <span className="text-opink">-{"   "}</span>
                {t("terms_msg_5")}
              </p>
              <p className="ltr:ml-8 rtl:mr-8 mt-1">
                <span className="text-opink">-{"   "}</span>
                {t("terms_msg_6")}
              </p>
              <p className="my-2 font-medium">{t("terms_msg_note")}</p>

              <p className="text-[20px] mt-10">{t("terms_msg_7")}</p>

              <p className="text-[20px] mt-10">{t("terms_msg_8")}</p>
              <p className="text-[20px] mt-10">{t("terms_msg_91")}</p>
              <p className="text-[20px] mt-10">{t("terms_msg_92")}</p>
              <p className="text-[20px] mt-10">{t("terms_msg_93")}</p>

              <p className="text-[20px] mt-10 text-opink">
                {t("terms_msg_10")}
              </p>
              <p className="mt-2">{t("terms_msg_11")}</p>

              <p className="text-[20px] mt-10 text-opink">
                {t("Errors_and_reviews")}
              </p>
              <p className="mt-2">{t("terms_msg_12")}</p>

              <p className="text-[20px] mt-10 text-opink">
                {t("How_to_contact_us")}
              </p>
              <p className="mt-2">{t("terms_msg_13")}</p>
              <p className="mt-2">
                {t("terms_msg_155")}{" "}
                <Link
                  href="mailto:support@kadinle.com"
                  className="text-opink mt-1 text-[11px]"
                >
                  support@kadinle.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
