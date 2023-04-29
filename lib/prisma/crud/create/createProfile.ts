import { prisma } from "lib/prisma/connect";

export const createProfile = async (userId: string) => {
  const profile = await prisma.profile.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  if (!profile) return false;
  return true;
};
