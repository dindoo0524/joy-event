import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-[200px] bg-gray-100 border-r border-gray-300 p-5">
        <nav>
          <div className="mb-3">
            <Link href="/admin" className="text-gray-800 no-underline">
              Dashboard
            </Link>
          </div>
          <div className="mb-3">
            <Link href="/admin/events" className="text-gray-800 no-underline">
              Events
            </Link>
          </div>
          <div className="mb-3">
            <Link href="/admin/dataset-a" className="text-gray-800 no-underline">
              Dataset A
            </Link>
          </div>
          <div className="mb-3">
            <Link href="/admin/dataset-b" className="text-gray-800 no-underline">
              Dataset B
            </Link>
          </div>
        </nav>
      </aside>
      <main className="flex-1 p-5">{children}</main>
    </div>
  );
}
