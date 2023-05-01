"use client";

import Link from "next/link";
import { BsPen } from "react-icons/bs";
import { createAPostStore } from "@/zustand/createAPostStore";

export default function UserInputToolbar() {
  const { setToggleCreateAPost } = createAPostStore();

  const togglePostBox = () => {
    setToggleCreateAPost(true);
  };

  return (
    <nav>
      <ul className="flex pt-3">
        <li
          onClick={togglePostBox}
          className="flex text-sm items-center bg-highlight px-3 py-2 text-white cursor-pointer rounded-md"
        >
          Write a post
          <span className="pl-3">
            <BsPen />
          </span>
        </li>
        <li>
          <Link href=""></Link>
        </li>
        <li>
          <Link href=""></Link>
        </li>
      </ul>
    </nav>
  );
}
