'use client';
import { getCountries } from "@/app/api/supabase/shared";
import { addAddress, updateAddress } from "@/app/api/supabase/user";
import { useTranslations } from "next-intl";
import React, { useContext, useEffect, useState } from "react";

const AddNewAddress = ({
  setStage,
  address: oldValues,
  containerClassName,
  formClassName,
  operation,
  onClickCancel,
}) => {
  const t = useTranslations()
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (oldValues) {
      setAddress((prev) => {
        return {
          ...prev,
          ...oldValues,
        };
      });
    }
  }, [oldValues]);
  const [address, setAddress] = useState({
    title: "",
    city: "",
    country: "",
    line_one: "",
    line_two: "",
    postal_code: "",
  });

  useEffect(() => {
    getCountries().then((d) => {
      setOptions(d);
    });
  }, []);

  const handelChangeField = (e) => {
    setAddress((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = () => {
    if (
      address?.title &&
      address?.city &&
      address?.line_one &&
      address?.country
    ) {
      if (operation === "update") {
        updateAddress(address).then((res) => {
          if (!res?.error) {
            setMsg(t("address_update_msg"));
            setTimeout(() => {
              if (!!setStage) setStage("display");
            }, [3000]);
          }
        });
      } else {
        addAddress(address).then((res) => {
          if (!res?.error) {
            setMsg(t("address_added_msg"));
            setTimeout(() => {
              if (!!setStage) setStage("display");
            }, [3000]);
            if (!!onClickCancel) {
              onClickCancel();
            }
          }
        });
      }
      setError("");
    } else {
      setMsg("");
      setError(t("fields_error"));
    }
  };

  return (
    <div
      className={`w-[73%] md:w-[70%] min-w-[calc(100%-320px)] ${containerClassName}`}
    >
      <div className="flex flex-col h-full w-full">
        <h2 className="text-[17px] md:text-[19px] 2xl:text-[22px]">
          {t("Add_new_address")}
        </h2>
        {error ? (
          <p className="text-red-500 my-4 text-sm bg-red-200 p-1 rounded-md text-center">
            {error}
          </p>
        ) : null}
        {msg ? (
          <p className="text-green-500 my-4 text-sm bg-green-200 p-1 rounded-md text-center">
            {msg}
          </p>
        ) : null}
        <div
          className={`flex flex-col bg-owhite px-4 md:px-8 py-5 text-[14px] md:text-[16px] 2xl:text-[16px] ${formClassName}`}
        >
          <div className="md:w-[90%] md:max-w-[670px] flex flex-col space-y-3">
            <div className="flex justify-between">
              <div className="flex flex-col w-[47%] ">
                <label className="font-[500] mb-[4px]">
                  {t("Title")}
                </label>
                <input
                  className="outline-none rounded-full bg-owhite border border-[#707070] py-1  ltr:pl-2 ltr:md:pl-4 rtl:pr-2 rtl:md:pr-4 text-[13px] md:text-[14px]"
                  placeholder="Address title"
                  value={address?.title}
                  name="title"
                  onChange={handelChangeField}
                />
              </div>
              <div className="flex flex-col w-[47%] ">
                <label className="font-[500] mb-[4px]">
                  {t("postal_code")}
                </label>
                <input
                  className="outline-none rounded-full bg-owhite border border-[#707070] py-1  ltr:pl-2 ltr:md:pl-4 rtl:pr-2 rtl:md:pr-4 text-[13px] md:text-[14px]"
                  placeholder="344110"
                  value={address?.postal_code}
                  name="postal_code"
                  onChange={handelChangeField}
                />
              </div>
            </div>

            <div className="flex flex-col  ">
              <label className="font-[500] mb-[4px]">
                {t("Address_Line_One")}
              </label>
              <input
                className="outline-none rounded-full bg-owhite border border-[#707070] py-1  ltr:pl-2 ltr:md:pl-4 rtl:pr-2 rtl:md:pr-4 text-[13px] md:text-[14px]"
                placeholder="Address Line One"
                value={address?.line_one}
                name="line_one"
                onChange={handelChangeField}
              />
            </div>

            <div className="flex flex-col  ">
              <label className="font-[500] mb-[4px]">
                {t("Address_Line_Two")}
              </label>
              <input
                className="outline-none rounded-full bg-owhite border border-[#707070] py-1  ltr:pl-2 ltr:md:pl-4 rtl:pr-2 rtl:md:pr-4 text-[13px] md:text-[14px]"
                placeholder="Address Line Two"
                value={address?.line_two}
                name="line_two"
                onChange={handelChangeField}
              />
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col w-[47%] ">
                <label className="font-[500] mb-[4px]">
                  {t("country")}
                </label>
                <select
                  className="outline-none rounded-full bg-owhite border border-[#707070] py-1  ltr:pl-2 ltr:md:pl-4 rtl:pr-2 rtl:md:pr-4 text-[13px] md:text-[14px]"
                  placeholder="Country"
                  value={address?.country}
                  name="country"
                  onChange={handelChangeField}
                >
                  <option>{t("country")}</option>
                  {options
                    ?.sort((a, b) => a?.name?.localeCompare(b?.name))
                    ?.map((country) => (
                      <option key={country?.id} value={country?.id}>
                        {country?.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex flex-col w-[47%] ">
                <label className="font-[500] mb-[4px]">
                  {t("city")}
                </label>
                <input
                  className="outline-none rounded-full bg-owhite border border-[#707070] py-1  ltr:pl-2 ltr:md:pl-4 rtl:pr-2 rtl:md:pr-4 text-[13px] md:text-[14px]"
                  placeholder="City"
                  value={address?.city}
                  name="city"
                  onChange={handelChangeField}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            {!!onClickCancel ? (
              <button
                onClick={onClickCancel}
                className="border border-red-500 text-red-500 py-2 rounded-3xl px-4"
              >
                {t("cancel")}
              </button>
            ) : null}
            <div className="rounded-full cursor-pointer text-owhite hover:bg-owhite hover:text-[#000000] border border-opink py-2  w-[150px] bg-opink flex justify-center items-center">
              <button
                onClick={onSubmit}
                className="text-[14px] 2xl:text-[15px]"
              >
                {operation === "update"
                  ? t("Update_address")
                  : t("Add_new_address")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewAddress;
