import { prisma } from "../../connect";

export const getAllPostsWithReplyCounts = async (
  /** Channel - the current discussion title */
  medicalSearchTermId: string
) => {
  /** returns all posts and their amount of replies in a _count property */
  const posts = await prisma.post.findMany({
    where: {
      medicalSearchTermId,
    },
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
      replies: {
        select: {
          _count: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  if (!posts) return false;
  return posts;
};
