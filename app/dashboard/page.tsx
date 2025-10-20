import Sidebar from "@/components/layouts/Sidebar";
// import Header from "@/components/layouts/Header";
import StatCard from "@/components/features/dashboard/StatCard";
import SalesChart from "@/components/features/dashboard/SalesChart";
// import TopProducts from "@/components/features/dashboard/TopProducts";
// import LowStockTable from "@/components/features/dashboard/LowStockTable";
// import RecentActivity from "@/components/features/dashboard/RecentActivity";
import Button from "@/components/ui/Button";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        {/* <Header /> */}

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Penjualan Hari Ini" value="Rp 1.500.000" trend="+10%" trendType="up" />
          <StatCard title="Jumlah Transaksi" value="50" trend="-5%" trendType="down" />
          <StatCard title="Stok Rendah" value="12 items" trend="+2%" trendType="neutral" />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <Button variant="primary" icon="add_shopping_cart">Buat Penjualan Baru</Button>
          <Button variant="outline" icon="add_box">Tambah Produk</Button>
        </div>

        {/* Charts and Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          {/* <TopProducts />
          <div className="lg:col-span-2">
            <LowStockTable />
          </div>
          <RecentActivity /> */}
        </div>
      </main>
    </div>
  );
}
