import { getTranslator } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { MainTitle } from "../../components/global/MainTitle";
import { ShopNowBtn } from "../../components/global/ShopNowBtn";

export const metadata = {
  title: "KADINLE | Fast shipping",
};

const Fast1 = "https://kadinle.com/media/images/Fast1.svg";
const Fast2 = "https://kadinle.com/media/images/Fast2.svg";

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);

  return (
    <div className="flex flex-col poppins">
      <MainTitle title={t("Fast_Shipping")} />
      <div className="flex flex-col space-y-[1px] self-center mt-8">
        <p className="text-[18px] lg:text-[20px] 2xl:text-[30px]">
          {t("Accurate_Tracking_System")}
        </p>
        <div className="bg-opink w-[67px] 2xl:w-[100px] h-[8px] rounded-xl "></div>
      </div>

      <div className="flex justify-center mt-7">
        <div className="flex flex-col container max-w-[1500px]">
          <div className="flex items-center justify-between gap-8 lg:gap-[100px]">
            <div className="flex flex-col mt-14 text-[12px] md:text-[14px] 2xl:text-[15px]">
              <div className="flex">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <h4 className="leading-[22px] text-[14px] md:text-[20px]">
                  {t("fast_shipping_msg0")}
                </h4>
              </div>
              <p className="mt-3 ltr:ml-6 rtl:mr-6">
                {t("fast_shipping_msg1")}
              </p>
              <p className="mt-3 ltr:ml-6 rtl:mr-6">
                {t("fast_shipping_msg2")}
              </p>
              <p className="mt-2 ltr:ml-6 rtl:mr-6">
                <Link href="/shipping-policy-turkey" className="text-opink">
                  {t("Inside_Turkey")}
                </Link>
                {t("fast_shipping_msg3")}
              </p>
              <p className="mt-2 ltr:ml-6 rtl:mr-6">
                <Link
                  href="shipping-policy-international"
                  className="text-opink"
                >
                  {t("Outside_Turkey")}
                </Link>
                {t("fast_shipping_msg4")}
              </p>
              <p className="mt-2 ltr:ml-6 rtl:mr-6">
                {t("fast_shipping_msg5")}
              </p>

              <div className="flex mt-8 ltr:ml-6 rtl:mr-6"></div>
            </div>

            <div className="w-[40%] min-w-[40%]">
              <Image
                src={Fast1}
                alt="Fast shipping image 1"
                className="w-full h-auto object-contain max-h-[350px]"
                height={250}
                width={200}
              />
            </div>
          </div>
        </div>
      </div>

      {/* second */}
      <div className="w-full bg-[#F8F9FA] flex justify-center mt-5 py-10 pt-6">
        <div className="flex items-center justify-between gap-8 lg:gap-[100px]  container max-w-[1500px]">
          <div className="min-w-[45%]">
            <Image
              src={Fast2}
              alt="Fast shipping image 2"
              className="w-full h-auto object-contain max-h-[350px]"
              height={250}
              width={200}
            />
          </div>

          <div className="flex flex-col mt-14 text-[12px] md:text-[14px] 2xl:text-[15px]">
            <div className="flex  ">
              <div className="flex justify-center items-center h-[22px]">
                <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
              </div>
              <h2 className="leading-[22px] text-[14px] md:text-[20px]">
                {t("fast_shipping_msg6")}
              </h2>
            </div>
            <p className="mt-4">{t("fast_shipping_msg7")}</p>
            <p className="mt-6">
              {t("fast_shipping_msg8")}{" "}
              <Link href="/shipping-policy-turkey" className="text-opink">
                {t("privacyPolicy")}
              </Link>
            </p>

            <div className="flex mt-8">
              <ShopNowBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
