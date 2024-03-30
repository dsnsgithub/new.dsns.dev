/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import CustomTags from "./components/CustomTags";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FaSearch } from "react-icons/fa";

interface StatusData {
	success: boolean;
	uuid: string;
	session: {
		online: boolean;
		gameType: string;
		mode: string | null;
		map: string | null;
	};
}

interface Game {
	date: number;
	gameType: string;
	mode: string | null;
	map: string | null;
	ended?: number; // Optional property
}

interface RecentGamesData {
	success: boolean;
	uuid: string;
	games: Game[];
}

interface HypixelAPIResponse {
	success: boolean;
	lastUpdated: number;
	games: {
		[key: string]: {
			modeNames?: {
				[key: string]: string;
			};
			databaseName: string;
			name: string;
			retired?: boolean;
			legacy?: boolean;
			id: number;
		};
	};
}

export default function RecentGames() {
	const [username, setUsername] = useState("");
	const [actualUsername, setActualUsername] = useState<String | number>("");
	const [uuid, setUUID] = useState("");

	const [statusData, setStatusData] = useState<StatusData>();
	const [recentGamesData, setRecentGamesData] = useState<RecentGamesData>();
	const [gamesList, setGamesList] = useState<HypixelAPIResponse>();

	const [resultDiv] = useAutoAnimate();
	const [innerResultDiv] = useAutoAnimate();
	const [innerRecentGamesDiv] = useAutoAnimate();

	const [statusVisible, setStatusVisible] = useState(false);

	async function handleInput() {
		try {
			const response = await fetch(`https://cors.dsns.dev/api.mojang.com/users/profiles/minecraft/${username}`);
			const data = await response.json();

			if (!data["id"]) {
				setActualUsername(-1);
				return;
			}

			setUUID(data["id"]);
			setActualUsername(data["name"]);

			const status = await fetch(`https://hypixel.dsns.dev/status/${data["id"]}`);
			const recentGames = await fetch(`https://hypixel.dsns.dev/recentgames/${data["id"]}`);
			const games = await fetch(`https://api.hypixel.net/resources/games`);

			setStatusData(await status.json());
			setRecentGamesData(await recentGames.json());
			setGamesList(await games.json());

			setStatusVisible(true);
		} catch (error) {
			console.error("Error fetching recent games data:", error);
		}
	}

	return (
		<div>
			<CustomTags title="Recent Games" description="Find status and recent games of any Hypixel player."></CustomTags>

			<div className="lg:p-8 p-4 shadow-xl rounded-xl bg-lochmara-200 m-2 mt-8 lg:m-8">
				<div className="mb-4">
					<h1 className="text-3xl font-semibold">Recent Games Finder</h1>
					<h2>Find the status and recent games of any Hypixel player.</h2>
				</div>

				<div className="mb-4 flex flex-row">
					<input
						type="text"
						id="inputBox"
						placeholder="Search..."
						className="px-6 py-4 border rounded-lg focus:outline-none focus:border-lochmara-500 flex-grow text-xl w-5/6"
						onInput={(e) => setUsername((e.target as HTMLInputElement).value)}
						onKeyDown={(e) => e.key === "Enter" && handleInput()}
					></input>
					<button className="p-4 shadow-xl bg-lochmara-300 border-2 border-lochmara-400 rounded-xl ml-4 flex flex-row items-center" onClick={() => handleInput()}>
						<FaSearch title="Search" className="mr-3"></FaSearch>
						Lookup
					</button>
				</div>

				<div ref={resultDiv}>
					{actualUsername != -1 ? (
						<></>
					) : (
						<div className="p-6 shadow-xl bg-lochmara-100 border-2 border-lochmara-300 rounded-xl m-2 text-center">
							<h2 className="text-2xl text-red-500">Invalid IGN. Please try again.</h2>
						</div>
					)}
					{statusVisible ? (
						<div className="lg:flex lg:flex-row lg:justify-around mt-1 items-center">
							<div className="flex flex-col" ref={innerResultDiv}>
								{actualUsername != -1 && statusData ? (
									<div className="p-6 shadow-xl bg-lochmara-100 border-2 border-lochmara-300 rounded-xl lg:m-2 mt-1">
										<h2 className="text-2xl font-semibold mb-3">Status</h2>

										{statusData.success && statusData.session && statusData.session.online && gamesList ? (
											statusData.session.mode == "LOBBY" ? (
												<p className="text-xl text-center">
													{actualUsername} is <span className="text-green-600">online</span>. They are in a{" "}
													{gamesList["games"][statusData.session.gameType] ? gamesList["games"][statusData.session.gameType]["name"] : statusData.session.gameType} lobby.
												</p>
											) : (
												<p className="text-xl text-center">
													{actualUsername} is <span className="text-green-600">online</span>. They are playing{" "}
													{gamesList["games"][statusData.session.gameType] ? gamesList["games"][statusData.session.gameType]["name"] : statusData.session.gameType}.
												</p>
											)
										) : (
											<p className="text-xl text-center">
												{actualUsername} is <span className="text-red-600">offline</span>.
											</p>
										)}
									</div>
								) : (
									<></>
								)}

								{actualUsername != -1 && recentGamesData && (recentGamesData?.games?.length || -1) > 0 ? (
									<div className="p-6 shadow-xl bg-lochmara-100 border-2 border-lochmara-300 rounded-xl lg:m-2 mt-1" ref={innerRecentGamesDiv}>
										<h2 className="text-2xl font-semibold mb-3">Recent Games</h2>
										<div className="overflow-x-auto">
											<table className="w-full table-auto">
												<thead>
													<tr className="bg-lochmara-200 border-2 border-lochmara-400">
														<th className="border border-lochmara-400 px-4 py-2 text-center">Game Type</th>
														<th className="border border-lochmara-400 px-4 py-2 text-center">Mode</th>
														<th className="border border-lochmara-400 px-4 py-2 text-center">Map</th>
														<th className="border border-lochmara-400 px-4 py-2 text-center">Start Time</th>
														<th className="border border-lochmara-400 px-4 py-2 text-center">End Time</th>
													</tr>
												</thead>
												<tbody>
													{recentGamesData.success &&
														recentGamesData.games.map((game, index) => (
															<tr key={index} className="bg-lochmara-200 border-2 border-lochmara-400">
																<td className="border border-lochmara-400 px-4 py-2 text-center">
																	{gamesList && gamesList["games"][game.gameType] ? gamesList["games"][game.gameType]["name"] : game.gameType}
																</td>
																<td className="border border-lochmara-400 px-4 py-2 text-center">
																	{gamesList && gamesList["games"][game.gameType]["modeNames"]?.[game.mode || ""]
																		? gamesList["games"][game.gameType]["modeNames"]?.[game.mode || ""]
																		: game.mode}
																</td>
																<td className="border border-lochmara-400 px-4 py-2 text-center">{game.map || "-"}</td>
																<td className="border border-lochmara-400 px-4 py-2 text-center">{new Date(game.date).toLocaleString()}</td>
																<td className="border border-lochmara-400 px-4 py-2 text-center">
																	{game.ended ? new Date(game.ended).toLocaleString() : "Still Playing"}
																</td>
															</tr>
														))}
												</tbody>
											</table>
										</div>
									</div>
								) : recentGamesData?.success && actualUsername != -1 ? (
									<div className="p-6 shadow-xl bg-lochmara-100 border-2 border-lochmara-300 rounded-xl m-2">
										<h2 className="text-2xl font-semibold mb-3">Recent Games</h2>
										<p className="text-xl text-center">{actualUsername} has no recent games.</p>
									</div>
								) : (
									<></>
								)}

								{actualUsername != -1 && uuid && (statusData || recentGamesData) ? (
									<div className="p-6 shadow-xl bg-lochmara-100 border-2 border-lochmara-300 rounded-xl m-2">
										<img src={`https://hypixel.paniek.de/signature/${uuid}/general-tooltip`} alt="Hypixel Player Information"></img>
									</div>
								) : (
									<></>
								)}
							</div>

							{actualUsername != -1 && uuid && (statusData || recentGamesData) ? (
								<div className="flex flex-col ">
									<div className="p-6 shadow-xl bg-lochmara-100 border-2 border-lochmara-300 rounded-xl m-2">
										<img src={`https://mc-heads.net/body/${uuid}`} alt="Minecraft Player Model"></img>
									</div>
								</div>
							) : (
								<></>
							)}
						</div>
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
}
