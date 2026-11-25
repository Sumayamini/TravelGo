import Link from "next/link";
import AuthForm from "@/components/AuthForm";
import SiteShell from "@/components/SiteShell";

export default function SignupPage() {
  return (
    <SiteShell>
      <main className="flex min-h-[70vh] items-center justify-center px-5 py-10">
      <section className="w-full max-w-md rounded-2xl bg-white p-7 shadow-card sm:p-9">
        <Link href="/" className="text-lg font-extrabold text-navy">Bus<span className="text-ocean">Go</span></Link>
        <h1 className="mt-8 text-2xl font-bold text-navy">Create your account</h1>
        <p className="mb-7 mt-2 text-sm text-slate-600">Join BusGo to make trip planning easier.</p>
        <AuthForm mode="signup" />
        <Link href="/" className="mt-6 inline-block text-sm font-semibold text-slate-500 hover:text-ocean">Back to home</Link>
      </section>
      </main>
    </SiteShell>
  );
}
