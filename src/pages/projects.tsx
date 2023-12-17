import Image from "next/image";
import statisticsImage from "../../public/images/statistics.png";
import recentGamesImage from "../../public/images/recentgames.png";
import youtubeImage from "../../public/images/youtube.png";
import speedtestImage from "../../public/images/speedtest.png";
import whoisImage from "../../public/images/whois.png";

import Link from "next/link";

export default function ProjectPage() {
	return (
		<div className="lg:p-8 p-4 shadow-xl rounded-xl bg-lochmara-200 m-2 mt-8 lg:m-8">
			<div className="text-4xl font-bold mb-4">Web Toys</div>
			<div className="flex-1 grid md:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-8 ">
				<Link href="/statistics/">
					<div className="bg-lochmara-100 p-8 shadow-xl rounded-xl mt-4 border-lochmara-300 border-4 min-w-full min-h-full hover:transition duration-500 hover:duration-500 hover:scale-[1.02]">
						<h3 className="text-2xl font-bold">Hypixel Level Statistics</h3>
						<h4>This web app calculates statistics for Hypixel levels and plots the change over time. </h4>
						<Image src={statisticsImage} alt="Hypixel Level Statistics Image" width={600} />
					</div>
				</Link>

				<Link href="/recentgames/">
					<div className="bg-lochmara-100 p-8 shadow-xl rounded-xl mt-4 border-lochmara-300 border-4 min-w-full min-h-full hover:transition duration-500 hover:duration-500 hover:scale-[1.02]">
						<h3 className="text-2xl font-bold">Hypixel Player Lookup</h3>
						<h4>Find the status and recent games of any Hypixel player.</h4>
						<Image src={recentGamesImage} alt="Recent Games Image" width={600} />
					</div>
				</Link>

				<Link href="/youtube/">
					<div className="bg-lochmara-100 p-8 shadow-xl rounded-xl mt-4 border-lochmara-300 border-4 min-w-full min-h-full hover:transition duration-500 hover:duration-500 hover:scale-[1.02]">
						<h3 className="text-2xl font-bold">YouTube Video Downloader</h3>
						<h4>This web app downloads high quality audio/video from YouTube videos. </h4>
						<Image src={youtubeImage} alt="YouTube Video Downloader Image" width={600} />
					</div>
				</Link>

				<Link href="/speedtest/">
					<div className="bg-lochmara-100 p-8 shadow-xl rounded-xl mt-4 border-lochmara-300 border-4 min-w-full min-h-full hover:transition duration-500 hover:duration-500 hover:scale-[1.02]">
						<h3 className="text-2xl font-bold">Internet Speedtest</h3>
						<h4>This web app is a bloat-free speedtest. </h4>
						<Image src={speedtestImage} alt="Internet Speedtest Image" width={600} />
					</div>
				</Link>

				<Link href="/whois/">
					<div className="bg-lochmara-100 p-8 shadow-xl rounded-xl mt-4 border-lochmara-300 border-4 min-w-full min-h-full hover:transition duration-500 hover:duration-500 hover:scale-[1.02]">
						<h3 className="text-2xl font-bold">WHOIS Domain Lookup</h3>
						<h4>
							This web app is an online WHOIS lookup without censorship. Many online WHOIS lookups will censor personal information, but this WHOIS lookup will display the raw WHOIS
							information.
						</h4>
						<Image src={whoisImage} alt="WHOIS Domain Lookup Image" width={600} />
					</div>
				</Link>
			</div>
		</div>
	);
}
