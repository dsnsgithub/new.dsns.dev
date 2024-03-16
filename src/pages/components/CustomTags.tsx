import Head from "next/head";

export default function CustomTags(props: {
	title: string
	description: string
}) {
	return (
		<Head>
			<title>dsns.dev - {props.title}</title>
			<meta property="og:type" content="website" />
			<meta property="og:title" content={`dsns.dev - ${props.title}`} />
			<meta property="og:description" content={props.description} />
			<meta name="description" content={props.description} />
			<meta property="og:url" content="https://www.dsns.dev" />
			<meta property="og:image" content="https://www.dsns.dev/kirby.png" />
		</Head>
	);
}