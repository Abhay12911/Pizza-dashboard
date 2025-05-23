import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const statusVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/80",
      pending: "bg-yellow-500/20 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400",
      preparing: "bg-blue-500/20 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
      "out for delivery": "bg-purple-500/20 text-purple-700 dark:bg-purple-500/15 dark:text-purple-400",
      delivered: "bg-green-500/20 text-green-700 dark:bg-green-500/15 dark:text-green-400",
      cancelled: "bg-red-500/20 text-red-700 dark:bg-red-500/15 dark:text-red-400",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusVariants> {}

export function StatusBadge({
  className,
  variant,
  ...props
}: StatusBadgeProps) {
  return (
    <div className={cn(statusVariants({ variant }), className)} {...props} />
  );
}