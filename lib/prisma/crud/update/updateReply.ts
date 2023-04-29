import { prisma } from "lib/prisma/connect";

export const updatePost = async (replyId: string, content: string) => {
  /** Update the users reply */
  const updated = await prisma.reply.update({
    where: {
      id: replyId,
    },
    data: {
      content,
    },
  });

  if (!updated) return false;
  return updated;
};
