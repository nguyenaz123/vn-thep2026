// page.tsx — Example usage of SteelProductSection

import { mockData } from "@/components/mockdata";
import { ProductList } from "@/components/products/ProductList";



export default function Page() {
  return (
    <main className="px-4 py-0 bg-[#f9fafb] min-h-screen">
      <ProductList
        categories={mockData.categories}
        products={mockData.products}
        featuredBrand={mockData.featuredBrand}
        sideBrand={mockData.sideBrand}


      />
    </main >
  );
}
