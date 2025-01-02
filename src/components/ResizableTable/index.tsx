import React, { useState } from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { Resizable } from "react-resizable";
import styles from "./style.module.scss";
import "react-resizable/css/styles.css";

const ResizableTitle = ({ onResize, width, ...restProps }: any) => {
  if (!width) {
    return <th {...restProps} />;
  }

  if (!onResize) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className={styles.reactResizableHandle}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th
        {...restProps}
        // 取消标题可选
        style={{ ...restProps?.style, userSelect: "none" }}
      />
    </Resizable>
  );
};

type extendsProps = {
  //   stateKey: string; //key必须输入且唯一S
  //   initialParamsValue?: any;
  columns: ColumnsType<any>;
};

type ResizableTableProps = TableProps<any> & extendsProps;

const ResizableTable: React.FC<ResizableTableProps> = ({
  columns,
  ...props
}) => {
  const [cols, setCols] = useState<ColumnsType<any>>(columns);

  // 调整列宽时触发
  const handleResize =
    (index: number) =>
    (
      _: React.MouseEvent<HTMLDivElement>,
      { size }: { size: { width: number } }
    ) => {
      setCols((prevColumns) => {
        const nextColumns = [...prevColumns];
        nextColumns[index] = {
          ...nextColumns[index],
          width: size.width,
        };
        return nextColumns;
      });
    };

  const colsArray: ColumnsType<any> = cols.map((col, index) => ({
    ...col,
    onHeaderCell: (column: any) => ({
      width: column.width,
      onResize: handleResize(index),
    }),
  }));

  return (
    <Table
      components={{ header: { cell: ResizableTitle } }}
      columns={colsArray}
      bordered
      {...props}
    />
  );
};

export default ResizableTable;
