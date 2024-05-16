import React from "react";
import JoinUs from "../../components/static/JoinUs";

export const metadata = {
  title: "KADINLE | Join us",
};

const page = ({ params: { locale } }) => {
  return <JoinUs locale={locale} />;
};

export default page;
