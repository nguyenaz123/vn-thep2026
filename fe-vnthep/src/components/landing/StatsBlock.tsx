import { Card, CardContent } from "@/components/ui/Card";

const stats = [
  { label: "Nhà cung cấp", value: "2,400+", icon: "🏭" },
  { label: "Sản phẩm", value: "18,000+", icon: "📦" },
  { label: "Tỉnh thành", value: "34", icon: "📍" },
];

export function StatsBlock() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {stats.map((item) => (
        <Card key={item.label} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-slate-50">
          <CardContent className="p-10 text-center">
            <div className="text-5xl mb-4">{item.icon}</div>
            <div className="text-5xl font-black text-orange-600 mb-3 tracking-tight">{item.value}</div>
            <p className="text-lg font-bold text-slate-800 uppercase tracking-wide">{item.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
