import {
  getCustomerVideosList,
  getOurVideosList,
  getRealsList,
} from "@/app/api/supabase/videos";
import React from "react";
import Videos from "../../components/video/Videos";

export async function generateMetadata({ params: { locale, name } }) {
  return {
    title: `KADINLE | ${name}`,
  };
}

const page = async ({ params, searchParams }) => {
  const { locale, name } = params;
  const { v } = searchParams;
  const videosRes =
    name === "our-videos"
      ? await getOurVideosList(v)
      : "customer-videos"
      ? await getCustomerVideosList(v)
      : getRealsList(v);
      
  return <Videos layout={name} videos={videosRes?.data} />;
};

export default page;
