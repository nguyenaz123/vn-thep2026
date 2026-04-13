import { FC } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type Props = {
  featuredBrand: {
    name: string;
    tagline: string;
    productName: string;
    price: number;
    unit: string;
    tags: string[];
  };
}

export const TopBanner: FC<Props> = ({ featuredBrand }) => {
  return (
    <Card className="relative bg-slate-900 border-0 mb-9 overflow-hidden">
      <CardContent className="p-8 flex items-center gap-8 flex-wrap">
        <div className="min-w-35">
          <div className="text-[22px] font-black text-white tracking-wide mb-1">
            {featuredBrand.name}
          </div>
          <p className="text-[11px] text-slate-400">{featuredBrand.tagline}</p>
        </div>

        <div className="flex-1 min-w-50">
          <h3 className="text-[16px] font-bold text-slate-100 mb-2">
            {featuredBrand.productName}
          </h3>

          <div className="flex gap-1.5 flex-wrap">
            {featuredBrand.tags.map((t) => (
              <Badge key={t} variant="secondary" className="text-[11px]">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        <div className="text-right min-w-40">
          <div className="text-[28px] font-black text-amber-500">
            {typeof featuredBrand.price === "number" ? featuredBrand.price.toLocaleString("vi-VN") : featuredBrand.price}
            <span className="text-[13px] text-slate-400 font-normal">
              {" "}
              /{featuredBrand.unit}
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1 mb-2">
            Giá hôm nay
          </p>

          <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 text-[13px] font-extrabold">
            XEM SẢN PHẨM →
          </Button>
        </div>

        <span className="absolute top-2.5 right-3 text-[10px] text-slate-500 tracking-wide">
          QUẢNG CÁO
        </span>
      </CardContent>
    </Card>
  );
}
