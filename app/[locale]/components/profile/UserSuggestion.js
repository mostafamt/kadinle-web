"use client";
import { generateMail } from "@/app/api/emails/sender";
import { submitSuggestion } from "@/app/api/supabase/user";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useContext, useState } from "react";

const suggestion = "https://kadinle.com/media/images/suggestion.png";

export const UserSuggestion = ({ locale }) => {
  const t = useTranslations();
  const { user } = useGlobalOptions();
  const [ticket, setTicket] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const submitMsg = () => {
    if (ticket) {
      submitSuggestion(ticket).then((res) => {
        if (!res.error) {
          setMsg(t("suggestion_msg"));
          setError("");
          generateMail("suggestions_msg", {
            customer_name:
              user?.user_metadata?.first_name +
              " " +
              user?.user_metadata?.last_name,
            lang: locale,
          });
        } else {
          setMsg("");
          setError(t("suggestion_error"));
        }
        setTicket("");
      });
    }
  };

  return (
    <div className="w-[73%] md:w-[70%] min-w-[calc(100%-320px)]">
      <div className="flex flex-col">
        <div className="h-[52px] flex items-center">
          <h3 className="text-[17px] md:text-[19px] 2xl:text-[22px]">
            {t("Make_suggestion")}
          </h3>
        </div>
        {error ? (
          <p className="p-2 text-sm bg-red-100 text-red-600 text-center my-4">
            {error}
          </p>
        ) : null}
        {msg ? (
          <p className="p-2 text-sm bg-green-100 text-green-600 text-center my-4">
            {msg}
          </p>
        ) : null}

        <div className="flex flex-col">
          <label className="mb-2 mt-3 md:mt-4 2xl:mt-4 text-[#7C7C7C]  text-[14px] md:text-[16px] 2xl:text-[18px]">
            {t("Make_suggestion_msg")}
          </label>
          <div className="flex justify-between">
            <textarea
              value={ticket}
              onChange={(e) => setTicket(e.target.value)}
              className="outline-none bg-owhite text-[13px] md:text-[14px] 2xl:text-[16px] py-4 rounded-[10px] px-3 w-[62%] 2xl:w-[64%] resize-none "
              placeholder={t("Make_suggestion_placeholder")}
            />
            <Image
              className="w-[30%] object-cover"
              src={suggestion}
              alt="send suggestion"
              height={300}
              width={350}
            />
          </div>
        </div>

        <button
          onClick={submitMsg}
          className=" text-[11px] md:text-[12px] 2xl:text-[15px] h-fit mt-2 flex items-center justify-center py-2 md:py-3 bg-opink text-owhite cursor-pointer border border-opink hover:bg-owhite hover:text-[#000000] rounded-full w-[140px] 2xl:w-[150px]"
        >
          {t("SEND_SUGGESTION")}
        </button>
      </div>
    </div>
  );
};
