import Link from "next/link";
import { ArrowLeft, ArrowRight, BusFront, CircleHelp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SiteShell from "@/components/SiteShell";

type FeaturePlaceholderProps = {
  title: string;
  description: string;
  notice?: string;
  links?: { label: string; href: string }[];
};

export default function FeaturePlaceholder({
  title,
  description,
  notice = "This is a Phase 1 route scaffold. The related service is not connected yet.",
  links = [],
}: FeaturePlaceholderProps) {
  return (
    <SiteShell>
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-5 py-12 sm:px-8 sm:py-16">
        <Link href="/" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-ocean hover:underline">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to BusGo
        </Link>
        <section className="mt-8 rounded-3xl border border-slate-100 bg-white p-7 shadow-card sm:p-10">
          <Badge tone="info">Phase 1 route scaffold</Badge>
          <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky text-ocean">
            <BusFront size={27} aria-hidden="true" />
          </div>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">{title}</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">{description}</p>
          <div className="mt-7 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
            <CircleHelp className="mt-0.5 shrink-0" size={18} aria-hidden="true" />
            <p>{notice}</p>
          </div>
          <Link
            href="/"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-ocean px-5 py-3 text-sm font-bold text-white transition hover:bg-navy"
          >
            Explore BusGo <ArrowRight size={16} aria-hidden="true" />
          </Link>
          {links.length > 0 && (
            <nav aria-label="Related pages" className="mt-8 border-t border-slate-100 pt-6">
              <h2 className="text-sm font-bold text-navy">Related route scaffolds</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="inline-flex rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:border-ocean hover:text-ocean">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </section>
      </main>
    </SiteShell>
  );
}
