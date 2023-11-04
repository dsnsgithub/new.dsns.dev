import Image from "next/image";
import kirbyIcon from "../../../public/halloweenkirby.svg";
// import kirbyIcon from "../../../public/kirby.png";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faHome } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
	return (
		<nav className="mt-8 p-6 flex justify-around items-center bg-lochmara-200 rounded-xl border-lochmara-300 border-4">
			<Link className="flex items-center" href="/">
				<Image src={kirbyIcon} alt="Kirby Icon" width="80" />
				{/* className="rounded-full" */}
				<h1 className="px-4 text-4xl font-bold hidden lg:inline">dsns.dev</h1>
			</Link>

			<div>
				<Link className="px-2 md:px-5 lg:px-6" href="/">
					<FontAwesomeIcon icon={faHome} size="xl" title="Home" className="hover:transition hover:ease-in-out duration-500 hover:duration-500 hover:scale-125" />
				</Link>
				<Link className="px-2 md:px-5 lg:px-6" href="/projects">
					<FontAwesomeIcon icon={faFolderOpen} size="xl" title="Projects" className="hover:transition hover:ease-in-out duration-500 hover:duration-500 hover:scale-125"/>
				</Link>
			</div>
		</nav>
	);
}
