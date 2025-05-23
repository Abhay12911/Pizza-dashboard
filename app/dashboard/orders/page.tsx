import { OrderTable } from "@/components/orders/order-table";
import { mockPizzaOrders } from "@/lib/mock-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pizza Orders | PizzaDash",
  description: "Manage and view all pizza orders",
};

export default function OrdersPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Pizza Orders</h1>
        <p className="text-muted-foreground">
          View and manage all pizza orders. Sort, filter and search orders as needed.
        </p>
      </div>
      
      <OrderTable orders={mockPizzaOrders} />
    </div>
  );
}