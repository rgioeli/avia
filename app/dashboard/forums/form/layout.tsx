import UserInputToolbar from "@/app/(user input)/UserInputToolbar";

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <UserInputToolbar />
      {children}
    </div>
  );
}
