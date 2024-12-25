/*
 * @Author: renchang.peng
 * @Date: 2024-12-23 15:39:27
 * @LastEditors: error: git config user.name & please set dead value or install git
 * @LastEditTime: 2024-12-25 17:00:37
 * @FilePath: /react-ddr-new/src/pages/auth/LoginLayout.tsx
 * @Description:
 */
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from "./components/Login";
import { LoginSteps } from "@/utils/constant/login";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";

/**
 * @description:
 * @return {*}
 */
const LoginLayout: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const slickGoTo = (index: LoginSteps) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <div className="w-full h-screen">
      <div className="h-full bg-login-background-all">
        <div className="fixed top-[100px] w-full z-10">
          <div className="w-[350px] my-0 mx-auto bg-[#fbfbfb] relative shadow-[0_4px_20px_rgba(46,32,32,0.05)]">
            <div
              className="inline-block align-middle w-full h-[100px] m-0"
              style={{
                background:
                  "linear-gradient(90.09deg, #da2b38, #da2b38 69.79%, #c21717)",
              }}
            >
              <div className="bg-logo align-middle h-full w-[200px] bg-contain bg-no-repeat bg-center mx-auto" />
            </div>
            <Slider
              ref={(slider) => {
                sliderRef.current = slider;
              }}
              arrows={false}
              draggable={false}
              accessibility={false}
              dots={false}
              infinite={false}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              adaptiveHeight={true}
            >
              <Login slickGoTo={slickGoTo} />
              <ForgetPassword slickGoTo={slickGoTo} />
              <ResetPassword slickGoTo={slickGoTo} />
            </Slider>
          </div>
        </div>
        <div
          className="bg-login-background-top relative h-[200px] bg-[#eee] bg-no-repeat"
          style={{ backgroundSize: "100%", backgroundPosition: "50%" }}
        />
        <footer className="absolute bottom-0 w-full text-sm leading-10 text-center text-gray">
          © 2025 瑞数DDR数据安全系统
        </footer>
      </div>
    </div>
  );
};

export default LoginLayout;
