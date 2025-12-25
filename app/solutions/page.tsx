import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import ModuleCatalog from "@/components/solutions/ModuleCatalog";
import IntegrationSection from "@/components/solutions/IntegrationSection";

export const dynamic = 'force-dynamic';

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SolutionsHero />
      <ModuleCatalog />
      <IntegrationSection />
      <Footer />
    </main>
  );
}
