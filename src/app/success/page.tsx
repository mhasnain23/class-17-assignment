"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function SignUpSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-lg text-center">
        <div className="space-y-4">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h1 className="text-3xl font-bold tracking-tight">Welcome aboard!</h1>
          <p className="text-muted-foreground">
            Your account has been successfully created. You're all set to begin
            your journey with us.
          </p>
        </div>
        <Button
          className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
          onClick={() => (window.location.href = "/")}
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
}
