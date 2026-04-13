import { HeroSection } from "@/components/landing/HeroSection";
import { StatsBlock } from "@/components/landing/StatsBlock";
import { TopBar } from "@/components/landing/TopBar";
import { mockData } from "@/components/mockdata";
import { ProductList } from "@/components/products/ProductList";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <div className="mx-auto max-w-7xl lg:max-w-[80%] px-4 pb-20 pt-10 md:px-6 lg:px-8">
        <HeroSection />
        <div className="mt-20">
          <StatsBlock />
        </div>
        <div className="mt-24">
          <ProductList
            categories={mockData.categories}
            products={mockData.products}
            featuredBrand={mockData.featuredBrand}
            sideBrand={mockData.sideBrand}
          />
        </div>
      </div>
    </main>
  );
}
