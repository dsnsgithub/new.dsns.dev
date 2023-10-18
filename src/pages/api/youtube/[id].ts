// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const { id } = req.query;

	if (!id || typeof id != "string") return res.status(400).send("Invalid YouTube Link");

	const videoInfo = await ytdl.getBasicInfo(id);
	const length = Number(videoInfo["videoDetails"]["lengthSeconds"]);

	const fullLink = `https://www.youtube.com/watch?v=${id}`;

	let title = videoInfo.videoDetails.title;
	title = title.replace(/[^\w]/g, "_"); // \w is the same as [A-Za-z0-9_]
	title = title.substring(0, 100);

	res.setHeader("Content-Disposition", `attachment; filename="${title}.webm"`);
	res.setHeader("Content-Type", "audio/webm");
	res.setHeader("Access-Control-Expose-Headers", "Content-Disposition");

	ytdl(fullLink, {
		filter: "audioonly",
		quality: "highestaudio"
	}).pipe(res);
}
