import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        // 自定义 chunk 文件名（移除默认的下划线前缀）
        chunkFileNames: (chunkInfo: any) => {
          // 获取原始文件名（不含路径）
          const name = chunkInfo.name || 'chunk';
          // 替换可能的下划线前缀为连字符
          const cleanName = name.replace(/^_+/, '');
          // 生成新的文件名（格式：assets/js/模块名-哈希值.js）
          return `assets/js/${cleanName}-[hash].js`;
        },

        // 自定义入口文件和静态资源文件名（可选）
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
  base: '/tailwindcss/'
})