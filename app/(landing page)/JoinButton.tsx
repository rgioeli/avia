"use client";

import { signIn } from "next-auth/react";

export default function JoinButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className="bg-[#2aa272] px-5 py-2 text-xl text-white rounded-md mt-6"
    >
      Join the community, it's free! 😊
    </button>
  );
}
