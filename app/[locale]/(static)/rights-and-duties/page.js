import { getTranslator } from "next-intl/server";
import React from "react";

import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import { MainTitle } from "../../components/global/MainTitle";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslator(locale, "kadinle_rights_duties");
  return {
    title: `${locale === "ar" ? "كادينلي" : "KADINLE"} | ${t("rights_duties")}`,
    description: t("rights_duties_msg"),
  };
}

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale, "kadinle_rights_duties");

  return (
    <>
      <ScrollUpComponent />
      <MainTitle title={t("rights_duties")} />
      <div className="flex flex-col poppins container w-full mb-12 text-xs">
        <p className="text-black text-xs mt-4">{t("rights_duties_msg")}</p>
        <h2 className="text-black font-medium text-sm mt-6">
          {t("kadinle_duties")}
        </h2>
        <ul className="flex gap-2 flex-col list-decimal px-4 my-4 text-xs">
          <li>
            <h3 className="text-xs text-black mb-2 font-medium">
              {t("kadinle_duties_msg")}
            </h3>
            <ul className="flex gap-2 flex-col list-disc px-4">
              <li>
                <span className="underline text-black font-medium">
                  {t("quality_1")}
                </span>{" "}
                {t("quality_msg")}
              </li>
              <li>
                <span className="underline text-black font-medium">
                  {t("quality_watcher")}
                </span>{" "}
                {t("quality_watcher_msg")}
              </li>
              <li>
                <span className="underline text-black font-medium">
                  {t("duties_editing")}
                </span>{" "}
                {t("duties_editing_msg")}
              </li>
            </ul>
          </li>
          <li>
            <h3 className="text-xs text-black mb-2 font-medium">
              {t("delivery_time")}
            </h3>
            <ul className="flex gap-2 flex-col list-disc px-4">
              <li>
                <span className="underline text-black font-medium">
                  {t("delivery_tables")}
                </span>{" "}
                {t("delivery_tables_msg")}
              </li>
              <li>
                <span className="underline text-black font-medium">
                  {t("kadinle_duties_msg_1")}
                </span>{" "}
                {t("kadinle_duties_msg_2")}
              </li>
              <li>
                <span className="underline text-black font-medium">
                  {t("kadinle_duties_msg_3")}
                </span>{" "}
                {t("kadinle_duties_msg_4")}
              </li>
            </ul>
          </li>
          <li>
            <h3 className="text-xs text-black mb-2 font-medium">
              {t("kadinle_duties_msg_5")}
            </h3>
            <p>{t("kadinle_duties_msg_6")}</p>
          </li>
        </ul>
        {/*  */}
        <p className="text-black text-xs mt-4">{t("kadinle_duties_msg_7")}</p>
        {/*  */}
        <ul className="flex flex-col gap-2 list-disc my-4 px-4">
          <li>{t("kadinle_duties_msg_8")}</li>
          <li>{t("kadinle_duties_msg_9")}</li>
          <li>{t("kadinle_duties_msg_10")}</li>
          <li>{t("kadinle_duties_msg_11")}</li>
          <li>{t("kadinle_duties_msg_12")}</li>
          <li>{t("kadinle_duties_msg_13")}</li>
        </ul>
        <h2 className="text-black font-medium text-sm mt-6">
          {t("suppliers_duties")}
        </h2>
        <ul className="px-4 mt-4 flex flex-col gap-2 list-decimal">
          <li>
            <h3 className="text-xs text-black mb-2 font-medium">
              {t("suppliers_duties_title_1")}
            </h3>
            <ul className="px-4 list-disc">
              <li>{t("suppliers_duties_msg_1")}</li>
            </ul>
          </li>
          <li>
            <h3 className="text-xs text-black mb-2 font-medium">
              {t("suppliers_duties_title_2")}
            </h3>
            <ul className="px-4 list-disc">
              <li>{t("suppliers_duties_msg_2")}</li>
            </ul>
          </li>
          <li>
            <h3 className="text-xs text-black mb-2 font-medium">
              {t("suppliers_duties_title_3")}
            </h3>
            <ul className="px-4 list-disc">
              <li>{t("suppliers_duties_msg_3")}</li>
            </ul>
          </li>
          <li>
            <h3 className="text-xs text-black mb-2 font-medium">
              {t("suppliers_duties_title_4")}
            </h3>
            <ul className="px-4 list-disc">
              <li>{t("suppliers_duties_msg_4")}</li>
            </ul>
          </li>
          <li>
            <h3 className="text-xs text-black mb-2 font-medium">
              {t("suppliers_duties_title_5")}
            </h3>
          </li>
        </ul>
        <p className="text-black text-xs ">
          {t("suppliers_duties_description")}
        </p>
        {/*  */}
        <ul className="flex flex-col gap-2 list-disc my-4 px-4">
          <li>{t("suppliers_duties_description_msg_1")}</li>
          <li>{t("suppliers_duties_description_msg_2")}</li>
          <li>{t("suppliers_duties_description_msg_3")}</li>
        </ul>
      </div>
    </>
  );
};

export default page;
