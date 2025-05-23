import { Button } from "@/components/ui/button";
import { PizzaIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <header className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <PizzaIcon className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">PizzaDash</span>
        </div>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </header>
      
      <main className="flex-1 container flex flex-col items-center justify-center py-16 text-center">
        <div className="p-4 rounded-full bg-primary/10 mb-6 animate-bounce">
          <PizzaIcon className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          Pizza Order Dashboard
        </h1>
        <p className="max-w-[42rem] text-lg text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
          A modern, beautiful dashboard to manage all your pizza orders.
          View order status, track deliveries, and analyze performance.
        </p>
        <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
          <Link href="/login">
            <Button size="lg" className="font-medium gap-2">
              <PizzaIcon className="h-4 w-4" />
              Get Started
            </Button>
          </Link>
        </div>
      </main>
      
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16 text-sm">
          <p className="text-center md:text-left text-muted-foreground">
            &copy; 2025 PizzaDash. All rights reserved.
          </p>
          <p className="text-center md:text-right text-muted-foreground">
            Frontend Engineering Assignment
          </p>
        </div>
      </footer>
    </div>
  );
}