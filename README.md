# 🚀 Hangdn 网络工具箱

> 纯前端网络诊断工具 · 无需服务器 · 一键检测网络状态

[![Deploy to Cloudflare Pages](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/chnbsdan/iptools)
[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/chnbsdan/iptools)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/chnbsdan/iptools)

---

## 📖 项目简介

**Hangdn 网络工具箱** 是一款纯前端、零依赖的网络诊断工具，帮助您快速检测网络出口 IP、DNS 泄漏、延迟及代理分流规则。所有检测均在浏览器端完成，**不收集、不上传任何用户数据**，保障您的隐私安全。

---

## ✨ 功能特性

### 🌍 IP 出口检测
- 多节点检测您的真实出口 IP（IPv4 / IPv6）
- 自动识别地理位置并显示国旗标识
- 支持 IP 隐藏模式（完全隐藏 / 部分隐藏）

### 🛡️ DNS 泄漏检测
- 检测 DNS 请求是否通过境外节点
- 可视化展示所有 DNS 解析节点
- 自动判断是否存在 DNS 泄漏风险

### ⏱️ 全球延迟测试
- 测试各大主流网站的访问延迟
- 实时显示延迟状态（优/良/差）
- 进度条直观展示响应速度

### 🔀 分流探测
- 检测代理分流规则是否生效
- 支持 50+ 节点分组探测（国内 / 国际 / AI / 社交 / 流媒体 / 加密货币 / 开发者 / NSFW）
- 每个节点独立显示出口 IP 及地区

### 🎵 音乐播放器
- 集成 APlayer 播放器，支持歌单播放
- 浮动歌词窗口：**可拖拽、可缩放、可自定义颜色**
- 右键菜单控制播放 / 音量 / 歌词显示

### 📸 一键截图
- 使用 html2canvas 生成高清截图
- 自动添加水印，方便分享
- 支持全页面截图或指定区域截图

### 🎨 用户体验
- 🌓 **亮色 / 暗色主题**：一键切换，自动记忆偏好
- 🪟 **玻璃拟态设计**：磨砂玻璃质感，高级视觉体验
- 📱 **全平台适配**：完美支持 PC / 平板 / 手机
- 🎯 **一键测试**：点击即测，结果立现
- 📌 **回顶部按钮**：长页面快速返回

### 🎛️ 渲染质量控制
- 低 / 中 / 高三档渲染模式
- 平衡视觉效果与性能表现

---

## 🖼️ 界面预览

| 亮色模式 | 暗色模式 |
|:---:|:---:|
| ![亮色模式](https://via.placeholder.com/400x250/ffffff/1a1a2e?text=Light+Mode) | ![暗色模式](https://via.placeholder.com/400x250/1a1a2e/ffffff?text=Dark+Mode) |

---

## 🚀 在线演示

- 🌐 [Cloudflare Pages](https://hangdn-toolbox.pages.dev)
- ⚡ [Vercel](https://hangdn-toolbox.vercel.app)
- 🚀 [Netlify](https://hangdn-toolbox.netlify.app)

---

## 📦 部署指南

### 方式一：一键部署（推荐）

点击下方按钮即可一键部署到对应平台：

| 平台 | 一键部署按钮 |
|------|-------------|
| Cloudflare Pages | [![Deploy to Cloudflare Pages](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/chnbsdan/iptools) |
| Vercel | [![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/chnbsdan/iptools) |
| Netlify | [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/chnbsdan/iptools) |

### 方式二：手动部署

#### Cloudflare Pages
```bash
# 1. 安装 Wrangler
npm install -g wrangler

# 2. 登录
wrangler login

# 3. 部署
wrangler pages deploy . --project-name=hangdn-toolbox
```

#### Vercel
```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 登录
vercel login

# 3. 部署
vercel --prod
```

#### Netlify
```bash
# 1. 安装 Netlify CLI
npm install -g netlify-cli

# 2. 登录
netlify login

# 3. 部署
netlify deploy --prod
```

---

## 🏠 本地运行

```bash
# 克隆项目
git clone https://github.com/chnbsdan/iptools.git

# 进入目录
cd iptools

# 使用任意 HTTP 服务器启动
# Python 3
python -m http.server 3000

# Node.js (需要安装 serve)
npx serve .

# 或使用 VS Code Live Server 插件

# 访问 http://localhost:3000
```

---

## 📁 项目结构

```
iptools/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件（含亮色/暗色主题）
├── js/
│   └── script.js       # 核心逻辑（含歌词播放器）
├── _worker.js          # Cloudflare Workers 配置
├── netlify.toml        # Netlify 部署配置
├── vercel.json         # Vercel 部署配置
├── wrangler.toml       # Cloudflare Pages 配置
├── package.json        # 项目配置
└── README.md           # 项目文档
```

---

## 🛠️ 技术栈

| 技术 | 用途 |
|------|------|
| HTML5 | 页面结构 |
| CSS3 | 玻璃拟态 · 响应式 · 主题切换 |
| Vanilla JavaScript | 核心逻辑 |
| [APlayer](https://github.com/DIYgod/APlayer) | 音乐播放器 |
| [html2canvas](https://html2canvas.hertzen.com/) | 截图功能 |
| [Font Awesome 6](https://fontawesome.com/) | 图标库 |
| Cloudflare Pages / Vercel / Netlify | 部署平台 |

---

## 🔧 配置说明

### 歌单配置

在 `script.js` 中修改 `PLAYLIST_ID` 变量：

```javascript
const PLAYLIST_ID = '您的网易云歌单 ID';
```

### 主题切换

页面自动记忆用户偏好，也可通过右上角按钮手动切换。

### IP 隐藏模式

支持三种模式：
- **无隐藏**：完整显示 IP
- **部分隐藏**：仅显示前两位（如 `192.168.*.*`）
- **完全隐藏**：显示为「已隐藏」

---

## 📝 隐私说明

| 项目 | 说明 |
|------|------|
| ✅ 纯前端 | 所有代码在浏览器端运行，无后端服务器 |
| ✅ 零收集 | 不收集、不存储任何用户数据 |
| ✅ 直连请求 | 所有检测请求直接由浏览器发起 |
| ✅ 本地截图 | 截图保存在本地，不上传云端 |
| ✅ 无 Cookie | 不使用任何 Cookie 或追踪技术 |

---

## 🧪 兼容性

| 浏览器 | 支持版本 |
|--------|----------|
| Chrome | 90+ |
| Firefox | 88+ |
| Edge | 90+ |
| Safari | 14+ |
| Opera | 76+ |
| 移动端浏览器 | 全兼容 |

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

---

## 🔗 相关链接

- 📱 [Telegram 群组](https://t.me/chnbsdan)
- 🐙 [GitHub](https://github.com/chnbsdan)
- 📝 [个人博客](https://aoso.hangdn.com)

---

## 📄 许可证

MIT License © 2026 [chnbsdan](https://github.com/chnbsdan)

---

## ⭐ Star History

如果这个项目对您有帮助，请给一个 Star ⭐ 支持一下！

[![Star History Chart](https://api.star-history.com/svg?repos=chnbsdan/iptools&type=Date)](https://star-history.com/#chnbsdan/iptools&Date)
