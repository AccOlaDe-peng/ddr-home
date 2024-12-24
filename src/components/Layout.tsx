/*
 * @Author: renchang.peng
 * @Date: 2024-12-23 16:03:47
 * @LastEditors: renchang.peng
 * @LastEditTime: 2024-12-24 15:30:14
 * @FilePath: /react-ddr-new/src/components/Layout.tsx
 * @Description:
 */
import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Header from "./Header";

const DDRLayout: React.FC = () => {
  return (
    <Layout className="w-screen h-screen">
      <Header />
      <Layout.Content>
        <Outlet />
      </Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
};

export default DDRLayout;
