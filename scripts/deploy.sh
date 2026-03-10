#!/bin/bash

# 部署脚本 - 支持 GitHub Pages 和 腾讯云 EdgePage

set -e

echo "🚀 开始构建和部署..."

# 读取部署目标参数
DEPLOY_TARGET=${1:-"both"}

# 根据目标设置 basePath
if [ "$DEPLOY_TARGET" = "github" ]; then
    echo "📦 构建 GitHub Pages 版本..."
    export NEXT_BASE_PATH="/multiplepage-portfolio"
elif [ "$DEPLOY_TARGET" = "tencent" ]; then
    echo "📦 构建腾讯云 EdgePage 版本..."
    export NEXT_BASE_PATH=""
elif [ "$DEPLOY_TARGET" = "both" ]; then
    echo "📦 构建通用版本（无 basePath，兼容两个平台）..."
    export NEXT_BASE_PATH=""
fi

# 生成文章
echo "📝 生成文章列表..."
npm run generate-posts

# 构建项目
echo "🔨 构建项目..."
npm run build

# 输出目录
OUT_DIR="./out"

echo "✅ 构建完成！输出目录：$OUT_DIR"

# GitHub Pages 部署
if [ "$DEPLOY_TARGET" = "github" ] || [ "$DEPLOY_TARGET" = "both" ]; then
    echo ""
    echo "📤 部署到 GitHub Pages..."
    
    # 检查 git 是否有未提交的更改
    if [ -n "$(git status --porcelain)" ]; then
        echo "⚠️  检测到未提交的更改，请先提交更改"
        git status
        exit 1
    fi
    
    # 使用 gh-pages 包部署（需要先安装：npm install -D gh-pages）
    if command -v npx &> /dev/null; then
        npx gh-pages -d $OUT_DIR -b gh-pages
        echo "✅ GitHub Pages 部署完成！"
    else
        echo "⚠️  gh-pages 未安装，跳过自动部署"
        echo "   手动部署：npx gh-pages -d $OUT_DIR -b gh-pages"
    fi
fi

# 腾讯云 EdgePage 部署
if [ "$DEPLOY_TARGET" = "tencent" ] || [ "$DEPLOY_TARGET" = "both" ]; then
    echo ""
    echo "📤 部署到腾讯云 EdgePage..."
    echo ""
    echo "📋 手动部署步骤："
    echo "   1. 访问 https://console.cloud.tencent.com/edgeone"
    echo "   2. 选择你的站点"
    echo "   3. 进入「部署」→ 「静态部署」"
    echo "   4. 上传 $OUT_DIR 目录内容到根路径"
    echo ""
    echo "   或使用 COS 命令行工具："
    echo "   coscmd upload -r $OUT_DIR/ /"
    echo ""
fi

echo ""
echo "🎉 部署流程完成！"
echo ""
echo "📊 构建统计:"
echo "   - 输出目录：$(du -sh $OUT_DIR | cut -f1)"
echo "   - 文件数量：$(find $OUT_DIR -type f | wc -l | tr -d ' ')"
echo ""
