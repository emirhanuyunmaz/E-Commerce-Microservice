import AdminNavigation from '@/components/fe/admin/AdminNavigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[80vh]">
      <div className="flex gap-3">
        <div className="w-1/6 border-e">
          <AdminNavigation />
        </div>
        <div className="w-4/5">{children}</div>
      </div>
    </div>
  );
}
