import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: "200px",
          backgroundColor: "#f5f5f5",
          borderRight: "1px solid #ddd",
          padding: "20px",
        }}
      >
        <nav>
          <div style={{ marginBottom: "10px" }}>
            <Link href="/admin" style={{ color: "#333", textDecoration: "none" }}>
              Dashboard
            </Link>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Link
              href="/admin/events"
              style={{ color: "#333", textDecoration: "none" }}
            >
              Events
            </Link>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Link
              href="/admin/dataset-a"
              style={{ color: "#333", textDecoration: "none" }}
            >
              Dataset A
            </Link>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Link
              href="/admin/dataset-b"
              style={{ color: "#333", textDecoration: "none" }}
            >
              Dataset B
            </Link>
          </div>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: "20px" }}>{children}</main>
    </div>
  );
}
