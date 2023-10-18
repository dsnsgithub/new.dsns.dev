import Image from "next/image";
import kirbyIcon from "../../../public/halloweenkirby.svg";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faHome } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
	return (
		<nav className="mt-8 p-6 flex justify-around items-center bg-lochmara-200 rounded-xl border-lochmara-300 border-4">
			<Link className="flex items-center" href="/">
				<Image src={kirbyIcon} alt="Kirby Icon" width="80" />
				<h1 className="px-4 text-4xl font-bold hidden lg:inline">dsns.dev</h1>
			</Link>

			<div>
				<Link className="px-2 md:px-5 lg:px-6" href="/">
					<FontAwesomeIcon icon={faHome} size="xl" />
				</Link>
				<Link className="px-2 md:px-5 lg:px-6" href="/projects">
					<FontAwesomeIcon icon={faFolderOpen} size="xl" />
				</Link>
			</div>
		</nav>
	);
}
