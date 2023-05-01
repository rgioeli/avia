import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { Lobster_Two } from "next/font/google";
import UserControls from "./UserControls";
import { use } from "react";

const lobster_two = Lobster_Two({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Nav() {
  const session = use(getServerSession(authOptions));

  return (
    <div className="bg-[#2aa272] h-[60px] w-full flex items-center">
      <div className="container max-w-5xl mx-auto flex justify-between items-center">
        <h1 className={`${lobster_two.className} text-3xl text-white`}>Avia</h1>
        <UserControls id={session?.id} user={session?.user} />
      </div>
    </div>
  );
}
