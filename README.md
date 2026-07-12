# 🚀 Hangdn 网络工具箱

> 纯前端网络诊断工具，无需服务器，一键检测您的网络状态

[![Deploy to Cloudflare Pages](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/chnbsdan/iptools)
[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/chnbsdan/iptools)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/chnbsdan/iptools)

## ✨ 功能特性

| 功能 | 说明 |
|------|------|
| 🌍 IP 出口检测 | 多节点检测您的真实出口 IP |
| 🛡️ DNS 泄漏检测 | 检测 DNS 请求是否安全 |
| ⏱️ 全球延迟测试 | 测试各主流网站的访问延迟 |
| 🔀 分流探测 | 检测您的代理分流规则是否生效 |
| 📸 一键截图 | 保存检测结果到本地 |
| 💎 玻璃拟态 | 高颜值透明玻璃 UI 设计 |

## 🚀 在线演示

- 🌐 [Cloudflare Pages](https://hangdn-toolbox.pages.dev)
- ⚡ [Vercel](https://hangdn-toolbox.vercel.app)
- 🚀 [Netlify](https://hangdn-toolbox.netlify.app)

## 📦 部署指南

### 方式一：一键部署（推荐）

点击下方按钮即可一键部署：

[![Deploy to Cloudflare Pages](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/chnbsdan/iptools)

### 方式二：手动部署

#### Cloudflare Pages
```bash
# 1. 安装 Wrangler
npm install -g wrangler

# 2. 登录
wrangler login

# 3. 部署
wrangler pages deploy . --project-name=hangdn-toolbox




Vercel
bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 登录
vercel login

# 3. 部署
vercel --prod
Netlify
bash
# 1. 安装 Netlify CLI
npm install -g netlify-cli

# 2. 登录
netlify login

# 3. 部署
netlify deploy --prod
🏠 本地运行
bash
# 克隆项目
git clone https://github.com/chnbsdan/iptools.git

# 进入目录
cd chnbsdan/iptools

# 启动本地服务器
npm run dev
# 或
python -m http.server 3000

# 访问 http://localhost:3000
🛠️ 技术栈
HTML5

CSS3 (玻璃拟态、响应式)

Vanilla JavaScript

html2canvas (截图功能)

Cloudflare Pages / Vercel / Netlify (部署)


📋 部署步骤总结
1. 在 GitHub 创建仓库
bash
# 创建新仓库并上传所有文件
git init
git add .
git commit -m "Initial commit: iptools"
git branch -M main
git remote add origin https://github.com/您的用户名/iptools.git
git push -u origin main
2. 部署到各个平台
Cloudflare Pages（最快）
登录 Cloudflare Dashboard

进入 Workers & Pages → Pages

点击 Connect to Git → 选择 GitHub

选择仓库 iptools

构建设置全部留空

点击 Save and Deploy

Vercel
登录 Vercel

点击 Add New → Project

导入 GitHub 仓库

保持默认设置

点击 Deploy

Netlify
登录 Netlify

点击 Add new site → Import an existing project

选择 GitHub → 选择仓库

保持默认设置

点击 Deploy site

📝 隐私说明
✅ 纯前端运行，无后端服务器

✅ 不收集、不存储任何用户数据

✅ 所有检测请求直接由浏览器发起

✅ 截图保存在本地，不上传云端

🔗 相关链接
📱 Telegram 群组

🐙 GitHub

📝 个人博客

📄 许可证
MIT License © 2026 Hangdndh
