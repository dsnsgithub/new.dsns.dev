// pages/api/tiktok.js

import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { musicID, cursor } = req.query;
		const count = 30;
		const urls: { url: string; coverImage: string }[] = [];

		const response = await axios.get(`https://www.tiktok.com/api/music/item_list/?aid=1988&count=${count}&cursor=${cursor}&focus_state=false&musicID=${musicID}`);
		const data = response.data;

		if (!data["itemList"]) {
			return res.status(200).json({ success: false, data: [] });
		}

		for (const item of data["itemList"]) {
			const authorTag = item["author"]["uniqueId"];
			const videoID = item["id"];
			const coverImage = item["video"]["cover"];
			const url = `https://www.tiktok.com/@${authorTag}/video/${videoID}`;

			urls.push({ url, coverImage });
		}

		// Return response
		res.status(200).json({ success: true, data: urls });
	} catch (error) {
		console.error("Error fetching data from TikTok API:", error);
		res.status(500).json({ success: false, error: "Internal Server Error" });
	}
}
