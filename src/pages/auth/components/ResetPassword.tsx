import { LoginSteps } from "@/utils/constant/login";
import { Button, Flex, Form, Input, Typography } from "antd";
import React from "react";

interface ResetPasswordProps {
  slickGoTo: (step: LoginSteps) => void;
}

/**
 * @description:
 * @param {*} param1
 * @return {*}
 */
const ResetPassword: React.FC<ResetPasswordProps> = ({ slickGoTo }) => {
  const back = () => {
    slickGoTo(LoginSteps.FORGOTPASSWORD);
  };
  const resetPassword = () => {
    // slickGoTo(LoginSteps.RESETPASSWORD);
  };
  return (
    <div className="px-5 py-8 m-0">
      <Typography.Paragraph className="text-[#666]">
        请联系您的供应商。核实您的身份后,
        我们将给您发送超级令牌。请在三十分钟以内将超级令牌复制到下面文本框中,
        然后点击"重置密码"按钮。一个超级令牌只能使用一次。
      </Typography.Paragraph>
      <Form>
        {/* <Form.Item>
          <Input />
        </Form.Item> */}
        <Form.Item
          name="superToken"
          rules={[{ required: true, message: "请输入超级令牌" }]}
        >
          <Input.Password placeholder="请输入超级令牌" />
        </Form.Item>
      </Form>
      <Flex justify="space-between" className="mt-8">
        <Button type="text" color="default" onClick={back}>
          返回
        </Button>
        <Button danger type="primary" onClick={resetPassword}>
          重置密码
        </Button>
      </Flex>
    </div>
  );
};

export default ResetPassword;
