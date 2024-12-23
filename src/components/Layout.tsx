/*
 * @Author: renchang.peng
 * @Date: 2024-12-23 16:03:47
 * @LastEditors: renchang.peng
 * @LastEditTime: 2024-12-23 17:29:06
 * @FilePath: /react-ddr-new/src/components/Layout.tsx
 * @Description:
 */
import { Layout } from "antd";
import React from "react";

const DDRLayout: React.FC = () => {
  return (
    <Layout>
      <Layout.Header>Header</Layout.Header>
      <Layout.Content>Content</Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
};

export default DDRLayout;
