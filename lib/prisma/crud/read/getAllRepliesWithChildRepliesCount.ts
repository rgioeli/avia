import { prisma } from "lib/prisma/connect";

export const getAllRepliesWithChildRepliesCount = async (postId: string) => {
  /** Get 3 replies to a post and the number of child replies on the replies */
  const posts = await prisma.reply.findMany({
    where: {
      postId,
    },
    select: {
      id: true,
      user: {
        select: {
          id: true,
          username: true,
          image: true,
        },
      },
      content: true,
      likes: {
        select: {
          id: true,
          user: {
            select: {
              id: true,
              username: true,
            },
          },
        },
      },
      childReplies: {
        select: {
          _count: true,
        },
      },
    },
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!posts) return false;
  return posts;
};
