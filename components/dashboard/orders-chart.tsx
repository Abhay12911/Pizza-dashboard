"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PizzaOrder } from "@/lib/mock-data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { useTheme } from "next-themes";

interface OrdersChartProps {
  orders: PizzaOrder[];
}

export function OrdersChart({ orders }: OrdersChartProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Group orders by status
  const statusCounts = orders.reduce((acc, order) => {
    const status = order.status;
    if (!acc[status]) {
      acc[status] = 0;
    }
    acc[status]++;
    return acc;
  }, {} as Record<string, number>);

  // Convert to array for chart
  const chartData = Object.entries(statusCounts).map(([status, count]) => ({
    status,
    count,
  }));

  // Status colors for chart
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return isDark ? "#F9D923" : "#EAB308";
      case "preparing":
        return isDark ? "#5EA3F8" : "#3B82F6";
      case "out for delivery":
        return isDark ? "#C183F8" : "#9333EA";
      case "delivered":
        return isDark ? "#86EFAC" : "#22C55E";
      case "cancelled":
        return isDark ? "#F87171" : "#EF4444";
      default:
        return "#64748B";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Orders by Status</CardTitle>
        <CardDescription>Distribution of orders by their current status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 25,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
              <XAxis 
                dataKey="status" 
                angle={-45} 
                textAnchor="end" 
                tick={{ fontSize: 12 }}
                stroke={isDark ? "#aaa" : "#666"} 
              />
              <YAxis 
                stroke={isDark ? "#aaa" : "#666"} 
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: isDark ? "#1f1f1f" : "#fff",
                  border: `1px solid ${isDark ? "#333" : "#ddd"}`,
                  color: isDark ? "#fff" : "#000",
                }}
              />
              <Bar dataKey="count" name="Orders">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getStatusColor(entry.status)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}