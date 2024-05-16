import React from "react";

export const SectionTitle = ({
  title,
  containerClassName = "",
  titleClassName = "",
}) => {
  return (
    <div
      className={`flex items-center justify-center w-full flex-col gap-2 mt-5 mb-3 ${containerClassName}`}
    >
      <h2 className={`text-2xl font-medium capitalize ${titleClassName}`}>
        {title}
      </h2>
      <div className="ltr:-ml-3 rtl:-mr-3 bg-primary w-[75px] h-[8px] rounded-xl" />
    </div>
  );
};
