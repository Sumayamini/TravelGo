import Link from "next/link";
import { ArrowRight, Compass, Gift, Sparkles, TicketPercent } from "lucide-react";
import { Card } from "@/components/ui/card";

const offers = [
  {
    title: "Weekend wanderer",
    description: "A change of scenery is always a good idea.",
    icon: Compass,
    art: "from-[#12345B] via-[#1769AA] to-[#62B8E8]",
    stamp: "YOUR NEXT ESCAPE",
    motif: "✦",
  },
  {
    title: "Plan ahead, go further",
    description: "Give that long-weekend idea a little room to grow.",
    icon: Sparkles,
    art: "from-[#164E63] via-[#0E7490] to-[#67C7C4]",
    stamp: "MAKE A PLAN",
    motif: "↗",
  },
  {
    title: "A little trip, a lot of joy",
    description: "Make time for the people and places you love.",
    icon: Gift,
    art: "from-[#43316D] via-[#7055AA] to-[#B7A1E3]",
    stamp: "GOOD THINGS AHEAD",
    motif: "✳",
  },
];

export default function OffersSection() {
  return (
    <section id="offers" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.17em] text-ocean">Good trips, good ideas</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">Offers for Your Next Journey</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              A few campaign concepts to spark your next travel plan.
            </p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-bold text-amber-800">
            <TicketPercent size={15} aria-hidden="true" />
            Sample promotions only
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {offers.map(({ title, description, icon: Icon, art, stamp, motif }) => (
            <Card key={title} className="overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(18,52,91,0.07)] transition duration-200 hover:-translate-y-1 hover:shadow-card">
              <div className={`relative isolate flex h-44 items-end overflow-hidden bg-gradient-to-br ${art} p-5`}>
                <div className="absolute -right-7 -top-12 h-44 w-44 rounded-full border border-white/20" aria-hidden="true" />
                <div className="absolute -right-1 -top-5 h-32 w-32 rounded-full border border-white/20" aria-hidden="true" />
                <div className="absolute right-8 top-5 flex h-14 w-14 rotate-6 items-center justify-center rounded-2xl bg-white/15 text-3xl font-black text-white/90 backdrop-blur-sm" aria-hidden="true">
                  {motif}
                </div>
                <div className="relative flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] font-extrabold tracking-[0.14em] text-white/75">BUSGO PRESENTS</p>
                    <p className="mt-1 text-sm font-extrabold tracking-wide text-white">{stamp}</p>
                  </div>
                </div>
                <span className="absolute right-4 top-4 rounded-full border border-white/40 bg-white/15 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-white backdrop-blur">
                  Concept only
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-extrabold text-navy">{title}</h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{description}</p>
                <Link href="/#booking-search" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-ocean transition hover:gap-3">
                  Plan a journey <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-5 text-xs leading-5 text-slate-500">
          These are sample promotional graphics. No coupon, discount, or active offer is configured.
        </p>
      </div>
    </section>
  );
}
