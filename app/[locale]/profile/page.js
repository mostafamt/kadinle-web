import { cookies } from "next/headers";
import { MyAccount } from "../components/profile/MyAccount";
import { redirect } from "next/navigation";

export const metadata = {
  title: "KADINLE | My Profile",
};

const page = async ({ params: { locale } }) => {
  const user = cookies().get("KADINLE_USER")?.value;
  if (!user) redirect("/");

  return <MyAccount locale={locale} />;
};

export default page;
