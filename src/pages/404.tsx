import Link from "next/link";

export default function NotFound() {
	return (
		<div>
			<div className="rounded-xl m-4 p-6 border-lochmara-300 border-4 text-center">
				<h2 className="text-4xl mb-4 font-bold">404 - This website was not found.</h2>

				<Link href="/" className="underline">
					<h2 className="text-xl mb-4">Return home.</h2>
				</Link>

				<h4 className="mt-8">
					If you are wondering where some web apps have gone, they might be found at
					<a href="https://old.dsns.dev/"> https://old.dsns.dev.</a>
				</h4>
			</div>
		</div>
	);
}
