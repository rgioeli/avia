import { getSearchResults } from "@/lib/prisma/crud/read/getSearchResults";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { search } = req.body;

  const searchResults = await getSearchResults(search);
  if (searchResults.length === 0)
    return res
      .status(200)
      .json({ error: `No search results for "${search}".` });

  return res.status(200).json({ success: searchResults });
}
