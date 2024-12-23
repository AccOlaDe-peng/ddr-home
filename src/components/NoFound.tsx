/*
 * @Author: renchang.peng
 * @Date: 2024-12-23 15:47:18
 * @LastEditors: renchang.peng
 * @LastEditTime: 2024-12-23 15:48:50
 * @FilePath: /react-ddr-new/src/components/NoFound.tsx
 * @Description:
 */
import { Button, Result, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

const NoFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center w-full min-w-full">
      <Result
        status="404"
        title="404"
        subTitle="抱歉，您访问的页面不存在。"
        extra={
          <Row gutter={50} justify="center">
            <Col>
              <Button
                type="primary"
                onClick={() => {
                  navigate(-1);
                }}
              >
                返回上一页
              </Button>
            </Col>
            <Col>
              <Button
                type="primary"
                onClick={() => {
                  navigate("/");
                }}
              >
                返回首页
              </Button>
            </Col>
          </Row>
        }
      />
    </div>
  );
};

export default NoFound;
