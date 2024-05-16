import React from "react";
import { getAllShippingInformation } from "@/app/api/supabase/products";
import ShippingInformationPage from "../../components/static/ShippingInformationPage";

export const metadata = { title: "KADINLE | Shipping information" };

const page = async ({ params: { locale } }) => {
  const warehousesRes = await getAllShippingInformation();

  return (
    <ShippingInformationPage warehouses={warehousesRes?.data} />
  );
};

export default page;
