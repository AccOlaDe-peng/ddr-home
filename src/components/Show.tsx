import React, { useEffect } from "react";

interface ShowProps<T> {
  when: T | undefined | null | false;
  fallback?: React.ReactNode;
  children: React.ReactNode | ((props: T) => React.ReactNode);
}

/**
 * @description: This component is used to conditionally render a component based on a boolean value.
 * @param {T} when - The boolean value to check
 * @param {React.ReactNode} fallback - The component to render if the boolean value is false or undefined
 * @param {React.ReactNode | ((props: T) => React.ReactNode)} children - The component to render if the boolean value is true
 * @return {*}
 */
function Show<T>({ when, fallback = null, children }: ShowProps<T>) {
  return when ? children : fallback;
}

/**
 * @description: This component is used to conditionally render a component based on a Promise value.
 * @param {T} when - The Promise value to check
 * @param {React.ReactNode} fallback - The component to render if the Promise value is false or undefined
 * @param {React.ReactNode | ((props: T) => React.ReactNode)} children - The component to render if the Promise value is true
 * @return {*}
 */
function AsyncShow<T>({ when, fallback = null, children }: ShowProps<T>) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState<false | Awaited<T> | null | undefined>(
    null
  );

  useEffect(() => {
    Promise.resolve(when).then((result) => {
      setData(result);
      setIsLoading(false);
    });
  }, [when]);
  if (isLoading) return fallback;
  return data ? children : fallback;
}

export { Show, AsyncShow };
