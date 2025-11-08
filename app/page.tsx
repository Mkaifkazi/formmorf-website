import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { QuickStart } from "@/components/landing/QuickStart";
import { LivePreview } from "@/components/landing/LivePreview";
import { CTASection } from "@/components/landing/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <QuickStart />
      <LivePreview />
      <CTASection />
    </>
  );
}
