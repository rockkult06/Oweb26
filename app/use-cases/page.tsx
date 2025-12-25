import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UseCasesHero from "@/components/use-cases/UseCasesHero";
import UseCasesGrid from "@/components/use-cases/UseCasesGrid";

export const dynamic = 'force-dynamic';

export default function UseCasesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <UseCasesHero />
      <UseCasesGrid />
      <Footer />
    </main>
  );
}
