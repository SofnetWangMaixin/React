/** @type {import('tailwindcss').Config} */
export default {
  // 确保包含所有使用 Tailwind 的文件路径
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 扫描 src 目录下所有 JS/TS/JSX/TSX 文件
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FBC02D', // 主色调
        secondary: '#FFF9C4', // 辅助色
        accent: '#FF9800', // 强调色
        dark: '#212121', // 深色
        light: '#F0F0F0', // 浅色
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    }
  },
  plugins: [],
}

