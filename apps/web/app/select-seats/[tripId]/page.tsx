import FeaturePlaceholder from "@/components/FeaturePlaceholder";

type SelectSeatsPageProps = {
  params: Promise<{ tripId: string }>;
};

export default async function SelectSeatsPage({ params }: SelectSeatsPageProps) {
  const { tripId } = await params;

  return (
    <FeaturePlaceholder
      title="Seat selection"
      description={`Trip reference “${tripId}” is for route structure only. Seat maps, availability, and temporary seat locks are not implemented.`}
    />
  );
}
