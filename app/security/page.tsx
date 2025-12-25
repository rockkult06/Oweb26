import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SecurityHero from "@/components/security/SecurityHero";
import SecurityFeatures from "@/components/security/SecurityFeatures";
import ComplianceSection from "@/components/security/ComplianceSection";

export default function SecurityPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SecurityHero />
      <SecurityFeatures />
      <ComplianceSection />
      <Footer />
    </main>
  );
}
