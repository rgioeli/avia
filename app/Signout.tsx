"use client";

import { signOut } from "next-auth/react";

export default function Signout() {
  return (
    <p className="cursor-pointer" onClick={() => signOut()}>
      Signout
    </p>
  );
}
