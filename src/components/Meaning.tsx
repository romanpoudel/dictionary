"use client";

import { PlayCircleIcon, PauseCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export const Meaning = ({ data }: { data: any }) => {
	const [play, setPlay] = useState<boolean>(true);
	const [state, setState] = useState<number>(0);
	const [colors, setColors] = useState({
		backgroundColor: "bg-gray-200",
		textColor: "text-black",
	});
  
	const { word, phonetic, phonetics, meanings } = data;

	// const [audio] = useState(new Audio(phonetics[0].audio));
  const [audio, setAudio] = useState<HTMLAudioElement|null>(null)
  useEffect(() => {

    setAudio(new Audio(phonetics[0]?.audio)) // only call client

},[phonetics])
	const togglePlay = () => {
		console.log(play);
		setPlay((prevPlay) => !prevPlay);
		play ? audio?.play() : audio?.pause();
	};

	useEffect(() => {
		audio?.addEventListener("ended", () => setPlay(true));
		return () => {
			audio?.removeEventListener("ended", () => setPlay(true));
		};
	}, [audio]);
	function handleClick(index: number) {
		console.log(state);
		setState(index);
		setColors({
			backgroundColor: "bg-black",
			textColor: "text-white",
		});
	}
	return (
		<div className="border-2 border-slate-200 rounded-3xl h-fit mt-6 p-3 sm:p-6">
			<div className="flex items-center gap-2 sm:gap-4 select-none">
				{play ? (
					<PlayCircleIcon
						className="w-10 h-10"
						onClick={togglePlay}
					/>
				) : (
					<PauseCircleIcon
						className="w-10 h-10"
						onClick={togglePlay}
					/>
				)}

				<p>{phonetic}</p>
			</div>
			<div className="ml-3">
				<div className="flex gap-2 mt-4  select-none">
					{meanings.map((speech: any, index: number) => {
						return (
							<button
								key={index}
								type="button"
								className={`${
									state === index
										? "bg-black text-white"
										: "bg-gray-200 text-black"
								}  px-3  text-sm rounded`}
								onClick={() => handleClick(index)}
							>
								{speech.partOfSpeech}
							</button>
						);
					})}
				</div>
				<div className="mt-4 mx-4 select-text">
					<ol className="list-decimal  list-outside">
						{meanings[state].definitions?.map(
							(item: any, index: number) => {
								return <li key={index}>{item.definition}</li>;
							}
						)}
					</ol>
				</div>
			</div>
		</div>
	);
};
