import React from "react";
import SupportPage from "../../components/static/SupportPage";

export const metadata = { title: "KADINLE | Support" };

const page = async ({ params: { locale } }) => {
  return (
    <SupportPage locale={locale} />
  );
};

export default page;
