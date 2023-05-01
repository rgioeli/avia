import { prisma } from "../../connect";

export const getCheckForValidTermId = async (termId: string) => {
  const check = await prisma.medicalSearchTerm.findUnique({
    where: {
      id: termId,
    },
  });

  return check;
};
