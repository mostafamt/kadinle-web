import {
  getBrandDetails,
  getCollectionDetails,
  getOfferDetails,
} from "@/app/api/supabase/home";
import React from "react";

import SingleCategory from "../../../components/categories/SingleCategory";

export async function generateMetadata({ params: { locale, name } }) {
  return {
    title: `KADINLE | ${name}`,
  };
}

const searchCategory = {
  brands: {
    fn: (id) => getBrandDetails(id),
    searchKey: "brand_content",
  },
  offers: {
    fn: (id) => getOfferDetails(id),
    searchKey: "offer_content",
  },
  collections: {
    fn: (id) => getCollectionDetails(id),
    searchKey: "collection_content",
  },
};

const page = async ({ params }) => {
  const { id, name, locale } = params;
  const selectedRequest = searchCategory?.[name];

  const categoryRes = await selectedRequest?.fn(id);
  const category = categoryRes?.data;

  return (
    <SingleCategory
      searchKey={selectedRequest?.searchKey}
      category={category}
    />
  );
};
export default page;
