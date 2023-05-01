import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Lobster_Two } from "next/font/google";
import { Roboto } from "next/font/google";
import cover from "../public/cover.png";
import Image from "next/image";
import JoinButton from "./(landing page)/JoinButton";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const lobster_two = Lobster_Two({
  weight: ["400"],
  subsets: ["latin"],
});

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="h-[calc(100vh)] bg-gradient-to-b from-[#ece4de] container max-w-5xl mx-auto to-[#e4ddd5] flex items-center">
      <div className="grid grid-cols-2 items-center">
        <div>
          <h1 className={`${roboto.className} text-6xl text-[#2aa272]`}>
            Avia
          </h1>
          <p className="text-3xl text-slate-700 font-medium mt-6">
            Your health needs a second set of eyes.
          </p>
          <p className="text-xl text-slate-700">
            If you have health related issues that you can't find answers to,
            even from your doctor, others here might be able to help.
          </p>
          <JoinButton />
        </div>
        <div>
          <Image
            src={cover}
            height={600}
            width={800}
            alt="cover"
            className="rounded-full"
          />
        </div>
      </div>
    </main>
  );
}
