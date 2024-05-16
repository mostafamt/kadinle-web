import { getTranslator } from "next-intl/server";
import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import Image from "next/image";
import { MainTitle } from "../../components/global/MainTitle";

export const metadata = { title: "KADINLE | Size guide" };

const quick1 = "https://kadinle.com/media/images/measureYourselfCorrectly.png";
const quick2 = "https://kadinle.com/media/images/measurementsTable.png";
const quick3 = "https://kadinle.com/media/images/measurements.png";
const quick4 = "https://kadinle.com/media/images/measurementsTable2.png";
const quick5 = "https://kadinle.com/media/images/clientsService.jpg";
const quick6 = "https://kadinle.com/media/images/material.png";
const quick7 = "https://kadinle.com/media/images/measurementsDought.jpg";
const quick8 = "https://kadinle.com/media/images/makeKadinleYourTrust.png";
const quick9 = "https://kadinle.com/media/images/returnPolicy.png";

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);

  return (
    <>
    <ScrollUpComponent />
    <div className="flex flex-col poppins mb-10">
      <MainTitle
        title={t("Size_guide")}
      />
      <div className="flex justify-center mt-8">
        <div className="flex flex-col container max-w-[1500px]">
          <div className="flex flex-col  text-[15px] 2xl:text-[16px] max-w-[1000px] 2xl:max-w-[1180px]">
            <div className="flex flex-col space-y-[1px] mb-3">
              <h2 className="text-[18px] lg:text-[20px] 2xl:text-[30px] capitalize">
                {t("quick_actions")}
              </h2>
              <div className="bg-opink w-[67px] 2xl:w-[100px] h-[8px] rounded-xl "></div>
            </div>
            <p className="mb-2 ltr:ml-6 rtl:mr-6">
              {t("Dear_customer")}
            </p>

            <div className="flex flex-col ltr:ml-6 rtl:mr-6">
              <div className="flex  mt-2  ">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px]">
                  {t("select_category_msg")}
                </p>
              </div>
              <div className="flex  mt-2 2xl:mt-3">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px]">
                  {t("refer_msg")}
                </p>
              </div>
              <div className="flex  mt-2 2xl:mt-3">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px]">
                  {t("measurement_msg")}
                </p>
              </div>
              <div className="flex  mt-2 2xl:mt-3">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px]">
                  {t("taking_msg")}
                </p>
              </div>
              <div className="flex  mt-2 2xl:mt-3">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px]">
                  {t("details_related")}
                </p>
              </div>
              <div className="flex  mt-2 2xl:mt-3">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px]">
                  {t("appropriate_msg")}
                </p>
              </div>
              <div className="flex  mt-2 2xl:mt-3">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px]">
                  {t("Browsing_msg")}
                </p>
              </div>
              <div className="flex  mt-2 2xl:mt-3">
                <div className="flex justify-center items-center h-[22px]">
                  <div className="min-w-[18px] h-[18px] 2xl:min-w-[18px] 2xl:h-[18px] rounded-full bg-opink ltr:mr-[6px] rtl:ml-[6px]"></div>
                </div>
                <p className="leading-[22px]">
                  {t("event_msg")}
                </p>
              </div>
            </div>

            <p className="mx-auto mt-8 font-semibold text-lg text-opink">
              {t("weHereToServe")}
            </p>

            <div className="flex flex-col space-y-[1px] mt-8 mb-2">
              <h3 className="text-[18px] lg:text-[20px] 2xl:text-[30px]">
                {t("size_msg")}
              </h3>
              <div className="bg-opink w-[67px] 2xl:w-[100px] h-[8px] rounded-xl "></div>
            </div>
            <p className="mx-auto mb-3 text-opink font-semibold text-lg">
              {t("minimizeReturns")}
            </p>

            <p className="mt-2 ltr:ml-6 rtl:mr-6">
              {t("getting_msg")}
            </p>

            <div className="flex ltr:ml-6 rtl:mr-6  mt-2">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px] font-bold">
                -{}
              </p>
              <p className="text-[14px]">{t("absolute_msg")}</p>
            </div>
            <div className="flex ltr:ml-6 rtl:mr-6  mt-3 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px] font-bold">
                -{}
              </p>
              <p className="text-[14px]">{t("great_msg")}</p>
            </div>
            <div className="flex ltr:ml-6 rtl:mr-6  mt-3 ">
              <p className="text-opink ltr:mr-[6px] rtl:ml-[6px] font-bold">
                -{}
              </p>
              <p className="text-[14px]">{t("Luckily_msg")}</p>
            </div>

            {/* 1 */}

            <div className="flex flex-col text-[14px]">
              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-3 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  1-
                </p>
                <p className="text-[14px] 2xl:text-[15px] ">
                  {t("Measure_msg")}
                </p>
              </div>

              <p className="mt-2 ltr:ml-6 rtl:mr-6">
                {t("measurements_msg")}
              </p>
              <p className="ltr:ml-6 rtl:mr-6">
                {t("best_ways_msg")}
              </p>
              <p className="ltr:ml-6 rtl:mr-6">
                {t("similar_msg")}
              </p>

              <Image
                className="h-auto object-cover w-[380px] 2xl:w-[480px]  ltr:ml-16 rtl:mr-16 mt-5"
                src={quick1}
                alt="size guide image 1"
                height={360}
                width={480}
              />
            </div>

            {/* 2 */}

            <div className="flex flex-col text-[14px]">
              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-9 ">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  2-
                </p>
                <p className="text-[14px] 2xl:text-[15px] ">
                  {t("measurement_guide")}
                </p>
              </div>

              <p className="mt-2 ltr:ml-6 rtl:mr-6">
                {t("even_msg")}
              </p>
              <p className="ltr:ml-6 rtl:mr-6">
                {t("find_msg")}
              </p>

              <p className="ltr:ml-6 rtl:mr-6 mt-4">
                <span className="text-opink">
                  {t("First")}:{" "}
                </span>
                {t("way1")}
              </p>

              <Image
                className="h-auto object-cover w-[480px] 2xl:w-[680px] ltr:ml-6 rtl:mr-10 mt-5"
                src={quick2}
                alt="size guide image 2"
                height={360}
                width={480}
              />

              <p className="ltr:ml-6 rtl:mr-6 mt-6">
                <span className="text-opink">
                  {t("Second")}:
                </span>
                {t("sizeSecondMessage")}
              </p>

              <Image
                className="h-auto object-cover w-[450px] ltr:ml-36 rtl:mr-36 mt-5"
                src={quick3}
                alt="size guide image 3"
                height={360}
                width={480}
              />

              <p className="ltr:ml-6 rtl:mr-6 mt-2">
                <span className="text-opink">
                  {t("Third")}:{" "}
                </span>
                {t("way3")}
              </p>

              <Image
                className="h-auto object-cover w-[450px] 2xl:w-[550px] ltr:ml-6 rtl:mr-10 mt-5"
                src={quick4}
                alt="size guide image 4"
                height={360}
                width={480}
              />
            </div>

            {/* 3 */}

            <div className="flex flex-col text-[14px]">
              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-2">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  3-
                </p>
                <p className="text-[14px] 2xl:text-[15px] ">
                  {t("read_review")}
                </p>
              </div>

              <div className="flex">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  3-
                </p>
                <div className="flex flex-col">
                  <p className="mt-2 ltr:ml-6 rtl:mr-6">
                    {t("size_scroll")}
                  </p>
                  <p className="ltr:ml-6 rtl:mr-6">
                    {t("give_msg25")}
                  </p>
                  <p className="ltr:ml-6 rtl:mr-6">
                    {t("give_msg24")}
                  </p>
                  <p className="ltr:ml-6 rtl:mr-6">
                    {t("give_msg23")}
                  </p>
                  <p className="ltr:ml-6 rtl:mr-6">
                    {t("give_msg22")}
                  </p>
                </div>
              </div>

              <Image
                className="h-auto object-cover w-[500px] 2xl:w-[900px] ltr:ml-1 rtl:mr-1 mt-5"
                src={quick5}
                alt="size guide image 5"
                height={360}
                width={480}
              />
            </div>

            {/* 4 */}

            <div className="flex flex-col text-[14px]">
              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-2">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  4-
                </p>
                <p className="text-[14px] 2xl:text-[15px] ">
                  {t("give_msg21")}
                </p>
              </div>

              <div className="flex">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  3-
                </p>
                <div className="flex flex-col">
                  <p className="mt-2 ltr:ml-6 rtl:mr-6">
                    {t("give_msg20")}
                  </p>
                  <p className="ltr:ml-6 rtl:mr-6">
                    {t("give_msg19")}
                  </p>
                  <p className="ltr:ml-6 rtl:mr-6">
                    {t("give_msg18")}
                  </p>
                  <p className="ltr:ml-6 rtl:mr-6">
                    {t("give_msg17")}
                  </p>
                </div>
              </div>
            </div>

            {/* 5 */}

            <div className="flex flex-col text-[14px]">
              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-10">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  5-
                </p>
                <p className="text-[14px] 2xl:text-[15px] ">
                  {t("give_msg16")}
                </p>
              </div>

              <div className="flex">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  5-
                </p>
                <div className="flex flex-col">
                  <p className="mt-2 ltr:ml-6 rtl:mr-6">
                    {t("give_msg15")}
                  </p>
                  <p className="ltr:ml-6 rtl:mr-6">
                    {t("give_msg14")}
                  </p>
                  <p className="ltr:ml-6 rtl:mr-6">
                    {t("give_msg13")}
                  </p>
                </div>
              </div>

              <Image
                className="h-auto object-cover w-[500px] 2xl:w-[800px] ltr:ml-14 rtl:mr-14 mt-5"
                src={quick6}
                alt="size guide image 6"
                height={360}
                width={480}
              />
            </div>

            {/* 6 */}
            <div className="flex flex-col text-[14px]">
              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-7">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  6-
                </p>
                <p className="text-[14px] 2xl:text-[15px] ">
                  {t("give_msg12")}
                </p>
              </div>

              <div className="flex">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  5-
                </p>
                <div className="flex flex-col">
                  <p className="mt-2 ltr:ml-6 rtl:mr-6">
                    {t("give_msg11")}
                  </p>
                  <p className="ltr:ml-6 rtl:mr-6">
                    {t("give_msg10")}
                  </p>
                  <p className="ltr:ml-6 rtl:mr-6">
                    {t("give_msg9")}
                  </p>
                  <p className="ltr:ml-6 rtl:mr-6">
                    {t("give_msg8")}
                  </p>
                </div>
              </div>

              <Image
                className="h-auto object-cover w-[500px] 2xl:w-[800px] ltr:ml-6 rtl:mr-10 mt-5"
                src={quick7}
                alt="size guide image 7"
                height={360}
                width={480}
              />
            </div>

            {/* 7 */}
            <div className="flex flex-col text-[14px]">
              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-4">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  7-
                </p>
                <p className="text-[14px] 2xl:text-[15px] ">
                  {t("give_msg7")}
                </p>
              </div>

              <div className="flex">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  5-
                </p>
                <div className="flex flex-col">
                  <p className="mt-2 ltr:ml-6 rtl:mr-6">
                    {t("give_msg6")}
                  </p>
                  <p className="ltr:ml-6 rtl:mr-6">
                    {t("give_msg5")}
                  </p>
                </div>
              </div>

              <Image
                className="h-auto object-cover w-[500px] 2xl:w-[700px] ltr:ml-14 rtl:mr-14 mt-5"
                src={quick8}
                alt="size guide image 8"
                height={360}
                width={480}
              />
            </div>

            {/* 8 */}

            <div className="flex flex-col text-[14px]">
              <div className="flex ltr:ml-6 rtl:mr-6 leading-[25px] mt-8">
                <p className="text-opink  text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  8-
                </p>
                <p className="text-[14px] 2xl:text-[15px] ">
                  {t("give_msg4")}
                </p>
              </div>

              <div className="flex">
                <p className="text-opink invisible text-[18px] 2xl:text-[24px] ltr:mr-[6px] rtl:ml-[6px]">
                  8-
                </p>
                <div className="flex flex-col">
                  <p className="mt-2 ltr:ml-6 rtl:mr-6">
                    {t("give_msg3")}
                  </p>
                  <p className="ltr:ml-6 rtl:mr-6">
                    {t("give_msg2")}
                  </p>
                  <p className="ltr:ml-6 rtl:mr-6">
                    {t("give_msg")}
                  </p>
                </div>
              </div>

              <Image
                className="h-auto object-cover w-[500px] 2xl:w-[700px] ltr:ml-20 rtl:mr-20 mt-5"
                src={quick9}
                alt="size guide image 9"
                height={360}
                width={480}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default page;
