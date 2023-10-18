import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCloudflare, faGithub, faJsSquare, faPython, faYoutube, faLinux, faGitAlt, faReact } from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";
import scheduliImage from "../../public/images/scheduli.png";
import hackathonImage from "../../public/images/hackathon.png";

import chromocraftImage from "../../public/images/chromocraft.png";
import truthBeToldImage from "../../public/images/TruthBeTold.jpg";
import onlyEggrollsImage from "../../public/images/onlyeggrolls.png";

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
							<a href="https://github.com/dsnsgithub">
								<FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
							</a>

							<a href="https://www.youtube.com/@DSNShypixel">
								<FontAwesomeIcon icon={faYoutube} size="2x"></FontAwesomeIcon>
							</a>

							<a href="mailto:dsns@dsns.dev">
								<FontAwesomeIcon icon={faEnvelope} size="2x"></FontAwesomeIcon>
							</a>
						</div>
					</div>

					<div className="bg-lochmara-100 shadow-xl rounded-xl mt-4 p-6 border-lochmara-300 border-4">
						<div className="text-4xl font-bold mb-4">Skills</div>

						<div className="flex justify-evenly flex-wrap">
							<FontAwesomeIcon icon={faCloudflare} size="2x"></FontAwesomeIcon>
							<FontAwesomeIcon icon={faJsSquare} size="2x"></FontAwesomeIcon>
							<FontAwesomeIcon icon={faLinux} size="2x"></FontAwesomeIcon>
							<FontAwesomeIcon icon={faPython} size="2x"></FontAwesomeIcon>
							<FontAwesomeIcon icon={faGitAlt} size="2x"></FontAwesomeIcon>
							<FontAwesomeIcon icon={faReact} size="2x"></FontAwesomeIcon>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center lg:p-8 p-4 shadow-xl rounded-xl bg-lochmara-200 w-full m-2 mt-8 lg:m-8">
					<div className="text-4xl font-bold mb-4">Major Projects</div>

					<a href="https://scheduli.dsns.dev/">
						<div className="bg-lochmara-100 p-8 shadow-xl rounded-xl mt-4 border-lochmara-300 border-4 inline-block min-w-full">
							<div className="lg:flex lg:flex-row lg:items-center">
								<div className="mr-12">
									<h3 className="text-4xl mb-2 font-bold">Scheduli</h3>
									<h4>
										Scheduli is a general-purpose schedule app avaliable on iOS and Android that keeps you informed about your daily schedule, even during the most chaotic days.
									</h4>
								</div>
								<Image src={scheduliImage} alt="Scheduli Image" width={400} />
							</div>
						</div>
					</a>

					<a href="https://github.com/dsnsgithub/sdghackathon">
						<div className="bg-lochmara-100 p-8 shadow-xl rounded-xl mt-4 border-lochmara-300 border-4 inline-block min-w-full">
							<div className="lg:flex lg:flex-row lg:items-center">
								<Image src={hackathonImage} alt="Hackathon Submission Image" width={400} />
								<div className="ml-12">
									<h3 className="text-4xl mb-2 font-bold">Recycling Game</h3>
									<h4>
										This project won Top 3 in the Coding for SDG 2023 Hackathon. The topic of the hackathon was UN SDG #13 Climate Action, with the hackathon hosting 91
										participants.
									</h4>
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>

			<div className="lg:p-8 p-4 shadow-xl rounded-xl bg-lochmara-200 m-2 mt-8 lg:m-8">
				<div className="text-4xl font-bold mb-4">Past Experience</div>
				<div className="flex-1 grid md:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-8 ">
					<a href="https://github.com/dsnsgithub/chromocraft.net">
						<div className="bg-lochmara-100 p-8 shadow-xl rounded-xl mt-4 border-lochmara-300 border-4 inline-block min-w-full">
							<h3 className="text-2xl font-bold">chromocraft.net</h3>
							<h4>Chromocraft is a public Minecraft SMP that was hosted from 2018-2019 with 150+ members.</h4>
							<div className="flex justify-center mt-3">
								<Image src={chromocraftImage} alt="Chromocraft Image" width={600} />
							</div>
						</div>
					</a>

					<a href="https://github.com/dsnsgithub/truthBeTold">
						<div className="bg-lochmara-100 p-8 shadow-xl rounded-xl mt-4 border-lochmara-300 border-4 inline-block min-w-full">
							<h3 className="text-2xl font-bold">TruthBeTold</h3>
							<h4>TruthBeTold is a browser extension designed to detect misinformation using AI.</h4>
							<div className="flex justify-center mt-3">
								<Image src={truthBeToldImage} alt="TruthBeTold Image" width={350} />
							</div>
						</div>
					</a>

					<a href="https://onlyeggrolls.com/">
						<div className="bg-lochmara-100 p-8 shadow-xl rounded-xl mt-4 border-lochmara-300 border-4 inline-block min-w-full">
							<h3 className="text-2xl font-bold">onlyeggrolls.com</h3>
							<h4>
								OnlyEggrolls is a POC for a shopping website, built completely in vanilla JS. It has a functional backend, allowing users to create an account, store items in a
								shopping cart, and order eggrolls.
							</h4>
							<div className="flex justify-center mt-3">
								<Image src={onlyEggrollsImage} alt="OnlyEggrolls Image" width={350} />
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}
