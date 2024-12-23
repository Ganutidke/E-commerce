"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AccountPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        // Mock sign-up process
        setNotification("Account created successfully");
      } else {
        // Mock sign-in process
        setNotification("Signed in successfully");
      }
      setTimeout(() => setNotification(null), 3000);
    } catch (error) {
      setNotification(`Error: ${(error as Error).message}`);
      setTimeout(() => setNotification(null), 3000);
    }
  };

  return (
      <div className="max-w-md mx-auto p-8">
        <h1 className="text-2xl font-bold mb-8">
          {isSignUp ? "Create Account" : "Sign In"}
        </h1>
        {notification && (
            <div className="mb-4 text-green-600 font-semibold">
              {notification}
            </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
          </div>
          <div>
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
          </div>
          <Button type="submit" className="w-full">
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
        </form>
        <p className="mt-4 text-center">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-primary hover:underline"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
  );
}
