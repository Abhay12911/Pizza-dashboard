import { Header } from "@/components/layout/header";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard | PizzaDash",
  description: "Manage your pizza orders",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check if user is authenticated
  const session = await getServerSession(authOptions);
  
  // If not authenticated, redirect to login
  if (!session) {
    redirect("/login");
  }
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 flex">
        <aside className="hidden md:flex w-64 flex-col border-r bg-card/50 p-4">
          <MainNav />
        </aside>
        <main className="flex-1 pb-16 md:pb-0">
          <div className="container py-6">{children}</div>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}