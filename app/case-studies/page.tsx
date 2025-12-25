import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import CaseStudiesList from "@/components/case-studies/CaseStudiesList";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CaseStudiesHero />
      <CaseStudiesList />
      <Footer />
    </main>
  );
}
