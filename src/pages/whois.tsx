export default function WhoIs() {
	return (
		<div>
			<div className="rounded-xl m-4 p-6 border-lochmara-300 border-4 text-center">
				<h2>This website has been ported, there might be bugs.</h2>
			</div>

			<iframe src="/whois/index.html" className="w-full h-screen"></iframe>
		</div>
	);
}
