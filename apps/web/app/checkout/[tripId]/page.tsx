import FeaturePlaceholder from "@/components/FeaturePlaceholder";

type CheckoutPageProps = {
  params: Promise<{ tripId: string }>;
};

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { tripId } = await params;

  return (
    <FeaturePlaceholder
      title="Passenger details and checkout"
      description={`Trip reference “${tripId}” is a route parameter only. Passenger details are not saved and no payment flow is connected.`}
    />
  );
}
