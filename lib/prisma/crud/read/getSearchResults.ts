import { prisma } from "../../connect";

export const getSearchResults = async (term: string) => {
  const searchResults = await prisma.medicalSearchTerm.findMany({
    where: {
      term: {
        contains: term,
        mode: "insensitive",
      },
    },
    take: 10,
  });

  return searchResults;
};
