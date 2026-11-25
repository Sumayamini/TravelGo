import FeaturePlaceholder from "@/components/FeaturePlaceholder";

type BookingSuccessPageProps = {
  params: Promise<{ bookingId: string }>;
};

export default async function BookingSuccessPage({ params }: BookingSuccessPageProps) {
  const { bookingId } = await params;

  return (
    <FeaturePlaceholder
      title="Booking confirmation"
      description={`Reference “${bookingId}” is not a real booking or payment confirmation. Ticketing and payment verification will be added in a later phase.`}
      notice="No booking has been created or paid for. This URL only reserves the intended route."
    />
  );
}
