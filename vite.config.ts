import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite"
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  publicDir: 'public',
  envDir: '.env',
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"], // 自动导入vue和vue-router相关函数
      dts: "src/typing/auto-import.d.ts", // 生成 `auto-import.d.ts` 全局声明
      eslintrc: {
        enabled: false, // 默认false, true启用。生成一次就可以，避免每次工程启动都生成
        filepath: './.eslintrc-auto-import.json', // 生成json文件
        globalsPropValue: true,
      }
    }),
  ],
  server: {
    port: 8891,
    open: true,
  }
})
