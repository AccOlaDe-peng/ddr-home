/*
 * @Author: renchang.peng
 * @Date: 2024-12-23 14:53:54
 * @LastEditors: renchang.peng
 * @LastEditTime: 2024-12-26 09:56:07
 * @FilePath: /react-ddr-new/src/router/LazyLoad.tsx
 * @Description: 动态导入
 */

import { lazy, Suspense } from "react";
import Loading from "@/components/Loading";

const modules: Record<string, () => Promise<any>> = import.meta.glob(
  "../pages/**/*.tsx"
);

/**
 * @description: 动态导入
 * @param {string} path
 * @return {*}
 */
const createLazyComponent = (path: string) => {
  const Component = lazy(modules[`../pages/${path}.tsx`]);
  return (
    <Suspense fallback={<Loading />}>
      <Component key={path} />
    </Suspense>
  );
};

export default createLazyComponent;
