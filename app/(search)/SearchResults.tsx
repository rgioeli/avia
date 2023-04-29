import ClickSearchTerm from "./ClickSearchTerm";

export default function SearchResults({
  searchResults,
}: {
  searchResults: {
    id: string;
    term: string;
  }[];
}) {
  console.log(searchResults);
  return (
    <div className="shadow-md bg-white py-2 px-3 absolute container top-11 left-0">
      {searchResults &&
        searchResults.map((searchResult) => (
          <div key={searchResult.id} className="py-2">
            <ClickSearchTerm
              key={searchResult.id}
              searchResult={searchResult}
            />
          </div>
        ))}
    </div>
  );
}
