import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<main className={"min-h-screen container mx-auto mt-10 " + poppins.className}>
				<Navbar />
				<Component {...pageProps} />
				<Analytics />
			</main>
		</>
	);
}
