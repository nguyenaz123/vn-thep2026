import { Category } from "@/core/categories/categories.type";
import { FC } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

type Props = {
  category: Category;
}

export const CategoryCard: FC<Props> = ({ category }) => {
  return (
    <Card className="relative cursor-pointer transition hover:shadow-lg hover:-translate-y-0.5 flex-[1_1_130px] min-w-25">
      {/* HOT badge */}
      {category.hot && (
        <div className="absolute top-2 right-2 z-10">
          <Badge variant="destructive" className="text-[10px]">
            HOT
          </Badge>
        </div>
      )}

      {/* Content */}
      <CardContent className="p-3 mt-2 text-center flex flex-col items-center gap-1">
        {/* Icon */}
        <div className="text-[32px]">
          {category.icon}
        </div>

        {/* Name */}
        <p className="text-[13px] font-semibold text-gray-800 leading-[1.3]">
          {category.name}
        </p>

        {/* Count */}
        <p className="text-[11px] text-gray-500">
          {category.count.toLocaleString("vi-VN")} sản phẩm
        </p>
      </CardContent>
    </Card>
  );
}