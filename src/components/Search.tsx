import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Meaning } from "./Meaning";

async function fetchData() {
  const res = await fetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/apple",
    { cache: "no-store" }
  );
  return res.json();
}
const Search = async () => {
  const data = await fetchData();
  return (
    <div className="px-2 sm:px-24 mt-8">
      <div className="relative flex items-center border rounded-xl p-2 bg-slate-100">
        <MagnifyingGlassIcon className="absolute h-6 w-6 pointer-events-none" />
        <input
          type="text"
          placeholder="Search Dictionary"
          className="bg-slate-100 outline-none pl-8 sm:pl-10 w-full"
        />
      </div>
      <Meaning data={data} />
    </div>
  );
};
export default Search;
