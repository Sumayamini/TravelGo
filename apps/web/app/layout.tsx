import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BusGo | Bus journeys, made simple",
  description: "Plan your next bus journey with BusGo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
