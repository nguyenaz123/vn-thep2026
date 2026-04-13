import { FC } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface Props {
  sideBrand: {
    name: string;
    initial: string;
    tagline: string;
    topSeller?: boolean;
    priceList: { label: string; price: number }[];
    priceTable?: { label: string; price: number; change?: number; changeDir?: "up" | "down" }[];
  };
}

export const SideBanner: FC<Props> = ({ sideBrand }) => {
  return (
    <Card className="bg-slate-900 border-0 text-white">
      <CardHeader className="pb-3">
        <h3 className="text-[16px] font-black">{sideBrand.name}</h3>
        <p className="text-[11px] text-slate-400 mt-1">
          {sideBrand.tagline}
        </p>

        {sideBrand.topSeller && (
          <Badge variant="secondary" className="text-[10px] bg-amber-500/20 text-amber-300 border-0 mt-2 w-fit">
            🏆 Top seller
          </Badge>
        )}
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="bg-amber-500/20 border border-amber-500/30 rounded-lg p-2.5">
          <p className="text-[9px] text-slate-400">GIÁ HÔM NAY</p>
          <p className="text-[22px] font-black text-amber-500">
            {typeof sideBrand.priceList[0]?.price === "number" ? sideBrand.priceList[0]?.price.toLocaleString("vi-VN") : sideBrand.priceList[0]?.price}
          </p>
          <p className="text-[11px] text-slate-400">
            {sideBrand.priceList[0]?.label}
          </p>
        </div>

        <ul className="flex flex-col gap-1.5">
          {sideBrand.priceList.map((item) => (
            <li
              key={item.label}
              className="flex justify-between text-[12px] text-slate-300"
            >
              <span>{item.label}</span>
              <span className="font-bold text-amber-500">
                {typeof item.price === "number" ? item.price.toLocaleString("vi-VN") : item.price}
              </span>
            </li>
          ))}
        </ul>

        <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold w-full">
          XEM SẢN PHẨM →
        </Button>
      </CardContent>
    </Card>
  );
}
