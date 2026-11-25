import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-mist">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
