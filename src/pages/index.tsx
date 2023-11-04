import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCloudflare, faGithub, faJsSquare, faPython, faYoutube, faLinux, faGitAlt, faReact } from "@fortawesome/free-brands-svg-icons";

import Image, { StaticImageData } from "next/image";
import scheduliImage from "../../public/images/scheduli.png";
import hackathonImage from "../../public/images/hackathon.png";

import chromocraftImage from "../../public/images/chromocraft.png";
import truthBeToldImage from "../../public/images/TruthBeTold.jpg";
import onlyEggrollsImage from "../../public/images/onlyeggrolls.png";

function FeatureCard(props: { link: string; title: string; description: string; image: StaticImageData; imageWidth: number; flipped: boolean }) {
	return (
		<a href={props.link}>
			<div className="bg-lochmara-100 p-8 shadow-xl rounded-xl mt-4 border-lochmara-300 border-4 inline-block min-w-full hover:transition hover:ease-in-out duration-500 hover:duration-500 hover:-translate-y-1 hover:scale-[1.03]">
				<div className={props.flipped ? "xl:flex xl:items-center xl:flex-row-reverse" : "xl:flex xl:flex-row xl:items-center"}>
					<div className={props.flipped ? "xl:ml-12" : "xl:mr-12"}>
						<h3 className="text-4xl mb-2 font-bold">{props.title}</h3>
						<h4>{props.description}</h4>
					</div>
					<Image src={props.image} alt={`${props.title} Image`} width={props.imageWidth} />
				</div>
			</div>
		</a>
	);
}

function PastExperienceCard(props: { link: string; title: string; description: string; image: StaticImageData; imageWidth: number }) {
	return (
		<a href={props.link}>
			<div className="bg-lochmara-100 p-8 shadow-xl rounded-xl mt-4 border-lochmara-300 border-4 inline-block min-w-full hover:transition hover:ease-in-out duration-500 hover:duration-500 hover:-translate-y-1 hover:scale-[1.03]">
				<h3 className="text-2xl font-bold">{props.title}</h3>
				<h4>{props.description}</h4>
				<div className="flex justify-center mt-3">
					<Image src={props.image} alt={`${props.title} Image`} width={props.imageWidth} />
				</div>
			</div>
		</a>
	);
}

export default function Home() {
	return (
		<div>
			<div className="lg:flex lg:flex-row justify-evenly items-center">
				<div className="flex flex-col justify-center lg:p-8 shadow-xl rounded-xl mt-4 bg-lochmara-200 lg:m-8 m-2">
					<div className="bg-lochmara-100 shadow-xl rounded-xl mb-4 p-6 border-lochmara-300 border-4">
						<div className="text-4xl font-bold mb-4">Who am I?</div>
						<div className="text-xl">A full-stack developer with an interest in Minecraft.</div>
					</div>

					<div className="bg-lochmara-100 shadow-xl rounded-xl mt-4 p-6 border-lochmara-300 border-4">
						<div className="text-4xl font-bold mb-4">Socials</div>

						<div className="flex justify-evenly">
							<a href="https://github.com/dsnsgithub" className="hover:transition hover:ease-in-out duration-500 hover:duration-500 hover:scale-125">
								<FontAwesomeIcon icon={faGithub} size="2x" title="GitHub - @dsnsgithub"></FontAwesomeIcon>
							</a>

							<a href="https://www.youtube.com/@DSNShypixel" className="hover:transition hover:ease-in-out duration-500 hover:duration-500 hover:scale-125">
								<FontAwesomeIcon icon={faYoutube} size="2x" title="YouTube - @DSNSHypixel"></FontAwesomeIcon>
							</a>

							<a href="mailto:dsns@dsns.dev" className="hover:transition hover:ease-in-out duration-500 hover:duration-500 hover:scale-125">
								<FontAwesomeIcon icon={faEnvelope} size="2x" title="Email - dsns@dsns.dev"></FontAwesomeIcon>
							</a>
						</div>
					</div>

					<div className="bg-lochmara-100 shadow-xl rounded-xl mt-4 p-6 border-lochmara-300 border-4">
						<div className="text-4xl font-bold mb-4">Skills</div>

						<div className="flex justify-evenly flex-wrap">
							<FontAwesomeIcon icon={faCloudflare} size="2x" title="Cloudflare"></FontAwesomeIcon>
							<FontAwesomeIcon icon={faJsSquare} size="2x" title="JavaScript"></FontAwesomeIcon>
							<FontAwesomeIcon icon={faLinux} size="2x" title="Linux"></FontAwesomeIcon>
							<FontAwesomeIcon icon={faPython} size="2x" title="Python"></FontAwesomeIcon>
							<FontAwesomeIcon icon={faGitAlt} size="2x" title="Git"></FontAwesomeIcon>
							<FontAwesomeIcon icon={faReact} size="2x" title="React"></FontAwesomeIcon>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center lg:p-8 p-4 shadow-xl rounded-xl bg-lochmara-200 w-full m-2 mt-8 lg:m-8">
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

			<div className="lg:p-8 p-4 shadow-xl rounded-xl bg-lochmara-200 m-2 mt-8 lg:m-8">
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
