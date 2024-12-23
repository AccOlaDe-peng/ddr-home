/*
 * @Author: renchang.peng
 * @Date: 2024-12-23 16:01:10
 * @LastEditors: renchang.peng
 * @LastEditTime: 2024-12-23 16:02:17
 * @FilePath: /react-ddr-new/src/components/ErrorPage.tsx
 * @Description:
 */
import { Button, Col, Result, Row } from "antd";
import React from "react";

const ErrorPage: React.FC = () => {
  return (
    <Row
      justify="center"
      align="middle"
      wrap={false}
      style={{ height: "100vh" }}
    >
      <Col>
        <Result
          status="error"
          title="对不起，发生意外错误！"
          subTitle="由此给您带来的不便，我们深表歉意！此错误已自动上报平台，我们将立即处理。"
          extra={[
            <Button type="primary" key="connectionManager" onClick={() => {}}>
              联系管理员
            </Button>,
          ]}
        />
      </Col>
    </Row>
  );
};

export default ErrorPage;
