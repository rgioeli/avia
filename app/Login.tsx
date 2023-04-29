"use client";

import { signIn } from "next-auth/react";

export default function () {
  return (
    <p className="cursor-pointer" onClick={() => signIn("google")}>
      Click to login!
    </p>
  );
}
