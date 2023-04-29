"use client";

import { fetchPostApi } from "@/lib/fetch/fetchPostApi";
import { ChangeEvent, useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import { ProgressBar } from "react-loader-spinner";
import { searchStore } from "@/zustand/store";
import UserInputToolbar from "../(user input)/UserInputToolbar";

export default function SearchForDiagnosis() {
  const [search, setSearch] = useState("");
  const [controller] = useState(new AbortController());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Zustand
  const { results, setResults } = searchStore();

  useEffect(() => {
    if (!search) {
      if (loading) {
        setLoading(false);
      }

      return setResults(null);
    }

    setLoading(true);
    setError(null);

    const fetchApiResults = async () => {
      const response = await fetchPostApi(
        "/api/post/search-results",
        controller,
        { search }
      );

      const { success, error } = await response.json();

      setLoading(false);

      if (success) {
        setResults(success);
      }

      if (error) {
        setError(error);
      }
    };
    const timer = setTimeout(async () => {
      const response = await fetchApiResults();
      console.log(response);
    }, 500); // debounce for 500 milliseconds

    return () => {
      if (!search) {
        setResults(null);
      }
      clearTimeout(timer);
    };
  }, [search]);

  useEffect(() => {
    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, [controller]);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/^\s+/, "");
    setSearch(val);
  };

  return (
    <div className="relative">
      <form>
        <input
          type="search"
          placeholder="Search for a diagnosis"
          className="py-2 px-3 border-2 border-primary rounded-md outline-none w-full cursor-pointer"
          onChange={handleChange}
          value={search}
        />
      </form>
      {loading ? (
        <ProgressBar borderColor="#2aa272" barColor={"#2aa272"} />
      ) : error ? (
        <p>{error}</p>
      ) : (
        results && <SearchResults searchResults={results} />
      )}
    </div>
  );
}
