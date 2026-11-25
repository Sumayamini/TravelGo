import FeaturePlaceholder from "@/components/FeaturePlaceholder";

type BusPageProps = {
  params: Promise<{ tripId: string }>;
};

export default async function BusPage({ params }: BusPageProps) {
  const { tripId } = await params;

  return (
    <FeaturePlaceholder
      title="Bus and trip details"
      description={`Trip reference “${tripId}” is a route parameter only. No operator schedules, fares, or live inventory are available in this Phase 1 preview.`}
    />
  );
}
