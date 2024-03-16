import CustomTags from "./components/CustomTags";

export default function Speedtest() {
	return (
		<div>
			<CustomTags title="Speedtest" description="A bloat-free internet speedtest."></CustomTags>

			<div className="rounded-xl m-4 p-6 border-lochmara-300 border-4 text-center">
				<h2>This website has been ported, there might be bugs.</h2>
			</div>

			<iframe src="/speedtest/index.html" className="w-full h-[500vh] lg:h-[200vh]" scrolling="no"></iframe>
		</div>
	);
}
