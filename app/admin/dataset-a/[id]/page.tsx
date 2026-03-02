export default async function DatasetADetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const items = [
    { id: 1, title: "Item One", status: "active" },
    { id: 2, title: "Item Two", status: "pending" },
    { id: 3, title: "Item Three", status: "inactive" },
  ];

  const item = items.find((i) => i.id === parseInt(id));

  if (!item) {
    return <div>Not Found</div>;
  }

  return (
    <div>
      <h1>Dataset A Detail</h1>
      <div style={{ border: "1px solid #ddd", padding: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <strong>ID:</strong> {item.id}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>Title:</strong> {item.title}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>Status:</strong> {item.status}
        </div>
      </div>
    </div>
  );
}
