"use client";

import { createMedicalDiagnosesTerms } from "@/lib/prisma/crud/create/createMedicalDiagnosesTerms";
import { medicalDiagnoses } from "../(search)/searchData";

export default function AddNewMedicalTermsPage() {
  const handleAddMedicalTerms = async () => {
    const addedterms = await createMedicalDiagnosesTerms(medicalDiagnoses);
    console.log(addedterms);
  };
  return <div onClick={handleAddMedicalTerms}>Add new medical terms</div>;
}
