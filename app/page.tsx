import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="h-full">
        <Hero />
      </main>
    </div>
  );
}
