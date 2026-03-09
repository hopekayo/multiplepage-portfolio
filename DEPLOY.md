# 📦 部署指南 - GitHub Pages + 腾讯云 EdgePage

## 🎯 问题说明

**原因：** Next.js 静态导出时使用 `basePath: '/multiplepage-portfolio'`，适合 GitHub Pages 子路径部署，但腾讯云 EdgePage 部署在根路径，导致资源 404。

**解决：** 使用环境变量动态控制 basePath，为不同平台构建不同版本。

---

## 🚀 快速部署

### 方案 A：使用部署脚本（推荐）

```bash
# 给脚本执行权限
chmod +x scripts/deploy.sh

# 部署到两个平台（通用版本，无 basePath）
./scripts/deploy.sh both

# 只部署到 GitHub Pages
./scripts/deploy.sh github

# 只部署到腾讯云 EdgePage
./scripts/deploy.sh tencent
```

---

### 方案 B：手动部署

#### 1️⃣ 腾讯云 EdgePage（根路径）

```bash
# 构建根路径版本
NEXT_BASE_PATH="" npm run generate-posts
NEXT_BASE_PATH="" npm run build

# 上传 out 目录到腾讯云
# 方式 1: 使用 COS 命令行工具
coscmd upload -r ./out/ /

# 方式 2: 控制台上传
# 访问 https://console.cloud.tencent.com/edgeone
# 选择站点 → 部署 → 静态部署 → 上传 out 目录内容
```

#### 2️⃣ GitHub Pages（子路径）

```bash
# 构建子路径版本
NEXT_BASE_PATH="/multiplepage-portfolio" npm run generate-posts
NEXT_BASE_PATH="/multiplepage-portfolio" npm run build

# 部署到 gh-pages 分支
npx gh-pages -d ./out -b gh-pages

# 或使用 GitHub Actions 自动部署
```

---

## ⚙️ 平台配置

### 腾讯云 EdgePage

#### 404 配置

创建 `out/_redirects` 文件（或在 EdgePage 控制台配置）：

```
# 将所有 404 重定向到首页
/*    /index.html   404
```

或在 EdgePage 控制台：
1. 进入站点配置
2. 「错误页面配置」
3. 设置 404 页面为 `/index.html`

#### 缓存规则

```
# _next/static 目录设置长期缓存
/_next/static/*   max-age=31536000,immutable

# HTML 文件设置短期缓存
/*.html   max-age=0,must-revalidate
```

---

### GitHub Pages

#### 仓库设置

1. 访问 `https://github.com/hopekayo/multiplepage-portfolio/settings/pages`
2. Source 选择 `Deploy from a branch`
3. Branch 选择 `gh-pages`，Folder 选择 `/ (root)`
4. 保存后等待部署完成

#### 访问地址

- **主站点:** `https://hopekayo.github.io/multiplepage-portfolio/`
- **文章列表:** `https://hopekayo.github.io/multiplepage-portfolio/posts/`
- **单篇文章:** `https://hopekayo.github.io/multiplepage-portfolio/posts/2026-03-09-ai-trends-weekly/`

---

## 🔧 package.json 脚本

```json
{
  "scripts": {
    "dev": "next dev",
    "generate-posts": "node scripts/generate-posts.js",
    "build": "npm run generate-posts && next build",
    "build:github": "NEXT_BASE_PATH=/multiplepage-portfolio npm run build",
    "build:tencent": "NEXT_BASE_PATH='' npm run build",
    "deploy:github": "npx gh-pages -d ./out -b gh-pages",
    "start": "next start"
  }
}
```

---

## 📋 部署检查清单

### 构建后检查

- [ ] 检查 `out/` 目录是否生成
- [ ] 检查 HTML 中资源路径是否正确
  - 腾讯云：`/_next/static/...`
  - GitHub：`/multiplepage-portfolio/_next/static/...`
- [ ] 检查文章页面是否正常生成

### 部署后检查

- [ ] 首页能否正常访问
- [ ] 文章列表页能否正常访问
- [ ] 单篇文章能否正常访问
- [ ] 图片是否正常加载
- [ ] 主题切换是否正常
- [ ] 404 页面是否正常

---

## 🐛 常见问题

### Q: 腾讯云部署后 404

**A:** 检查以下几点：
1. 是否使用 `NEXT_BASE_PATH=""` 构建
2. 是否将 `out/` 目录内容上传到根路径（不是子目录）
3. 检查 EdgePage 的 404 配置

### Q: GitHub Pages 资源 404

**A:** 检查：
1. 是否使用 `NEXT_BASE_PATH="/multiplepage-portfolio"` 构建
2. 是否部署到 `gh-pages` 分支
3. 仓库名是否与 basePath 匹配

### Q: 本地预览

```bash
# 使用 serve 预览构建结果
npx serve ./out

# 或使用 VS Code Live Server 插件
# 直接打开 out/index.html
```

---

## 🔄 自动部署（GitHub Actions）

创建 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build for GitHub Pages
        run: |
          NEXT_BASE_PATH="/multiplepage-portfolio" npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

---

## 📊 双平台部署流程

```
┌─────────────────────────────────────────────────────┐
│                    代码提交到 main                    │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│              GitHub Actions 触发构建                  │
└─────────────────┬───────────────────────────────────┘
                  │
         ┌────────┴────────┐
         ▼                 ▼
┌─────────────────┐ ┌─────────────────┐
│  GitHub Pages   │ │  腾讯云 EdgePage │
│  (子路径部署)    │ │  (根路径部署)     │
│  basePath 有值   │ │  basePath 空值   │
└─────────────────┘ └─────────────────┘
```

---

## 📝 更新日志

- **2026-03-09**: 添加双平台兼容配置
- **2026-03-09**: 创建部署脚本和指南

---

**维护者：** Hopekayo  
**最后更新：** 2026-03-09
