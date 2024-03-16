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
	}
};

module.exports = nextConfig;
