import { getServerSession } from "next-auth";
import Nav from "../(navigation)/Nav";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Menu from "../(dashboard)/Menu";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen text-slate-700">
      <Nav />
      <div className="flex container mx-auto py-5">
        <Menu />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
