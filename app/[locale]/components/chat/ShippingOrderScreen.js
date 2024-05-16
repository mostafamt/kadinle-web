"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export const ShippingOrderScreen = ({ onMoveScreen, handleBack }) => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-2 max-h-[60vh] overflow-auto">
      <h3 className="text-center text-base font-semibold mb-2 text-black">
        {t("fast_shipping_msg1")}
      </h3>
      <p className="text-center font-medium mb-2">{t("fast_shipping_msg2")}</p>
      <ul className="list-decimal flex flex-col gap-2 px-4">
        <li className="">{t("fast_shipping_msg3")}</li>
        <li className="">{t("fast_shipping_msg4")}</li>
      </ul>
      <p className="text-center text-opink mt-1">{t("fast_shipping_msg5")}</p>
      <Link
        href="/shippingi-nformation"
        className="text-xs p-1 rounded-md bg-opink text-white mx-auto block w-fit"
      >
        {t("Shipping_information")}
      </Link>
      <button className="text-gray-400 font-medium  mt-2" onClick={handleBack}>
        {t("back")}{" "}
      </button>
      <button
        className="text-opink font-medium"
        onClick={() => onMoveScreen("help_screen")}
      >
        {t("center_help")}{" "}
      </button>
    </div>
  );
};
