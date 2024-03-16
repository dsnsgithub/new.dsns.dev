import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import CustomTags from "./components/CustomTags";

interface PostData {
	id: number;
	date: string;
	title: string;
	description: string;
}

interface BlogProps {
	allPostsData: PostData[];
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData
		}
	};
}

export default function Blog({ allPostsData }: BlogProps) {
	return (
		<div className="lg:p-8 p-4 shadow-xl rounded-xl bg-lochmara-200 m-2 mt-8 lg:m-8">
			<div className="text-4xl font-bold mb-4">Blog</div>
			<CustomTags title="Blog" description="A collection of blog posts."></CustomTags>

			<div className="flex-1 grid md:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-8">
				{allPostsData.map(({ id, date, title, description }) => (
					<Link href={`/post/${id}`} key={id}>
						<div className="bg-lochmara-100 p-8 shadow-xl rounded-xl mt-4 border-lochmara-300 border-4 min-w-full min-h-full hover:transition duration-500 hover:duration-500 hover:scale-[1.02]">
							<div className="text-2xl font-bold mb-4">{title}</div>

							<div className="text-xl mb-4">{description}</div>

							<div className="text-lg text-right">{date}</div>
						</div>
					</Link>
				))}
			C</div>
		</div>
	);
}
