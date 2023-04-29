"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="pr-10">
      <ul>
        <li>
          <Link
            href={{
              pathname: "/dashboard",
            }}
            className={`${
              pathname == "/dashboard" ? "text-primary" : "text-slate-700"
            } text-md transition-all delay-25 ease-in-out hover:text-primary`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/dashboard/timeline",
            }}
            className={`${
              pathname == "/dashboard/timeline"
                ? "text-primary"
                : "text-slate-700"
            } text-md transition-all delay-25 ease-in-out hover:text-primary`}
          >
            Timeline
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/dashboard/messages",
            }}
            className={`${
              pathname == "/dashboard/messages"
                ? "text-primary"
                : "text-slate-700"
            } text-md transition-all delay-25 ease-in-out hover:text-primary`}
          >
            Messages
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/dashboard/help",
            }}
            className={`${
              pathname == "/dashboard/help" ? "text-primary" : "text-slate-700"
            } text-md transition-all delay-25 ease-in-out hover:text-primary`}
          >
            Help
          </Link>
        </li>
      </ul>
    </nav>
  );
}
