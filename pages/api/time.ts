import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ time: new Date(2023,1,1,1,1,1) });
}