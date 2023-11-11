import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
			<div className="flex flex-row justify-between">
				<div className="text-4xl font-bold mb-4">
					<Link href="/blog">
						<FontAwesomeIcon icon={faChevronLeft} className="mr-6" size="1x"></FontAwesomeIcon>
					</Link>
					{postData.title}
				</div>
				<div className="text-2xl mb-10">{new Date(postData.date + "GMT-8").toLocaleDateString()}</div>
			</div>

			<section className="container mx-4 prose max-w-6xl" dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></section>
		</div>
	);
}
