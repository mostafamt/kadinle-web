"use client";

import { ListInvited, inviteFriend } from "@/app/api/supabase/user";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import {
  FacebookMessengerShareButton,
  InstapaperShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import { Loading } from "../global/Loading";

const instagramPic = "https://kadinle.com/media/images/instagram.svg";
const messenger = "https://kadinle.com/media/images/messenger.svg";
const telegram = "https://kadinle.com/media/images/telegram.svg";
const whatsapp = "https://kadinle.com/media/images/whatsapp.svg";

export const UserInvitedFriends = () => {
  const t = useTranslations();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [invitedList, setInvitedList] = useState([]);

  const getInvited = async () => {
    setIsLoading(true);
    const response = await ListInvited();
    setInvitedList(response?.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getInvited();
  }, []);

  const submitMsg = () => {
    if (email && email?.indexOf("@") !== -1) {
      inviteFriend(email).then((res) => {
        if (!res.error) {
          setMsg(t("invite_msg"));
          setError("");
          getInvited();
        } else {
          setMsg("");
          setError(t("invited_before"));
        }
        setEmail("");
      });
    } else {
      setError(t("valid_email"));
    }
  };

  return (
    <div className="w-[73%] md:w-[70%] min-w-[calc(100%-320px)]">
      <div className="flex flex-col h-full">
        <div className="min-h-[52px] flex items-center">
          <h2 className="text-[17px] md:text-[19px] 2xl:text-[22px]">
            {t("Invite_friends_and_get_Rewards")}
          </h2>
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
          <h3 className="mb-2 mt-3 md:mt-4 2xl:mt-4 text-[#7C7C7C]  text-[14px] md:text-[16px] 2xl:text-[18px]">
            {t("Invite_all_friends_and_join")}
          </h3>
          <div className="flex gap-6 items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-owhite outline-none rounded-full py-2 ltr:pl-4 rtl:pr-4  w-[43%]  text-[12px] md:text-[14px] 2xl:text-[16px]"
              placeholder={t("email")}
            />
            <p className="text-[#9F9F9F] text-[15px]">{t("OR")}</p>
            <div className="flex gap-4 items-center">
              <WhatsappShareButton
                title="kadinle"
                separator=""
                url={
                  typeof window === "object" ? window.location?.origin : null
                }
              >
                <Image
                  className="w-[25px] 2xl:w-[30px] object-cover cursor-pointer"
                  src={whatsapp}
                  alt="whatsapp"
                  height={30}
                  width={30}
                />
              </WhatsappShareButton>
              <TelegramShareButton
                title="kadinle"
                url={
                  typeof window === "object" ? window.location?.origin : null
                }
              >
                <Image
                  className="w-[25px] 2xl:w-[30px] object-cover cursor-pointer"
                  src={telegram}
                  alt="telegram"
                  height={30}
                  width={30}
                />
              </TelegramShareButton>
              <FacebookMessengerShareButton
                title="kadinle"
                url={
                  typeof window === "object" ? window.location?.origin : null
                }
              >
                <Image
                  className="w-[25px] 2xl:w-[30px] object-cover cursor-pointer"
                  src={messenger}
                  alt="messenger"
                  height={30}
                  width={30}
                />
              </FacebookMessengerShareButton>
              <InstapaperShareButton
                title="kadinle"
                url={
                  typeof window === "object" ? window.location?.origin : null
                }
              >
                <Image
                  className="w-[25px] 2xl:w-[30px] object-cover cursor-pointer"
                  src={instagramPic}
                  alt="instagram"
                  height={30}
                  width={30}
                />
              </InstapaperShareButton>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-[80px]">
          <div className="h-[52px] flex items-center">
            <h3 className="text-[17px] md:text-[19px] 2xl:text-[22px]">
              {t("Invited")}
            </h3>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {invitedList?.length ? (
                <div className="grid grid-cols-2 gap-4  max-w-[900px]">
                  {invitedList?.map((invite) => (
                    <div
                      className="hover:bg-white hover:shadow p-2 hover:scale-[102%]"
                      key={invite?.id}
                    >
                      <div className="flex gap-2 items-center">
                        <span className="p-2 h-10 w-10 rounded-full flex items-center justify-center capitalize text-white bg-purple-300">
                          {invite?.email?.[0]}
                        </span>
                        <div>
                          <h4 className="text-[13px] 2xl:text-[15px] w-[120px]">
                            {invite?.email}
                          </h4>
                          <p className="text-[13px] mt-1 2xl:text-[15px] w-[120px] text-opink">
                            {invite?.status ? t("signed_up") : t("PENDING")}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>{t("no_results")}</p>
              )}
            </>
          )}
        </div>
        <div className="h-full flex items-end">
          <button
            onClick={submitMsg}
            className=" text-[11px] md:text-[12px] 2xl:text-[15px] h-fit mt-2 flex items-center justify-center py-2 md:py-3 bg-opink text-owhite cursor-pointer border border-opink hover:bg-owhite hover:text-[#000000] rounded-full w-[130px] 2xl:w-[140px]"
          >
            {t("SEND_INVITE")}
          </button>
        </div>
      </div>
    </div>
  );
};
