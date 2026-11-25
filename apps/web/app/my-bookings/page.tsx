import FeaturePlaceholder from "@/components/FeaturePlaceholder";

export default function MyBookingsPage() {
  return (
    <FeaturePlaceholder
      title="My bookings"
      description="Your booking history and ticket details will appear here after account and booking services are implemented."
      notice="No bookings are stored in this preview. Sign-in, booking history, and cancellation actions are not available."
      links={[{ label: "Profile", href: "/profile" }]}
    />
  );
}
