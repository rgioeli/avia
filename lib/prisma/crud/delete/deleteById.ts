import { prisma } from "lib/prisma/connect";

export const deleteById = async ({
  id,
  type,
}: {
  id: string;
  type: string;
}) => {
  /** Delete a post by an id and type */
  let deleted;
  if (type == "post") {
    deleted = await prisma.post.delete({
      where: {
        id,
      },
    });
  } else if (type == "reply") {
    deleted = await prisma.reply.delete({
      where: {
        id,
      },
    });
  }

  if (!deleted) return false;
  return true;
};
