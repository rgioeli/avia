import { prisma } from "lib/prisma/connect";

const createLike = async ({
  id,
  type,
  userId,
}: {
  id: string;
  type: string;
  userId: string;
}) => {
  let like;
  if (type == "post") {
    like = await prisma.like.create({
      data: {
        post: {
          connect: {
            id,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  } else if (type == "reply") {
    like = await prisma.like.create({
      data: {
        reply: {
          connect: {
            id,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  if (!like) return false;
  return like;
};
