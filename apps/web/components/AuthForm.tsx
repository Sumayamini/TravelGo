"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

type AuthFormProps = {
  mode: "login" | "signup";
};

export default function AuthForm({ mode }: AuthFormProps) {
  const [message, setMessage] = useState("");
  const isSignup = mode === "signup";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Account access is coming soon. Your details have not been sent or saved.");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {isSignup && (
        <label className="block text-sm font-semibold text-ink">
          Full name
          <input required autoComplete="name" name="name" className="mt-2 h-12 w-full rounded-lg border border-slate-200 px-3 font-normal outline-none focus:border-ocean focus:ring-2 focus:ring-sky" placeholder="Your name" />
        </label>
      )}
      <label className="block text-sm font-semibold text-ink">
        Email address
        <input required type="email" autoComplete="email" name="email" className="mt-2 h-12 w-full rounded-lg border border-slate-200 px-3 font-normal outline-none focus:border-ocean focus:ring-2 focus:ring-sky" placeholder="you@example.com" />
      </label>
      <label className="block text-sm font-semibold text-ink">
        Password
        <input required type="password" autoComplete={isSignup ? "new-password" : "current-password"} minLength={8} name="password" className="mt-2 h-12 w-full rounded-lg border border-slate-200 px-3 font-normal outline-none focus:border-ocean focus:ring-2 focus:ring-sky" placeholder="At least 8 characters" />
      </label>
      <button type="submit" className="h-12 w-full rounded-lg bg-ocean font-bold text-white transition hover:bg-navy">
        {isSignup ? "Create account" : "Log in"}
      </button>
      <p className="min-h-5 text-sm text-slate-600" role="status" aria-live="polite">{message}</p>
      <p className="text-center text-sm text-slate-600">
        {isSignup ? "Already have an account?" : "New to BusGo?"}{" "}
        <Link className="font-bold text-ocean hover:underline" href={isSignup ? "/login" : "/signup"}>
          {isSignup ? "Log in" : "Sign up"}
        </Link>
      </p>
    </form>
  );
}
