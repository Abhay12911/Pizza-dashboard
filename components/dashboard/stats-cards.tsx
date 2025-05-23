import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PizzaOrder } from "@/lib/mock-data";
import { CircleDollarSign, Package, PackageCheck, PackageX } from "lucide-react";

interface StatsCardsProps {
  orders: PizzaOrder[];
}

export function StatsCards({ orders }: StatsCardsProps) {
  // Calculate stats
  const totalOrders = orders.length;
  const totalItems = orders.reduce((sum, order) => sum + order.quantity, 0);
  const deliveredOrders = orders.filter(order => order.status === 'Delivered').length;
  const cancelledOrders = orders.filter(order => order.status === 'Cancelled').length;
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="transition-all hover:shadow-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalOrders}</div>
          <p className="text-xs text-muted-foreground">All time orders</p>
        </CardContent>
      </Card>
      <Card className="transition-all hover:shadow-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Items Sold</CardTitle>
          <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalItems}</div>
          <p className="text-xs text-muted-foreground">Total pizzas ordered</p>
        </CardContent>
      </Card>
      <Card className="transition-all hover:shadow-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Delivered</CardTitle>
          <PackageCheck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{deliveredOrders}</div>
          <p className="text-xs text-muted-foreground">Successfully delivered</p>
        </CardContent>
      </Card>
      <Card className="transition-all hover:shadow-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Cancelled</CardTitle>
          <PackageX className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{cancelledOrders}</div>
          <p className="text-xs text-muted-foreground">Cancelled orders</p>
        </CardContent>
      </Card>
    </div>
  );
}