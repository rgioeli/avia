import { prisma } from "../../connect";

export const getCheckForValidChannel = async (id: string) => {
  const idCheck = await prisma.medicalSearchTerm.findUnique({
    where: {
      id,
    },
  });

  console.log("CHECK => ", idCheck);

  if (!idCheck) return false;
  return idCheck;
};
