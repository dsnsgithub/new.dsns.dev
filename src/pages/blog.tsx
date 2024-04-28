import Link from "next/link";
import CustomTags from "./components/CustomTags";


export default function Blog() {
	return (
		<div className="lg:p-8 p-4 shadow-xl rounded-xl bg-lochmara-200 m-2 mt-8 lg:m-8">
			<div className="text-4xl font-bold mb-4">Blog</div>
			<CustomTags title="Blog" description="A collection of blog posts."></CustomTags>

			<div className="flex-1 grid md:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-8">
				<Link href={`/post/adblockwar`}>
					<div className="bg-lochmara-100 p-8 shadow-xl rounded-xl mt-4 border-lochmara-300 border-4 min-w-full min-h-full hover:transition duration-500 hover:duration-500 hover:scale-[1.02]">
						<div className="text-2xl font-bold mb-4">Google vs Adblock - In-Depth Analysis</div>

						<div className="text-xl mb-4">
							Google, in particular Youtube, has recently waged a full on war on ad blockers, as these browser extensions cut into their profits significantly. Unfortunately for Google,
							this battle cannot be won.
						</div>

						<div className="text-lg text-right">11/08/2023</div>
					</div>
				</Link>
			</div>
		</div>
	);
}
