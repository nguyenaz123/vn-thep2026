import { Button } from "@/components/ui/Button";
import { SearchPanel } from "@/components/landing/SearchPanel";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden rounded-3xl px-6 py-12 shadow-2xl shadow-slate-950/40 sm:px-10 sm:py-14 lg:px-16 lg:py-20"
      style={{
        backgroundImage:
          "radial-gradient(circle at top left, rgba(31,48,94,0.85), transparent 45%), linear-gradient(135deg, #0f172a 0%, #08122a 100%)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at top right, rgba(255,255,255,0.1), transparent 35%)",
        }}
      />
      <div className="relative z-10 grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-start">
        <div className="space-y-8 sm:space-y-10">
          <div className="space-y-2">
            <span className="inline-block rounded-full bg-red-600/90 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
              ❤ NỀN TẢNG B2B SẮT THÉP LỚN NHẤT VIỆT NAM
            </span>
          </div>

          <div className="max-w-2xl  space-y-6">
            <h1 className="text-6xl font-black leading-tight tracking-tight text-white sm:text-7xl lg:text-7xl xl:text-8xl">
              Kênh mua bán <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">SẮT THÉP</span> #1
            </h1>
            <p className="max-w-xl  text-lg leading-8 text-slate-100 sm:text-xl lg:text-2xl">
              Kết nối nhà cung cấp sắt thép với nhà thầu, đại lý và doanh nghiệp xây dựng toàn quốc.
              <span className="block mt-3 font-semibold text-slate-200">Giá minh bạch — Đối tác xác minh — 34 tỉnh thành</span>
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button className="rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 px-8 text-base shadow-lg transition-all hover:shadow-xl hover:scale-105" size="lg">
              🔥 Đăng bán miễn phí
            </Button>
            <Button variant="outline" className="rounded-lg border-2 border-white hover:text-white hover:bg-white/10 font-bold py-6 px-8 text-base transition-all hover:bg-white/20" size="lg">
              🔍 Tìm kiếm ngay
            </Button>
          </div>
        </div>

        <SearchPanel />
      </div>
    </section>
  );
}
