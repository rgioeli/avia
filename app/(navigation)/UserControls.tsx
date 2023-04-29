"use client";

import Image from "next/image";

export default function UserControls({
  id,
  user,
}: {
  id: string;
  user: {
    name: string | undefined;
    email: string | undefined;
    image: string | undefined;
  };
}) {
  return (
    <div>
      <div></div>
      <div>
        {user?.image && (
          <Image
            src={user.image}
            height={40}
            width={40}
            alt={"pfp"}
            className="rounded-full"
          />
        )}
      </div>
    </div>
  );
}
