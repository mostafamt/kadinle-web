import Shorts from "@/app/[locale]/components/video/Shorts";
import {
  getCustomerVideosList,
  getOurVideosList,
  getRealsList,
} from "@/app/api/supabase/videos";
import React from "react";

export async function generateMetadata({ params: { locale, name } }) {
  return {
    title: `KADINLE | ${name}`,
  };
}

const page = async ({ params }) => {
  const { locale, name, id } = params;

  const videosRes =
    name === "our-videos"
      ? await getOurVideosList(id)
      : "customer-videos"
      ? await getCustomerVideosList(id)
      : getRealsList(id);
      
  return <Shorts videoId={id} videos={videosRes?.data} layout={name} />;
};

export default page;
