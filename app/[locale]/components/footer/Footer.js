import { footerLinksFamily, footerLinksPublic, footerLinksServiceCenter } from "@/app/api/static/links";
import { getTranslator } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

import { Subscription } from "./Subscription";

const Footer = async ({ locale }) => {
  const t = await getTranslator(locale);

  return (
    <>
      <Subscription locale={locale} />
      <div className="flex flex-col justify-center items-center bg-[#eee]">
        <div className="flex flex-col items-center container w-[100%]">
          <div className=" flex md:items-center lg:items-start w-full flex-row justify-between py-5 lg:py-10 px-0 text-xs gap-4 lg:gap-0 md:space-y-0   ">
            <div className="flex flex-col space-y-4 justify-center w-1/4">
              <div>
                <Link href={"/"}>
                  <Image
                    src={"https://kadinle.com/media/images/logo.svg"}
                    alt="kadinle logo"
                    height={50}
                    width={120}
                  />
                </Link>
              </div>
              <p className="text-[#808080]">{t("footer_description")}</p>
              <div className="flex flex-col space-y-2">
                <p className="text-primary">{t("Follow_us_on")}</p>
                <div className="flex gap-4 items-center">
                  <a href="https://www.facebook.com/kadinleofficial?mibextid=ZbWKwL">
                    {" "}
                    <Image
                      className="cursor-pointer w-5 h-5"
                      alt="facebook account"
                      src={
                        "https://kadinle.com/media/images/facebook-app-symbol.svg"
                      }
                      height={20}
                      width={20}
                    />
                  </a>

                  <a href="https://twitter.com/kadinle">
                    {" "}
                    <Image
                      className="cursor-pointer w-5 h-5"
                      alt="twitter account"
                      src={"https://kadinle.com/media/images/twitter.svg"}
                      height={20}
                      width={20}
                    />
                  </a>

                  <a href="https://www.tiktok.com/@kadinle.official">
                    {" "}
                    <Image
                      className="cursor-pointer w-5 h-5"
                      alt="tiktok account"
                      src={"https://kadinle.com/media/images/tik-tok.svg"}
                      height={20}
                      width={20}
                    />
                  </a>

                  <a href="https://www.instagram.com/kadinleofficial/?igshid=MzRlODBiNWFlZA%3D%3D">
                    {" "}
                    <Image
                      className="cursor-pointer w-5 h-5"
                      alt="instagram account"
                      src={"https://kadinle.com/media/images/Instagram2.svg"}
                      height={20}
                      width={20}
                    />
                  </a>

                  <a href="https://www.youtube.com/@kadinle">
                    {" "}
                    <Image
                      className="cursor-pointer w-5 h-5"
                      alt="youtube account"
                      src={"https://kadinle.com/media/images/youtube.svg"}
                      height={20}
                      width={20}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2 w-[150px] font-[500] md:w-none">
              <p className="font-semibold text-primary text-sm">
                {t("Public_policies")}
              </p>
              <ul className="flex flex-col space-y-2">
                {footerLinksPublic?.map((item) => (
                  <li key={item?.name}>
                    <Link
                      href={item.path}
                      className="cursor-pointer hover:text-primary"
                    >
                      {t(item?.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-2 w-[150px] font-[500] md:w-none">
              <p className="font-semibold text-primary text-sm">
                {t("Customer_Service_Center")}
              </p>
              <ul className="flex flex-col space-y-2">
                {footerLinksServiceCenter?.map((item) =>
                  item?.target ? (
                    <li key={item?.name}>
                      <Link
                        href={{
                          pathname: item?.path,
                        }}
                        state={{ target: item?.target }}
                        key={item?.name}
                        className="cursor-pointer hover:text-primary"
                      >
                        {t(item?.name)}
                      </Link>
                    </li>
                  ) : (
                    <li key={item?.name}>
                      <Link
                        href={item.path}
                        className="cursor-pointer hover:text-primary"
                      >
                        {t(item?.name)}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* <div className="flex flex-col space-y-2 w-[150px] font-[500] md:w-none">
            <p className="font-semibold text-primary text-sm">{t('Kadinle_Family')}</p>
            <ul className="flex flex-col space-y-2">
              {footerLinksFamily?.map((item) => (
                <li key={item?.name}>
                  <Link
                    href={item.path}
                    className="cursor-pointer hover:text-primary"
                  >
                    {t(item?.name, lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

            <div className="flex flex-col md:gap-0 space-y-4 items-center justify-center pb-6 md:p-0">
              <Image
                className="w-[120px] md:w-none cursor-pointer"
                src={"https://kadinle.com/media/images/googlePlay.png"}
                height={80}
                width={120}
              />
              <Image
                className="w-[120px] md:w-none hover:text-primary cursor-pointer"
                src={"https://kadinle.com/media/images/appStore.png"}
                height={80}
                width={120}
              />
              <Image
                className="w-[120px] md:w-none hover:text-primary cursor-pointer"
                src={"https://kadinle.com/media/images/hwawi.png"}
                height={80}
                width={120}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 bg-black w-full py-5">
          <p className="text-tgray text-xs md:text-sm">
            <span className="text-primary">{t("KADINLE_STORE")}</span> ©{" "}
            <span className="text-white">{new Date().getFullYear()}</span> -{" "}
            {t("DESIGNED_BY")} <span className="text-dblue">WHY NOT Tech!</span>{" "}
            {t("copyright")}
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
