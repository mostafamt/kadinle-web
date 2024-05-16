import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import { GlobalOptionsContextProvider } from "../context/GlobalOptionsContext";
import AuthPopup from "./components/auth/AuthPopup";
import Footer from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import { LiveChat } from "./components/chat/LiveChat";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }, { locale: "tr" }];
}

export const metadata = {
  title: "kadinle",
  template: "kadinle | %s",
  description:
    "Kadinle: A Turkish brand that offers you a variety of women’s clothing which combines elegance, sophistication and luxury, to give you a harmonious cultural mix that suits your high taste.",

  openGraph: {
    title: "Kadinle",
    description:
      "Kadinle: A Turkish brand that offers you a variety of women’s clothing which combines elegance, sophistication and luxury, to give you a harmonious cultural mix that suits your high taste.",
    url: `https://kadinle.com/`,
    type: "website",
    images: ["https://kadinle.com/media/images/BigLogo.png"],
  },

  twitter: {
    title: "Kadinle",
    description:
      "Kadinle: A Turkish brand that offers you a variety of women’s clothing which combines elegance, sophistication and luxury, to give you a harmonious cultural mix that suits your high taste.",
    images: ["https://kadinle.com/media/images/BigLogo.png"],
    domain: "kadinle.com",
    card: "product",
    site: "@kadinle",
    creator: "@kadinle",
  },
};

export default async function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <GlobalOptionsContextProvider>
          <body>
            <Toaster position="top-center" reverseOrder={false} />
            <LiveChat />
            <Header locale={locale} />
            <AuthPopup locale={locale} />
            {children}
            <Footer locale={locale} />
          </body>
        </GlobalOptionsContextProvider>
      </NextIntlClientProvider>
    </html>
  );
}
