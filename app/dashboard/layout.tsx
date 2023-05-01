import { getServerSession } from "next-auth";
import Nav from "../(navigation)/Nav";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Menu from "../(dashboard)/Menu";
import NotificationBar from "../(notification)/NotificationBar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen text-slate-700">
      <Nav />
      <div className="flex container max-w-5xl mx-auto py-5">
        <Menu />
        <div className="flex-1">{children}</div>
      </div>
      <NotificationBar />
    </div>
  );
}
