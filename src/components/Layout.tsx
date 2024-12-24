/*
 * @Author: renchang.peng
 * @Date: 2024-12-23 16:03:47
 * @LastEditors: renchang.peng
 * @LastEditTime: 2024-12-24 14:51:22
 * @FilePath: /react-ddr-new/src/components/Layout.tsx
 * @Description:
 */
import { Layout } from "antd";
import React from "react";
import Header from "./Header";

const DDRLayout: React.FC = () => {
  return (
    <Layout className="w-screen h-screen">
      <Header />
      <Layout.Content>Content</Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
};

export default DDRLayout;
