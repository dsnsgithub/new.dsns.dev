// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import whois from "whois-json";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const { domain } = req.query;
	if (typeof domain != "string") return res.status(400).json({"error": "Not a valid domain."})

	const results = await whois(domain);
	return res.json(results);
}

