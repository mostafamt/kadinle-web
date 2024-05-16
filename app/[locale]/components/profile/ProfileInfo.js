"use client";

import { generateMail } from "@/app/api/emails/sender";
import { getMonthCount } from "@/app/api/lib/functions";
import { deleteAccount } from "@/app/api/supabase/auth";
import {
  getUserData,
  updateProfile,
  updateUserAvatar,
} from "@/app/api/supabase/user";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CustomModal } from "../modal/CustomModal";
import Image from "next/image";

const ProfileInfo = ({ locale }) => {
  const t = useTranslations();
  const router = useRouter();
  const { user } = useGlobalOptions();
  const [userData, setUserData] = useState();
  const [refresh, setRefresh] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const uploadFile = async (e) => {
    await updateUserAvatar(e.target.files[0]);
    setRefresh((p) => !p);
  };

  const handelChangeField = (e) => {
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    getUserData().then((res) => {
      setUserData(res?.data?.[0]);
    });
  }, [refresh]);

  const onSubmit = () => {
    updateProfile(userData);
  };

  const onConfirmDelete = async () => {
    const response = await deleteAccount(user?.id);
    if (response?.error) {
      toast.error(t("failed_delete_account"));
    } else {
      toast.success(t("success_delete_account"));
      let monthCount = getMonthCount(user?.created_at, new Date());

      generateMail("leaving_store_msg", user?.email, {
        lang: locale,
        number_of: monthCount,
        customer_name: `${user?.user_metadata?.first_name} ${
          user?.user_metadata?.last_name ? user?.user_metadata?.last_name : ""
        }`,
      });

      setTimeout(() => {
        router.push("/");
      }, 200);
    }
    setOpenConfirm(false);
  };

  return (
    <>
      <CustomModal open={openConfirm} onClose={() => setOpenConfirm(false)}>
        <div className="flex flex-col min-h-[inherit]">
          <h3 className="capitalize mb-3  text-center text-black font-semibold">
            {t("delete_account_confirm")}
          </h3>
          <p className="text-sm text-gray-400">{t("delete_account_msg")}</p>
          <div className="flex gap-4 items-center mt-auto">
            <button
              className="bg-gray-200 text-black p-2 px-6 rounded-md text-sm"
              onClick={() => setOpenConfirm(false)}
            >
              {t("cancel")}
            </button>
            <button
              className="bg-red-500 text-white p-2 px-6 rounded-md text-sm"
              onClick={onConfirmDelete}
            >
              {t("confirm")}
            </button>
          </div>
        </div>
      </CustomModal>
      <div className="flex flex-col bg-owhite w-[73%] md:w-[70%] min-w-[calc(100%-320px)] px-4 md:px-8 py-5 text-[14px] md:text-[16px] 2xl:text-[16px]">
        <div className="md:w-[90%] md:max-w-[670px] flex flex-col space-y-3">
          <div className="flex justify-center mb-4 relative overflow-hidden">
            <figure className="relative border shadow bg-white p-[2px] rounded-full">
              <input
                type="file"
                onChange={uploadFile}
                className="absolute top-0 left-0 w-full h-full opacity-0 z-10 "
              />
              <Image
                src={userData?.profile_img || user?.user_metadata?.avatar_url}
                alt={"user Avatar"}
                className="object-cover rounded-full h-28 w-28"
                width={112}
                height={112}
              />
            </figure>
          </div>
          {user?.user_metadata?.fullName ? (
            <div className="flex justify-between">
              <div className="flex flex-col w-[47%]">
                <label className="font-[500] mb-[4px]">{t("fullName")}</label>
                <input
                  name="first_name"
                  className="outline-none rounded-full read-only:bg-gray-200 bg-owhite border border-[#707070] py-1  ltr:pl-2 ltr:md:pl-4 rtl:pr-2 rtl:md:pr-4 text-[13px] md:text-[14px]"
                  placeholder="First name"
                  value={user?.user_metadata?.fullName}
                  // onChange={handelChangeField}
                  readOnly
                />
              </div>
            </div>
          ) : (
            <div className="flex justify-between">
              <div className="flex flex-col w-[47%]">
                <label className="font-[500] mb-[4px]">{t("first_name")}</label>
                <input
                  name="first_name"
                  className="outline-none rounded-full bg-owhite border border-[#707070] py-1  ltr:pl-2 ltr:md:pl-4 rtl:pr-2 rtl:md:pr-4 text-[13px] md:text-[14px]"
                  placeholder="First name"
                  value={userData?.first_name}
                  onChange={handelChangeField}
                />
              </div>
              <div className="flex flex-col w-[47%] ">
                <label className="font-[500] mb-[4px]">{t("last_name")}</label>
                <input
                  name="last_name"
                  className="outline-none rounded-full bg-owhite border border-[#707070] py-1  ltr:pl-2 ltr:md:pl-4 rtl:pr-2 rtl:md:pr-4 text-[13px] md:text-[14px]"
                  placeholder="Last name"
                  value={userData?.last_name}
                  onChange={handelChangeField}
                />
              </div>
            </div>
          )}

          <div className="flex flex-col  ">
            <label className="font-[500] mb-[4px]">
              {t("Address_Line_One")}
            </label>
            <input
              name="line_one"
              className="outline-none rounded-full bg-owhite border border-[#707070] py-1  ltr:pl-2 ltr:md:pl-4 rtl:pr-2 rtl:md:pr-4 text-[13px] md:text-[14px]"
              placeholder={t("Address_Line_One")}
              value={userData?.line_one}
              onChange={handelChangeField}
            />
          </div>

          <div className="flex flex-col  ">
            <label className="font-[500] mb-[4px]">
              {t("Address_Line_Two")}
            </label>
            <input
              name="line_two"
              className="outline-none rounded-full bg-owhite border border-[#707070] py-1  ltr:pl-2 ltr:md:pl-4 rtl:pr-2 rtl:md:pr-4 text-[13px] md:text-[14px]"
              placeholder={t("Address_Line_Two")}
              value={userData?.line_two}
              onChange={handelChangeField}
            />
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col w-[47%] ">
              <label className="font-[500] mb-[4px]">{t("City")}</label>
              <input
                name="city"
                className="outline-none rounded-full bg-owhite border border-[#707070] py-1  ltr:pl-2 ltr:md:pl-4 rtl:pr-2 rtl:md:pr-4 text-[13px] md:text-[14px]"
                placeholder={t("City")}
                value={userData?.city}
                onChange={handelChangeField}
              />
            </div>

            <div className="flex flex-col w-[47%] ">
              <label className="font-[500] mb-[4px]">{t("postal_code")}</label>
              <input
                name="postal_code"
                className="outline-none rounded-full bg-owhite border border-[#707070] py-1  ltr:pl-2 ltr:md:pl-4 rtl:pr-2 rtl:md:pr-4 text-[13px] md:text-[14px]"
                placeholder="344110"
                value={userData?.postal_code}
                onChange={handelChangeField}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col w-[47%] ">
              <label className="font-[500] mb-[4px]">{t("phone_number")}</label>
              <input
                name="phone"
                className="outline-none rounded-full bg-owhite border border-[#707070] py-1  ltr:pl-2 ltr:md:pl-4 rtl:pr-2 rtl:md:pr-4 text-[13px] md:text-[14px]"
                placeholder="0123456789"
                value={userData?.phone}
                onChange={handelChangeField}
              />
            </div>

            <div className="flex flex-col w-[47%] ">
              <label className="font-[500] mb-[4px]">{t("Email")}</label>
              <input
                className="outline-none rounded-full border border-[#707070] py-1  ltr:pl-2 ltr:md:pl-4 rtl:pr-2 rtl:md:pr-4 text-[13px] md:text-[14px] bg-gray-200 cursor-default"
                readOnly
                placeholder="admin@kadinle.com"
                value={user?.email}
                onChange={handelChangeField}
              />
            </div>
          </div>
        </div>

        <button
          onClick={onSubmit}
          className="rounded-full cursor-pointer text-owhite hover:bg-owhite hover:text-[#000000] border border-opink py-2 mt-6 px-8 w-fit bg-opink flex justify-center items-center"
        >
          {t("UPDATE_PROFILE")}
        </button>

        <div className="mt-b mt-6 pt-4 border-t">
          <button
            className="text-red-500 text-sm border-red-500 border p-3 px-6 rounded-3xl font-medium hover:bg-red-500 hover:text-white hover:shadow capitalize"
            onClick={() => setOpenConfirm(true)}
          >
            {t("delete_account")}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
