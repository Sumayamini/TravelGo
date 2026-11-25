import Link from "next/link";
import SiteShell from "@/components/SiteShell";

type SearchPageProps = {
  searchParams: Promise<{ from?: string; to?: string; date?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { from, to, date } = await searchParams;
  const hasRoute = Boolean(from && to && date);

  return (
    <SiteShell>
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-12 sm:px-8 sm:py-16">
        <Link href="/" className="text-sm font-semibold text-ocean hover:underline">&larr; Back to search</Link>
        <section className="mt-8 rounded-2xl bg-white p-7 shadow-card sm:p-10">
          <p className="text-sm font-bold uppercase tracking-wider text-ocean">Bus search</p>
          <h1 className="mt-3 text-3xl font-extrabold text-navy">
            {hasRoute ? `${from} to ${to}` : "Plan your next bus journey"}
          </h1>
          {hasRoute && <p className="mt-2 text-slate-600">Journey date: {date}</p>}
          <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-mist px-5 py-10 text-center">
            <h2 className="font-bold text-navy">Search results are coming soon</h2>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-600">
              {hasRoute
                ? "Bus listings are not available yet. No live availability is shown in this preview."
                : "Enter a departure city, destination, and date to prepare a search."}
            </p>
            <Link href="/" className="mt-5 inline-flex rounded-lg bg-ocean px-5 py-3 text-sm font-bold text-white hover:bg-navy">
              {hasRoute ? "Change search" : "Search buses"}
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
