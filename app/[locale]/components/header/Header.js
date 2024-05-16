// eslint-disable-next-line import/no-unresolved
import { LANGUAGES } from "@/app/api/static/constants";
// eslint-disable-next-line import/no-unresolved
import { getNews } from "@/app/api/supabase/shared";

import { Menu } from "./Menu";
import NewsBar from "./NewsBar";
import { SubMenu } from "./SubMenu";
import { UpperBar } from "./UpperBar";
// eslint-disable-next-line import/no-unresolved
import { getCategories, getCategoriesTopLevel } from "@/app/api/supabase/home";
import CategoryBar from "../home/CategoryBar";
import { SidebarMenu } from "./SidebarMenu";

export const Header = async ({ locale }) => {
  const news = await getNews(LANGUAGES?.[locale]);

  const categoriesData = await getCategories();
  const categoriesTopLevel = await getCategoriesTopLevel()
  const categories = categoriesData;
  return (
    <header>
      <NewsBar news={news?.data} setOpenNews={false} />
      <UpperBar locale={locale} />
      <Menu locale={locale} />
      {/* <UpperMenu /> */}
      <SubMenu language={LANGUAGES?.[locale]} categories={categories} />
      <SidebarMenu categories={categoriesTopLevel} />
      {/* <CategoryBar categories={categories} /> */}
    </header>
  );
};
