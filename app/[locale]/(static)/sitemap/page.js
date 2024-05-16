import { getTranslator } from "next-intl/server";

import ScrollUpComponent from "../../components/global/ScrollUpComponent";

export const metadata = {
  title: "KADINLE | Sitemap",
};

const tree = [
  {
    branch: "categories",
    children: ["products"],
  },
  {
    branch: "cart",
    children: ["checkout"],
  },
  {
    branch: "reviews",
    children: [],
  },
  {
    branch: "profile",
    children: [
      "profileInfo",
      "orders",
      "favorite",
      "points",
      "address",
      "support",
    ],
  },
  {
    branch: "publicPolicies",
    children: [
      "aboutKadinle",
      "privacyPolicy",
      "Exchange and Return Policy",
      "Shipping Policy",
      "Shipping worldwide Policy",
      "Terms of use",
    ],
  },
  {
    branch: "customerService",
    children: [
      "How to buy",
      "Track your order",
      "Shipping information",
      "Size guide",
      "Common questions",
      "Talk to support",
    ],
  },
];

const Page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);

  return (
    <>
      <ScrollUpComponent />
      <div className="px-4 py-10 overflow-hidden">
        <ul className={"content"}>
          <li>
            <span className={`home text`}>{t("home")}</span>
            <ul className={"homeChildren"}>
              {tree?.map((item) => (
                <li className={"homeChild"} key={item?.branch}>
                  <span className={"text"}>{t(item.branch)}</span>
                  {!!item.children.length && (
                    <ul className={"homeGrandChildren"}>
                      {item.children?.map((child) => (
                        <li className={"homeGrandChild"} key={child}>
                          <span className={"text"}>{t(child)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Page;
