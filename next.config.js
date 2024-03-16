/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/player",
				destination: "/recentgames",
				permanent: false
			},
			{
				source: "/mp3",
				destination: "/youtube",
				permanent: false
			},
			{
				source: "/schedule",
				destination: "https://scheduli.dsns.dev",
				permanent: false
			}
		];
	},
	async headers() {
		return [
			{
				source: "/youtube",
				headers: [
					{
						key: "Cross-Origin-Opener-Policy",
						value: "same-origin"
					},
					{
						key: "Cross-Origin-Embedder-Policy",
						value: "require-corp"
					}
				]
			},
			{
				source: "/mp3/index.html",
				headers: [
					{
						key: "Cross-Origin-Opener-Policy",
						value: "same-origin"
					},
					{
						key: "Cross-Origin-Embedder-Policy",
						value: "require-corp"
					}
				]
			}
		];
	}
};

module.exports = nextConfig;
