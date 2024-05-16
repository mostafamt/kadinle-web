import React from "react";

export const AdsTapeBar = ({ containerClassName, title, icon }) => {
  return (
    <p
      className={`p-3 rounded-lg h-[50px] overflow-hidden my-2 w-full flex gap-2 items-center text-center ${containerClassName}`}
    >
      {icon}
      <span className="mx-auto">{title}</span>
    </p>
  );
};
