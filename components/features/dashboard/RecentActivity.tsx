import Card from "@/components/ui/Card";

export default function RecentActivity() {
  return (
    <Card>
      <h3 className="text-lg font-bold mb-4">Aktivitas Terbaru</h3>
      <ul className="space-y-4">
        <li className="flex items-center gap-4">
          <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full">
            <span className="material-symbols-outlined text-green-600 dark:text-green-300">receipt_long</span>
          </div>
          <div>
            <p>
              Sale #1234 - <span className="font-bold">Rp 150.000</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">2 minutes ago</p>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
            <span className="material-symbols-outlined text-blue-600 dark:text-blue-300">inventory</span>
          </div>
          <div>
            <p>Stock In: 10x Biji Kopi</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">1 hour ago</p>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full">
            <span className="material-symbols-outlined text-green-600 dark:text-green-300">receipt_long</span>
          </div>
          <div>
            <p>
              Sale #1233 - <span className="font-bold">Rp 75.000</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
          </div>
        </li>
      </ul>
    </Card>
  );
}
