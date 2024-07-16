/* eslint-disable @next/next/no-img-element */
import { FaCloudflare, FaGithub, FaJsSquare, FaPython, FaYoutube, FaLinux, FaGitAlt, FaReact, FaEnvelope } from "react-icons/fa";
import { useState, useEffect, RefCallback } from "react";
import { LanyardData, useLanyard } from "react-use-lanyard";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import rawGames from "./db/gameList.json";
const gameList = rawGames as { [key: string]: string };

import Image, { StaticImageData } from "next/image";
import scheduliImage from "../../public/images/scheduli.png";
import hackathonImage from "../../public/images/hackathon.png";
import chromocraftImage from "../../public/images/chromocraft.png";
import truthBeToldImage from "../../public/images/TruthBeTold.jpg";
import onlyEggrollsImage from "../../public/images/onlyeggrolls.png";
import CustomTags from "./components/CustomTags";

function FeatureCard(props: { link: string; title: string; description: string; image: StaticImageData; imageWidth: number; flipped: boolean }) {
	return (
		<a
			className="bg-lochmara-100 p-6 lg:p-8 shadow-xl rounded-xl mt-4 border-lochmara-300 border-4 inline-block min-w-full hover:transition duration-500 hover:duration-500 hover:scale-[1.02] break-words"
			href={props.link}
		>
			<div className={props.flipped ? "xl:flex xl:items-center xl:flex-row-reverse" : "xl:flex xl:flex-row xl:items-center"}>
				<div className={props.flipped ? "xl:ml-12" : "xl:mr-12"}>
					<h3 className="text-4xl mb-2 font-bold">{props.title}</h3>
					<h4>{props.description}</h4>
				</div>
				<div className="flex justify-center mt-3 w-full h-full">
					<Image src={props.image} alt={`${props.title} Image`} width={props.imageWidth} unoptimized={true} />
				</div>
			</div>
		</a>
	);
}

function PastExperienceCard(props: { link: string; title: string; description: string; image: StaticImageData; imageWidth: number }) {
	return (
		<a
			className="bg-lochmara-100 p-6 lg:p-8 shadow-xl rounded-xl mt-4 border-lochmara-300 border-4 inline-block min-w-full hover:transition duration-500 hover:duration-500 hover:scale-[1.02] break-words"
			href={props.link}
		>
			<h3 className="text-2xl font-bold">{props.title}</h3>
			<h4>{props.description}</h4>
			<div className="flex justify-center mt-3">
				<Image src={props.image} alt={`${props.title} Image`} width={props.imageWidth} unoptimized={true} />
			</div>
		</a>
	);
}

function formatTime(milliseconds: number) {
	const minutes = Math.floor(milliseconds / 1000 / 60);
	const seconds = Math.floor((milliseconds / 1000) % 60);

	const paddedMinutes = minutes < 10 ? "0" + minutes : minutes;
	const paddedSeconds = seconds < 10 ? "0" + seconds : seconds;

	return paddedMinutes + ":" + paddedSeconds;
}

function cutStrings(string: string, maxLength: number) {
	if (string.length > maxLength) {
		return string.substring(0, maxLength) + "...";
	} else {
		return string;
	}
}

function DiscordCard(props: { statusVisible: boolean; setStatusVisible: Function; status: LanyardData | undefined; loading: boolean }) {
	const [currentTime, setCurrentTime] = useState(new Date().getTime());
	setInterval(() => setCurrentTime(new Date().getTime()), 1000);

	useEffect(() => {
		setTimeout(() => props.setStatusVisible(true), 500);
	}, [props]);

	if (props.loading || !props.status?.activities || props.status.activities.length == 0 || !props.statusVisible) {
		return <></>;
	}

	const activity = props.status?.activities[props.status?.activities.length - 1];
	if (!activity) {
		return <></>;
	}

	if (activity.name === "Spotify" && props.status.spotify) {
		const startTime = props.status.spotify?.timestamps?.start || 0;
		const endTime = props.status.spotify?.timestamps?.end || 0;
		const songDuration = endTime - startTime;

		const spotify = props.status.spotify;

		return (
			<>
				<h3 className="font-bold mb-2">Listening to Spotify</h3>

				<div className="flex items-center space-x-4">
					<img src={spotify.album_art_url} alt="Album Art" className="w-16 h-16 rounded" />
					<div>
						<h4>{cutStrings(spotify.song, 16)}</h4>
						<p className="text-sm">by {cutStrings(spotify.artist, 16)}</p>
						<p className="text-sm">on {cutStrings(spotify.album, 16)}</p>
					</div>
				</div>

				<div className="flex items-center space-x-2 mt-2">
					<span>{formatTime(Math.min(currentTime - startTime, songDuration))}</span>
					<progress
						value={currentTime - startTime}
						max={songDuration}
						className="w-3/4 rounded-xl [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-lochmara-400 [&::-moz-progress-bar]:bg-lochmara-400"
					></progress>
					<span>{formatTime(songDuration)}</span>
				</div>
			</>
		);
	}

	const internalAssetsLink = "https://cdn.discordapp.com/app-assets/";
	const internalIconsLink = "https://cdn.discordapp.com/app-icons/";
	const externalAssetsLink = "https://media.discordapp.net/external/";

	let largeImage = activity.assets?.large_image
		? activity.assets?.large_image.startsWith("mp:external/")
			? `${externalAssetsLink}${activity.assets.large_image.replace("mp:external/", "")}`
			: `${internalAssetsLink}${activity?.application_id}/${activity.assets?.large_image}.png`
		: null;

	largeImage = gameList[activity.application_id || ""] ? `${internalIconsLink}${activity?.application_id}/${gameList[activity.application_id || ""]}.png` : largeImage;

	let smallImage = activity.assets?.small_image
		? activity.assets?.small_image.startsWith("mp:external/")
			? `${externalAssetsLink}${activity.assets.small_image.replace("mp:external/", "")}`
			: `${internalAssetsLink}${activity?.application_id}/${activity.assets?.small_image}.png`
		: null;

	return (
		<div className="flex items-center space-x-4">
			<div className="flex-shrink-0 relative">
				{largeImage ? <img src={largeImage} alt="Activity Image" className="w-16 h-16 rounded" /> : <></>}
				{smallImage && !largeImage ? <img src={smallImage} alt="Activity Image" className="w-16 h-16 rounded" /> : <></>}
				{smallImage && largeImage ? <img src={smallImage} alt="Activity Image" className="w-6 h-6 rounded right-0 bottom-0 absolute ring-3" /> : <></>}
			</div>

			<div>
				<h4 className="font-bold">{activity.name}</h4>
				<p className="text-sm">{activity.state}</p>
				<p className="text-sm">{activity.details}</p>
				<p className="text-sm">{formatTime(currentTime - activity.created_at)} elapsed</p>
			</div>
		</div>
	);
}

export default function Home() {
	const [outerBioRef] = useAutoAnimate({ duration: 500 });
	const [outerStatusRef] = useAutoAnimate({ duration: 500 });
	const [innerStatusRef] = useAutoAnimate({ duration: 500 });

	const [statusVisible, setStatusVisible] = useState(false);

	const { loading, status } = useLanyard({
		userId: "342874998375186432",
		socket: true
	});

	if (status?.activities) {
		status.activities = status?.activities.filter((activity) => activity.id != "custom");
	}

	return (
		<div>
			<CustomTags title="Home" description="Check out what I do, and explore some of my projects."></CustomTags>

			<div className="lg:flex lg:flex-row justify-evenly items-center">
				<div className="flex flex-col justify-center lg:p-8 shadow-xl rounded-xl mt-4 bg-lochmara-200 lg:m-8 m-2" ref={outerBioRef}>
					<div className="bg-lochmara-100 shadow-xl rounded-xl mb-4 p-6 border-lochmara-300 border-4">
						<div className="text-4xl font-bold mb-4">Who am I?</div>
						<div className="text-xl">A full-stack developer with an interest in Minecraft.</div>
					</div>

					<div className="bg-lochmara-100 shadow-xl rounded-xl mt-4 p-6 border-lochmara-300 border-4">
						<div className="text-4xl font-bold mb-4">Socials</div>

						<div className="flex justify-evenly">
							<a href="https://github.com/dsnsgithub" className="hover:transition duration-500 hover:duration-500 hover:scale-125">
								<FaGithub className="text-3xl" title="GitHub - @dsnsgithub"></FaGithub>
							</a>

							<a href="https://www.youtube.com/@DSNShypixel" className="hover:transition duration-500 hover:duration-500 hover:scale-125">
								<FaYoutube className="text-3xl" title="YouTube - @DSNSHypixel"></FaYoutube>
							</a>

							<a href="mailto:dsns@dsns.dev" className="hover:transition duration-500 hover:duration-500 hover:scale-125">
								<FaEnvelope className="text-3xl" title="Email - dsns@dsns.dev"></FaEnvelope>
							</a>
						</div>
					</div>

					<div className="bg-lochmara-100 shadow-xl rounded-xl mt-4 p-6 border-lochmara-300 border-4">
						<div className="text-4xl font-bold mb-4">Skills</div>

						<div className="flex justify-evenly flex-wrap">
							<FaCloudflare className="text-2xl" title="Cloudflare"></FaCloudflare>
							<FaJsSquare className="text-2xl" title="JavaScript"></FaJsSquare>
							<FaLinux className="text-2xl" title="Linux"></FaLinux>
							<FaPython className="text-2xl" title="Python"></FaPython>
							<FaGitAlt className="text-2xl" title="Git"></FaGitAlt>
							<FaReact className="text-2xl" title="React"></FaReact>
						</div>
					</div>

					<div ref={outerStatusRef}>
						<div className="bg-lochmara-100 shadow-xl rounded-xl mt-4 p-6 border-lochmara-300 border-4">
							<div className="text-4xl font-bold mb-4">Status</div>
							<div ref={innerStatusRef}>
								<DiscordCard status={status} statusVisible={statusVisible} setStatusVisible={setStatusVisible} loading={loading}></DiscordCard>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center p-6 lg:p-8 shadow-xl rounded-xl bg-lochmara-200 m-2 mt-8 lg:m-8">
					<div className="text-4xl font-bold mb-4">Major Projects</div>

					<FeatureCard
						flipped={false}
						link="https://scheduli.dsns.dev/"
						title="Scheduli"
						description="Scheduli is a general-purpose schedule app available on iOS and Android that keeps you informed about your daily schedule, even during the most chaotic days."
						image={scheduliImage}
						imageWidth={400}
					></FeatureCard>

					<FeatureCard
						flipped={true}
						link="https://github.com/dsnsgithub/sdghackathon"
						title="Recycling Game"
						description="This project won Top 3 in the Coding for SDG 2023 Hackathon. The topic of the hackathon was UN SDG #13 Climate Action, with the hackathon hosting 91 participants."
						image={hackathonImage}
						imageWidth={400}
					></FeatureCard>
				</div>
			</div>

			<div className="p-6 lg:p-8 shadow-xl rounded-xl bg-lochmara-200 m-2 mt-8 lg:m-8">
				<div className="text-4xl font-bold mb-4">Past Experience</div>
				<div className="flex-1 grid md:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-8 ">
					<PastExperienceCard
						link="https://github.com/dsnsgithub/chromocraft.net"
						title="chromocraft.net"
						description="Chromocraft is a public Minecraft SMP that was hosted from 2018-2019 with 150+ members."
						image={chromocraftImage}
						imageWidth={600}
					/>

					<PastExperienceCard
						link="https://github.com/dsnsgithub/truthBeTold"
						title="TruthBeTold"
						description="TruthBeTold is a browser extension designed to detect misinformation using AI."
						image={truthBeToldImage}
						imageWidth={350}
					/>

					<PastExperienceCard
						link="https://onlyeggrolls.com/"
						title="onlyeggrolls.com"
						description="OnlyEggrolls is a proof of concept shopping website, built completely in vanilla JS. It has a functional backend, allowing users to create an account, store items in a shopping cart, and order eggrolls."
						image={onlyEggrollsImage}
						imageWidth={350}
					/>
				</div>
			</div>
		</div>
	);
}
