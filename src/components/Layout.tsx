/*
 * @Author: renchang.peng
 * @Date: 2024-12-23 16:03:47
 * @LastEditors: renchang.peng
 * @LastEditTime: 2024-12-24 13:57:03
 * @FilePath: /react-ddr-new/src/components/Layout.tsx
 * @Description:
 */
import { Button, Layout } from "antd";
import React from "react";

const DDRLayout: React.FC = () => {
  return (
    <div className="bg-gray-400 flex">
      <Button type="primary" className="text-red-500">
        Hello World
      </Button>
      <Layout className="w-screen h-screen">
        <Layout.Header>Header</Layout.Header>
        <Layout.Content>Content</Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </div>
  );
};

export default DDRLayout;
