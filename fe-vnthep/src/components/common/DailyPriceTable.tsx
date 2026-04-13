import { FC } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface Props {
  sideBrandPrice: { label: string; price: number; change?: number; changeDir?: "up" | "down" }[];
}

export const DailyPriceTable: FC<Props> = ({ sideBrandPrice }) => {
  return (
    <Card>
      <CardHeader className="bg-slate-800 text-white px-4 py-3">
        <h3 className="text-[11px] font-bold">
          📊 GIÁ THÉP HÔM NAY
        </h3>
      </CardHeader>

      <CardContent className="p-2 flex flex-col gap-1.5">
        {sideBrandPrice.map((row) => (
          <div
            key={row.label}
            className="flex items-center gap-2 text-[12px] py-1"
          >
            <span className="flex-1 text-gray-700">
              {row.label}
            </span>

            <span className="font-bold text-gray-900">
              {typeof row.price === "number" ? row.price.toLocaleString("vi-VN") : row.price}
            </span>

            {row.change !== undefined && (
              <span
                className={`text-[10px] font-semibold min-w-10 text-right ${
                  row.changeDir === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {row.changeDir === "up" ? "▲" : "▼"}
                {row.change}%
              </span>
            )}
          </div>
        ))}

        <Button
          variant="ghost"
          size="sm"
          className="text-red-600 text-[12px] font-semibold border-t mt-2 w-full"
        >
          Xem bảng giá đầy đủ →
        </Button>
      </CardContent>
    </Card>
  );
}
