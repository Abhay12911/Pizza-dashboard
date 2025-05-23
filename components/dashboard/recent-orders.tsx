import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PizzaOrder } from "@/lib/mock-data";
import { StatusBadge } from "@/components/ui/status-badge";
import { format } from "date-fns";

interface RecentOrdersProps {
  orders: PizzaOrder[];
  calssName?: string;
}

export function RecentOrders({ orders, calssName }: RecentOrdersProps) {
  // Get the 5 most recent orders
  const recentOrders = [...orders]
    .sort((a, b) => {
      const dateA = new Date(a.orderDate.replace(' ', 'T'));
      const dateB = new Date(b.orderDate.replace(' ', 'T'));
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
        <CardDescription>Latest pizza orders placed in your system.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {recentOrders.map((order) => {
            // Parse the order date
            const orderDate = new Date(order.orderDate.replace(' ', 'T'));
            const formattedDate = format(orderDate, 'MMM d, h:mm a');
            
            return (
              <div key={order.id} className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{order.customerName}</p>
                    <p className="text-sm text-muted-foreground">
                      {order.quantity} × {order.pizzaType}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="hidden md:block text-sm text-muted-foreground text-right">
                    {formattedDate}
                  </div>
                  <StatusBadge variant={order.status.toLowerCase() as any}>
                    {order.status}
                  </StatusBadge>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}