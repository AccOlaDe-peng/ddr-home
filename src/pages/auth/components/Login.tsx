import React from "react";
import { Button, Flex, Form, Input } from "antd";
import { LoginSteps } from "@/utils/constant/login";

interface LoginProps {
  slickGoTo: (slide: LoginSteps) => void;
}

/**
 * @description:
 * @param {*} param1
 * @return {*}
 */
const Login: React.FC<LoginProps> = ({ slickGoTo }) => {
  const forgetPassword = () => {
    slickGoTo(LoginSteps.FORGOTPASSWORD);
  };

  return (
    <Form className="px-6 pt-5 mt-4">
      <Form.Item
        name="username"
        rules={[{ required: true, message: "请填写用户名!" }]}
      >
        <Input placeholder="用户名" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "请填写密码!" }]}
      >
        <Input placeholder="密码" />
      </Form.Item>
      <Flex justify="space-between" className="mt-4">
        <Form.Item>
          <Button type="text" color="default" onClick={forgetPassword}>
            忘记密码
          </Button>
        </Form.Item>
        <Form.Item>
          <Button danger type="primary">
            登录
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  );
};

export default Login;
