import React, { useMemo, useState } from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { Resizable } from "react-resizable";
import styles from "./style.module.scss";
import "react-resizable/css/styles.css";

const ResizableTitle: React.FC = ({ onResize, width, ...restProps }: any) => {
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
      minConstraints={[10, 0]}
      maxConstraints={[500, 0]}
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

type HandleResize = (
  event: React.SyntheticEvent,
  data: { size: { width: number } }
) => void;

const ResizableTable: React.FC<ResizableTableProps> = ({
  columns,
  ...props
}) => {
  const [cols, setCols] = useState<ColumnsType<any>>(columns);

  // 调整列宽时触发
  const handleResize: (index: number) => HandleResize =
    (index) =>
    (_, { size }) => {
      setCols((prevColumns) =>
        prevColumns.map((col, colIndex) =>
          colIndex === index ? { ...col, width: size.width } : col
        )
      );
    };

  const colsArray: any = useMemo(() => {
    return cols.map((col, index) => ({
      ...col,
      onHeaderCell: (column: any) => ({
        width: column.width,
        onResize: handleResize(index),
      }),
    }));
  }, [cols]);

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
