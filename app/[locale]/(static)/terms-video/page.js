import { getTranslator } from "next-intl/server";

import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import { MainTitle } from "../../components/global/MainTitle";

export const metadata = { title: "KADINLE | Terms and Conditions" };

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);

  return (
    <>
    <ScrollUpComponent />
    <div className="flex flex-col poppins mb-10">
      <MainTitle
        title={t("terms_videos")}
      />
      <div className="flex justify-center mt-6">
        <div className="flex flex-col container max-w-[1500px]">
          <div className="flex flex-col space-y-[1px]">
            <h2 className="text-[20px] 2xl:text-[26px]">
              {t("terms_videos")}
            </h2>
            <div className="bg-opink w-[70px] 2xl:w-[90px] h-[8px] rounded-xl "></div>
          </div>
          <div className="flex flex-col mt-5 text-[14px] max-w-[800px] 2xl:max-w-[935px]">
            <p className="font-medium mb-2 text-gray-600 lg:text-lg">
              {t("terms_videos_msg1")}
            </p>
            <p className="font-medium mb-2 text-gray-600 lg:text-lg">
              {t("terms_videos_msg2")}
            </p>
            <p className="font-medium mb-2 text-gray-600 lg:text-lg">
              {t("terms_videos_msg3")}
            </p>
            <p className="font-medium mb-2 text-gray-600 lg:text-lg">
              {t("terms_videos_msg4")}
            </p>
            <p className="font-medium mb-2 text-gray-600 lg:text-lg">
              {t("terms_videos_msg5")}
            </p>
            <p className="font-medium mb-2 text-gray-600 lg:text-lg">
              {t("terms_videos_msg6")}
            </p>
            <p className="font-medium mb-2 text-gray-600 lg:text-lg">
              {t("terms_videos_msg7")}
            </p>
            <p className="font-medium mb-2 text-gray-600 lg:text-lg">
              {t("terms_videos_msg8")}
            </p>
            <p className="font-medium mb-2 lg:text-lg text-white px-2 py-2 rounded bg-opink">
              {t("terms_videos_msg10")}
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default page;
