import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

import { Poppins } from "next/font/google";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
	const [page] = useAutoAnimate();
	return (
		<>
			<main className={"min-h-screen container mx-auto mt-10 " + poppins.className} ref={page}>
				<Navbar />
				<Component {...pageProps} />
				<Analytics />
			</main>
		</>
	);
}
