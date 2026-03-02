"use client";

import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/navigation";

type Item = {
  id: number;
  title: string;
  status: string;
};

const columnHelper = createColumnHelper<Item>();

const columns = [
  columnHelper.accessor("id", { header: "ID" }),
  columnHelper.accessor("title", { header: "Title" }),
  columnHelper.accessor("status", { header: "Status" }),
];

export default function DatasetAPage() {
  const router = useRouter();

  const items = [
    { id: 1, title: "Item One", status: "active" },
    { id: 2, title: "Item Two", status: "pending" },
    { id: 3, title: "Item Three", status: "inactive" },
  ];

  const table = useReactTable({
    data: items,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <h1>Dataset A</h1>
      <table className="w-full border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border border-gray-300 p-2 text-left">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              onClick={() => router.push(`/admin/dataset-a/${row.original.id}`)}
              className="cursor-pointer"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border border-gray-300 p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
