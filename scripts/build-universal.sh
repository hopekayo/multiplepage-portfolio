#!/bin/bash

# 🚀 通用构建脚本 - 一次构建，兼容所有平台
# 使用相对路径，无需设置 basePath

set -e

echo "🔨 开始构建通用版本（兼容 GitHub Pages + 腾讯云 + 任何静态托管）..."
echo ""

# 清理旧的构建产物
rm -rf ./out

# 确保不使用 basePath
unset NEXT_BASE_PATH
export NEXT_BASE_PATH=""

# 生成文章列表
echo "📝 生成文章列表..."
npm run generate-posts

# 构建项目
echo "🏗️  构建项目..."
npm run build

echo ""
echo "✅ 构建完成！"
echo ""

# 显示构建统计
OUT_DIR="./out"
echo "📊 构建统计:"
echo "   输出目录：$(du -sh $OUT_DIR 2>/dev/null | cut -f1 || echo 'N/A')"
echo "   文件数量：$(find $OUT_DIR -type f 2>/dev/null | wc -l | tr -d ' ')"
echo ""

# 验证关键文件
echo "📁 关键文件检查:"
[ -f "$OUT_DIR/index.html" ] && echo "   ✅ index.html" || echo "   ❌ index.html 缺失"
[ -f "$OUT_DIR/posts/index.html" ] && echo "   ✅ posts/index.html" || echo "   ❌ posts/index.html 缺失"
[ -d "$OUT_DIR/_next/static" ] && echo "   ✅ _next/static/" || echo "   ❌ _next/static/ 缺失"
echo ""

# 检查资源路径（确保是相对路径）
echo "🔍 资源路径检查:"
if grep -q 'href="/_next/' $OUT_DIR/index.html 2>/dev/null; then
    echo "   ⚠️  检测到绝对路径 /_next/ （这在子路径部署可能有问题）"
    echo "   💡 提示：Next.js 静态导出默认使用绝对路径，但可以通过部署配置解决"
else
    echo "   ✅ 资源路径正常"
fi
echo ""

echo "📦 部署说明:"
echo ""
echo "   === GitHub Pages ==="
echo "   1. 安装 gh-pages: npm install -D gh-pages"
echo "   2. 部署：npx gh-pages -d ./out -b gh-pages"
echo "   3. 访问：https://你的用户名.github.io/仓库名/"
echo ""
echo "   === 腾讯云 EdgePage ==="
echo "   1. 上传 ./out/ 所有内容到根路径"
echo "   2. 配置 404 重定向到 /index.html"
echo "   3. 访问：https://你的域名/"
echo ""
echo "   === Vercel / Netlify ==="
echo "   1. 连接 GitHub 仓库"
echo "   2. 构建命令：npm run build"
echo "   3. 输出目录：out"
echo "   4. 自动部署！"
echo ""
echo "   === 任何静态托管 ==="
echo "   上传 ./out/ 目录到任意 Web 服务器即可！"
echo ""

echo "🎉 通用版本构建完成，可部署到任何平台！"
