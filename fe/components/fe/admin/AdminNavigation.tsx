import { Blocks, House, User } from 'lucide-react';
import Link from 'next/link';

export default function AdminNavigation() {
  return (
    <div className="mx-3">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-bold">GENARAL</h3>
        <ul>
          <li className="rounded-xl p-3 transition-all hover:bg-gray-500 hover:text-white">
            <Link href={`/admin`} className="flex gap-3">
              <House />
              <p>Dashboard</p>
            </Link>
          </li>

          <li className="rounded-xl p-3 transition-all hover:bg-gray-500 hover:text-white">
            <Link href={`/admin/customers`} className="flex gap-3">
              <User />
              <p>Customers</p>
            </Link>
          </li>

          <li className="rounded-xl p-3 transition-all hover:bg-gray-500 hover:text-white">
            <Link href={`/admin/products`} className="flex gap-3">
              <Blocks />
              <p>Products</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
