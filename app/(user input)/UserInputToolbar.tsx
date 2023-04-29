import Link from "next/link";
import { BsPen } from "react-icons/bs";

export default function UserInputToolbar() {
  return (
    <nav>
      <ul className="flex pt-3">
        <li className="flex text-sm items-center bg-highlight px-3 py-2 text-white">
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
