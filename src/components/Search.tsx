"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Meaning } from "./Meaning";
import { useState, useEffect, ChangeEvent} from "react";

const Search = () => {
	const [input, setInput] = useState<string>("");
	const [data, setData] = useState(null);
	console.log("🚀 ~ file: Search.tsx:10 ~ Search ~ data:", data)

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	useEffect(() => {
		if (input) {
			fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
				.then((res) => res.json())
				.then((data) => setData(data[0])) // Set data as the first entry
				.catch((error) => {
					console.error("Error fetching data:", error);
					setData(null); // Clear data in case of error
				});
		} else {
			setData(null);
		}
	}, [input]);

	return (
		<div className="px-2 sm:px-24 mt-8">
			<div className="relative flex items-center border rounded-xl p-2 bg-slate-100">
				<MagnifyingGlassIcon className="absolute h-6 w-6 pointer-events-none" />
				<input
					type="text"
					placeholder="Search Dictionary"
					className="bg-slate-100 outline-none pl-8 sm:pl-10 w-full"
					value={input}
					onChange={handleInputChange}
				/>
			</div>
			{data!==undefined && data !== null ? <Meaning data={data} /> : <p>No meaning found.</p>}
		</div>
	);
};

export default Search;
