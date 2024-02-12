import Image, { StaticImageData } from "next/image";
import statisticsImage from "../../public/images/statistics.png";
import recentGamesImage from "../../public/images/recentgames.png";
import youtubeImage from "../../public/images/youtube.png";
import speedtestImage from "../../public/images/speedtest.png";
import whoisImage from "../../public/images/whois.png";
import marketdbImage from "../../public/images/marketdb.png";

import Link from "next/link";

function Project(props: { href: string; title: string; description: string; image: StaticImageData }) {
	return (
		<Link href={props.href}>
			<div className="bg-lochmara-100 p-8 shadow-xl rounded-xl mt-4 border-lochmara-300 border-4 min-w-full min-h-full hover:transition duration-500 hover:duration-500 hover:scale-[1.02]">
				<h3 className="text-2xl font-bold">{props.title}</h3>
				<h4>{props.description}</h4>
				<Image src={props.image} alt={props.title + " Image"} width={600} unoptimized={true} />
			</div>
		</Link>
	);
}

export default function ProjectPage() {
	return (
		<div className="lg:p-8 p-4 shadow-xl rounded-xl bg-lochmara-200 m-2 mt-8 lg:m-8">
			<div className="text-4xl font-bold mb-4">Web Toys</div>
			<div className="flex-1 grid md:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-8 ">
				<Project
					href="/statistics/"
					title="Hypixel Level Statistics"
					description="This web app calculates statistics for Hypixel levels and plots the change over time."
					image={statisticsImage}
				></Project>

				<Project href="/recentgames/" title="Hypixel Player Lookup" description="Find the status and recent games of any Hypixel player." image={recentGamesImage} />
				<Project href="/youtube/" title="YouTube Video Downloader" description="This web app downloads high-quality audio/video from YouTube videos." image={youtubeImage} />
				<Project href="/marketdb/" title="Generic Supermarket Database" description="Explore a wide range of products and their prices." image={marketdbImage}></Project>
				<Project href="/speedtest/" title="Internet Speedtest" description="This web app is a bloat-free speedtest." image={speedtestImage} />

				<Project
					href="/whois/"
					title="WHOIS Domain Lookup"
					description="This web app is an online WHOIS lookup without censorship. Many online WHOIS lookups will censor personal information, but this WHOIS lookup will display the raw WHOIS information."
					image={whoisImage}
				></Project>
			</div>
		</div>
	);
}
