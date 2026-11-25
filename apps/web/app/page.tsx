import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Compass, Sparkles } from "lucide-react";
import BusSearchForm from "@/components/BusSearchForm";
import OffersSection from "@/components/OffersSection";
import PopularRoutes from "@/components/PopularRoutes";
import SiteShell from "@/components/SiteShell";
import WhyBusGo from "@/components/WhyBusGo";

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        <section className="relative isolate min-h-[505px] overflow-hidden bg-navy text-white sm:min-h-[560px] lg:min-h-[610px]">
          <Image
            src="/images/hero-mountain-coach.jpg"
            alt="A modern coach bus against a dramatic mountain landscape"
            fill
            priority
            sizes="100vw"
            className="scale-x-[-1] object-cover object-[center_54%]"
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#071A31]/90 via-[#0D2B4A]/65 to-[#0D2B4A]/10" aria-hidden="true" />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#091F38]/55 via-transparent to-[#091F38]/10" aria-hidden="true" />

          <div className="relative z-10 mx-auto flex min-h-[505px] max-w-7xl items-center px-5 pb-24 pt-16 sm:min-h-[560px] sm:px-8 sm:pb-28 lg:min-h-[610px]">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide text-white backdrop-blur-sm">
                <Sparkles size={15} className="text-sky-200" aria-hidden="true" />
                YOUR NEXT JOURNEY STARTS HERE
              </span>
              <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Better journeys begin <span className="text-sky-200">here.</span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                Explore bus routes across India, compare your options, and plan your next journey with confidence.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="#booking-search"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-extrabold text-navy shadow-lg transition hover:-translate-y-0.5 hover:bg-sky"
                >
                  Find your bus <ArrowDown size={17} aria-hidden="true" />
                </Link>
                <Link
                  href="#popular-routes"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/35 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  <Compass size={17} aria-hidden="true" />
                  Explore routes
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs font-medium text-white/75">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                  <ArrowRight size={14} aria-hidden="true" />
                </span>
                Thoughtful journeys, one route at a time
              </div>
            </div>
          </div>
        </section>

        <section id="booking-search" className="relative z-20 mx-auto -mt-[76px] max-w-7xl scroll-mt-24 px-4 pb-8 sm:-mt-24 sm:px-8">
          <BusSearchForm />
        </section>

        <PopularRoutes />
        <OffersSection />
        <WhyBusGo />

        <section id="booking-status" className="scroll-mt-24 px-5 pb-16 sm:px-8 sm:pb-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 overflow-hidden rounded-3xl bg-navy px-6 py-8 text-white sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-10">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-sky-100">
                Booking tools are in the works
              </span>
              <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">Your trip updates will have a home here.</h2>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Booking status and live bus tracking are not available in this preview. We’ll connect these tools in a later phase.
              </p>
            </div>
            <Link
              href="#booking-search"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-extrabold text-navy transition hover:bg-sky"
            >
              Start with a search <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
