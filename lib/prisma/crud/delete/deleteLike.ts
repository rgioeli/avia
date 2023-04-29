import { prisma } from "lib/prisma/connect";

export const deleteLike = async (id: string) => {
  const deleted = await prisma.like.delete({
    where: {
      id,
    },
  });

  if (!deleted) return false;
  return true;
};
