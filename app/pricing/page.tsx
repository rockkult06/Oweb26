import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import PricingTiers from "@/components/pricing/PricingTiers";
import ROICalculator from "@/components/pricing/ROICalculator";

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PricingHero />
      <PricingTiers />
      <ROICalculator />
      <Footer />
    </main>
  );
}
