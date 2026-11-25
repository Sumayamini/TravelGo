import FeaturePlaceholder from "@/components/FeaturePlaceholder";

type BookingPageProps = {
  params: Promise<{ bookingId: string }>;
};

export default async function BookingPage({ params }: BookingPageProps) {
  const { bookingId } = await params;

  return (
    <FeaturePlaceholder
      title="Booking details"
      description={`Reference “${bookingId}” is a placeholder path value. Private bookings, tickets, cancellation requests, and refund status are not connected.`}
    />
  );
}
