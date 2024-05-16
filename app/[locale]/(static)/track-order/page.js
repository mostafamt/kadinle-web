import { getTranslator } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import { ShopNowBtn } from "../../components/global/ShopNowBtn";
import { MainTitle } from "../../components/global/MainTitle";

export const metadata = { title: "KADINLE | Track order" };

const track1 = "https://kadinle.com/media/images/track1.png";
const track2 = "https://kadinle.com/media/images/track2.png";

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);

  return (
    <>
      <ScrollUpComponent />
      <div className="flex flex-col poppins mb-10">
        <MainTitle title={t("Track_order")} />
        <div className="flex justify-center mt-8">
          <div className="flex flex-col container max-w-[1500px]">
            <div className="flex flex-col space-y-[1px]">
              <h2 className="text-[18px] lg:text-[20px] 2xl:text-[30px]">
                {t("track_desc")}
              </h2>
              <div className="bg-opink w-[67px] 2xl:w-[100px] h-[8px] rounded-xl "></div>
            </div>

            <div className="flex flex-col mt-2 text-[15px] 2xl:text-[16px] max-w-[1000px] 2xl:max-w-[1500px]">
              <h3 className="mt-2 ltr:ml-6 rtl:mr-6">{t("track_desc2")}</h3>

              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  1-
                </p>
                <p className="text-[14px] 2xl:text-[15px]">
                  {t("track_desc3")}
                </p>
              </div>

              <div className="flex ltr:ml-6 rtl:mr-6 mt-3">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  1-
                </p>
                <Image
                  className="w-[450px] 2xl:w-[540px] object-cover"
                  src={track1}
                  alt="track order 1"
                  height={300}
                  width={540}
                />
              </div>

              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-2 2xl:mt-2 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  2-
                </p>
                <p className="text-[14px] 2xl:text-[15px]">
                  {t("track_desc4")}
                </p>
              </div>
              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-1 2xl:mt-2">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  3-
                </p>
                <p className="text-[14px] 2xl:text-[15px]">
                  {t("track_desc5")}
                </p>
              </div>

              <div className="flex ltr:ml-6 rtl:mr-6 mt-3">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  1-
                </p>
                <Image
                  className=" w-[80%] md:w-[650px] 2xl:w-[800px]  object-cover"
                  src={track2}
                  alt="track order 2"
                  height={400}
                  width={800}
                />
              </div>

              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-2 2xl:mt-2 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  4-
                </p>
                <p className="text-[14px] 2xl:text-[15px]">
                  {t("track_desc6")}
                </p>
              </div>
            </div>

            <div className="flex ltr:ml-6 rtl:mr-6 mt-10">
              <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                1-
              </p>
              <ShopNowBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
