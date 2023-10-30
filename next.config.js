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
			},
			{
				source: "/birthdays",
				destination: "https://old.dsns.dev/birthdays",
				permanent: false
			},
			{
				source: "/ppi",
				destination: "https://old.dsns.dev/ppi",
				permanent: false
			},
			{
				source: "/learn",
				destination: "https://old.dsns.dev/learn",
				permanent: false
			},
			{
				source: "/webcam",
				destination: "https://old.dsns.dev/webcam",
				permanent: false
			},
			{
				source: "/ip",
				destination: "https://old.dsns.dev/ip",
				permanent: false
			},
			{
				source: "/date",
				destination: "https://old.dsns.dev/date",
				permanent: false
			},
			{
				source: "/electric",
				destination: "https://old.dsns.dev/electric",
				permanent: false
			}
		];
	}
};

module.exports = nextConfig;
