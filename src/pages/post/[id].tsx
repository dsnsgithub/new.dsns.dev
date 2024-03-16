import { getAllPostIds, getPostData } from "../../lib/posts";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import CustomTags from "../components/CustomTags";

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false
	};
}

// @ts-ignore
export async function getStaticProps({ params }) {
	// Add the "await" keyword like this:
	const postData = await getPostData(params.id);

	return {
		props: {
			postData
		}
	};
}

// @ts-ignore
export default function BlogPost({ postData }) {
	return (
		<div className="lg:p-8 p-4 shadow-xl rounded-xl bg-lochmara-200 m-2 mt-8 lg:m-8">
			<CustomTags title={postData.title} description={postData.description}></CustomTags>
			<div className="flex flex-row justify-between flex-wrap">
				<div className="text-2xl lg:text-4xl font-bold mb-4 flex items-center ">
					<Link href="/blog">
						<FaChevronLeft className="mr-6"></FaChevronLeft>
					</Link>
					{postData.title}
				</div>
				<div className="text-lg lg:text-2xl mb-10">{postData.date}</div>
			</div>

			<section className="container mx-4 prose max-w-6xl break-words" dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></section>
		</div>
	);
}
