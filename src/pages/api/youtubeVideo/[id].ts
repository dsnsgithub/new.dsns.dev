// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const { id } = req.query;

	const info = await ytdl.getInfo(`https://www.youtube.com/watch?v=${id}`);

	const formats = info.formats;
	formats.sort((a, b) => {
		return (b.bitrate || 0) - (a.bitrate || 0);
	});

	const videoFormats = formats.filter((video) => video.mimeType && video.mimeType.includes("video/mp4"));

	return res.json({
		highestvideo: videoFormats[0],
		highest: videoFormats.filter((video) => video.hasAudio == true)[0],
		highestaudio: formats.filter((audio) => audio.mimeType && audio.mimeType.includes("audio/mp4"))[0]
	});
}
