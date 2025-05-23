import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { RecentOrders } from "@/components/dashboard/recent-orders";
import { OrdersChart } from "@/components/dashboard/orders-chart";
import { mockPizzaOrders } from "@/lib/mock-data";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const firstName = session?.user?.name?.split(" ")[0] || "User";
  
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hello, {firstName}!</h1>
        <p className="text-muted-foreground">
          Welcome to your pizza orders dashboard. Here's an overview of your business.
        </p>
      </div>
      
      <StatsCards orders={mockPizzaOrders} />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <OrdersChart orders={mockPizzaOrders} className="md:col-span-4" />
        <RecentOrders orders={mockPizzaOrders} className="md:col-span-3" />
      </div>
    </div>
  );
}