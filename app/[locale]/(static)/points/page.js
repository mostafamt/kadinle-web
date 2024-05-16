import { getTranslator } from "next-intl/server";
import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import Image from "next/image";
import { MainTitle } from "../../components/global/MainTitle";

export const metadata = { title: "KADINLE | Points" };

const chances = "https://kadinle.com/media/images/chances.png";
const connected = "https://kadinle.com/media/images/connected.png";
const getGift = "https://kadinle.com/media/images/getGift.png";
const interact = "https://kadinle.com/media/images/interact.png";
const partner = "https://kadinle.com/media/images/partner.png";
const Points = "https://kadinle.com/media/images/points1.png";
const share = "https://kadinle.com/media/images/share.png";
const subscribe = "https://kadinle.com/media/images/subscribe.png";

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);

  return (
    <>
    <ScrollUpComponent />
    <div className="flex flex-col poppins mb-10">
      <MainTitle
        title={t("Kadinle_Points")}
      />

      <div className="flex justify-center md:mt-2">
        <div className="flex flex-col container max-w-[1500px]">
          <div className="flex items-center justify-between gap-8 lg:gap-[100px] ">
            <div className="flex flex-col mt-14">
              <div className="flex flex-col space-y-[1px]">
                <h2 className="text-[18px] lg:text-[20px] 2xl:text-[30px]">
                  {t("points_page_msg")}
                </h2>
                <div className="bg-opink w-[67px] 2xl:w-[100px] h-[8px] rounded-xl "></div>
              </div>
              <p className="text-[14px] mt-5">
                {t("points_page_msg1")}
              </p>
              <h4 className="font-medium text-[16px] 2xl:text-[20px] 2xl:mb-[2px] mt-5">
                {t("points_how_msg1")}
              </h4>
              <p className="text-[14px]">
                {t("points_how_msg2")}
              </p>
            </div>

            <div className="min-w-[35%]">
              <Image className="w-full object-contain" src={Points} alt="points" height={500} width={500} />
            </div>
          </div>

          <div className="flex flex-col text-[14px]  max-w-[930px] 2xl:max-w-[1470px] mt-10">
            <div className="flex gap-2 items-center">
              <Image src={share} alt="share" className="object-contain" height={96} width={96}  />
              <div className="flex flex-col">
                <p className="font-[700] text-[16px] 2xl:text-[20px] 2xl:mb-[2px]">
                  {t("points_page_msg2")}
                </p>
                <p>{t("points_page_msg3")}</p>
              </div>
            </div>

            {/* <div className="flex gap-2 items-center mt-7">
              <Image src={getGift} />
              <div className="flex flex-col">
                <p className="font-[700] text-[16px] 2xl:text-[20px] 2xl:mb-[2px]">
                  {t("points_page_msg4")}
                </p>
                <p>{t("points_page_msg5")}</p>
              </div>
            </div> */}

            <div className="flex gap-2 items-center mt-7 2xl:max-w-[1200px]">
              <Image src={interact}  alt="interact" className="object-contain" height={96} width={96} />
              <div className="flex flex-col">
                <p className="font-[700] text-[16px] 2xl:text-[20px] 2xl:mb-[2px]">
                  {t("points_page_msg6")}
                </p>
                <p>{t("points_page_msg7")}</p>
              </div>
            </div>

            <div className="flex gap-2 items-center mt-7 2xl:max-w-[1200px]">
              <Image src={partner}  alt="partner" className="object-contain" height={96} width={96} />
              <div className="flex flex-col">
                <p className="font-[700] text-[16px] 2xl:text-[20px] 2xl:mb-[2px]">
                  {t("points_page_msg8")}
                </p>
                <p>{t("points_page_msg9")}</p>
              </div>
            </div>

            <div className="flex gap-2 items-center mt-7 2xl:max-w-[1200px]">
              <Image src={connected}  alt="connected" className="object-contain" height={96} width={96}/>
              <div className="flex flex-col">
                <p className="font-[700] text-[16px] 2xl:text-[20px] 2xl:mb-[2px]">
                  {t("Stay_Connected")}
                </p>
                <p>{t("points_page_msg10")}</p>
              </div>
            </div>

            <div className="flex gap-2 items-center mt-7 2xl:max-w-[1200px]">
              <Image src={chances}  alt="chances" className="object-contain" height={96} width={96}/>
              <div className="flex flex-col">
                <p className="font-[700] text-[16px] 2xl:text-[20px] 2xl:mb-[2px]">
                  {t("points_page_msg11")}
                </p>
                <p>{t("points_page_msg12")}</p>
              </div>
            </div>

            <div className="flex gap-2 items-center mt-7 ">
              <Image src={subscribe}  alt="subscribe" className="object-contain" height={96} width={96}/>
              <div className="flex flex-col">
                <p className="font-[700] text-[16px] 2xl:text-[20px] 2xl:mb-[2px]">
                  {t("points_page_msg13")}
                </p>
                <p>{t("points_page_msg14")}</p>
              </div>
            </div>
          </div>

          <h3 className="text-opink mt-12 font-[700]">
            {t("Points_redeem_policy")}
          </h3>
          <div className="flex ltr:ml-[70px] rtl:mr-[70px]  mt-2">
            <p className="text-opink mr-[6px]">-{}</p>
            <p className="text-[14px]">
              {t("points_page_msg15")}
            </p>
          </div>
          <div className="flex ltr:ml-[70px] rtl:mr-[70px]  mt-1 ">
            <p className="text-opink mr-[6px]">-{}</p>
            <p className="text-[14px]">
              {t("points_page_msg16")}
            </p>
          </div>
          <div className="flex ltr:ml-[70px] rtl:mr-[70px]  mt-1 ">
            <p className="text-opink mr-[6px]">-{}</p>
            <p className="text-[14px]">
              {t("points_page_msg17")}
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default page;
