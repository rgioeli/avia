import { prisma } from "lib/prisma/connect";

export const getProfile = async (userId: string) => {
  /** Get all the data of the user's profile */
  const profile = await prisma.profile.findUnique({
    where: {
      userId,
    },
    include: {
      user: {
        select: {
          id: true,
          image: true,
          username: true,
        },
      },
    },
  });
  if (!profile) return false;
  return profile;
};
