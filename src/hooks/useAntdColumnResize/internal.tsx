/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import ResizableHeaderCell from "./resizableHeaderCell";
import { Column, resizeDataType } from "./types";
import useColumns from "./useColumns";

const InternalResizableColumn = (
  dataFunc: () => resizeDataType<Column>,
  dependencies: any[]
) => {
  const propsData = useMemo<resizeDataType<Column>>(() => {
    return dataFunc?.() ?? {};
  }, dependencies);
  const { resizableColumns, tableWidth, resetColumns } = useColumns(propsData);

  const components = useMemo(() => {
    return {
      header: {
        cell: ResizableHeaderCell,
      },
    };
  }, [propsData]);

  return { resizableColumns, components, tableWidth, resetColumns };
};

export default InternalResizableColumn;
