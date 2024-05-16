import { getCoupons } from "@/app/api/supabase/products";
import Discounts from "../../components/static/Discounts";

export const metadata = {
  title: "KADINLE | Discounts",
};

const Page = async ({ params: { locale } }) => {
  const couponsRes = await getCoupons();
  const coupons = couponsRes?.data?.filter((coupon) => coupon?.public);

  return (
    <Discounts coupons={coupons} />
  );
};

export default Page;
