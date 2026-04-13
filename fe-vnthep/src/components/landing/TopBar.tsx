import { Button } from "@/components/ui/Button";

export function TopBar() {
  return (
    <div className="border-b border-white/10 bg-slate-950/95 text-slate-200 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 sm:gap-3">
          <span className="rounded-full bg-orange-600/90 px-4 py-2 font-bold text-white shadow-lg">
            🔥 Giá thép D16 hôm nay: 17,200đ/kg +200đ so hôm qua
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 justify-end">
          <Button variant="ghost" size="sm" className="border border-white/10 px-4 text-slate-200 hover:bg-white/10 transition-all">
            Hỗ trợ
          </Button>
          <Button variant="ghost" size="sm" className="border border-white/10 px-4 text-slate-200 hover:bg-white/10 transition-all">
            Đăng nhập
          </Button>
          <Button variant="secondary" size="sm" className="rounded-full px-6 py-2 bg-white/10 hover:bg-white/20 transition-all">
            Đăng ký miễn phí
          </Button>
          <Button size="sm" className="rounded-full px-6 py-2 bg-orange-600 hover:bg-orange-700 transition-all">
            Đăng tin bán
          </Button>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-lg font-semibold text-white">
          <div className="h-10 w-10 rounded-full bg-orange-600 shadow-lg shadow-orange-600/30 flex items-center justify-center">
            <span className="text-white font-black text-sm">VN</span>
          </div>
          <span className="font-black tracking-wide">VNSATTHEP.VN</span>
        </div>
        <nav className="flex flex-wrap items-center gap-6 text-sm text-slate-300 sm:justify-end">
          <a href="#" className="transition hover:text-orange-400 font-medium">Trang chủ</a>
          <a href="#" className="transition hover:text-orange-400 font-medium">Sản phẩm</a>
          <a href="#" className="transition hover:text-orange-400 font-medium">Nhà cung cấp</a>
          <a href="#" className="transition hover:text-orange-400 font-medium">Bảng giá thép</a>
          <a href="#" className="transition hover:text-orange-400 font-medium">Tin tức</a>
        </nav>
      </div>
    </div>
  );
}
