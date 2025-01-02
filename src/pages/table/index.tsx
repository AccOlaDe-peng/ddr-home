import React, { useState } from "react";
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

type RowData = {
  id: number;
  name: string;
  age: number;
};

const columnHelper = createColumnHelper<RowData>();

const ResizableTable: React.FC = () => {
  const [data] = useState<RowData[]>([
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Smith", age: 34 },
    { id: 3, name: "Alice Johnson", age: 45 },
  ]);

  const [columnSizes, setColumnSizes] = useState<{ [key: string]: number }>({});

  const columns = [
    columnHelper.accessor("id", {
      header: "ID",
      size: columnSizes["id"] || 50,
    }),
    columnHelper.accessor("name", {
      header: "Name",
      size: columnSizes["name"] || 150,
    }),
    columnHelper.accessor("age", {
      header: "Age",
      size: columnSizes["age"] || 100,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
    state: {
      columnSizing: columnSizes,
    },
    onColumnSizingChange: setColumnSizes,
  });

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{
                    width: header.getSize(),
                    position: "relative",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </span>
                    {/* Resizer */}
                    {header.column.getCanResize() && (
                      <div
                        style={{
                          width: "5px",
                          cursor: "col-resize",
                          userSelect: "none",
                          touchAction: "none",
                          position: "absolute",
                          right: 0,
                          top: 0,
                          bottom: 0,
                        }}
                        onMouseDown={(e) => {
                          const startX = e.clientX;
                          const startSize = header.getSize();

                          const onMouseMove = (moveEvent: MouseEvent) => {
                            const newSize =
                              startSize + moveEvent.clientX - startX;
                            setColumnSizes((prev) => ({
                              ...prev,
                              [header.id]: Math.max(newSize, 50),
                            }));
                          };

                          const onMouseUp = () => {
                            document.removeEventListener(
                              "mousemove",
                              onMouseMove
                            );
                            document.removeEventListener("mouseup", onMouseUp);
                          };

                          document.addEventListener("mousemove", onMouseMove);
                          document.addEventListener("mouseup", onMouseUp);
                        }}
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{
                    width: cell.column.getSize(),
                    borderBottom: "1px solid #ddd",
                    padding: "8px",
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResizableTable;
