import { ProductResponse } from "@/core/products/products.repository";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Avatar, AvatarFallback } from "@/components/ui/Avatar";

type Props = {
  product: ProductResponse
}

const BADGE_VARIANTS: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  HOT: "destructive",
  MỚI: "secondary",
  VIP: "default",
};

export const ProductCard: FC<Props> = ({ product }) => {
  const badgeVariant = BADGE_VARIANTS[product.badge as string] ?? "outline";
  
  return (
   <Card className="group relative overflow-hidden rounded-xl border bg-white transition-all hover:shadow-xl hover:-translate-y-1">
  
  {/* Badge */}
  {product.badge && (
    <div className="absolute top-3 left-3 z-10">
      <Badge variant={badgeVariant} className="text-[10px] px-2 py-0.5 shadow">
        {product.discount ? `-${product.discount}%` : product.badge}
      </Badge>
    </div>
  )}

  {/* Image */}
  <div className="h-32 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 group-hover:scale-105 transition">
    <span className="text-5xl">{product.icon ?? "🔩"}</span>
  </div>

  <CardContent className="p-4 flex flex-col gap-2">
    
    {/* Seller */}
    <div className="flex items-center gap-2 text-xs">
      <Avatar className="h-6 w-6">
        <AvatarFallback className="bg-gray-300 text-[11px] font-bold">
          {product.sellerInitial}
        </AvatarFallback>
      </Avatar>

      <span className="font-medium text-gray-700">
        {product.seller}
      </span>

      {product.verified && (
        <span className="text-green-600 text-[11px]">✔</span>
      )}
    </div>

    {/* Name */}
    <p className="text-lg font-semibold text-gray-900 line-clamp-1 min-h-[60px] group-hover:text-red-600 transition">
      {product.name}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-1">
      {product.tags.slice(0, 3).map((t) => (
        <span
          key={t}
          className="text-[10px] px-2 py-0.5 bg-gray-100 rounded-full text-gray-600"
        >
          {t}
        </span>
      ))}
    </div>

    {/* Price */}
    <div className="flex items-end gap-1 mt-1">
      <span className="text-lg font-extrabold text-red-600 ">
        {typeof product.price === "number"
          ? product.price.toLocaleString("vi-VN")
          : product.price}
      </span>

      <span className="text-xs text-gray-500">
        /{product.unit ?? "kg"}
      </span>
    </div>

    {/* Button */}
    <button className="mt-2 w-full py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-red-600 transition">
      Liên hệ
    </button>

    {/* Meta */}
    <div className="flex justify-between text-[11px] text-gray-400 pt-1">
      <span>👁 {product.views.toLocaleString("vi-VN")}</span>
      <span>📍 {product.location}</span>
    </div>
  </CardContent>
</Card>
  );
}