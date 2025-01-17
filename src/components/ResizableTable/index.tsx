import React from "react";
import { Button, Divider, Table } from "antd";
import { useAntdColumnResize } from "react-antd-column-resize";
import type { ColumnsType } from "antd/es/table";

const App: React.FC = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 200,
      align: "center",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: 100,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 300,
    },
    {
      title: "phone",
      dataIndex: "phone",
      key: "phone",
      fixed: "right",
      //width:"必须有一项不设置宽度，不然会造成拖动异常"
      //width:"必须有一项不设置宽度，不然会造成拖动异常"
      //width:"必须有一项不设置宽度，不然会造成拖动异常"
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Doe",
      age: 32,
      address: "123 Street, City",
      phone: "1588553336",
    },
    {
      key: "2",
      name: "Jane Smith",
      age: 28,
      address: "456 Road, Town",
      phone: "1588553336",
    },
  ];
  const { resizableColumns, components, tableWidth, resetColumns } =
    useAntdColumnResize(() => {
      return { columns, minWidth: 100 };
    }, []);

  return (
    <div>
      <Button onClick={resetColumns}>重置Columns</Button>
      <Divider />
      <Table
        columns={resizableColumns as ColumnsType<any>}
        dataSource={data}
        components={components}
        bordered
        scroll={{ x: tableWidth }}
      />
    </div>
  );
};

export default App;
