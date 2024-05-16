"use client";
import { useTranslations } from "next-intl";
import React, { useContext } from "react";
import Barcode from "react-barcode";
import QRCode from "react-qr-code";

const ProductDetails = ({ product }) => {
  const t = useTranslations();

  return (
    <div className="text-[#707070] pb-6 flex flex-col space-y-4 mb-8">
      <div className="flex">
        <p className="min-w-[200px] font-semibold">{t("productCode")}:</p>
        <p>{product?.productinfo?.product_sku}</p>
      </div>
      {product?.productinfo?.origin?.length ? (
        <div className="flex ">
          <p className="w-[200px] font-semibold text-[#707070]">
            {t("origin")}:
          </p>
          <p>{product?.productinfo?.origin?.[0]?.name}</p>
        </div>
      ) : null}
      {product?.productinfo?.brand ? (
        <div className="flex ">
          <p className="w-[200px] font-semibold text-[#707070]">
            {t("brand")}:
          </p>
          <p>{product?.productinfo?.brand?.[0]?.name}</p>
        </div>
      ) : null}
      {product?.productinfo?.barcode ? (
        <div className="flex">
          <p className="min-w-[200px] font-semibold">{t("barcode")}:</p>
          <Barcode value={product?.productinfo?.barcode} />
        </div>
      ) : null}
      <div className="flex my-5">
        <p className="min-w-[200px] font-semibold">{t("qr")}:</p>
        <QRCode
          value={window?.location?.href}
          style={{ width: 180, height: 180 }}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
