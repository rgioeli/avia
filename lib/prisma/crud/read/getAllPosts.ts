import { prisma } from "lib/prisma/connect";

export const getAllPosts = async () => {
  // Find all posts order by latest created post
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      user: {
        select: {
          id: true,
          image: true,
          username: true,
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
    orderBy: { createdAt: "desc" },
  });

  if (!posts) return false;
  return posts;
};
