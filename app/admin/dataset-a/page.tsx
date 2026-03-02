export default function DatasetAPage() {
  const items = [
    { id: 1, title: "Item One", status: "active" },
    { id: 2, title: "Item Two", status: "pending" },
    { id: 3, title: "Item Three", status: "inactive" },
  ];

  return (
    <div>
      <h1>Dataset A</h1>
      {items.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ddd" }}>
          <div>ID: {item.id}</div>
          <div>Title: {item.title}</div>
          <div>Status: {item.status}</div>
        </div>
      ))}
    </div>
  );
}
