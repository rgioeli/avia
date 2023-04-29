import { prisma } from "lib/prisma/connect";

export const updatePost = async (postId: string, content: string) => {
  /** Update the users post */
  const updated = await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      content,
    },
  });

  if (!updated) return false;
  return updated;
};
