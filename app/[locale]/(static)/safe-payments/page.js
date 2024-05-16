import React from "react";

import { getTranslator } from "next-intl/server";
import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import Image from "next/image";
import Link from "next/link";
import { MainTitle } from "../../components/global/MainTitle";
import { ShopNowBtn } from "../../components/global/ShopNowBtn";

export const metadata = { title: "KADINLE | Safe payments" };

const applePay = "https://kadinle.com/media/images/applePay.png";
const mastercard2 = "https://kadinle.com/media/images/mastercard2.png";
const googlePay = "https://kadinle.com/media/images/pay.png";
const safe1 = "https://kadinle.com/media/images/Safe1.png";
const Safe2 = "https://kadinle.com/media/images/Safe2.svg";
const safe3 = "https://kadinle.com/media/images/Safe3.png";
const visa = "https://kadinle.com/media/images/visa.png";
const americanExpress = "https://kadinle.com/media/images/americanExpress.png";

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);

  return (
    <div className="flex flex-col poppins">
      <MainTitle title={t("Safe_Payments")} />

      <div className="flex flex-col space-y-[1px] self-center mt-8">
        <h2 className="text-[18px] lg:text-[20px] 2xl:text-[30px]">
          {t("Shop_with_confidence")}
        </h2>
        <div className="bg-opink w-[67px] 2xl:w-[100px] h-[8px] rounded-xl "></div>
      </div>

      <div className="flex justify-center mt-7">
        <div className="flex flex-col container max-w-[1500px]">
          <div className="flex items-center justify-between gap-8 lg:gap-[100px]">
            <div className="flex flex-col text-[12px] md:text-[14px] 2xl:text-[15px] max-w-[600px]">
              <div className="flex  ">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px]"></div>
                </div>
                <h3 className="leading-[22px] text-[14px] md:text-[20px]">
                  {t("safe_payment_text1")}
                </h3>
              </div>
              <p className="mt-3">{t("safe_payment_text2")}</p>

              <div className="flex gap-7 lg:gap-10 mt-10">
                <Image
                  className="w-[32px] 2xl:w-[52px] object-contain"
                  alt="mastercard2"
                  width={32}
                  height={52}
                  src={mastercard2}
                />
                <Image
                  className="w-[43px] 2xl:w-[63px] object-contain"
                  alt="googlePay"
                  width={43}
                  height={63}
                  src={googlePay}
                />
                <Image
                  className="w-[45px] 2xl:w-[65px] object-contain"
                  alt="applePay"
                  width={45}
                  height={65}
                  src={applePay}
                />
                <Image
                  className="w-[30px] 2xl:w-[40px] object-contain"
                  alt="americanExpress"
                  width={30}
                  height={40}
                  src={americanExpress}
                />
                <Image
                  className="w-[60px] 2xl:w-[80px] object-contain"
                  alt="visa"
                  width={60}
                  height={80}
                  src={visa}
                />
              </div>
            </div>

            <div className="min-w-[35%]">
              <Image
                src={safe1}
                alt="safe1"
                height={400}
                width={400}
                className="max-w-[500px] object-contain"
              />
              {/* <Safe1 className='w-full h-auto'/> */}
            </div>
          </div>
        </div>
      </div>

      {/* second */}
      <div className="w-full bg-[#F8F9FA] flex justify-center mt-5 py-10 pt-6">
        <div className="flex items-center justify-between gap-8 lg:gap-[100px]  container max-w-[1500px]">
          <div className="min-w-[30%]">
            <Image
              src={Safe2}
              alt="safe1"
              height={400}
              width={400}
              className="max-w-[500px] object-contain"
            />
          </div>

          <div className="flex flex-col  text-[12px] md:text-[14px] 2xl:text-[15px] max-w-[600px]">
            <div className="flex  ">
              <div className="flex justify-center items-center h-[22px]">
                <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px]"></div>
              </div>
              <p className="leading-[22px] text-[14px] md:text-[20px]">
                {t("safe_payment_text3")}
              </p>
            </div>
            <p className="mt-4">{t("safe_payment_text4")}</p>
          </div>
        </div>
      </div>

      {/* Third */}

      <div className="flex justify-center mt-7">
        <div className="flex flex-col container max-w-[1500px]">
          <div className="flex items-center justify-between gap-8 lg:gap-[100px]">
            <div className="flex flex-col text-[12px] md:text-[14px] 2xl:text-[15px] max-w-[600px]">
              <div className="flex  ">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink rtl:ml-[6px] ltr:mr-[6px]"></div>
                </div>
                <p className="leading-[22px] text-[14px] md:text-[20px]">
                  {t("safe_payment_text5")}
                </p>
              </div>
              <p className="mt-3">
                {t("yourPersonalInformation")}{" "}
                <Link href="/shipping-policy-turkey" className="text-opink">
                  {t("privacy_policy")}
                </Link>
                .
              </p>

              <div className="flex mt-10">
                <ShopNowBtn />
              </div>
            </div>

            <div className="min-w-[35%]">
              {/* <Safe3 className='w-full h-auto'/> */}
              <Image
                src={safe3}
                alt="safe1"
                height={400}
                width={400}
                className="max-w-[500px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
