import React from "react";
import Distributor from "../../components/static/Distributor";

export const metadata = {
  title: "KADINLE | Distributor",
};

const page = ({ params: { locale } }) => {
  return (
    <Distributor locale={locale} />
  );
};

export default page;
