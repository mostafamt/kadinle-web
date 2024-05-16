"use client";
import React, { useContext } from "react";
import ScrollUpComponent from "../global/ScrollUpComponent";
import { useTranslations } from "next-intl";
import { MainTitle } from "../global/MainTitle";
import Image from "next/image";

// const list = [
//   {
//     title: "Exclusive_Agent",
//     description: "family_msg12",
//     image: "https://kadinle.com/media/images/agent.png",
//   },
//   {
//     title: "Commercial_dealer",
//     description: "family_msg13",
//     image: "https://kadinle.com/media/images/dealer.png",
//   },
//   {
//     title: "Franchise",
//     description: "family_msg14",
//     image: "https://kadinle.com/media/images/franchise.png",
//   },
//   {
//     title: "Authorized_distributor",
//     description: "family_msg15",
//     image: "https://kadinle.com/media/images/distributor.png",
//   },
//   {
//     title: "Wholesaler",
//     description: "family_msg16",
//     image: "https://kadinle.com/media/images/wholesaler.png",
//   },
// ];
const list = [
  {
    title: "agents",
    description: "family_msg12",
    image: "https://kadinle.com/media/images/agent.png",
  },
  {
    title: "our_ambassadors",
    description: "family_msg13",
    image: "https://kadinle.com/media/images/dealer.png",
  },
  {
    title: "brokers",
    description: "family_msg14",
    image: "https://kadinle.com/media/images/franchise.png",
  },
  {
    title: "influencers",
    description: "family_msg15",
    image: "https://kadinle.com/media/images/distributor.png",
  },
  {
    title: "suppliers",
    description: "family_msg16",
    image: "https://kadinle.com/media/images/wholesaler.png",
  },
];

const FamilyPage = () => {
  const t = useTranslations();

  return (
    <>
      <ScrollUpComponent />
      <div className="flex flex-col poppins">
        <MainTitle title={t("Kadinle_Family")} />

        <div className="flex justify-center mt-7">
          <div className="flex flex-col container max-w-[1500px]">
            <div className="flex items-center justify-between gap-8 lg:gap-[100px] ">
              <div className="flex flex-col mt-14">
                <div className="flex flex-col space-y-[1px]">
                  <h2 className="text-[18px] lg:text-[20px] 2xl:text-[30px]">
                    {t("family_msg")}
                  </h2>
                  <div className="bg-opink w-[67px] 2xl:w-[100px] h-[8px] rounded-xl "></div>
                </div>
                <p className="text-[12px] md:text-[14px] 2xl:text-[15px] mt-5">
                  {t("family_msg1")}
                </p>
              </div>

              <div className="min-w-[35%]">
                <Image
                  className="w-full object-contain h-auto max-h-[300px]"
                  src="https://kadinle.com/media/images/family1.png"
                  alt="family image 1"
                  height={250}
                  width={250}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F8F9FA] flex w-full justify-center mt-3 pb-5">
          <div className="flex items-center justify-between gap-8 lg:gap-[100px] mt-12  container max-w-[1500px]">
            <div className="min-w-[35%]">
              <Image
                className="w-full object-contain h-auto max-h-[300px]"
                src="https://kadinle.com/media/images/family2.png"
                alt="family image 2"
                height={250}
                width={250}
              />
            </div>

            <div className="flex flex-col">
              <div className="flex mb-1">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink mr-[12px]"></div>
                </div>
                <h2 className="leading-[22px] text-[14px] md:text-[20px]">
                  {t("Our_Vision")}
                </h2>
              </div>
              <div className="flex ">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="invisible min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink mr-[12px]"></div>
                </div>
                <p className="text-[12px] md:text-[14px] 2xl:text-[15px]">
                  {t("family_msg2")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex items-center justify-between gap-8 lg:gap-[100px] mt-4  container max-w-[1500px]">
            <div className="flex flex-col mt-14">
              <div className="flex mb-2">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink mr-[12px]"></div>
                </div>
                <h2 className="leading-[22px] text-[14px] md:text-[20px]">
                  {t("Our_Message")}
                </h2>
              </div>
              <div className="flex ">
                <div className="invisible min-w-[22px] h-[22px] 2xl:min-w-[22px] 2xl:h-[22px] rounded-full bg-opink mr-[12px]"></div>
                <p className="text-[12px] md:text-[14px] 2xl:text-[15px]">
                  {t("family_msg3")}
                </p>
              </div>
            </div>

            <div className="min-w-[35%]">
              <Image
                className="w-full object-contain h-auto max-h-[300px]"
                src="https://kadinle.com/media/images/family3.png"
                alt="family image 3"
                height={250}
                width={250}
              />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center bg-[#F8F9FA] mt-7 pb-5">
          <div className="flex items-center justify-between gap-8 lg:gap-[100px] mt-12  container max-w-[1500px]">
            <div className="min-w-[35%]">
              <Image
                className="w-full object-contain h-auto max-h-[300px]"
                src="https://kadinle.com/media/images/family4.png"
                alt="family image 4"
                height={250}
                width={250}
              />
            </div>

            <div className="flex flex-col mt-14">
              <div className="flex mb-2">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink mr-[12px]"></div>
                </div>
                <h2 className="leading-[22px] text-[14px] md:text-[20px]">
                  {t("Our_Values")}
                </h2>
              </div>
              <div className="flex ltr:ml-[65px] rtl:mr-[65px] ">
                <p className="text-opink mr-[6px]">-{}</p>
                <p className="text-[12px] md:text-[14px] 2xl:text-[15px]">
                  {t("family_msg4")}
                </p>
              </div>
              <div className="flex ltr:ml-[65px] rtl:mr-[65px]  mt-1 ">
                <p className="text-opink mr-[6px]">-{}</p>
                <p className="text-[12px] md:text-[14px] 2xl:text-[15px]">
                  {t("family_msg5")}
                </p>
              </div>
              <div className="flex ltr:ml-[65px] rtl:mr-[65px]  mt-1 ">
                <p className="text-opink mr-[6px]">-{}</p>
                <p className="text-[12px] md:text-[14px] 2xl:text-[15px]">
                  {t("family_msg6")}
                </p>
              </div>
              <div className="flex ltr:ml-[65px] rtl:mr-[65px]  mt-1 ">
                <p className="text-opink mr-[6px]">-{}</p>
                <p className="text-[12px] md:text-[14px] 2xl:text-[15px]">
                  {t("family_msg7")}
                </p>
              </div>
              <div className="flex ltr:ml-[65px] rtl:mr-[65px]  mt-1 ">
                <p className="text-opink mr-[6px]">-{}</p>
                <p className="text-[12px] md:text-[14px] 2xl:text-[15px]">
                  {t("family_msg8")}
                </p>
              </div>
              <div className="flex ltr:ml-[65px] rtl:mr-[65px]  mt-1 ">
                <p className="text-opink mr-[6px]">-{}</p>
                <p className="text-[12px] md:text-[14px] 2xl:text-[15px]">
                  {t("family_msg9")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="flex items-center justify-between gap-8 lg:gap-[100px] mt-12  container max-w-[1500px]">
            <div className="flex flex-col mt-14">
              <div className="flex mb-2">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink mr-[12px]"></div>
                </div>
                <h3 className="leading-[22px] text-[14px] md:text-[20px]">
                  {t("who_family")}
                </h3>
              </div>
              <div className="flex ">
                <div className="invisible min-w-[22px] h-[22px] 2xl:min-w-[22px] 2xl:h-[22px] rounded-full bg-opink mr-[12px]"></div>
                <p className="text-[12px] md:text-[14px] 2xl:text-[15px]">
                  {t("family_msg10")}
                  <br />
                  {t("family_msg11")}
                </p>
              </div>
            </div>

            <div className="min-w-[35%]">
              <Image
                className="w-full object-contain h-auto max-h-[300px]"
                src="https://kadinle.com/media/images/family5.png"
                alt="family image 5"
                height={250}
                width={250}
              />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center bg-[#F8F9FA] mt-6">
          <div className="flex flex-col pt-6 pb-6  container max-w-[1500px]">
            <div className="flex flex-col space-y-1 justify-center items-center text-center">
              <h2 className="text-xl md:text-2xl font-medium hover:text-opink cursor-pointer">
                {t("Our_Partners")}
              </h2>
              <div className="bg-opink w-[20%] lg:w-[80px] h-[8px] rounded-xl "></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:flex lg:justify-between mt-8">
              {list?.map((item) => (
                <div
                  className="flex flex-col items-center justify-center"
                  key={item?.title}
                >
                  <Image
                    className="w-[80px] h-[80px] object-contain"
                    src={item?.image}
                    alt={item?.image}
                    height={80}
                    width={80}
                  />
                  <h3 className="text-[14px] mt-3 mb-2 2xl:text-[15px] text-center">
                    {t(item?.title)}
                  </h3>
                  <p className="text-[#707070] text-[12px] text-center 2xl:text-[13px]">
                    {t(item?.description)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyPage;
