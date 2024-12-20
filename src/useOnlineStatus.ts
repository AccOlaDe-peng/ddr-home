import { useState, useDebugValue } from "react";

export const useCustomCounter = () => {
  const [count, setCount] = useState(0);

  // 在 React 开发者工具中显示当前计数
  useDebugValue(count, (count) => `Count: ${count}`);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return { count, increment, decrement };
};
