import { LoginSteps } from "@/utils/constant/login";
import { Button, Flex, Typography } from "antd";
import React from "react";

interface ForgetPasswordProps {
  slickGoTo: (step: LoginSteps) => void;
}

/**
 * @description:
 * @param {*} param1
 * @return {*}
 */
const ForgetPassword: React.FC<ForgetPasswordProps> = ({ slickGoTo }) => {
  const back = () => {
    slickGoTo(LoginSteps.LOGIN);
  };
  const resetPassword = () => {
    slickGoTo(LoginSteps.RESETPASSWORD);
  };
  return (
    <div className="px-5 py-8 m-0">
      <h2 className="mb-5 text-2xl text-center">重置密码</h2>
      <Typography.Paragraph className="text-[#666]">
        非管理员请与管理员取得联系以重置密码，管理员请点击下一步。
      </Typography.Paragraph>
      <Flex justify="space-between" className="mt-8">
        <Button type="text" color="default" onClick={back}>
          返回
        </Button>
        <Button danger type="primary" onClick={resetPassword}>
          下一步
        </Button>
      </Flex>
    </div>
  );
};

export default ForgetPassword;
