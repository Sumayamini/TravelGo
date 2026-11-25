import Link from "next/link";
import { BusFront, CircleHelp, Ticket, Tag } from "lucide-react";

export default function Footer() {
  return (
    <footer id="help" className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-9 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="BusGo home" className="inline-flex items-center gap-2 font-extrabold text-navy">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky text-ocean">
              <BusFront size={19} aria-hidden="true" />
            </span>
            Bus<span className="-ml-2 text-ocean">Go</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
            Find your way across India with a clearer, calmer bus-booking experience.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-extrabold text-navy">Explore</h2>
          <div className="mt-3 grid gap-3 text-sm text-slate-600">
            <Link className="inline-flex items-center gap-2 transition hover:text-ocean" href="/#offers"><Tag size={15} aria-hidden="true" /> Offers</Link>
            <Link className="inline-flex items-center gap-2 transition hover:text-ocean" href="/my-bookings"><Ticket size={15} aria-hidden="true" /> My bookings</Link>
            <Link className="inline-flex items-center gap-2 transition hover:text-ocean" href="/help"><CircleHelp size={15} aria-hidden="true" /> Help center</Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-extrabold text-navy">A note for travellers</h2>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Route examples are illustrative only. No operator inventory, booking, or live travel data is connected.
          </p>
        </div>
      </div>
      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>&copy; {new Date().getFullYear()} BusGo</span>
          <span>Built for journeys across India</span>
        </div>
      </div>
    </footer>
  );
}
