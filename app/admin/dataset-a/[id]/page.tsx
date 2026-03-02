export default async function DatasetADetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const items = [
    { id: "1", title: "Item One", status: "active" },
    { id: "2", title: "Item Two", status: "pending" },
    { id: "3", title: "Item Three", status: "inactive" },
  ];

  const item = items.find((i) => i.id === id);

  if (!item) {
    return <div>Not Found</div>;
  }

  return (
    <div>
      <h1>Dataset A Detail</h1>
      <div className="border border-gray-300 p-5">
        <div className="mb-3">
          <strong>ID:</strong> {item.id}
        </div>
        <div className="mb-3">
          <strong>Title:</strong> {item.title}
        </div>
        <div className="mb-3">
          <strong>Status:</strong> {item.status}
        </div>
      </div>
    </div>
  );
}