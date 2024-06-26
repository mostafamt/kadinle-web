"use client";

import React, { useState, useMemo, useEffect } from "react";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { getUserData, updateProfile } from "@/app/api/supabase/user";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import { Loading } from "../global/Loading";

export const UserView = () => {
  const t = useTranslations();
  const { user } = useGlobalOptions();
  const [hash, setHash] = useState(false);
  const [loading, setLoading] = useState(false);

  const { first_name, last_name } = user?.user_metadata || {
    first_name: "",
    last_name: "",
  };

  const hashName = useMemo(() => {
    let name =
      first_name?.[0] + first_name.substring(1).replace(/[a-zA-Z]/g, "*");
    name += last_name?.[0]
      ? last_name?.[0] + last_name.substring(1).replace(/[a-zA-Z]/g, "*")
      : "";
    return name;
  }, [first_name, last_name]);

  useEffect(() => {
    if (!user?.id) return;
    setLoading(true);
    getUserData().then((res) => {
      if (res?.error) return;
      setHash(res?.data?.at(0)?.hash_name);
      setLoading(false);
    });
  }, [user]);

  const saveSettings = async (e) => {
    e.preventDefault();
    const response = await updateProfile({ hash_name: hash });
    if (response?.error) toast.error(t("user_update_hast_error"));
    toast.success(t("user_update_hast_success"));
  };

  return (
    <div className="flex-1 rtl:pr-4 ltr:pl-4 ">
      <h3 className="mb-4 capitalize font-medium ">{t("control_view")}</h3>
      <div className="rounded-md p-3 justify-between flex items-center mb-4 bg-white shadow-sm">
        {loading ? (
          <Loading />
        ) : (
          <div className="flex flex-col gap-4 items-center justify-center w-full py-8">
            <h3 className="capitalize text-2xl text-black mb-2 font-semibold">
              {hash ? hashName : first_name + " " + last_name}
            </h3>
            <div className="flex gap-4 items-center bg-white shadow rounded-xl p-1">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  checked={hash}
                  type="checkbox"
                  value={true}
                  className="sr-only peer"
                  onChange={(e) => setHash(e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
              <span className="ml-3 text-sm font-medium text-gray-500 dark:text-gray-600">
                {t("hide_name")}
              </span>
            </div>

            <button
              onClick={saveSettings}
              className="p-2 rounded-md bg-opink text-white hover:shadow-md"
            >
              {t("submit")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
