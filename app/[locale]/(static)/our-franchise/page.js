import React from "react";
import OurFranchise from "../../components/static/OurFranchise";

export const metadata = {
  title: "KADINLE | Our Franchise",
};

const page = ({ params: { locale } }) => {
  return (
    <OurFranchise locale={locale} />
  );
};

export default page;
