import React from "react";
import FamilyPage from "../../components/static/FamilyPage";

export const metadata = {
  title: "KADINLE | Kadinle family",
};

const page = ({ params: { locale } }) => {
  return (
      <FamilyPage />
  );
};

export default page;
