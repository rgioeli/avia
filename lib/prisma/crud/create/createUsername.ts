import { prisma } from "lib/prisma/connect";
import { v4 as uuidv4 } from "uuid";

export const createUsername = async (email: string | null | undefined) => {
  /** Creates a username for a newly created user with just a unique email */
  const id = uuidv4();
  const username = `user-${id.slice(0, 8)}`;

  // Update user with a default username
  const user = await prisma.user.update({
    where: {
      email: email ? email : undefined,
    },
    data: {
      username,
    },
  });

  if (!user) return false;
  return true;
};
