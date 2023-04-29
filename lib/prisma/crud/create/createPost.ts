import { prisma } from "lib/prisma/connect";

export const createPost = async (content: string, userId: string) => {
  //Create a post for the user
  const post = await prisma.post.create({
    data: {
      content,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  if (!post) return false;
  return post;
};
