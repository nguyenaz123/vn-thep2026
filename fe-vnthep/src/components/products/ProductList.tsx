"use client";

import { Category } from "@/core/categories/categories.type";
import { ProductResponse } from "@/core/products/products.repository";
import { useState } from "react";
import { CategoryCard } from "../categories/CategoryCard";
import { SideBanner } from "../common/banner/SideBanner";
import { TopBanner } from "../common/banner/TopBanner";
import { DailyPriceTable } from "../common/DailyPriceTable";
import { ProductCard } from "./ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/Carousel";
import { Card, CardContent } from "../ui/Card";

export interface SteelProductSectionProps {
  categories: Category[];
  products: ProductResponse[];
  title?: string;
  subtitle?: string;
  totalListings?: number;
  featuredBrand?: {
    name: string;
    tagline: string;
    productName: string;
    price: number;
    unit: string;
    tags: string[];
  };
  sideBrand?: {
    name: string;
    initial: string;
    tagline: string;
    topSeller?: boolean;
    priceList: { label: string; price: number }[];
    priceTable?: { label: string; price: number; change?: number; changeDir?: "up" | "down" }[];
  };
}

export const ProductList = ({
  categories,
  products,
  title = "Sản phẩm",
  subtitle = "Hơn 200 chủng loại từ nhà cung cấp uy tín trên 34 tỉnh thành",
  totalListings = 18000,
  featuredBrand,
  sideBrand,
}: SteelProductSectionProps) => {
  const [activeTab, setActiveTab] = useState<"hot" | "new" | "verified">("hot");

  const filtered =
    activeTab === "hot"
      ? products.filter((p) => p.badge === "HOT" || (p.views ?? 0) > 500)
      : activeTab === "new"
        ? products.filter((p) => p.badge === "MỚI")
        : products.filter((p) => p.verified);

  const displayed = filtered.length > 0 ? filtered : products;

  return (
   <div className="max-w-[1200px] lg:max-w-[80%] mx-auto px-4 pb-20 pt-10 md:px-6 lg:px-8">
  
  {/* HEADER */}
  <div className="mb-8">
    <div className="flex items-center justify-between flex-wrap gap-4">
      <div>
        <p className="text-[11px] font-semibold text-red-500 tracking-widest uppercase mb-1">
          Marketplace
        </p>

        <h2 className="text-3xl font-extrabold leading-tight">
          Sản phẩm <span className="text-red-600">sắt thép</span>
        </h2>

        <p className="text-sm text-gray-500 mt-1 max-w-[500px]">
          {subtitle}
        </p>
      </div>

      <button className="px-5 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-medium hover:border-red-500 hover:text-red-600 transition shadow-sm">
        Xem tất cả →
      </button>
    </div>
  </div>

  {/* CATEGORIES */}
  
   <Carousel
  opts={{
    align: "start",
  }}
  className="w-full py-5" 
>
  <CarouselContent className="-ml-3 flex gap-4">
    {categories.map((cat) => (
      <CarouselItem key={cat.id} className="pl-3 basis-full md:basis-[50%] lg:basis-[20%]">
        <CategoryCard category={cat} />
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>

  {/* FEATURED */}
  {featuredBrand && (
    <div className="mb-8">
      <TopBanner featuredBrand={featuredBrand} />
    </div>
  )}

  {/* LISTING HEADER */}
  <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
    <div>
      <h3 className="text-xl font-bold">
        Tin đăng <span className="text-red-600">mới nhất</span>
      </h3>
      <p className="text-sm text-gray-500">
        Cập nhật liên tục từ nhà cung cấp uy tín
      </p>
    </div>

    {/* Tabs */}
    <div className="flex bg-gray-100 rounded-full p-1">
      {["hot", "new", "verified"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab as any)}
          className={`px-4 py-1.5 text-xs rounded-full transition font-medium ${
            activeTab === tab
              ? "bg-white shadow text-red-600"
              : "text-gray-600 hover:text-red-600"
          }`}
        >
          {tab === "hot" && "🔥 Hot"}
          {tab === "new" && "🕐 Mới"}
          {tab === "verified" && "✅ Xác minh"}
        </button>
      ))}
    </div>
  </div>

  {/* GRID */}
  <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
    
    {/* PRODUCTS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {displayed.slice(0, 6).map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>

    {/* SIDE */}
    {sideBrand && (
      <div className="flex flex-col gap-5">
        <div className="bg-white border rounded-xl shadow-sm p-4">
          <SideBanner sideBrand={sideBrand} />
        </div>

        {sideBrand.priceTable && (
          <div className="bg-white border rounded-xl shadow-sm p-4">
            <DailyPriceTable sideBrandPrice={sideBrand.priceTable} />
          </div>
        )}
      </div>
    )}
  </div>

  {/* FOOTER */}
  <div className="mt-10 text-center">
    <p className="text-sm text-gray-500 mb-3">
      Hiển thị <strong>6 / {totalListings.toLocaleString("vi-VN")}+</strong> sản phẩm
    </p>

    <button className="px-8 py-3 rounded-xl bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition">
      Xem tất cả
    </button>
  </div>
</div>
  );
}