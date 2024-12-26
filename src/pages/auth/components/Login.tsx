import React from "react";
import { Button, Flex, Form, Input } from "antd";
import { LoginSteps } from "@/utils/constant/login";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  slickGoTo: (slide: LoginSteps) => void;
}

interface FormValues {
  username: string;
  password: string;
}

/**
 * @description:
 * @param {*} param1
 * @return {*}
 */
const Login: React.FC<LoginProps> = ({ slickGoTo }) => {
  const navigate = useNavigate();
  const forgetPassword = () => {
    slickGoTo(LoginSteps.FORGET_PASSWORD);
  };

  const handleSubmit = async (values: FormValues) => {
    console.log("Received values of form: ", values);
    navigate("/test");
  };

  return (
    <Form<FormValues> onFinish={handleSubmit} className="px-6 pt-5 mt-4">
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
          <Button danger type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  );
};

export default Login;
