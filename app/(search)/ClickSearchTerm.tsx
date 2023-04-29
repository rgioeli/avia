"use client";

import Link from "next/link";
import { searchStore } from "@/zustand/store";

export default function ClickSearchTerm({
  searchResult,
}: {
  searchResult: { id: string; term: string };
}) {
  const { setResults } = searchStore();

  const setResultsToNone = () => {
    setResults(null);
  };

  return (
    <Link
      href={`/dashboard/timeline/channel/${searchResult.id}`}
      className="hover:text-primary"
      onClick={setResultsToNone}
    >
      {searchResult.term}
    </Link>
  );
}
