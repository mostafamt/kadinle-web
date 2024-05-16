"use client";

import { completedUserInfo } from "@/app/api/supabase/auth";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import CloseIcon from "../Icons/CloseIcon";
import { registrationPoints } from "@/app/api/supabase/points";
import { getUserById } from "@/app/api/supabase/user";

export const PopupNameForm = ({}) => {
  const t = useTranslations();
  const { user } = useGlobalOptions();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showCompletedInfo, setShowCompletedInfo] = useState(false);

  useEffect(() => {
    if (user?.id) {
      registrationPoints(user?.id);
      getUserById(user?.id).then((res) => {
        if (res?.error || !res?.data?.length) setShowCompletedInfo(true);
      });
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      completedUserInfo({
        id: user?.id,
        email: user?.email,
        first_name: firstName,
        last_name: lastName,
        profile_img: user?.user_metadata?.avatar_url,
      }).then((res) => {
        setShowCompletedInfo(false);
      });
    }
  };

  if (!showCompletedInfo) return;

  return (
    <div className="bg-[#00000090] top-0 left-0 h-full w-full fixed z-[999999]">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white rounded-xl top-1/2 left-1/2 -translate-x-1/2 px-6 py-8 -translate-y-1/2 absolute"
      >
        <button
          onClick={() => setShowCompletedInfo((p) => !p)}
          type="button"
          className="absolute -top-4 ltr:-left-4 rtl:-right-4 h-14 w-14 flex items-center justify-center bg-white text-red-600 rounded-full p-1"
        >
          <CloseIcon className="text-red-500 h-6 w-6 fill-red-500" />{" "}
        </button>
        <h2 className="text-lg font-medium text-center text-opink">
          {t("set_information")}
        </h2>
        <div className="rounded-full py-[10px] border border-[#D8D8D8] px-8 mt-6">
          <input
            type="text"
            className="bg-owhite w-full outline-none text-[14px] "
            placeholder={t("first_name")}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="rounded-full py-[10px] border border-[#D8D8D8] px-8 mt-6">
          <input
            type="text"
            className="bg-owhite w-full outline-none text-[14px] "
            placeholder={t("last_name")}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <button className="w-full mt-6 rounded-full py-[10px] capitalize text-[12px] 2xl:text-[13px] bg-[#00ADC9] text-owhite flex justify-center items-center border transition-all duration-[300ms] border-owhite hover:bg-owhite hover:text-[#000000] hover:border-[#99ADC9] cursor-pointer ">
          {t("save")}
        </button>
      </form>
    </div>
  );
};
