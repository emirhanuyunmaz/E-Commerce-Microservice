import { AdminCustomersTable } from '@/components/fe/admin/AdminCustomersTable';

export default function Page() {
  return (
    <div className="py-3">
      <div>
        <h4 className="text-lg font-bold">CUSTOMERS</h4>
      </div>
      <div>
        <AdminCustomersTable />
      </div>
    </div>
  );
}
