import React from "react";
import ExclusiveAgency from "../../components/static/ExclusiveAgency";


export const metadata = {
  title: "KADINLE | Exclusive Agency",
};

const page = ({ params: { locale } }) => {
  return (
    <ExclusiveAgency locale={locale} />
  );
};

export default page;
