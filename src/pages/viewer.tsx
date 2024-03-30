/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import CustomTags from "./components/CustomTags";

export default function Viewer() {
	const [data, setData] = useState<{ url: string; coverImage: string }[]>([]);
	const [cursor, setCursor] = useState<number>(3000);
	const [videoID, setVideoID] = useState<string>("");

	const fetchData = async () => {
		let count = 0;
		let myCursor = cursor;
		let myData: { url: string; coverImage: string }[] = [...data];

		while (count < 25) {
			try {
				const response = await fetch(`/api/tiktok?musicID=${videoID}&cursor=${myCursor}`);
				const jsonData: { success: boolean; data: { url: string; coverImage: string }[] } = await response.json();

				if (!jsonData.success) {
					return
				}

				const newData = jsonData.data.filter((elem) => myData.findIndex((video) => video.url === elem.url) === -1);
				console.log(newData);
				count += newData.length;

				setCursor((prevCursor) => prevCursor + 20);
				myCursor += 20;

				myData = [...myData, ...newData];
				setData(myData);
				window.scrollTo(0, document.body.scrollHeight);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}
	};

	return (
		<div className="flex flex-wrap justify-center items-center">
			<CustomTags title="TikTok Video Viewer" description="View TikTok videos from any sound."></CustomTags>

			{data.map(({ url, coverImage }, index) => (
				<div key={index} className="m-4">
					<a target="_blank" rel="noopener noreferrer" href={url}>
						<img src={coverImage} alt={`Cover Image ${index + 1}`} className="w-48 h-64 object-cover rounded-lg shadow-lg cursor-pointer" />
					</a>
				</div>
			))}

			<div className="flex flex-col rounded-xl m-4 p-6 border-lochmara-300 border-4 text-center bg-lochmara-200">
				<button
					onClick={async () => {
						await fetchData();

						await new Promise((resolve) => setTimeout(resolve, 1000));
						window.scrollTo(0, document.body.scrollHeight);
					}}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
				>
					Load More (#{cursor})
				</button>

				<input type="range" min="0" max="10000" value={cursor} onChange={(e) => setCursor(parseInt(e.target.value))} className="w-64 mt-4" />

				<input type="text" value={videoID} onChange={(e) => setVideoID(e.target.value)} className="w-64 h-8 px-2 mt-4" />
			</div>
		</div>
	);
}
