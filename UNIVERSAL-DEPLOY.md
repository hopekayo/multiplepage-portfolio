# 🌍 一次构建，全平台部署

## ✅ 问题已解决

**现状：** Next.js 静态导出默认使用绝对路径（`/_next/`），但通过正确的部署配置，可以兼容所有平台。

**解决方案：** 使用 GitHub Actions 自动处理 basePath，本地构建通用版本即可。

---

## 🚀 使用方法

### 方案 A：本地构建 + 手动部署（当前使用）

```bash
# 一次构建
npm run build

# 部署到腾讯云（上传 out/ 到根路径）
coscmd upload -r ./out/ /

# 部署到 GitHub Pages
npx gh-pages -d ./out -b gh-pages
```

**特点：**
- ✅ 同一个 `out/` 目录
- ✅ 腾讯云直接用（根路径）
- ✅ GitHub Pages 需要额外配置（见下方）

---

### 方案 B：GitHub Actions 自动部署（推荐）

**已配置 `.github/workflows/deploy.yml`**

1. **推送到 main 分支自动部署**
2. **GitHub Actions 自动设置 basePath**
3. **无需本地构建**

```bash
# 只需推送代码
git push origin main

# GitHub Actions 会自动：
# 1. 安装依赖
# 2. 构建项目
# 3. 设置正确的 basePath
# 4. 部署到 GitHub Pages
```

**访问地址：** `https://hopekayo.github.io/multiplepage-portfolio/`

---

## 📊 平台兼容性

| 平台 | 部署方式 | basePath | 状态 |
|------|----------|----------|------|
| **腾讯云 EdgePage** | 上传 `out/` 到根路径 | 无 | ✅ 直接可用 |
| **GitHub Pages (手动)** | `npx gh-pages -d ./out` | 自动处理 | ✅ 可用 |
| **GitHub Pages (自动)** | GitHub Actions | 自动处理 | ✅ 推荐 |
| **Vercel** | 连接 Git 自动部署 | 自动处理 | ✅ 可用 |
| **Netlify** | 拖拽 `out/` 或 Git | 自动处理 | ✅ 可用 |
| **任何静态服务器** | 上传 `out/` | 无 | ✅ 可用 |

---

## 🔧 腾讯云 EdgePage 配置

### 步骤 1：上传文件

```bash
# 使用 COS 命令行工具
coscmd upload -r ./out/ /

# 或在控制台上传所有文件到根路径
```

### 步骤 2：配置 404 重定向

在 EdgePage 控制台：
1. 进入站点配置
2. 「错误页面配置」
3. 设置 404 页面为 `/index.html`

### 步骤 3：验证

访问测试：
- 首页：`https://你的域名/`
- 文章列表：`https://你的域名/posts/`
- 文章详情：`https://你的域名/posts/2026-03-09-ai-trends-weekly/`

---

## 🔧 GitHub Pages 配置

### 方式 1：GitHub Actions（推荐）✅

已配置自动工作流，推送即部署。

**启用步骤：**
1. 访问 `https://github.com/hopekayo/multiplepage-portfolio/settings/pages`
2. 确认 Source 是 "GitHub Actions"
3. 推送代码到 main 分支
4. 等待 Actions 完成部署

### 方式 2：手动部署

```bash
# 安装 gh-pages
npm install -D gh-pages

# 部署
npx gh-pages -d ./out -b gh-pages
```

**注意：** 手动部署可能需要设置 basePath，建议使用 Actions。

---

## 📦 本地测试

```bash
# 预览构建结果
npx serve ./out

# 或使用 Live Server 插件
# 直接打开 out/index.html
```

---

## 🐛 常见问题

### Q: 为什么可以兼容两个平台？

**A:** Next.js 静态导出的资源路径是 `/ _next/`，这看起来是绝对路径，但：
- **腾讯云（根路径）**：`https://domain.com/_next/` ✅ 正确
- **GitHub Pages（子路径）**：`https://user.github.io/repo/_next/` 
  - GitHub Actions 会自动重写路径 ✅
  - 手动部署需要 basePath 配置

### Q: 本地构建能直接用于 GitHub Pages 吗？

**A:** 需要额外步骤：
```bash
# 方式 1：使用 gh-pages 包（会自动处理）
npx gh-pages -d ./out -b gh-pages

# 方式 2：使用 GitHub Actions（推荐）
git push origin main
```

### Q: 如何验证部署成功？

**A:** 检查以下几点：
1. 首页能正常访问
2. 点击文章链接能正常跳转
3. 刷新文章页面不会 404
4. 图片正常加载
5. 主题切换正常

---

## 📋 部署检查清单

### 腾讯云 EdgePage

- [ ] 构建：`npm run build`
- [ ] 上传 `out/` 所有内容到根路径
- [ ] 配置 404 重定向到 `/index.html`
- [ ] 访问首页验证
- [ ] 访问文章列表验证
- [ ] 刷新文章页面验证

### GitHub Pages

- [ ] 推送代码到 main 分支
- [ ] GitHub Actions 自动运行
- [ ] 等待部署完成（约 2-5 分钟）
- [ ] 访问 `https://hopekayo.github.io/multiplepage-portfolio/`
- [ ] 验证所有页面正常

---

## 🎯 最佳实践

1. **日常开发**：本地 `npm run dev`
2. **提交代码**：`git push` 触发自动部署
3. **腾讯云部署**：手动 `npm run build` + 上传
4. **紧急更新**：两个平台都更新，保持一致

---

## 📝 快速命令参考

```bash
# 构建（通用版本）
npm run build

# 部署到腾讯云
coscmd upload -r ./out/ /

# 部署到 GitHub Pages（手动）
npx gh-pages -d ./out -b gh-pages

# 本地预览
npx serve ./out

# 查看构建产物大小
du -sh ./out
find ./out -type f | wc -l
```

---

**最后更新：** 2026-03-09  
**维护者：** Hopekayo
