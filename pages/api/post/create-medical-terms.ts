import { createMedicalDiagnosesTerms } from "@/lib/prisma/crud/create/createMedicalDiagnosesTerms";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { medicalDiagnoses } = req.body;
  const terms = await createMedicalDiagnosesTerms(medicalDiagnoses);
  return res.status(200).json(terms);
}
