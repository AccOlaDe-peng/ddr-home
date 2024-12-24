import React from "react";
import { Layout } from "antd";
import "./style.scss";

const Header: React.FC = () => {
  return (
    <Layout.Header className="h-[56px] p-0 flex justify-between items-center headerContainer">
      <div className="logo"></div>
      <div></div>
    </Layout.Header>
  );
};

export default Header;
