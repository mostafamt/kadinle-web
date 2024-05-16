import { getTranslator } from "next-intl/server";
import dynamic from "next/dynamic";

import { LANGUAGES, SECTIONS_ORDER } from "../api/static/constants";
import {
  // getCategories,
  getCustomersReviews,
  getHomeCategory,
  getHomeSections,
  getHomeSectionSorted,
  getOfferedProduct,
  getOffers,
} from "../api/supabase/home";
import ScrollUpComponent from "./components/global/ScrollUpComponent";
import { SectionTitle } from "./components/global/SectionTitle";
import { Banner } from "./components/home/Banner";
import { Benefits } from "./components/home/Benefits";
import { CategoryBanner } from "./components/home/CategoryBanner";
import { CustomSlider } from "./components/home/CustomSlider";
import PriceLimit from "./components/home/PriceLimit";
import { SaleTimer } from "./components/home/SaleTimer";
import CustomerVideos, { VideoSection } from "./components/home/VideoSection";
import { WhyChooseUs } from "./components/home/WhyChooseUs";
import SaleTimerSkeleton from "./components/skeletons/SaleTimerSkeleton";
import OurNew from "./components/home/OurNew";
import HistoryProducts from "./components/home/HistoryProducts";
import { Reviews } from "./components/home/Reviews";
import FlashBanner from "./components/home/FlashBanner";
import { PopupNameForm } from "./components/forms/PopupNameForm";
import { Offer } from "./components/home/Offer";
import { OurPartners } from "./components/home/OurPartners";
import { NewProductCard } from "./components/cards/NewProductCard";
import { CardProduct } from "./components/cards/CardProduct";

export const revalidate = 60;

const Collections = dynamic(() => import("./components/home/Collections"));

export default async function Home({ params: { locale } }) {
  const t = await getTranslator(locale);
  const homeCategories = await getHomeCategory();
  const homeSectionsOrderFetch = async () => {
    const res = await getHomeSectionSorted();
    if (res?.error) {
      return SECTIONS_ORDER;
    } else {
      let hash = {};
      for (const section of res?.data) {
        let hashName = section?.section_name?.toLowerCase();
        hash[section?.section_id] = {
          ...section,
          section_order: section?.section_order + 1,
        };
      }
      return hash;
    }
  };

  const homeSectionsOrder = await homeSectionsOrderFetch();

  const remainingTimeFetch = await getOfferedProduct();

  const remainingTimeData = remainingTimeFetch?.date;
  const remainingTime = {
    days: remainingTimeData?.day,
    hours: remainingTimeData?.hours,
    minutes: remainingTimeData?.minutes,
    seconds: remainingTimeData?.seconds,
  };

  const homeSectionsFetch = await getHomeSections(20);
  const homeSections = homeSectionsFetch?.data;

  const reviewsFetch = await getCustomersReviews();
  const reviews = reviewsFetch?.data;

  const offersFetch = await getOffers();
  const offers = offersFetch?.data;

  return (
    <>
      <ScrollUpComponent />
      <PopupNameForm />
      <Banner />
      <WhyChooseUs t={t} />
      <Benefits t={t} />
      <SaleTimer remainingTime={remainingTime} />
      <FlashBanner offer={offers?.at(0)} languageId={LANGUAGES?.[locale]} />
      <PriceLimit t={t} />
      {offers?.at(1) ? (
        <Offer offer={offers?.at(1)} languageId={LANGUAGES?.[locale]} />
      ) : null}
      <Collections
        collections={homeSections?.home_collections}
        locale={locale}
        languageId={LANGUAGES?.[locale]}
      />
      <SectionTitle title={t("All_your_needs_here")} />
      <div className="flex flex-col">
        {homeCategories?.map((category) => {
          return (
            <CategoryBanner
              homeSectionsOrder={homeSectionsOrder}
              category={category}
              key={category?.id}
              languageId={LANGUAGES?.[locale]}
              t={t}
            />
          );
        })}

        <CustomSlider
          sectionSettings={homeSectionsOrder?.BEST_SELLER}
          lists={homeSections?.home_carousel}
        />
        <VideoSection
          videos={homeSections?.our_videos}
          head={t("ourVideos")}
          layout="our-videos"
          sectionSettings={homeSectionsOrder?.OUR_VIDEOS}
          locale={locale}
          order={3}
        />
        <VideoSection
          videos={homeSections?.user_videos}
          head={t("customerVideos")}
          layout="customer-videos"
          sectionSettings={homeSectionsOrder?.CUSTOMER_VIDEOS}
          locale={locale}
          order={6}
        />
        <VideoSection
          videos={homeSections?.influencer_videos}
          head={t("influencerVideos")}
          layout="influencer-videos"
          sectionSettings={homeSectionsOrder?.["influencer videos"]}
          locale={locale}
          order={8}
        />
        <HistoryProducts sectionSettings={homeSectionsOrder?.HISTORY} />
        <OurNew
          products={homeSections?.latest_products}
          sectionSettings={homeSectionsOrder?.OUR_NEW}
        />
      </div>
      <Reviews
        reviews={reviews}
        sectionSettings={homeSectionsOrder?.["reviews"]}
      />
      <OurPartners locale={locale} partners={homeSections?.partners} />
    </>
  );
}
