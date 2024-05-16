// import { cookies } from "next/headers";
import { LiveChat } from "../components/chat/LiveChat";
// import { redirect } from "next/navigation";

const page = async ({ params }) => {
  // const user = cookies().get("KADINLE_USER")?.value;
  // if (!user) redirect("/");

  return <LiveChat />;
};

export default page;
