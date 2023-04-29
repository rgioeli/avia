import { prisma } from "../../connect";

export const createMedicalDiagnosesTerms = async (terms: string[]) => {
  await prisma.medicalSearchTerm.deleteMany({
    where: {
      term: {
        contains: "",
      },
    },
  });
  const medicalTermsAdded = await prisma.medicalSearchTerm.createMany({
    data: terms.map((term) => ({ term: term.toLowerCase() })),
    skipDuplicates: true,
  });
  if (!medicalTermsAdded)
    return new Error("There was an error adding the terms to the database");
  return medicalTermsAdded;
};
