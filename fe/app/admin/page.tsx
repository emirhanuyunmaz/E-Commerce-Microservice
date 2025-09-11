import { AdminDashboardTable } from '@/components/fe/admin/AdminDashboardTable';

export default function Page() {
  return (
    <div className="py-3">
      <div>
        <h4 className="text-lg font-bold">DASHBOARD</h4>
      </div>
      <div>
        <AdminDashboardTable />
      </div>
    </div>
  );
}
