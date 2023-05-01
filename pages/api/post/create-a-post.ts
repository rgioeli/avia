import { createPost } from "@/lib/prisma/crud/create/createPost";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { textVal, termId } = req.body;

  const session = await getServerSession(req, res, authOptions);
  const submitPost = await createPost(textVal, session?.id, termId);
  if (submitPost)
    return res
      .status(200)
      .json({ success: "Your post was uploaded successfully!" });
  if (!submitPost)
    return res
      .status(500)
      .json("There was an error submitting your post. Please try again.");
}
