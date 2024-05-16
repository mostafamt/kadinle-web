import React from "react";

import SingleCategory from "../../components/categories/SingleCategory";
import { getSearchResults } from "@/app/api/supabase/home";

export const metadata = {
  title: "KADINLE | Search",
};

const page = async ({ params }) => {
  const { key, locale } = params;
  const res = await getSearchResults(key);

  return <SingleCategory layout="search" category={res?.data} />;
};
export default page;
