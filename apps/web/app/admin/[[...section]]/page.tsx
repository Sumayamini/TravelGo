import { notFound } from "next/navigation";
import FeaturePlaceholder from "@/components/FeaturePlaceholder";

const adminSections: Record<string, { title: string; description: string }> = {
  buses: {
    title: "Bus management",
    description: "Bus records and operator assignments will be managed here in a future phase.",
  },
  routes: {
    title: "Route management",
    description: "Route creation and maintenance tools are part of the planned admin workspace.",
  },
  trips: {
    title: "Trip management",
    description: "Trip schedules, fares, and seat inventory are not connected in this Phase 1 preview.",
  },
  bookings: {
    title: "Booking monitoring",
    description: "Booking and payment monitoring will be added with the protected backend tools.",
  },
};

const adminLinks = [
  { label: "Dashboard", href: "/admin" },
  { label: "Buses", href: "/admin/buses" },
  { label: "Routes", href: "/admin/routes" },
  { label: "Trips", href: "/admin/trips" },
  { label: "Bookings", href: "/admin/bookings" },
];

type AdminPageProps = {
  params: Promise<{ section?: string[] }>;
};

export default async function AdminPage({ params }: AdminPageProps) {
  const { section = [] } = await params;
  const page = section.length === 0
    ? { title: "Admin dashboard", description: "The BusGo admin dashboard and operational summaries will be developed in a later phase." }
    : section.length === 1
      ? adminSections[section[0]]
      : undefined;

  if (!page) {
    notFound();
  }

  return (
    <FeaturePlaceholder
      title={page.title}
      description={page.description}
      notice="Admin pages are route scaffolds only. There is no admin authentication, role enforcement, database access, or operational control in this preview."
      links={adminLinks}
    />
  );
}
