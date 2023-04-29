import { prisma } from "lib/prisma/connect";

export const createReply = async (
  content: string,
  userId: string,
  postId: string,
  parentId: string | undefined
) => {
  const reply = await prisma.reply.create({
    data: {
      content,
      user: {
        connect: {
          id: userId,
        },
      },
      post: {
        connect: {
          id: postId,
        },
      },
      parent: {
        connect: {
          id: parentId ? parentId : undefined,
        },
      },
    },
  });

  if (!reply) return false;
  return reply;
};
