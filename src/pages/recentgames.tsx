import { useEffect } from "react";
import CustomTags from "./components/CustomTags";

export default function RecentGames() {
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 100);
	});
	
	return (
		<div>
			<CustomTags title="Recent Games" description="Find status and recent games of any Hypixel player."></CustomTags>

			<div className="rounded-xl m-4 p-6 border-lochmara-300 border-4 text-center">
				<h2>This website has been ported, there might be bugs.</h2>
			</div>

			<iframe src="/recentgames/index.html" className="w-full h-[500vh] lg:h-[200vh]" scrolling="no"></iframe>
		</div>
	);
}
