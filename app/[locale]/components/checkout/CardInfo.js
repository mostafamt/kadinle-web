"use client";

import { buyByWallet, getUserData } from "@/app/api/supabase/user";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";

const left = "https://kadinle.com/media/images/left.svg";

const CardInfo = ({ setStage, addToOrder, total, shipping_cost }) => {
  const t = useTranslations();
  const { user } = useGlobalOptions();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [paymentResult, setPaymentResult] = useState(null);

  const onChooseWallet = async () => {
    setIsLoading(true);
    let finalTotal = parseFloat(total + shipping_cost);
    const userInfoResponse = await getUserData(user?.id);
    const wallet = userInfoResponse?.data?.[0]?.wallet;
    if (wallet < finalTotal) {
      toast.error(t("less_amount"));
      setIsLoading(false);
    } else {
      const response = await buyByWallet(finalTotal);
      if (response) addToOrder();
    }
    setIsLoading(false);
  };

  const handleCardTokenization = async (token, buyer) => {
    setIsLoading(true);

    try {
      const response = await fetch("https://kadinle.com/api/process-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          amount: parseFloat(total + shipping_cost), // replace with your actual order amount
          // locationId: "LB74FF0HEHXM3",
          locationId: "LWCKN62YQH68E",
          sourceId: token?.token,
        }),
      });

      if (!response.ok) {
        throw new Error("Payment failed");
      }

      setIsLoading(false);
      setErrorMessage("");
      setPaymentResult(t("Payment_processed_successfully"));
      addToOrder();
    } catch (error) {
      setIsLoading(false);
      setPaymentResult("");
      setErrorMessage(t("Payment_failed"));
    }
  };
  return (
    <>
      {isLoading ? (
        <div className="fixed bg-[#00000090] z-[9999] w-full h-full flex top-0 left-0 bottom-0 ring-0">
          <div className="text-white m-auto flex flex-col items-center justify-center">
            <div className="animate-ping h-10 w-10 rounded-full mb-4 bg-white " />
            {t("loading")}
          </div>
        </div>
      ) : null}
      {errorMessage && (
        <div className="p-1 rounded-md text-red-500 bg-red-100 text-center my-4">
          {errorMessage}
        </div>
      )}
      {paymentResult && (
        <div className="p-1 rounded-md text-green-500 bg-green-100 text-center my-4">
          {paymentResult}
        </div>
      )}
      <div className="flex flex-col">
        <PaymentForm
          cardTokenizeResponseReceived={handleCardTokenization}
          // applicationId="sq0idp-1IrXyUmxoUgY-Ral_oGUSg"
          // locationId="LB74FF0HEHXM3"
          applicationId="sandbox-sq0idb-d8ebP8j_TMCDQNFLqwd2hg"
          locationId="LWCKN62YQH68E"
        >
          <CreditCard />
        </PaymentForm>
        <button
          onClick={onChooseWallet}
          className="text-white my-4 rounded-md p-2 bg-opink hover:shadow-md capitalize"
        >
          {t("wallet_pay")}
        </button>

        <div className="flex justify-between fullPage">
          <button
            onClick={(e) => setStage("Summary")}
            className="cursor-pointer flex gap-4 items-center"
          >
            <Image
              className="w-[10px] object-contain"
              src={left}
              alt="left"
              height={10}
              width={15}
            />
            <span className="text-[11px] 2xl:text-[15px]">{t("back")}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardInfo;
