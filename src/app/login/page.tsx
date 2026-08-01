"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");
  const { login, signup, loginWithGoogle } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      if (isSignup) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      await loginWithGoogle();
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1326] p-6">
      <div className="w-full max-w-sm bg-[#131b2e] border border-zinc-800 rounded-xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-white mb-2 text-center">ProtocolPilot</h1>
        <p className="text-sm text-zinc-400 mb-8 text-center">
          {isSignup ? "Create an account to save your work" : "Log in to continue"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-zinc-400 block mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#0b1326] border border-zinc-800 p-3 rounded-lg text-sm text-white outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-zinc-400 block mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full bg-[#0b1326] border border-zinc-800 p-3 rounded-lg text-sm text-white outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#76d6d5] text-[#003737] font-semibold py-2.5 rounded-lg text-sm hover:opacity-90 transition-all"
          >
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="h-px bg-zinc-800 flex-1" />
          <span className="text-xs text-zinc-500">or</span>
          <div className="h-px bg-zinc-800 flex-1" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full border border-zinc-700 text-white font-semibold py-2.5 rounded-lg text-sm hover:bg-zinc-800 transition-all"
        >
          Continue with Google
        </button>

        <p className="text-xs text-zinc-500 text-center mt-6">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => {
              setIsSignup(!isSignup);
              setError("");
            }}
            className="text-[#76d6d5] font-semibold hover:underline"
          >
            {isSignup ? "Log In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}