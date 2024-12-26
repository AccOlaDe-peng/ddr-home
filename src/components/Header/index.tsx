import React from "react";
import { Layout } from "antd";
import "./style.scss";

const Header: React.FC = () => {
  return (
    <Layout.Header className="h-[56px] p-0 flex justify-between items-center headerContainer text-white">
      <div className="logo"></div>
      <div className="flex items-center justify-between flex-1">
        <div>menu</div>
        <div className="flex mr-8"></div>
      </div>
    </Layout.Header>
  );
};

export default Header;
