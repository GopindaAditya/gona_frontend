import Card from "@/components/ui/Card";

const items = [
  { name: "Kopi Susu Gula Aren", percent: 80, count: 120 },
  { name: "Americano", percent: 63, count: 95 },
  { name: "Croissant Coklat", percent: 58, count: 88 },
  { name: "Teh Melati", percent: 50, count: 76 },
  { name: "Air Mineral", percent: 43, count: 65 },
];

export default function TopProducts() {
  return (
    <Card>
      <h3 className="text-lg font-bold mb-4">Produk Terlaris</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.name} className="flex items-center justify-between py-2">
            <div className="flex-1 mr-4">
              <p className="font-medium">{item.name}</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${item.percent}%` }}
                />
              </div>
            </div>
            <span className="font-bold text-sm whitespace-nowrap">{item.count}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
