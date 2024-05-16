import { getTranslator } from "next-intl/server";
import { MainTitle } from "../../components/global/MainTitle";
import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import { SuppliersForm } from "../../components/forms/SuppliersForm";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslator(locale);
  return {
    title: `${locale === "ar" ? "كادينلي" : "KADINLE"} | ${t(
      "supplier_registration"
    )}`,
    description: t("suppliers_msg1"),
  };
}

const page = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);

  return (
    <>
      <ScrollUpComponent />
      <MainTitle title={t("supplier_registration")} />
      <div className="flex flex-col poppins container w-full mb-12">
        <SuppliersForm />
      </div>
    </>
  );
};

export default page;
