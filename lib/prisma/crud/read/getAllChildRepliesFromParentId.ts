import { prisma } from "lib/prisma/connect";

export const getAllChildRepliesFromParentId = async (parentId: string) => {
  const childReplies = await prisma.reply.findMany({
    where: {
      parentId,
    },
    select: {
      id: true,
      childReplies: {
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
          createdAt: true,
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
        },
        take: 3,
      },
    },
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  });
  if (!childReplies) return false;
  return childReplies;
};
