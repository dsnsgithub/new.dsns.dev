import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import CustomTags from "./components/CustomTags";

export default function WhoIs() {
	const [domain, setDomain] = useState("");
	const [results, setResults] = useState([<></>]);
	const [parent] = useAutoAnimate();

	async function handleInput() {
		try {
			const response = await fetch(`/api/whois/${domain}`);
			const data = await response.json();

			const final = [];
			for (const key in data) {
				final.push(
					<p key={key}>
						<b>{key}: </b> {data[key]}
					</p>
				);
			}

			setResults(final);
		} catch (error) {
			console.error("Error fetching WHOIS data:", error);
		}
	}

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 100);
	});

	return (
		<div>
			<CustomTags title="WHOIS Lookup" description="A WHOIS search without censorship."></CustomTags>

			<div className="lg:p-8 p-4 shadow-xl rounded-xl bg-lochmara-200 m-2 mt-8 lg:m-8">
				<div className="mb-4">
					<h1 className="text-3xl font-semibold">WHOIS Lookup</h1>
					<h2>A WHOIS search without censorship.</h2>
				</div>

				<div className="mb-4 flex flex-row">
					<input
						type="text"
						id="inputBox"
						placeholder="Search..."
						className="px-6 py-4 border rounded-lg focus:outline-none focus:border-lochmara-500 flex-grow text-xl"
						onInput={(e) => setDomain((e.target as HTMLInputElement).value)}
						onKeyDown={(e) => e.key === "Enter" && handleInput()}
					></input>
					<button className="p-4 shadow-xl bg-lochmara-300 border-2 border-lochmara-400 rounded-xl ml-4 w-32" onClick={() => handleInput()}>
						Lookup
					</button>
				</div>

				<div ref={parent}>{results.length > 1 ? <div className="bg-lochmara-100 border-2 border-lochmara-400 p-4 rounded-xl">{results}</div> : <></>}</div>
			</div>
		</div>
	);
}
