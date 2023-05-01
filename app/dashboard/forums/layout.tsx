import SearchForDiagnosis from "@/app/(search)/SearchForDiagnosis";

export default async function ForumsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1">
      <SearchForDiagnosis />
      {children}
    </div>
  );
}
