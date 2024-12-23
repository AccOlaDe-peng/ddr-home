/*
 * @Author: renchang.peng
 * @Date: 2024-12-20 12:05:07
 * @LastEditors: renchang.peng
 * @LastEditTime: 2024-12-24 11:25:47
 * @FilePath: /react-ddr-new/vite.config.ts
 * @Description:
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { inspectorServer } from "@react-dev-inspector/vite-plugin";
import vitePluginImp from "vite-plugin-imp";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
    inspectorServer(),
  ],
  server: {
    host: true,
    port: 3000,
    proxy: {
      "/adms-flow/": {
        target: "http://10.6.68.115:8081",
        secure: false,
        rewrite: (path) => path.replace(/^\/adms-flow/, ""),
      },
      "/adms/": {
        target: "http://10.6.68.115:8080",
        secure: false,
        rewrite: (path) => path.replace(/^\/adms/, ""),
      },
      "/adms/ws/": {
        target: "ws://10.6.68.115:8080",
        ws: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/adms\/ws/, "/ws/"),
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
