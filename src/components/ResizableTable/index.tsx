import {
  useReactTable,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import styles from "./style.module.scss";

interface TableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData, any>[];
  pageSize?: number; // 默认每页行数
  onRowClick?: (row: TData) => void; // 行点击事件回调
}

const Table = <TData extends object>({
  data,
  columns,
  pageSize = 10,
  onRowClick,
}: TableProps<TData>) => {
  const table = useReactTable({
    data,
    columns,
    initialState: {
      pagination: { pageSize },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className={styles.resizableTable}>
      <table className="table-auto border-collapse w-full border border-gray-300">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border border-gray-300 px-4 py-2 text-left"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => onRowClick?.(row.original)}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border border-gray-300 px-4 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* 分页控件 */}
      <div className="flex items-center justify-between mt-4">
        <button
          className="px-2 py-1 border rounded disabled:opacity-50"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          上一页
        </button>
        <span>
          第 {table.getState().pagination.pageIndex + 1} 页，共{" "}
          {table.getPageCount()} 页
        </span>
        <button
          className="px-2 py-1 border rounded disabled:opacity-50"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          下一页
        </button>
      </div>
    </div>
  );
};

export default Table;
