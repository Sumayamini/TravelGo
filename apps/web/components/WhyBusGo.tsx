import { Headset, SearchCheck, ShieldCheck, Signal } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Easy Bus Booking",
    description: "Start with a clear route and date search, designed to keep trip planning simple.",
    icon: SearchCheck,
    badge: "Search preview",
    tint: "bg-sky",
  },
  {
    title: "Secure Payments",
    description: "Payment checkout is planned for a later phase and is not available in this preview.",
    icon: ShieldCheck,
    badge: "Planned",
    tint: "bg-emerald-50",
  },
  {
    title: "Real-Time Booking Updates",
    description: "Live booking status and bus tracking are not connected yet.",
    icon: Signal,
    badge: "Planned",
    tint: "bg-violet-50",
  },
  {
    title: "Customer Support",
    description: "Travel support channels will be introduced in a later phase.",
    icon: Headset,
    badge: "Coming soon",
    tint: "bg-amber-50",
  },
];

export default function WhyBusGo() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.17em] text-ocean">The BusGo difference</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">Thoughtful travel, at every step</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
          A simple start today, with more helpful journey tools planned for what comes next.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, description, icon: Icon, badge, tint }) => (
          <Card key={title} className="p-5 shadow-[0_8px_24px_rgba(18,52,91,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-card sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tint} text-navy`}>
                <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
              </span>
              <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-bold text-slate-500">{badge}</span>
            </div>
            <h3 className="mt-5 text-base font-extrabold text-navy">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
