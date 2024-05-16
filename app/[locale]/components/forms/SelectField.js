"use client";
import { useTranslations } from "next-intl";
import React, { useContext } from "react";

export const SelectField = ({
  containerClassesName,
  labelClassName,
  label,
  fieldClassName,
  textPlaceholder,
  list,
  keyLabel = "name",
  keyValue = "id",
  ...fieldProps
}) => {
  const t = useTranslations();
  return (
    <div className={`flex flex-col gap-1 ${containerClassesName}`}>
      {label ? (
        <label className={`text-gray-500 ${labelClassName}`}>{label}</label>
      ) : null}
      <select
        className={`w-full border p-2 border-gray-300 rounded-md bg-white outline-primary ${fieldClassName}`}
        {...fieldProps}
      >
        {textPlaceholder ? <option>{t("choose")}</option> : null}
        {list?.map((item) => (
          <option key={item?.[keyValue]} value={item?.[keyValue]}>
            {item?.[keyLabel]}
          </option>
        ))}
      </select>
    </div>
  );
};
