import { AdminProductsTable } from '@/components/fe/admin/AdminProductsTable';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="py-3">
      <div className="flex justify-between">
        <h4 className="text-lg font-bold">PRODUCTS</h4>
        <div>
          <Button variant={`outline`} asChild>
            <Link href={`/admin/products/addUpdateProduct`}>+Add Product</Link>
          </Button>
        </div>
      </div>
      <div>
        <AdminProductsTable />
      </div>
    </div>
  );
}
