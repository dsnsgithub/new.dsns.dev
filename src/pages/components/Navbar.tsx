import Image from "next/image";
import kirbyIcon from "../../../public/halloweenkirby.svg";
// import kirbyIcon from "../../../public/kirby.png";
import Link from "next/link";

import { FaBlog, FaFolderOpen, FaHome } from "react-icons/fa";

export default function Navbar() {
	return (
		<nav className="mt-8 p-6 flex justify-around items-center bg-lochmara-200 rounded-xl border-lochmara-300 border-4">
			<Link className="flex items-center" href="/">
				<Image src={kirbyIcon} alt="Kirby Icon" width="80" />
				{/* className="rounded-full" */}
				<h1 className="px-4 text-4xl font-bold hidden lg:inline">dsns.dev</h1>
			</Link>

			<div className="flex flex-row justify-between">
				<Link className="px-4 md:px-5 lg:px-6" href="/">
					<FaHome title="Home" className="hover:transition duration-500 hover:duration-500 hover:scale-125 text-2xl md:text-3xl" />
				</Link>
				<Link className="px-4 md:px-5 lg:px-6" href="/projects">
					<FaFolderOpen title="Projects" className="hover:transition duration-500 hover:duration-500 hover:scale-125 text-2xl md:text-3xl" />
				</Link>
				<Link className="px-4 md:px-5 lg:px-6" href="/blog">
					<FaBlog title="Blog" className="hover:transition duration-500 hover:duration-500 hover:scale-125 text-2xl md:text-3xl" />
				</Link>
			</div>
		</nav>
	);
}
