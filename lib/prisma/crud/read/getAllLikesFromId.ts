import { prisma } from "lib/prisma/connect";

export const getAllLikesFromId = async ({
  id,
  type,
}: {
  id: string;
  type: string;
}) => {
  let likes;
  if (type == "post") {
    likes = await prisma.post.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
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
          orderBy: {
            user: {
              username: "asc",
            },
          },
        },
      },
    });
  } else if (type == "reply") {
    likes = await prisma.reply.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
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
          orderBy: {
            user: {
              username: "asc",
            },
          },
        },
      },
    });
  }

  if (!likes) return false;
  return likes;
};
