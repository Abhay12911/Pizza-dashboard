import { LoginButton } from "@/components/auth/login-button";
import { PizzaIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | PizzaDash",
  description: "Login to your PizzaDash account",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-lg shadow-lg animate-in fade-in duration-500">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="p-3 rounded-full bg-primary/10 mb-4">
            <PizzaIcon className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome to PizzaDash</h1>
          <p className="text-muted-foreground mt-2">
            Sign in to manage your pizza orders dashboard
          </p>
        </div>
        
        <div className="flex flex-col space-y-4">
          <LoginButton className="w-full" />
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Dashboard Features
              </span>
            </div>
          </div>
          
          <div className="grid gap-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="mr-2 h-4 w-4 text-primary">•</div>
              <p>Welcome dashboard with personalized greeting</p>
            </div>
            <div className="flex items-center">
              <div className="mr-2 h-4 w-4 text-primary">•</div>
              <p>Comprehensive pizza orders management</p>
            </div>
            <div className="flex items-center">
              <div className="mr-2 h-4 w-4 text-primary">•</div>
              <p>Visual order status tracking</p>
            </div>
            <div className="flex items-center">
              <div className="mr-2 h-4 w-4 text-primary">•</div>
              <p>Advanced sorting and filtering capabilities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}