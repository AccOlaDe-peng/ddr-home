/*
 * @Author: renchang.peng
 * @Date: 2024-12-23 17:55:38
 * @LastEditors: renchang.peng
 * @LastEditTime: 2024-12-24 09:18:10
 * @FilePath: /react-ddr-new/src/router/RouteAuthWrapper.tsx
 * @Description:
 */
import { JSX } from "react";

/**
 * @description: This is a wrapper component for routes that requires authentication.
 * @return {*}
 */

const RouteAuthWrapper = ({
  children,
  codeKey,
}: //
{
  children: JSX.Element;
  codeKey: string | undefined;
}) => {
  if (!codeKey) {
    return null;
  }
  return children;
};

export default RouteAuthWrapper;
