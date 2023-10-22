import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

import Head from "next/head";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>dsns.dev</title>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="dsns.dev" />
				<meta property="og:description" content="Check out what I do, and explore some of my projects." />
				<meta name="description" content="Check out what I do, and explore some of my projects." />
				<meta property="og:url" content="https://www.dsns.dev" />
				<meta property="og:image" content="https://www.dsns.dev/kirby.png" />
			</Head>
			<main className={"min-h-screen container mx-auto mt-10 " + poppins.className}>
				<Navbar />
				<Component {...pageProps} />
				<Analytics />
			</main>
		</>
	);
}
