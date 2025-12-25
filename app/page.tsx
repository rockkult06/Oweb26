import dynamic from "next/dynamic";

const HomeContent = dynamic(() => import("@/components/home/HomeContent"), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black" />
});

export default function Home() {
  return <HomeContent />;
}
