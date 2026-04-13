"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { NativeSelect } from "@/components/ui/NativeSelect";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { TopBanner } from "@/components/common/banner/TopBanner";

const productOptions = [
  "Thép xây dựng (cây/cuộn)",
  "Thép hình",
  "Thép cuộn",
  "Thép ống",
];

const cityOptions = [
  "Tất cả tỉnh thành",
  "Hà Nội",
  "Hồ Chí Minh",
  "Đà Nẵng",
  "Hải Phòng",
];

const featuredBrand = {
  name: "HOÀ PHÁT",
  tagline: "Nhà sản xuất hàng đầu",
  productName: "Thép cây · Thép cuộn · Thép hình · CO/CQ đầy đủ",
  price: 17200,
  unit: "kg",
  tags: ["QC", "Đảm bảo chất lượng"],
};

export function SearchPanel() {
  const [searchType, setSearchType] = useState("mua");

  return (
    <Card className="lg:sticky lg:top-8 lg:self-start overflow-hidden border-0 shadow-xl bg-white/95 backdrop-blur-sm">
      <div className="rounded-2xl bg-white">
        <div className="border-b border-slate-100 px-6 py-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-slate-950">Tìm kiếm sản phẩm</h2>
            <p className="text-sm text-slate-600">
              Tìm sản phẩm, tỉnh thành và giá nhanh chóng
            </p>
          </div>
        </div>

        <div className="px-6 py-6">
          <Tabs defaultValue="mua" value={searchType} onValueChange={setSearchType}>
            <TabsList className="grid w-full grid-cols-2 h-12! gap-2 rounded-lg bg-slate-100 p-1 mb-6">
              <TabsTrigger value="mua" className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold rounded-md transition-all">
                <span>🔍</span> Tìm mua thép
              </TabsTrigger>

              <TabsTrigger value="ncc" className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold rounded-md transition-all">
                <span>🏭</span> Tìm nhà cung cấp
              </TabsTrigger>
            </TabsList>

            <TabsContent value="mua" className="mt-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="product-type" className="text-xs font-semibold text-slate-700">Loại sản phẩm *</Label>
                <NativeSelect
                  id="product-type"
                  defaultValue={productOptions[0]}
                  className="bg-slate-50 text-slate-900 border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-full"
                >
                  {productOptions.map((item) => (
                    <option key={item} value={item} className="bg-white text-slate-900">
                      {item}
                    </option>
                  ))}
                </NativeSelect>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city" className="text-xs font-semibold text-slate-700">Tỉnh / Thành phố</Label>
                <NativeSelect
                  id="city"
                  defaultValue={cityOptions[0]}
                  className="bg-slate-50 text-slate-900 border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-full"
                >
                  {cityOptions.map((city) => (
                    <option key={city} value={city} className="bg-white text-slate-900">
                      {city}
                    </option>
                  ))}
                </NativeSelect>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity" className="text-xs font-semibold text-slate-700">Số lượng (tấn)</Label>
                <Input
                  id="quantity"
                  placeholder="VD: 10 tấn"
                  className="bg-slate-50 text-slate-900 border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="keyword" className="text-xs font-semibold text-slate-700">Từ khóa</Label>
                <Input
                  id="keyword"
                  placeholder="CB300V, Hòa Phát..."
                  className="bg-slate-50 text-slate-900 border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <Button className="w-full justify-center rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold py-5 text-sm transition-all hover:shadow-lg" size="lg">
                🔎 TÌM KIẾM NGAY
              </Button>
            </TabsContent>

            <TabsContent value="ncc" className="mt-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="supplier-type" className="text-xs font-semibold text-slate-700">Lĩnh vực</Label>
                <NativeSelect
                  id="supplier-type"
                  defaultValue="Nhà cung cấp sắt thép"
                  className="bg-slate-50 text-slate-900 border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-full"
                >
                  <option value="Nhà cung cấp sắt thép">Nhà cung cấp sắt thép</option>
                  <option value="Nhà sản xuất">Nhà sản xuất</option>
                </NativeSelect>
              </div>
              <div className="space-y-2">
                <Label htmlFor="supplier-city" className="text-xs font-semibold text-slate-700">Tỉnh / Thành phố</Label>
                <NativeSelect
                  id="supplier-city"
                  defaultValue={cityOptions[0]}
                  className="bg-slate-50 text-slate-900 border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-full"
                >
                  {cityOptions.map((city) => (
                    <option key={city} value={city} className="bg-white text-slate-900">
                      {city}
                    </option>
                  ))}
                </NativeSelect>
              </div>
              <div className="space-y-2">
                <Label htmlFor="supplier-keyword" className="text-xs font-semibold text-slate-700">Từ khóa</Label>
                <Input
                  id="supplier-keyword"
                  placeholder="Hòa Phát, miền Bắc..."
                  className="bg-slate-50 text-slate-900 border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <Button className="w-full justify-center rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold py-5 text-sm transition-all hover:shadow-lg" size="lg">
                🔎 TÌM NHÀ CUNG CẤP
              </Button>
            </TabsContent>
          </Tabs>
        </div>

        <div className="border-t border-slate-100 px-6 py-6 bg-slate-50">
          <TopBanner featuredBrand={featuredBrand} />
        </div>
      </div>
    </Card>
  );
}
