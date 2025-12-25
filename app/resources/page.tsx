import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ResourcesHero from "@/components/resources/ResourcesHero";
import ResourcesGrid from "@/components/resources/ResourcesGrid";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ResourcesHero />
      <ResourcesGrid />
      <Footer />
    </main>
  );
}
