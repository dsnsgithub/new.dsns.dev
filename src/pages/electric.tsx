import CustomTags from "./components/CustomTags";

export default function Electric() {
	return (
		<div>
			<CustomTags title="Electricity Calculator" description="Calculate the cost of an electric car and compare to gas."></CustomTags>
			<div className="rounded-xl m-4 p-6 border-lochmara-300 border-4 text-center">
				<h2>This website has been ported, there might be bugs.</h2>
			</div>

			<iframe src="/electric/index.html" className="w-full h-[500vh] lg:h-[200vh]" scrolling="no"></iframe>
		</div>
	);
}
