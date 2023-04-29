import { prisma } from "lib/prisma/connect";

export const updateProfile = async (
  userId: string,
  bio: string,
  diagnosis: string[],
  twitter: string,
  tiktok?: string,
  facebook?: string,
  instagram?: string
) => {
  const profile = await prisma.profile.update({
    where: {
      userId,
    },
    data: {
      bio,
      diagnosis,
      facebook,
      twitter,
      instagram,
      tiktok,
    },
  });

  if (!profile) return false;
  return true;
};
