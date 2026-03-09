/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 使用相对路径，兼容所有部署平台
  // 不设置 basePath，让资源路径相对于当前页面
  assetPrefix: undefined,
  // 图片优化配置（静态导出需要禁用）
  images: {
    unoptimized: true,
  },
  // 确保路由以斜杠结尾，兼容 CDN 和 SPA
  trailingSlash: true,
  // 禁用服务器端功能（纯静态）
  reactStrictMode: true,
  // 使用相对路径加载资源（关键！）
  // 这样无论是在根路径还是子路径都能正常工作
}

module.exports = nextConfig 
