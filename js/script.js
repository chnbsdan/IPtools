
// --- 数据定义 ---
const identityNodes = [
    { id: 'cn-ipv4', zh: '国内-IPv4 网络', en: 'China IPv4', url: 'https://www.visa.cn/cdn-cgi/trace', type: 'trace' },
    { id: 'cn-ipv6', zh: '国内-IPv6 网络', en: 'China IPv6', url: 'https://poki.cn/cdn-cgi/trace', type: 'trace' },
    { id: 'ipv4', zh: '国外CF-IPv4 网络', en: 'Global CF-IPv4', url: 'https://api-ipv4.ip.sb/geoip', type: 'json' },
    { id: 'ipv6', zh: '国外CF-IPv6 网络', en: 'Global CF-IPv6', url: 'https://api.ip.sb/geoip', type: 'json' },
    { id: 'openai', zh: 'OpenAI', en: 'OpenAI Trace', url: 'https://openai.com/cdn-cgi/trace', type: 'trace' },
    { id: 'chatgpt', zh: 'ChatGPT节点', en: 'ChatGPT Node', url: 'https://chat.com/cdn-cgi/trace', type: 'trace' }
];

// 恢复原版所有完整的全球延迟测试节点
const latencyNodes = [
    { id: 'wechat', zh: '微信', en: 'WeChat', url: 'https://weixin.qq.com/favicon.ico', icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/41/51/c5/4151c5ec-b710-ba98-bac3-3c99fe9eb4f6/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-0-85-220.png/512x512bb.png' },
    { id: 'bilibili', zh: '哔哩哔哩', en: 'Bilibili', url: 'https://www.bilibili.com/favicon.ico', icon: 'https://www.bilibili.com/favicon.ico' },
    { id: 'github', zh: 'Github', en: 'Github', url: 'https://github.com/favicon.ico', icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b5/17/ee/b517ee05-125f-b0f2-c109-1561a4c99dfa/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.png' },
    { id: 'Netease', zh: '网易', en: 'Netease', url: 'https://www.163.com/favicon.ico', icon: 'https://www.163.com/favicon.ico' },
    { id: 'bytedance', zh: '字节跳动', en: 'ByteDance', url: 'https://www.douyin.com/favicon.ico', icon: 'https://www.douyin.com/favicon.ico' },
    { id: 'baidu', zh: '百度', en: 'Baidu', url: 'https://www.baidu.com/favicon.ico', icon: 'https://www.baidu.com/favicon.ico' },
    { id: 'bing', zh: '必应', en: 'Bing', url: 'https://www.bing.com/favicon.ico', icon: 'https://www.bing.com/favicon.ico' },
    { id: 'google', zh: '谷歌', en: 'Google', url: 'https://www.google.com/favicon.ico', icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/23/ff/ca/23ffca15-e309-e460-81af-88bc18c9c93a/logo_gsa_gradient_ios_color-0-0-1x_U007epad-0-0-0-1-0-0-sRGB-0-0-0-85-220.png/512x512bb.png' },
    { id: 'ChatGPT', zh: 'ChatGPT', en: 'ChatGPT', url: 'https://chatgpt.com/favicon.ico', icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/86/64/58/866458f0-55d0-b62d-753d-a2b094293f20/AppIcon-0-0-1x_U007epad-0-0-0-1-0-P3-85-220.png/512x512bb.png' },
    { id: 'Gemini', zh: 'Gemini', en: 'Gemini', url: 'https://gemini.google.com/favicon.ico', icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/2e/17/d7/2e17d73b-44d8-e72b-9e16-c952c865b2cd/AppIcon-0-1x_U007epad-0-0-0-1-0-0-0-0-85-220-0.png/512x512bb.png' },
    { id: 'Grok', zh: 'Grok', en: 'Grok', url: 'https://Grok.com/favicon.ico', icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ca/04/de/ca04de2b-1371-b109-2239-1f56d3c887ce/AppIcon-0-1x_U007epad-0-0-0-1-0-0-85-220-0.png/512x512bb.png' },
    { id: 'youtube', zh: '油管', en: 'YouTube', url: 'https://www.youtube.com/favicon.ico', icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b6/79/2c/b6792cde-2bea-cc82-adb5-6a8f83a0038a/logo_youtube_2024_q4_color-0-1x_U007emarketing-0-0-0-7-0-0-0-85-220-0.png/512x512bb.png' },
    { id: 'x', zh: '推特', en: 'X / Twitter', url: 'https://x.com/favicon.ico', icon: 'https://x.com/favicon.ico' },
    { id: 'ins', zh: 'Ins', en: 'Instagram', url: 'https://instagram.com/', icon: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/08/0e/0d/080e0d9a-5602-0cb1-01dd-0217932b361d/Placeholder.mill/200x200bb-75.webp' },
    { id: 'tg', zh: '电报', en: 'Telegram', url: 'https://telegram.org/favicon.ico', icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/22/12/f7/2212f7c9-2695-06a0-be58-6ed1aa24723f/Telegram-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.png' }
];

// --- 扩展版 + 原版合并 IP出口检测（分流探测）节点定义 ---
const splitNodes = [
    // 1. 国内节点
    { id: 'sp-ali', zh: '阿里巴巴 (国内)', en: 'Alibaba CN', group: 'China', type: 'ali' },
    { id: 'sp-netease', zh: '网易 (国内)', en: 'Netease CN', group: 'China', type: 'netease' },
    { id: 'sp-bytedance', zh: '字节跳动 (国内)', en: 'ByteDance CN', group: 'China', type: 'bytedance', url: 'https://perfops.byte-test.com/500b-bench.jpg' },
    { id: 'sp-tencent', zh: '腾讯 (国内)', en: 'Tencent CN', group: 'China', type: 'tencent' },
    { id: 'sp-cn-cloudflare', zh: 'Cloudflare 中国网络', en: 'Cloudflare CN', group: 'China', url: 'https://cloudflaremirrors.com/cdn-cgi/trace' },
    { id: 'sp-cn-qualcomm', zh: '高通中国', en: 'Qualcomm CN', group: 'China', url: 'https://www.qualcomm.cn/cdn-cgi/trace' },
    { id: 'sp-cn-visa', zh: 'Visa中国', en: 'Visa CN', group: 'China', url: 'https://www.visa.cn/cdn-cgi/trace' },
    { id: 'sp-cn-canva', zh: 'Canva中国', en: 'Canva CN', group: 'China', url: 'https://www.canva.cn/cdn-cgi/trace' },
    { id: 'sp-cn-shopify', zh: 'Shopify中国', en: 'Shopify CN', group: 'China', url: 'https://shopify.cn/cdn-cgi/trace' },
    { id: 'sp-cn-poki', zh: 'Poki游戏', en: 'Poki CN', group: 'China', url: 'https://poki.cn/cdn-cgi/trace' },

    // 2. 国际节点 (Global Base)
    { id: 'sp-cloudflare', zh: 'www.cloudflare.com (国际)', en: 'Cloudflare Global', group: 'Global', url: 'https://www.cloudflare.com/cdn-cgi/trace' },
    { id: 'sp-bytedance-intl', zh: '字节跳动 海外 (国际)', en: 'ByteDance Intl', group: 'Global', type: 'bytedance', url: 'https://perfops2.byte-test.com/500b-bench.jpg' },
    { id: 'sp-visa', zh: 'www.visa.com (国际)', en: 'Visa Global', group: 'Global', url: 'https://www.visa.com/cdn-cgi/trace' },
    { id: 'sp-x', zh: 'x.com (国际)', en: 'X / Twitter', group: 'Global', url: 'https://x.com/cdn-cgi/trace' },
    { id: 'sp-medium', zh: 'medium.com (国际)', en: 'Medium', group: 'Global', url: 'https://medium.com/cdn-cgi/trace' },

    // 3. AI 大模型
    { id: 'sp-chatgpt', zh: 'ChatGPT (国际)', en: 'ChatGPT', group: 'AI', url: 'https://chatgpt.com/cdn-cgi/trace' },
    { id: 'sp-sora', zh: 'Sora (国际)', en: 'Sora', group: 'AI', url: 'https://sora.com/cdn-cgi/trace' },
    { id: 'sp-openai', zh: 'OpenAI (国际)', en: 'OpenAI', group: 'AI', url: 'https://openai.com/cdn-cgi/trace' },
    { id: 'sp-claude', zh: 'Claude AI (国际)', en: 'Claude AI', group: 'AI', url: 'https://claude.ai/cdn-cgi/trace' },
    { id: 'sp-grok', zh: 'Grok (国际)', en: 'Grok', group: 'AI', url: 'https://grok.com/cdn-cgi/trace' },
    { id: 'sp-anthropic', zh: 'Anthropic (国际)', en: 'Anthropic', group: 'AI', url: 'https://anthropic.com/cdn-cgi/trace' },
    { id: 'sp-perplexity', zh: 'Perplexity (国际)', en: 'Perplexity', group: 'AI', url: 'https://www.perplexity.ai/cdn-cgi/trace' },
    { id: 'sp-poe', zh: 'Poe', en: 'Poe', group: 'AI', url: 'https://poe.com/cdn-cgi/trace' },

    // 4. 社交与社区
    { id: 'sp-discord-gw', zh: 'Discord 网关', en: 'Discord GW', group: 'Social', url: 'https://gateway.discord.gg/cdn-cgi/trace' },

    // 5. 流媒体与娱乐 (Media & Entertainment)
    { id: 'sp-crunchyroll', zh: 'Crunchyroll', en: 'Crunchyroll', group: 'Media', url: 'https://crunchyroll.com/cdn-cgi/trace' },
    { id: 'sp-pixiv', zh: 'Pixiv', en: 'Pixiv', group: 'Media', url: 'https://www.pixiv.net/cdn-cgi/trace' },
    { id: 'sp-fandom', zh: 'Fandom', en: 'Fandom', group: 'Media', url: 'https://www.fandom.com/cdn-cgi/trace' },
    { id: 'sp-patreon', zh: 'Patreon', en: 'Patreon', group: 'Media', url: 'https://www.patreon.com/cdn-cgi/trace' },

    // 6. Crypto 加密货币
    { id: 'sp-okx', zh: 'OKX', en: 'OKX', group: 'Crypto', url: 'https://www.okx.com/cdn-cgi/trace' },
    { id: 'sp-coinbase', zh: 'Coinbase', en: 'Coinbase', group: 'Crypto', url: 'https://www.coinbase.com/cdn-cgi/trace' },

    // 7. 开发者与静态库 (Developer & Static)
    { id: 'sp-nodejs', zh: 'Node.js', en: 'Node.js', group: 'Dev', url: 'https://nodejs.org/cdn-cgi/trace' },
    { id: 'sp-gitlab', zh: 'GitLab', en: 'GitLab', group: 'Dev', url: 'https://gitlab.com/cdn-cgi/trace' },
    { id: 'sp-jsdelivr', zh: 'jsDelivr', en: 'jsDelivr', group: 'Dev', url: 'https://testingcf.jsdelivr.net/cdn-cgi/trace' },
    { id: 'sp-cdnjs', zh: 'cdnjs', en: 'cdnjs', group: 'Dev', url: 'https://cdnjs.cloudflare.com/cdn-cgi/trace' },
    { id: 'sp-unpkg', zh: 'unpkg', en: 'unpkg', group: 'Dev', url: 'https://app.unpkg.com/cdn-cgi/trace' },
    { id: 'sp-npm', zh: 'NPM Registry', en: 'NPM', group: 'Dev', url: 'https://registry.npmjs.org/cdn-cgi/trace' },
    { id: 'sp-kali', zh: 'Kali Linux', en: 'Kali', group: 'Dev', url: 'https://kali.download/cdn-cgi/trace' },
    { id: 'sp-digitalocean', zh: 'DigitalOcean', en: 'DigitalOcean', group: 'Dev', url: 'https://www.digitalocean.com/cdn-cgi/trace' },

    // 8. 工具与基础网络 (Tools & Infra)
    { id: 'sp-1111', zh: '1.1.1.1', en: 'CF DNS', group: 'Tools', url: 'https://1.1.1.1/cdn-cgi/trace' },
    { id: 'sp-notion', zh: 'Notion', en: 'Notion', group: 'Tools', url: 'https://www.notion.so/cdn-cgi/trace' },
    { id: 'sp-visa-global', zh: 'Visa 国际', en: 'Visa', group: 'Tools', url: 'https://www.visa.com.sg/cdn-cgi/trace' },

    // 9. NSFW
    { id: 'sp-ehentai', zh: 'E-Hentai (国际)', en: 'E-Hentai', group: 'NSFW', url: 'https://e-hentai.org/cdn-cgi/trace' },
    { id: 'sp-missav-ws', zh: 'MissAV (ws)', en: 'MissAV', group: 'NSFW', url: 'https://missav.ws/cdn-cgi/trace' },
    { id: 'sp-missav-ai', zh: 'MissAV (ai)', en: 'MissAV', group: 'NSFW', url: 'https://missav.ai/cdn-cgi/trace' },
    { id: 'sp-missav-live', zh: 'MissAV (live)', en: 'MissAV', group: 'NSFW', url: 'https://missav.live/cdn-cgi/trace' },
    { id: 'sp-hanime', zh: 'Hanime1 (国际)', en: 'Hanime1', group: 'NSFW', url: 'https://hanime1.me/cdn-cgi/trace' },
    { id: 'sp-javdb', zh: 'JavDB (国际)', en: 'JavDB', group: 'NSFW', url: 'https://javdb.com/cdn-cgi/trace' },
    { id: 'sp-javchu', zh: 'Javchu (国际)', en: 'Javchu', group: 'NSFW', url: 'https://javchu.com/cdn-cgi/trace' },
    { id: 'sp-jkforum', zh: 'JKForum', en: 'JKForum', group: 'NSFW', url: 'https://av.jkforum.net/cdn-cgi/trace' },
    { id: 'sp-nhentai', zh: 'nhentai', en: 'nhentai', group: 'NSFW', url: 'https://nhentai.net/cdn-cgi/trace' }
];

// ============================================================
// 为特定节点配置备用域名（在原有基础上添加 jsDelivr）
// ============================================================
const nodeFallbacks = {
    'sp-cn-cloudflare': [
        'https://cloudflare-cn.com/cdn-cgi/trace',
        'https://www.cloudflare.com/cdn-cgi/trace'
    ],
    'sp-cn-visa': [
        'https://www.visa.cn/cdn-cgi/trace',
        'https://www.visa.com/cdn-cgi/trace'
    ],
    'sp-cn-canva': [
        'https://www.canva.cn/cdn-cgi/trace',
        'https://www.canva.com/cdn-cgi/trace'
    ],
    'sp-cn-shopify': [
        'https://shopify.cn/cdn-cgi/trace',
        'https://www.shopify.com/cdn-cgi/trace'
    ],
    'sp-cn-poki': [
        'https://poki.cn/cdn-cgi/trace',
        'https://poki.com/cdn-cgi/trace'
    ],
    'sp-cloudflare': [
        'https://www.cloudflare.com/cdn-cgi/trace',
        'https://cloudflare.com/cdn-cgi/trace'
    ],
    'sp-visa': [
        'https://www.visa.com/cdn-cgi/trace',
        'https://www.visa.com.sg/cdn-cgi/trace'
    ],
    // ===== 新增 jsDelivr 备用域名 =====
    'sp-jsdelivr': [
        'https://cdn.jsdelivr.net/cdn-cgi/trace',
        'https://testingcf.jsdelivr.net/cdn-cgi/trace',
        'https://fastly.jsdelivr.net/cdn-cgi/trace',
        'https://gcore.jsdelivr.net/cdn-cgi/trace'
    ],
    // ===== 新增其他可能失败的节点 =====
    'sp-cdnjs': [
        'https://cdnjs.cloudflare.com/cdn-cgi/trace',
        'https://cdnjs.com/cdn-cgi/trace'
    ],
    'sp-unpkg': [
        'https://unpkg.com/cdn-cgi/trace',
        'https://app.unpkg.com/cdn-cgi/trace'
    ]
};

// --- 工具函数 ---
function getFlagEmoji(countryCode) {
    if (!countryCode || countryCode.length !== 2) return "🌐";
    const codePoints = countryCode.toUpperCase().split("").map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

// --- IP 隐藏/遮罩逻辑 ---
let ipHideMode = 'none';

function maskIP(ip) {
    if (!ip || ip === 'Unknown') return ip;
    if (ipHideMode === 'none') return ip;
    if (ipHideMode === 'full') return '••• 已隐藏 / Hidden •••';
    // partial: 显示前两位
    if (ip.indexOf(':') !== -1) {
        const parts = ip.split(':');
        const shown = parts.slice(0, 2).join(':');
        return shown + ':****:****:****:****';
    }
    const parts = ip.split('.');
    if (parts.length === 4) return parts[0] + '.' + parts[1] + '.*.*';
    return ip;
}

function refreshIPMasking() {
    document.querySelectorAll('[data-ip]').forEach(el => {
        const ip = el.dataset.ip;
        if (!ip || ip === 'Unknown') return;
        const masked = maskIP(ip);
        if (el.classList.contains('dns-ip-val')) {
            el.textContent = masked;
        } else if (typeof el.dataset.flag !== 'undefined') {
            el.innerHTML = `<span>${el.dataset.flag}</span> ${masked}`;
        } else {
            el.textContent = masked;
        }
    });
    const dnsIpInfo = document.getElementById('dns-ip-info');
    if (dnsIpInfo && dnsIpInfo.dataset.ip) {
        dnsIpInfo.innerHTML = `您的出口IP: ${dnsIpInfo.dataset.flag || ''} ${maskIP(dnsIpInfo.dataset.ip)}`;
    }
}

function setIPHideMode(mode) {
    ipHideMode = mode;
    localStorage.setItem('Hangdn_ip_hide_mode', mode);
    ['none', 'full', 'partial'].forEach(m => {
        const b = document.getElementById('btn-ip-' + m);
        if (b) b.classList.remove('active');
    });
    const activeBtn = document.getElementById('btn-ip-' + mode);
    if (activeBtn) activeBtn.classList.add('active');
    refreshIPMasking();
}

function initIPHideMode() {
    const saved = localStorage.getItem('Hangdn_ip_hide_mode') || 'none';
    setIPHideMode(saved);
}

// --- 一键截图逻辑 (html2canvas + 水印) ---
async function captureElementWithWatermark(el, filenamePrefix) {
    if (!el || typeof html2canvas === 'undefined') {
        alert('截图组件加载失败，请检查网络后重试');
        return;
    }
    const canvas = await html2canvas(el, { backgroundColor: '#000000', useCORS: true, scale: 2, logging: false });
    const wmHeight = 60;
    const outCanvas = document.createElement('canvas');
    outCanvas.width = canvas.width;
    outCanvas.height = canvas.height + wmHeight;
    const ctx = outCanvas.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, outCanvas.width, outCanvas.height);
    ctx.drawImage(canvas, 0, 0);
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    ctx.font = (24) + 'px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('ip.Hangdndh.com', outCanvas.width / 2, canvas.height + 38);
    const link = document.createElement('a');
    link.download = filenamePrefix + '_' + Date.now() + '.png';
    link.href = outCanvas.toDataURL('image/png');
    link.click();
}

async function captureSection(elementId, label) {
    const el = document.getElementById(elementId);
    if (!el) { alert('未找到该区域，无法截图'); return; }
    try {
        await captureElementWithWatermark(el, label);
    } catch (e) {
        alert('截图失败: ' + (e && e.message ? e.message : e));
    }
}

async function runAllTestsAndScreenshot() {
    const btn = document.getElementById('run-all-btn');
    if (btn) {
        btn.disabled = true;
        btn.style.opacity = '0.6';
        btn.innerHTML = '<span class="zh">测试进行中，' + '5秒后自动截图...</span><span class="en">Running & waiting for screenshot...</span>';
    }
    try {
        runDNSLeakTest();
        runLatencyTest();
        runSplitTest();
        await new Promise(resolve => setTimeout(resolve, 5000));
        const container = document.querySelector('.container') || document.body;
        await captureElementWithWatermark(container, 'Hangdn_全部检测结果');
    } catch (e) {
        alert('截图失败: ' + (e && e.message ? e.message : e));
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.style.opacity = '1';
            btn.innerHTML = '<span class="zh">一键测试并保存截图 (5s)</span><span class="en">Run All Tests & Save Screenshot (5s)</span>';
        }
    }
}

// --- IP详细信息缓存与查询逻辑 ---
const ipCache = {};

async function toggleIPDetails(clickedCard) {
    const grid = clickedCard.closest('.grid, #split-grid');
    if (!grid) return;
    
    let isOpening = true;
    let clickedDetails = clickedCard.querySelector('.ip-details');
    if (clickedDetails && clickedDetails.style.display === 'block') {
        isOpening = false;
    }

    const allCards = grid.querySelectorAll('.card');
    allCards.forEach(async (card) => {
        const ipEl = card.querySelector('.ip-text');
        if (!ipEl || !ipEl.dataset.ip || ipEl.dataset.ip === 'Unknown' || ipEl.dataset.ip.includes('等待')) return;
        
        const ip = ipEl.dataset.ip;
        
        let detailsEl = card.querySelector('.ip-details');
        if (!detailsEl) {
            detailsEl = document.createElement('div');
            detailsEl.className = 'ip-details';
            detailsEl.style.cssText = 'margin-top: 12px; font-size: 0.75rem; color: var(--text-dim); border-top: 1px solid var(--glass-border); padding-top: 12px; display: none; line-height: 1.6; word-break: break-all;';
            card.appendChild(detailsEl);
        }

        if (!isOpening) {
            detailsEl.style.display = 'none';
            return;
        }

        detailsEl.style.display = 'block';
        if (ipCache[ip]) {
            renderDetails(detailsEl, ipCache[ip]);
            return;
        }

        detailsEl.innerHTML = '<span class="anim-pulse">查询中 / Fetching details...</span>';
        try {
            const res = await fetch(`https://api.ip.sb/geoip/${ip}`);
            const data = await res.json();
            ipCache[ip] = data;
            renderDetails(detailsEl, data);
        } catch (e) {
            detailsEl.innerHTML = '<span style="color: var(--error)">查询失败 / Failed to load</span>';
        }
    });
}

function renderDetails(el, data) {
    el.innerHTML = `
        <div><strong>ISP:</strong> ${data.isp || '未知'}</div>
        <div><strong>ASN:</strong> ${data.asn_organization || '未知'} (AS${data.asn || '未知'})</div>
        <div><strong>Location:</strong> ${data.country || '未知'}, ${data.timezone || '未知'}</div>
    `;
}

// --- 玻璃渲染模式逻辑 ---
function setGlassMode(mode) {
    document.body.setAttribute('data-glass', mode);
    localStorage.setItem('Hangdn_glass_mode', mode);
    
    document.getElementById('btn-glass-low').classList.remove('active');
    document.getElementById('btn-glass-medium').classList.remove('active');
    document.getElementById('btn-glass-high').classList.remove('active');
    
    document.getElementById('btn-glass-' + mode).classList.add('active');
}

function initGlassMode() {
    const savedMode = localStorage.getItem('Hangdn_glass_mode') || 'medium';
    setGlassMode(savedMode);
}

// --- 初始化与功能逻辑 ---
function init() {
    initGlassMode();
    initIPHideMode();
    const idGrid = document.getElementById('identity-grid');
    identityNodes.forEach(node => {
        idGrid.innerHTML += `
            <div class="card" onclick="toggleIPDetails(this)" style="cursor: pointer;">
                <div class="card-header">
                    <div class="node-name">
                        <span class="zh">${node.zh}</span>
                        <span class="en">${node.en}</span>
                    </div>
                    <span class="tag">ACTIVE</span>
                </div>
                <div class="ip-text anim-pulse" id="ip-${node.id}">同步中 / Sync...</div>
                <div class="sub-text" id="sub-${node.id}">等待服务器响应</div>
            </div>`;
    });

    const latGrid = document.getElementById('latency-grid');
    latencyNodes.forEach(node => {
        latGrid.innerHTML += `
            <div class="card">
                <div class="card-header">
                    <div class="icon-box">
                        <img class="site-icon" src="${node.icon}" onerror="this.src='🌐'">
                        <div class="node-name">
                            <span class="zh">${node.zh}</span>
                            <span class="en">${node.en}</span>
                        </div>
                    </div>
                    <span id="val-${node.id}" class="tag">STANDBY</span>
                </div>
                <div class="latency-bar"><div id="bar-${node.id}" class="latency-fill"></div></div>
                <div class="sub-text" id="info-${node.id}">等待指令 / Waiting...</div>
            </div>`;
    });
    identityNodes.forEach(autoFetchIdentity);

    const splitGroupOrder = [
        { key: 'China', zh: '国内直连', en: 'China Mainland' },
        { key: 'Global', zh: '国际基础', en: 'Global Base' },
        { key: 'AI', zh: 'AI 大模型', en: 'AI Models' },
        { key: 'Social', zh: '社交与社区', en: 'Social & Community' },
        { key: 'Media', zh: '流媒体与娱乐', en: 'Media & Entertainment' },
        { key: 'Crypto', zh: '加密货币', en: 'Crypto' },
        { key: 'Dev', zh: '开发者与静态库', en: 'Developer & Static' },
        { key: 'Tools', zh: '工具与基础网络', en: 'Tools & Infra' },
        { key: 'NSFW', zh: 'NSFW', en: 'NSFW' }
    ];
    
    const splitGrid = document.getElementById('split-grid');
    splitGroupOrder.forEach(g => {
        const nodesInGroup = splitNodes.filter(n => n.group === g.key);
        if (!nodesInGroup.length) return;
        splitGrid.innerHTML += `
            <div class="group-header">
                <span class="zh">${g.zh}</span>
                <span class="en">${g.en}</span>
            </div>`;
        nodesInGroup.forEach(node => {
            splitGrid.innerHTML += `
                <div class="card" onclick="toggleIPDetails(this)" style="cursor: pointer;">
                    <div class="card-header">
                        <div class="node-name">
                            <span class="zh">${node.zh}</span>
                            <span class="en">${node.en}</span>
                        </div>
                        <span id="tag-${node.id}" class="tag">STANDBY</span>
                    </div>
                    <div class="ip-text" id="val-${node.id}">等待检测 / Waiting...</div>
                    <div class="sub-text" id="sub-${node.id}">点击右上角按钮开始探测</div>
                </div>`;
        });
    });

    const observerOptions = { rootMargin: '-100px 0px -70% 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.nav-item').forEach(nav => {
                    nav.classList.toggle('active', nav.getAttribute('href') === '#' + entry.target.id);
                });
            }
        });
    }, observerOptions);
    document.querySelectorAll('.section-header').forEach(section => observer.observe(section));
}

async function autoFetchIdentity(node) {
    try {
        const res = await fetch(node.url);
        const ipEl = document.getElementById('ip-' + node.id);
        const subEl = document.getElementById('sub-' + node.id);
        if(!ipEl) return;
        ipEl.classList.remove('anim-pulse');
        if (node.type === 'trace') {
                    const text = await res.text();
                    const ip = text.match(/ip=([^\n]+)/)?.[1] || 'Unknown';
                    const loc = text.match(/loc=([^\n]+)/)?.[1] || 'UN';
                    const flag = getFlagEmoji(loc);
                    ipEl.dataset.ip = ip;
                    ipEl.dataset.flag = flag;
                    ipEl.innerHTML = `<span>${flag}</span> ${maskIP(ip)}`;
                    subEl.innerHTML = '<span>地区 / Region:</span> ' + loc;
                } else {
                    const data = await res.json();
                    const flag = getFlagEmoji(data.country_code);
                    ipEl.dataset.ip = data.ip;
                    ipEl.dataset.flag = flag;
                    ipEl.innerHTML = `<span>${flag}</span> ${maskIP(data.ip)}`;
                    subEl.textContent = `${data.isp} (${data.country_code})`;
                }
    } catch {
        const ipEl = document.getElementById('ip-' + node.id);
        if(ipEl) {
            ipEl.textContent = '连接超时 / Timeout';
            ipEl.style.color = 'var(--error)';
        }
    }
}

// 恢复完整的 DNS 泄漏测试逻辑
async function runDNSLeakTest() {
    const btn = document.getElementById('dns-test-btn');
    const ipInfo = document.getElementById('dns-ip-info');
    const results = document.getElementById('dns-results');
    const conclusion = document.getElementById('dns-conclusion');
    const progress = document.getElementById('dns-progress');

    btn.disabled = true;
    btn.style.opacity = '0.5';
    btn.innerHTML = '<span class="zh">检测中...</span><span class="en">Scanning...</span>';
    results.innerHTML = '';
    conclusion.innerHTML = '';
    progress.style.width = '0%';
    ipInfo.innerHTML = '<span class="anim-pulse">正在获取本地出口IP...</span>';

    try {
        const ipRes = await fetch('https://api-ipv4.ip.sb/geoip');
        const ipData = await ipRes.json();
        const mainIP = ipData.ip;
        const mainCountry = ipData.country_code;
        const mainFlag = getFlagEmoji(mainCountry);
        ipInfo.dataset.ip = mainIP;
        ipInfo.dataset.flag = mainFlag;
        ipInfo.innerHTML = `您的出口IP: ${mainFlag} ${maskIP(mainIP)}`;
        progress.style.width = '10%';

        const idRes = await fetch('https://bash.ws/id');
        const leakId = await idRes.text();
        progress.style.width = '20%';

        ipInfo.innerHTML = `您的出口IP: ${mainFlag} ${maskIP(mainIP)} <small style="opacity:0.7">(正在探测 DNS 节点...)</small>`;
        
        const dnsRequests = Array.from({ length: 5 }, (_, i) => {
            return fetch(`https://${i}.${leakId}.bash.ws`, { mode: 'no-cors' })
                .then(() => {
                    const currentWidth = parseFloat(progress.style.width);
                    progress.style.width = (currentWidth + 10) + '%';
                }).catch(() => {});
        });
        await Promise.all(dnsRequests);
        progress.style.width = '70%';

        const resultRes = await fetch(`https://bash.ws/dnsleak/test/${leakId}?json`);
        const data = await resultRes.json();
        progress.style.width = '100%';

        let hasCN_DNS = false;
        let hasForeign_DNS = false;
        const isIpCN = mainCountry.toUpperCase() === 'CN';

        data.forEach((item, index) => {
            if(item.type === 'dns') {
                const isDnsCN = item.country.toUpperCase() === 'CN';
                if (isDnsCN) hasCN_DNS = true;
                else hasForeign_DNS = true;

                let statusEmoji = '🌐';
                if (isIpCN) {
                    statusEmoji = isDnsCN ? 'ℹ️' : '⚠️';
                } else {
                    statusEmoji = isDnsCN ? '❌' : '✅';
                }

                results.innerHTML += `
                    <div class="dns-item">
                        <div style="display:flex; justify-content:space-between">
                            <span>${statusEmoji} DNS Node #${index + 1}</span>
                            <span>${getFlagEmoji(item.country)} ${item.country_name}</span>
                        </div>
                        <div class="dns-ip-val" data-ip="${item.ip}" style="font-family:monospace; color:var(--text-main)">${maskIP(item.ip)}</div>
                        <div style="font-size:0.65rem; color:var(--text-dim)">${item.asn}</div>
                    </div>`;
            }
        });

        if(results.innerHTML === '') results.innerHTML = '<div class="dns-item" style="text-align:center">未检测到远程 DNS 节点</div>';
        
        if (isIpCN) {
            if (hasCN_DNS && !hasForeign_DNS) {
                conclusion.className = 'conclusion leak-safe';
                conclusion.style.color = 'var(--text-dim)';
                conclusion.style.borderColor = 'rgba(255,255,255,0.1)';
                conclusion.style.background = 'rgba(255,255,255,0.05)';
                conclusion.innerHTML = 'ℹ️ 提示：未使用代理 (No Proxy Detected)';
            } else {
                conclusion.className = 'conclusion leak-detected';
                conclusion.innerHTML = '⚠️ 提示：您正在使用国外 DNS (Foreign DNS Detected)';
            }
        } else {
            if (hasCN_DNS) {
                conclusion.className = 'conclusion leak-detected';
                conclusion.innerHTML = '❌ 发现严重 DNS 泄漏 (Severe DNS Leak Detected)';
            } else {
                conclusion.className = 'conclusion leak-safe';
                conclusion.innerHTML = '✅ DNS 安全 (No Leak Detected)';
            }
        }
    } catch (e) {
        ipInfo.textContent = '检测失败，请重试';
    } finally {
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.innerHTML = '<span class="zh">重新检测</span><span class="en">Retest DNS</span>';
    }
}

// 恢复完整的延迟测试逻辑
async function runLatencyTest() {
    const btn = document.getElementById('test-btn');
    btn.innerHTML = '<span class="zh">检测中...</span><span class="en">Processing...</span>';
    btn.style.opacity = '0.6';

    const tests = latencyNodes.map(async node => {
        const start = performance.now();
        const infoEl = document.getElementById('info-' + node.id);
        const valEl = document.getElementById('val-' + node.id);
        const barEl = document.getElementById('bar-' + node.id);
        try {
            await fetch(node.url + '?t=' + Date.now(), { mode: 'no-cors' });
            const ms = Math.round(performance.now() - start);
            valEl.textContent = ms + 'ms';
            infoEl.textContent = '连接畅通 / Operational';
            barEl.style.width = Math.min(ms / 10, 100) + '%';
            if(ms < 200) { valEl.className = 'tag status-good'; barEl.style.background = 'var(--success)'; }
            else if(ms < 500) { valEl.className = 'tag status-warn'; barEl.style.background = 'var(--warning)'; }
            else { valEl.className = 'tag status-bad'; barEl.style.background = 'var(--error)'; }
        } catch {
            valEl.textContent = 'ERR';
            valEl.className = 'tag status-bad';
            infoEl.textContent = '访问受阻 / Blocked';
            barEl.style.width = '100%'; barEl.style.background = 'var(--error)';
        }
    });
    await Promise.all(tests);
    btn.innerHTML = '<span class="zh">重新检测</span><span class="en">Retest Matrix</span>';
    btn.style.opacity = '1';
}

// --- 核心探测函数集合 ---
async function getCFNodeIP(url, timeoutMs = 8000) {
    async function strategy1() {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeoutMs);
        try {
            const res = await fetch(url + '?t=' + Date.now() + '_' + Math.random().toString(36).substring(2), { 
                signal: controller.signal,
                headers: { 
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache'
                }
            });
            const text = await res.text();
            const ip = text.match(/ip=([^\n]+)/)?.[1];
            const loc = text.match(/loc=([^\n]+)/)?.[1] || '';
            if (ip && ip !== 'Unknown') {
                return { ip, loc };
            }
            throw new Error('parse fail');
        } finally {
            clearTimeout(timer);
        }
    }
    
    async function strategy2() {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeoutMs);
        try {
            const res = await fetch('https://www.cloudflare.com/cdn-cgi/trace', { 
                signal: controller.signal 
            });
            const text = await res.text();
            const ip = text.match(/ip=([^\n]+)/)?.[1];
            const loc = text.match(/loc=([^\n]+)/)?.[1] || '';
            if (ip && ip !== 'Unknown') {
                return { ip, loc };
            }
            throw new Error('parse fail');
        } finally {
            clearTimeout(timer);
        }
    }
    
    async function strategy3() {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeoutMs);
        try {
            const res = await fetch(url, { 
                method: 'HEAD',
                signal: controller.signal 
            });
            const ip = res.headers.get('cf-connecting-ip') || 
                       res.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
                       res.headers.get('x-real-ip');
            if (ip && ip !== 'Unknown') {
                return { ip, loc: '' };
            }
            throw new Error('no ip header');
        } finally {
            clearTimeout(timer);
        }
    }

    const strategies = [strategy1, strategy2, strategy3];
    for (const strategy of strategies) {
        try {
            const result = await strategy();
            if (result && result.ip && result.ip !== 'Unknown') {
                return result;
            }
        } catch (e) {
            continue;
        }
    }
    throw new Error('所有探测方式均失败');
}

// ============================================================
// 支持备用域名的增强探测函数
// ============================================================
async function getCFNodeIPWithFallback(node, timeoutMs = 8000) {
    const fallbackUrls = nodeFallbacks[node.id] || [];
    const urls = [node.url, ...fallbackUrls];
    
    let lastError = null;
    for (const url of urls) {
        try {
            const result = await getCFNodeIP(url, timeoutMs);
            if (result && result.ip && result.ip !== 'Unknown') {
                return result;
            }
        } catch (e) {
            lastError = e;
            continue;
        }
    }
    throw new Error('所有备用URL均失败: ' + (lastError ? lastError.message : '未知错误'));
}

function getAliNodeIP(timeoutMs = 6000) {
    return new Promise((resolve, reject) => {
        const rand = Date.now() + '-' + Math.random().toString(36).substring(2);
        const cb = 'ali_jsonp_' + Date.now() + '_' + Math.floor(Math.random() * 10000);
        const script = document.createElement('script');
        const timer = setTimeout(() => { cleanup(); reject(new Error('timeout')); }, timeoutMs);
        function cleanup() { clearTimeout(timer); delete window[cb]; script.remove(); }
        window[cb] = function (data) {
            try {
                const ip = data && data.content && data.content.localIp;
                cleanup();
                if (ip) resolve({ ip, loc: 'CN' }); else reject(new Error('no ip'));
            } catch (e) { cleanup(); reject(e); }
        };
        script.src = `https://${rand}.dns-detect.alicdn.com/api/detect/DescribeDNSLookup?cb=${cb}`;
        script.onerror = () => { cleanup(); reject(new Error('load error')); };
        document.body.appendChild(script);
    });
}

// 腾讯更新版 (利用最新的 r.inews.qq.com JSONP)
function getTencentNodeIP(timeoutMs = 6000) {
    return new Promise((resolve, reject) => {
        // 方案1: 使用腾讯云 API (更稳定)
        async function tryTencentCloud() {
            try {
                const res = await fetch('https://api.qcloud.com/v2/index.php?Action=DescribeInstances&Version=2017-03-12&Region=ap-guangzhou', {
                    method: 'GET',
                    headers: { 'Cache-Control': 'no-cache' }
                });
                // 尝试从响应头获取 IP
                const ip = res.headers.get('x-forwarded-for') || 
                           res.headers.get('x-real-ip') ||
                           res.headers.get('cf-connecting-ip');
                if (ip) {
                    return { ip, loc: 'CN' };
                }
                throw new Error('no ip from tencent cloud');
            } catch (e) {
                throw e;
            }
        }

        // 方案2: 使用腾讯新闻 JSONP (原方案，增加重试)
        function tryTencentNews() {
            return new Promise((resolve2, reject2) => {
                const cb = 'tencent_jsonp_' + Date.now() + '_' + Math.floor(Math.random() * 10000);
                const script = document.createElement('script');
                const timer = setTimeout(() => { 
                    cleanup(); 
                    reject2(new Error('timeout')); 
                }, timeoutMs);
                
                function cleanup() { 
                    clearTimeout(timer); 
                    delete window[cb]; 
                    script.remove(); 
                }
                
                window[cb] = function (data) {
                    try {
                        const ip = data && data.ip;
                        cleanup();
                        if (ip && ip !== 'Unknown') {
                            resolve2({ ip, loc: 'CN' });
                        } else {
                            reject2(new Error('no ip'));
                        }
                    } catch (e) { 
                        cleanup(); 
                        reject2(e); 
                    }
                };
                
                script.src = `https://r.inews.qq.com/api/ip2city?otype=jsonp&callback=${cb}`;
                script.onerror = () => { 
                    cleanup(); 
                    reject2(new Error('load error')); 
                };
                document.body.appendChild(script);
            });
        }

        // 方案3: 使用腾讯 CDN 资源获取 IP
        async function tryTencentCDN() {
            try {
                const res = await fetch('https://cdn.jsdelivr.net/npm/axios@1.6.0/package.json', {
                    method: 'HEAD',
                    headers: { 'Cache-Control': 'no-cache' }
                });
                const ip = res.headers.get('x-forwarded-for') || 
                           res.headers.get('x-real-ip') ||
                           res.headers.get('cf-connecting-ip');
                if (ip) {
                    return { ip, loc: 'CN' };
                }
                throw new Error('no ip from cdn');
            } catch (e) {
                throw e;
            }
        }

        // 依次尝试三种方案
        async function tryAll() {
            const strategies = [
                tryTencentCloud,
                tryTencentNews,
                tryTencentCDN
            ];
            
            for (const strategy of strategies) {
                try {
                    const result = await strategy();
                    if (result && result.ip && result.ip !== 'Unknown') {
                        resolve(result);
                        return;
                    }
                } catch (e) {
                    continue;
                }
            }
            reject(new Error('所有腾讯节点探测方式均失败'));
        }

        tryAll();
    });
}

// 网易图片探测 (读取 cdn-user-ip header)
async function getNeteaseNodeIP(timeoutMs = 6000) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
        const res = await fetch('https://necaptcha.nosdn.127.net/ab7f4275c1744aa28e0a8f3a1c58c532.png', {
            method: 'HEAD',
            signal: controller.signal
        });
        const ip = res.headers.get('cdn-user-ip');
        if (!ip) throw new Error('parse fail');
        return { ip, loc: 'CN' };
    } finally {
        clearTimeout(timer);
    }
}

// 字节跳动图片探测 (读取 X-Request-Ip header)
async function getByteDanceNodeIP(url, timeoutMs = 6000) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
        const res = await fetch(url, {
            method: 'HEAD',
            signal: controller.signal
        });
        const ip = res.headers.get('x-request-ip');
        if (!ip) throw new Error('parse fail');
        return { ip, loc: 'CN' };
    } finally {
        clearTimeout(timer);
    }
}

// IP 分流探测合并了所有支持的分支
async function runSplitTest() {
    const btn = document.getElementById('split-test-btn');
    btn.disabled = true;
    btn.style.opacity = '0.6';
    btn.innerHTML = '<span class="zh">检测中...</span><span class="en">Probing...</span>';

    const tasks = splitNodes.map(async node => {
        const valEl = document.getElementById('val-' + node.id);
        const subEl = document.getElementById('sub-' + node.id);
        const tagEl = document.getElementById('tag-' + node.id);
        
        valEl.classList.add('anim-pulse');
        valEl.textContent = '探测中 / Probing...';
        tagEl.textContent = 'TESTING';
        tagEl.className = 'tag status-warn';
        
        let success = false;
        for (let attempt = 1; attempt <= 3; attempt++) {
            try {
                let r;
                if (node.type === 'ali') {
                    r = await getAliNodeIP();
                } else if (node.type === 'tencent') {
                    r = await getTencentNodeIP();
                } else if (node.type === 'netease') {
                    r = await getNeteaseNodeIP();
                } else if (node.type === 'bytedance') {
                    r = await getByteDanceNodeIP(node.url);
                } else {
                    r = await getCFNodeIPWithFallback(node);
                }
                
                valEl.classList.remove('anim-pulse');
                const flag = r.loc ? getFlagEmoji(r.loc) : '🌐';
                valEl.dataset.ip = r.ip;
                valEl.dataset.flag = flag;
                valEl.innerHTML = `<span>${flag}</span> ${maskIP(r.ip)}`;
                subEl.textContent = '地区 / Region: ' + (r.loc || '未知');
                tagEl.textContent = 'HIT';
                tagEl.className = 'tag status-good';
                success = true;
                break;
                
            } catch (e) {
                if (attempt === 3) {
                    valEl.classList.remove('anim-pulse');
                    valEl.textContent = '访问被拒绝 / Access Denied';
                    valEl.style.color = 'var(--error)';
                    subEl.textContent = '该节点被拦截、超时或跨域受限 (尝试3次)';
                    tagEl.textContent = 'FAIL';
                    tagEl.className = 'tag status-bad';
                } else {
                    await new Promise(r => setTimeout(r, 800 * attempt));
                }
            }
        }
    });

    await Promise.allSettled(tasks);
    btn.disabled = false;
    btn.style.opacity = '1';
    btn.innerHTML = '<span class="zh">重新检测</span><span class="en">Retest Exit</span>';
}

// --- IP 隐藏逻辑 ---
function getIPHideMode() {
    return localStorage.getItem('Hangdn_ip_hide_mode') || 'none';
}

function maskIP(ip) {
    if (!ip || ip === 'Unknown') return ip;
    const mode = getIPHideMode();
    if (mode === 'none') return ip;
    if (mode === 'full') return '已隐藏 / Hidden';
    if (mode === 'partial') {
        if (ip.includes(':')) {
            const parts = ip.split(':').filter(p => p !== '');
            return (parts.slice(0, 2).join(':') || ip) + ':****:****:****';
        } else {
            const parts = ip.split('.');
            if (parts.length === 4) return `${parts[0]}.${parts[1]}.*.*`;
        }
    }
    return ip;
}

function refreshAllIPDisplays() {
    document.querySelectorAll('.ip-text[data-ip]').forEach(el => {
        const ip = el.dataset.ip;
        if (!ip || ip === 'Unknown') return;
        const flag = el.dataset.flag;
        if (el.id === 'dns-ip-info') {
            const suffix = el.querySelector('small') ? el.querySelector('small').outerHTML : '';
            el.innerHTML = `您的出口IP: ${flag || ''} ${maskIP(ip)} ${suffix}`;
        } else if (flag) {
            el.innerHTML = `<span>${flag}</span> ${maskIP(ip)}`;
        } else {
            el.textContent = maskIP(ip);
        }
    });
}

function setIPHideMode(mode) {
    localStorage.setItem('Hangdn_ip_hide_mode', mode);
    ['none', 'full', 'partial'].forEach(m => {
        const b = document.getElementById('btn-ip-' + m);
        if (b) b.classList.toggle('active', m === mode);
    });
    refreshAllIPDisplays();
}

function initIPHideMode() {
    const saved = getIPHideMode();
    ['none', 'full', 'partial'].forEach(m => {
        const b = document.getElementById('btn-ip-' + m);
        if (b) b.classList.toggle('active', m === saved);
    });
}

// --- 截图保存逻辑 ---
async function captureSection(elementId, labelZh) {
    const target = document.getElementById(elementId);
    if (!target || typeof html2canvas === 'undefined') {
        alert('截图组件加载失败，请检查网络后重试 / Screenshot library failed to load');
        return null;
    }
    document.body.classList.add('screenshot-capture');
    let canvas;
    try {
        canvas = await html2canvas(target, {
            backgroundColor: '#0d0d12',
            useCORS: true,
            scale: window.devicePixelRatio > 1 ? 2 : 1.5
        });
    } finally {
                    document.body.classList.remove('screenshot-capture');
                    document.documentElement.style.scrollBehavior = ''; // 恢复平滑滚动
                }
                const finalCanvas = document.createElement('canvas');
    const watermarkHeight = 44;
    finalCanvas.width = canvas.width;
    finalCanvas.height = canvas.height + watermarkHeight;
    const ctx = finalCanvas.getContext('2d');
    ctx.fillStyle = '#0d0d12';
    ctx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);
    ctx.drawImage(canvas, 0, 0);
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    ctx.font = (18 * (canvas.width / (target.offsetWidth || canvas.width))) + 'px -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('ip.Hangdndh.com', finalCanvas.width / 2, canvas.height + watermarkHeight / 2 + 7);

    return new Promise(resolve => {
        finalCanvas.toBlob(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            const ts = new Date().toISOString().replace(/[:.]/g, '-');
            a.href = url;
            a.download = `${labelZh || 'screenshot'}_${ts}.png`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            setTimeout(() => URL.revokeObjectURL(url), 3000);
            resolve(blob);
        }, 'image/png');
    });
}

async function runAllTestsAndScreenshot() {
    const runAllBtn = document.getElementById('run-all-btn');
    if (runAllBtn) {
        runAllBtn.disabled = true;
        runAllBtn.innerHTML = '<span class="zh">正在运行检测 (最长10s)...</span><span class="en">Running tests (Max 10s)...</span>';
    }

    try {
        const dnsPromise = runDNSLeakTest();
        runLatencyTest();
        runSplitTest();
        
        // 等待 DNS 检测完毕，或者最多等待 10 秒超时
        await Promise.race([
            dnsPromise,
            new Promise(r => setTimeout(r, 10000))
        ]);
    } catch (e) { /* 各检测函数内部已处理异常 */ }

    if (runAllBtn) {
        runAllBtn.innerHTML = '<span class="zh">正在生成截图...</span><span class="en">Capturing screenshot...</span>';
    }

    try {
            const container = document.querySelector('.container');
            if (container && typeof html2canvas !== 'undefined') {
                // 临时关闭平滑滚动，防止滚动动画导致截屏元素错位重叠
                document.documentElement.style.scrollBehavior = 'auto';
                window.scrollTo(0, 0);
                document.body.classList.add('screenshot-capture');
                await new Promise(r => setTimeout(r, 200)); // 等待滚动彻底归位及UI重排
                let canvas;
                try {
                canvas = await html2canvas(container, {
                    backgroundColor: '#0d0d12',
                    useCORS: true,
                    scale: 1.2,
                    windowWidth: document.documentElement.scrollWidth,
                    windowHeight: document.documentElement.scrollHeight
                });
            } finally {
                document.body.classList.remove('screenshot-capture');
            }
            const finalCanvas = document.createElement('canvas');
            const watermarkHeight = 50;
            finalCanvas.width = canvas.width;
            finalCanvas.height = canvas.height + watermarkHeight;
            const ctx = finalCanvas.getContext('2d');
            ctx.fillStyle = '#0d0d12';
            ctx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);
            ctx.drawImage(canvas, 0, 0);
            ctx.fillStyle = 'rgba(255,255,255,0.75)';
            ctx.font = '22px -apple-system, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('ip.Hangdndh.com', finalCanvas.width / 2, canvas.height + watermarkHeight / 2 + 8);
            finalCanvas.toBlob(blob => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                const ts = new Date().toISOString().replace(/[:.]/g, '-');
                a.href = url;
                a.download = `全站检测汇总_${ts}.png`;
                document.body.appendChild(a);
                a.click();
                a.remove();
                setTimeout(() => URL.revokeObjectURL(url), 3000);
            }, 'image/png');
        }
    } catch (e) {
        alert('截图保存失败，请稍后重试 / Screenshot failed');
    }

    if (runAllBtn) {
        runAllBtn.disabled = false;
        runAllBtn.innerHTML = '<span class="zh">一键测试并保存截图 (自动/10s)</span><span class="en">Run All Tests & Save Screenshot (Auto/10s)</span>';
    }
}


// ===== 主题切换 =====
function setTheme(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('Hangdn_theme', mode);
    
    const lightBtn = document.getElementById('theme-light');
    const darkBtn = document.getElementById('theme-dark');
    if (lightBtn) lightBtn.classList.toggle('active', mode === 'light');
    if (darkBtn) darkBtn.classList.toggle('active', mode === 'dark');
}

function initTheme() {
    const saved = localStorage.getItem('Hangdn_theme') || 'light';
    setTheme(saved);
}

// ===== 回顶部按钮 =====
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    
    // 滚动时显示/隐藏
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    }, { passive: true });
    
    // 点击回到顶部
    btn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

window.onload = function() {
    init();
    initTheme();
    initBackToTop();
};

/* ==============================================================
   升级版：歌词窗口可拖动、缩放、更改颜色（保留全部原有功能）
   API 接口采用 2026.04.24 更新版本 (meting + 备用歌词)
   ============================================================== */

// -------- 配置 --------
const PLAYLIST_ID = '14148542684';

// -------- DOM 引用 --------
const capsule = document.getElementById('music-capsule');
const capsuleCover = document.getElementById('capsule-cover');
const playerWrap = document.getElementById('player-wrap');
const aplayerContainer = document.getElementById('aplayer-container');
const rightMenu = document.getElementById('right-menu');

const floatingLyrics = document.getElementById('floating-lyrics');
const currentLineEl = floatingLyrics.querySelector('.current-line');
const nextLineEl = floatingLyrics.querySelector('.next-line');
const colorPicker = document.getElementById('lyrics-color-picker');
const resetColorBtn = document.getElementById('reset-lyrics-color');

let aplayer = null;
let lyricsInterval = null;
let currentLyric = '';
let lyricsVisible = true;

// -------- 歌词颜色管理 --------
let currentLyricsColor = '#ff8c00'; // 默认橙

// 更新歌词颜色（应用到当前歌词窗口）
function applyLyricsColor(color) {
  if (!color) return;
  currentLyricsColor = color;
  // 直接修改 floatingLyrics 的 color，子元素继承
  floatingLyrics.style.color = color;
  // 当前行和下一行显式继承（但已继承，保险）
  currentLineEl.style.color = color;
  nextLineEl.style.color = color;
  // 同时修改 APlayer 内部歌词颜色（保证一致性）
  const lrcLines = document.querySelectorAll('.aplayer-lrc p');
  lrcLines.forEach(p => {
    if (p.classList.contains('aplayer-lrc-current')) {
      p.style.color = color;
    } else {
      p.style.color = color;
    }
  });
  // 存储偏好
  try { localStorage.setItem('lyricsColor', color); } catch(e) {}
}

// 重置为默认橙色
function resetLyricsColor() {
  applyLyricsColor('#ff8c00');
  colorPicker.value = '#ff8c00';
}

// 颜色选择器事件
colorPicker.addEventListener('input', (e) => {
  applyLyricsColor(e.target.value);
});
resetColorBtn.addEventListener('click', resetLyricsColor);

// 从 localStorage 恢复颜色
function restoreLyricsColor() {
  try {
    const saved = localStorage.getItem('lyricsColor');
    if (saved) {
      applyLyricsColor(saved);
      colorPicker.value = saved;
    } else {
      applyLyricsColor('#ff8c00');
      colorPicker.value = '#ff8c00';
    }
  } catch(e) { resetLyricsColor(); }
}

// -------- 歌词窗口拖动 (原生拖拽) --------
let dragData = { active: false, offsetX: 0, offsetY: 0 };

floatingLyrics.addEventListener('mousedown', (e) => {
  // 如果点击的是控制区或颜色选择器，不触发拖动
  if (e.target.closest('.lyrics-controls')) return;
  if (e.target.closest('input')) return;
  if (e.button !== 0) return;
  dragData.active = true;
  const rect = floatingLyrics.getBoundingClientRect();
  dragData.offsetX = e.clientX - rect.left;
  dragData.offsetY = e.clientY - rect.top;
  floatingLyrics.style.cursor = 'grabbing';
  e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
  if (!dragData.active) return;
  let left = e.clientX - dragData.offsetX;
  let top = e.clientY - dragData.offsetY;
  // 边界约束（避免完全拖出视野）
  const maxX = window.innerWidth - floatingLyrics.offsetWidth - 10;
  const maxY = window.innerHeight - floatingLyrics.offsetHeight - 10;
  left = Math.max(10, Math.min(left, maxX));
  top = Math.max(10, Math.min(top, maxY));
  floatingLyrics.style.left = left + 'px';
  floatingLyrics.style.top = top + 'px';
  floatingLyrics.style.bottom = 'auto';
  floatingLyrics.style.right = 'auto';
});

document.addEventListener('mouseup', () => {
  if (dragData.active) {
    dragData.active = false;
    floatingLyrics.style.cursor = 'grab';
  }
});

// 触摸支持 (移动端拖动)
let touchDrag = { active: false, offsetX: 0, offsetY: 0 };
floatingLyrics.addEventListener('touchstart', (e) => {
  if (e.target.closest('.lyrics-controls')) return;
  if (e.touches.length === 1) {
    const touch = e.touches[0];
    const rect = floatingLyrics.getBoundingClientRect();
    touchDrag.offsetX = touch.clientX - rect.left;
    touchDrag.offsetY = touch.clientY - rect.top;
    touchDrag.active = true;
  }
}, { passive: true });

document.addEventListener('touchmove', (e) => {
  if (!touchDrag.active || e.touches.length !== 1) return;
  const touch = e.touches[0];
  let left = touch.clientX - touchDrag.offsetX;
  let top = touch.clientY - touchDrag.offsetY;
  const maxX = window.innerWidth - floatingLyrics.offsetWidth - 10;
  const maxY = window.innerHeight - floatingLyrics.offsetHeight - 10;
  left = Math.max(10, Math.min(left, maxX));
  top = Math.max(10, Math.min(top, maxY));
  floatingLyrics.style.left = left + 'px';
  floatingLyrics.style.top = top + 'px';
  floatingLyrics.style.bottom = 'auto';
  floatingLyrics.style.right = 'auto';
}, { passive: true });

document.addEventListener('touchend', () => {
  touchDrag.active = false;
}, { passive: true });

// -------- 独立歌词显示功能 (增强) --------
function showLyricsWithEffect(currentText, nextText) {
  if (!lyricsVisible) return;
  if (currentText === currentLyric && currentText) return;
  currentLyric = currentText;
  currentLineEl.innerHTML = '';
  if (currentText && currentText.trim()) {
    // 全部使用打字效果
    const typingSpan = document.createElement('span');
    typingSpan.className = 'typing-text';
    typingSpan.textContent = currentText;
    currentLineEl.appendChild(typingSpan);
    
    nextLineEl.textContent = nextText || '';
    floatingLyrics.classList.add('show');
    applyLyricsColor(currentLyricsColor);
  } else {
    floatingLyrics.classList.remove('show');
  }
}

function updateLyricsFromDOM() {
  try {
    if (!lyricsVisible) return;
    const lrcContainer = document.querySelector('.aplayer-lrc');
    if (!lrcContainer) { floatingLyrics.classList.remove('show'); return; }
    const currentLrc = lrcContainer.querySelector('p.aplayer-lrc-current');
    const allLrcLines = lrcContainer.querySelectorAll('p');
    if (currentLrc && currentLrc.textContent.trim()) {
      const currentText = currentLrc.textContent.trim();
      let nextText = '';
      for (let i = 0; i < allLrcLines.length; i++) {
        if (allLrcLines[i] === currentLrc && i < allLrcLines.length - 1) {
          nextText = allLrcLines[i + 1].textContent.trim();
          break;
        }
      }
      showLyricsWithEffect(currentText, nextText);
    } else {
      floatingLyrics.classList.remove('show');
      currentLyric = '';
    }
  } catch (error) {
    floatingLyrics.classList.remove('show');
    currentLyric = '';
  }
}

function startLyricsUpdate(ap) {
  if (lyricsInterval) clearInterval(lyricsInterval);
  lyricsInterval = setInterval(() => updateLyricsFromDOM(), 120);
}

// -------- 初始化 APlayer (meting API + 备用歌词) --------
function initMeting() {
  if (aplayer) return Promise.resolve(aplayer);
  return new Promise(async (resolve, reject) => {
    try {
      aplayerContainer.innerHTML = '';
      const apiUrl = `https://api.injahow.cn/meting/?server=netease&type=playlist&id=${PLAYLIST_ID}`;
      const response = await fetch(apiUrl);
      const songs = await response.json();
      if (!songs || songs.length === 0) throw new Error('歌单加载失败');

      const audioList = [];
      for (const song of songs) {
        let lrc = song.lrc || '';
        if (!lrc || lrc === '') {
          try {
            const lrcUrl = `https://api.uomg.com/api/163/lyric?id=${song.id}`;
            const lrcRes = await fetch(lrcUrl);
            const lrcData = await lrcRes.json();
            lrc = lrcData.lyric || '';
          } catch(e) { /* 忽略 */ }
        }
        audioList.push({
          name: song.name,
          artist: song.artist,
          url: song.url,
          cover: song.pic,
          lrc: lrc
        });
      }

      aplayer = new APlayer({
        container: aplayerContainer,
        audio: audioList,
        theme: '#49b1f5',
        loop: 'all',
        preload: 'auto',
        volume: 0.7,
        lrcType: 3
      });
      bindAPlayerEvents(aplayer);
      resolve(aplayer);
    } catch (error) {
      console.error('歌单加载失败:', error);
      reject(error);
    }
  });
}

function bindAPlayerEvents(ap) {
  if (!ap) return;
  function updateCover() {
    try {
      const info = ap.list.audios[ap.list.index];
      if (info && info.cover) capsuleCover.src = info.cover;
    } catch(e) {}
  }
  ap.on('loadeddata', updateCover);
  ap.on('listswitch', updateCover);
  ap.on('play', () => {
    capsule.classList.add('playing');
    startLyricsUpdate(ap);
    // 确保歌词颜色
    applyLyricsColor(currentLyricsColor);
  });
  ap.on('pause', () => {
    capsule.classList.remove('playing');
    floatingLyrics.classList.remove('show');
    currentLyric = '';
  });
  ap.on('ended', () => {
    floatingLyrics.classList.remove('show');
    currentLyric = '';
  });
  // 歌词加载后应用颜色
  ap.on('lrc loaded', () => {
    applyLyricsColor(currentLyricsColor);
  });
}

async function ensurePlayerAndRun(fn) {
  try {
    const ap = await initMeting();
    if (typeof fn === 'function') fn(ap);
  } catch(err) { console.warn('播放器未就绪：', err); }
}

// -------- 胶囊点击 --------
capsule.addEventListener('click', () => {
  capsule.style.display = 'none';
  playerWrap.classList.add('show');
  initMeting().catch(() => {});
});

// -------- 右键菜单 (完全保留) --------
function showRightMenuAt(clientX, clientY) {
  rightMenu.style.display = 'block';
  rightMenu.classList.remove('show');
  requestAnimationFrame(() => {
    const mw = rightMenu.offsetWidth || 220;
    const mh = rightMenu.offsetHeight || 280;
    let left = Math.round(clientX - mw/2);
    left = Math.max(8, Math.min(left, window.innerWidth - mw - 8));
    let top = clientY - mh - 12;
    if (top < 8) top = clientY + 12;
    if (top + mh > window.innerHeight - 8) top = Math.max(8, window.innerHeight - mh - 8);
    rightMenu.style.left = left + 'px';
    rightMenu.style.top = top + 'px';
    const arrowLeft = Math.max(12, Math.min(clientX - left, mw - 12));
    rightMenu.style.setProperty('--arrow-left', arrowLeft + 'px');
    rightMenu.classList.add('show');
  });
}

document.addEventListener('contextmenu', (e) => {
  if (e.ctrlKey) return true;
  e.preventDefault();
  showRightMenuAt(e.clientX, e.clientY);
});

function hideRightMenuImmediate() {
  rightMenu.classList.remove('show');
  rightMenu.style.display = 'none';
}

document.addEventListener('click', (e) => {
  if (!rightMenu.contains(e.target)) hideRightMenuImmediate();
});
document.addEventListener('touchstart', (e) => {
  if (!rightMenu.contains(e.target)) hideRightMenuImmediate();
});

// -------- 歌词显示/隐藏 (保留) --------
function toggleLyricsVisibility() {
  lyricsVisible = !lyricsVisible;
  if (lyricsVisible) {
    floatingLyrics.classList.add('show');
    if (aplayer && !aplayer.audio.paused) startLyricsUpdate(aplayer);
  } else {
    floatingLyrics.classList.remove('show');
    currentLineEl.textContent = '';
    nextLineEl.textContent = '';
    currentLyric = '';
  }
  const lyricsMenuItem = document.getElementById('menu-lyrics');
  lyricsMenuItem.textContent = lyricsVisible ? '📜 隐藏歌词' : '📜 显示歌词';
  localStorage.setItem('lyricsVisible', lyricsVisible.toString());
}

// -------- 菜单绑定 (全部保留) --------
document.getElementById('menu-play').addEventListener('click', () => {
  ensurePlayerAndRun(ap => ap.toggle());
  hideRightMenuImmediate();
});
document.getElementById('menu-prev').addEventListener('click', () => {
  ensurePlayerAndRun(ap => ap.skipBack());
  hideRightMenuImmediate();
});
document.getElementById('menu-next').addEventListener('click', () => {
  ensurePlayerAndRun(ap => ap.skipForward());
  hideRightMenuImmediate();
});
document.getElementById('menu-volup').addEventListener('click', () => {
  ensurePlayerAndRun(ap => ap.volume(Math.min((ap.audio.volume || 0.8) + 0.1, 1), true));
  hideRightMenuImmediate();
});
document.getElementById('menu-voldown').addEventListener('click', () => {
  ensurePlayerAndRun(ap => ap.volume(Math.max((ap.audio.volume || 0.2) - 0.1, 0), true));
  hideRightMenuImmediate();
});
document.getElementById('menu-lyrics').addEventListener('click', () => {
  toggleLyricsVisibility();
  hideRightMenuImmediate();
});
document.getElementById('menu-support').addEventListener('click', () => {
  window.open('https://aoso.hangdn.com', '_blank');
  hideRightMenuImmediate();
});
document.getElementById('menu-fullscreen').addEventListener('click', () => {
  hideRightMenuImmediate();
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
});
document.getElementById('menu-close').addEventListener('click', () => {
  ensurePlayerAndRun(ap => ap.pause());
  playerWrap.classList.remove('show');
  capsule.style.display = 'flex';
  hideRightMenuImmediate();
});

// -------- 启动 & 恢复状态 --------
initMeting().catch(() => console.log('APlayer初始化失败'));

document.addEventListener('DOMContentLoaded', function() {
  // 歌词可见性
  const savedLyricsVisible = localStorage.getItem('lyricsVisible');
  if (savedLyricsVisible !== null) {
    lyricsVisible = savedLyricsVisible === 'true';
  }
  const lyricsMenuItem = document.getElementById('menu-lyrics');
  lyricsMenuItem.textContent = lyricsVisible ? '📜 隐藏歌词' : '📜 显示歌词';
  if (!lyricsVisible) {
    floatingLyrics.classList.remove('show');
  } else {
    // 默认显示（但需等待播放）
  }
  // 恢复颜色
  restoreLyricsColor();
  // 确保窗口可拖拽样式
  floatingLyrics.style.cursor = 'grab';
});

// ============================================================
// 歌词窗口缩放功能（解决 resize: fixed 不生效问题）
// ============================================================
(function initLyricsResize() {
    const lyrics = document.getElementById('floating-lyrics');
    if (!lyrics) return;

    // 检查是否已经存在缩放手柄，避免重复添加
    if (document.getElementById('lyrics-resize-handle')) return;

    // 创建缩放手柄（右下角）
    const resizeHandle = document.createElement('div');
    resizeHandle.id = 'lyrics-resize-handle';
    resizeHandle.style.cssText = `
        position: absolute;
        bottom: 0;
        right: 0;
        width: 24px;
        height: 24px;
        cursor: nwse-resize;
        z-index: 20;
        background: linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.35) 50%);
        border-radius: 0 0 18px 0;
        pointer-events: auto;
        touch-action: none;
    `;
    lyrics.appendChild(resizeHandle);

    // 亮色模式适配
    function updateHandleTheme() {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        resizeHandle.style.background = isLight 
            ? 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.15) 50%)'
            : 'linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.35) 50%)';
    }
    updateHandleTheme();

    // 监听主题切换
    const themeObserver = new MutationObserver(updateHandleTheme);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    let isResizing = false;
    let startX = 0, startY = 0;
    let startWidth = 0, startHeight = 0;

    // 鼠标缩放
    resizeHandle.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        isResizing = true;
        startX = e.clientX;
        startY = e.clientY;
        startWidth = lyrics.offsetWidth;
        startHeight = lyrics.offsetHeight;
        lyrics.style.cursor = 'nwse-resize';
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'nwse-resize';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        e.preventDefault();
        
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        
        let newWidth = Math.min(Math.max(startWidth + deltaX, 180), window.innerWidth * 0.85);
        let newHeight = Math.min(Math.max(startHeight + deltaY, 60), window.innerHeight * 0.75);
        
        lyrics.style.width = newWidth + 'px';
        lyrics.style.height = newHeight + 'px';
    });

    document.addEventListener('mouseup', () => {
        if (isResizing) {
            isResizing = false;
            lyrics.style.cursor = 'grab';
            document.body.style.userSelect = '';
            document.body.style.cursor = '';
        }
    });

    // 触摸缩放（移动端）
    resizeHandle.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const touch = e.touches[0];
        isResizing = true;
        startX = touch.clientX;
        startY = touch.clientY;
        startWidth = lyrics.offsetWidth;
        startHeight = lyrics.offsetHeight;
    }, { passive: false });

    document.addEventListener('touchmove', (e) => {
        if (!isResizing) return;
        e.preventDefault();
        const touch = e.touches[0];
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;
        
        let newWidth = Math.min(Math.max(startWidth + deltaX, 180), window.innerWidth * 0.85);
        let newHeight = Math.min(Math.max(startHeight + deltaY, 60), window.innerHeight * 0.75);
        
        lyrics.style.width = newWidth + 'px';
        lyrics.style.height = newHeight + 'px';
    }, { passive: false });

    document.addEventListener('touchend', () => {
        isResizing = false;
    });

    // 窗口resize时保持边界
    window.addEventListener('resize', () => {
        const currentWidth = parseInt(lyrics.style.width) || lyrics.offsetWidth;
        const currentHeight = parseInt(lyrics.style.height) || lyrics.offsetHeight;
        const maxW = window.innerWidth * 0.85;
        const maxH = window.innerHeight * 0.75;
        if (currentWidth > maxW) lyrics.style.width = maxW + 'px';
        if (currentHeight > maxH) lyrics.style.height = maxH + 'px';
    });

    console.log('✅ 歌词窗口缩放功能已启动');
})();
