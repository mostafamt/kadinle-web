import { LANGUAGES } from "@/app/api/static/constants";
import { getHomeCategory } from "@/app/api/supabase/home";

import { CategoriesBody } from "../components/categories/CategoriesBody";

export const revalidate = 60;

export const metadata = {
  title: "KADINLE | Categories",
};

const page = async ({ params: { locale } }) => {
  const categoriesData = await getHomeCategory();
  return (
    <CategoriesBody
      categories={categoriesData}
      languageId={LANGUAGES?.[locale]}
    />
  );
};

export default page;
