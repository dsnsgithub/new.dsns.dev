import Link from "next/link";
import CustomTags from "./components/CustomTags";

export default function NotFound() {
	return (
		<div>
			
			<CustomTags title="404" description="404 - This website was not found."></CustomTags>

			<div className="rounded-xl m-4 p-6 border-lochmara-300 border-4 text-center">
				<h2 className="text-4xl mb-4 font-bold">404 - This website was not found.</h2>

				<Link href="/" className="underline">
					<h2 className="text-xl mb-4">Return home.</h2>
				</Link>
			C</div>
		</div>
	);
}
