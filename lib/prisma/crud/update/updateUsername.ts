import { prisma } from "lib/prisma/connect";

export const updateUsername = async (userId: string, newUsername: string) => {
  /** Update the username of the user */
  const updated = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      username: newUsername,
    },
  });

  if (!updated) return false;
  return true;
};
