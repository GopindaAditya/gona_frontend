import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function LowStockTable() {
  return (
    <Card>
      <h3 className="text-lg font-bold mb-4">Peringatan Stok</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 dark:text-gray-400">
              <th className="py-2 font-medium">Nama Produk</th>
              <th className="py-2 font-medium">Sisa Stok</th>
              <th className="py-2 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3">Biji Kopi Arabika</td>
              <td className="py-3 text-danger font-medium">5 pcs</td>
              <td className="py-3 text-right">
                <Button variant="primary" className="h-8 px-3 text-sm font-bold">Order</Button>
              </td>
            </tr>
            <tr>
              <td className="py-3">Susu UHT Full Cream</td>
              <td className="py-3 text-danger font-medium">2 pcs</td>
              <td className="py-3 text-right">
                <Button variant="primary" className="h-8 px-3 text-sm font-bold">Order</Button>
              </td>
            </tr>
            <tr>
              <td className="py-3">Gula Aren Cair</td>
              <td className="py-3 text-danger font-medium">1 pcs</td>
              <td className="py-3 text-right">
                <Button variant="primary" className="h-8 px-3 text-sm font-bold">Order</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
}
