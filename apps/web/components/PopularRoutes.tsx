import Link from "next/link";
import { ArrowRight, MapPin, Route } from "lucide-react";
import { Card } from "@/components/ui/card";

const routes = [
  { from: "Vijayawada", to: "Hyderabad", tint: "bg-sky" },
  { from: "Hyderabad", to: "Bangalore", tint: "bg-blue-50" },
  { from: "Chennai", to: "Bangalore", tint: "bg-indigo-50" },
  { from: "Vijayawada", to: "Chennai", tint: "bg-cyan-50" },
  { from: "Bangalore", to: "Hyderabad", tint: "bg-sky" },
  { from: "Visakhapatnam", to: "Vijayawada", tint: "bg-blue-50" },
];

function todayAsDateInput() {
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
  return localDate.toISOString().slice(0, 10);
}

export default function PopularRoutes() {
  return (
    <section id="popular-routes" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.17em] text-ocean">Plan a route</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">Popular Bus Routes</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            A little inspiration for where your next journey could take you.
          </p>
        </div>
        <Link href="/#booking-search" className="inline-flex items-center gap-2 text-sm font-bold text-ocean transition hover:gap-3">
          Search a different route <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {routes.map(({ from, to, tint }) => {
          const query = new URLSearchParams({ from, to, date: todayAsDateInput() });

          return (
            <Card key={`${from}-${to}`} className="group p-5 shadow-[0_8px_24px_rgba(18,52,91,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-card sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-slate-500">
                  <Route size={13} className="text-ocean" aria-hidden="true" />
                  Popular route
                </span>
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${tint} text-ocean`}>
                  <MapPin size={19} aria-hidden="true" />
                </span>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">From</p>
                  <h3 className="mt-1 truncate text-base font-extrabold text-navy sm:text-lg">{from}</h3>
                </div>
                <div className="flex shrink-0 items-center gap-1.5 text-sky-500" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  <span className="h-px w-8 border-t border-dashed border-sky-400 sm:w-12" />
                  <ArrowRight size={15} />
                  <span className="h-2 w-2 rounded-full bg-ocean" />
                </div>
                <div className="min-w-0 flex-1 text-right">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">To</p>
                  <h3 className="mt-1 truncate text-base font-extrabold text-navy sm:text-lg">{to}</h3>
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-500">Sample route idea · operator inventory not connected</p>
              <Link
                href={`/search?${query.toString()}`}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-sky-100 bg-sky/60 px-4 py-3 text-sm font-bold text-navy transition group-hover:border-ocean group-hover:bg-ocean group-hover:text-white"
              >
                View buses <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
