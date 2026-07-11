
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
async function getCFNodeIP(url, timeoutMs = 6000) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
        const res = await fetch(url, { signal: controller.signal });
        const text = await res.text();
        const ip = text.match(/ip=([^\n]+)/)?.[1];
        const loc = text.match(/loc=([^\n]+)/)?.[1] || '';
        if (!ip) throw new Error('parse fail');
        return { ip, loc };
    } finally {
        clearTimeout(timer);
    }
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
        const cb = 'tencent_jsonp_' + Date.now() + '_' + Math.floor(Math.random() * 10000);
        const script = document.createElement('script');
        const timer = setTimeout(() => { cleanup(); reject(new Error('timeout')); }, timeoutMs);
        function cleanup() { clearTimeout(timer); delete window[cb]; script.remove(); }
        window[cb] = function (data) {
            try {
                const ip = data && data.ip;
                cleanup();
                if (ip) resolve({ ip, loc: 'CN' }); else reject(new Error('no ip'));
            } catch (e) { cleanup(); reject(e); }
        };
        script.src = `https://r.inews.qq.com/api/ip2city?otype=jsonp&callback=${cb}`;
        script.onerror = () => { cleanup(); reject(new Error('load error')); };
        document.body.appendChild(script);
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
                r = await getCFNodeIP(node.url);
            }
            
            valEl.classList.remove('anim-pulse');
            const flag = r.loc ? getFlagEmoji(r.loc) : '🌐';
            valEl.dataset.ip = r.ip;
            valEl.dataset.flag = flag;
            valEl.innerHTML = `<span>${flag}</span> ${maskIP(r.ip)}`;
            subEl.textContent = '地区 / Region: ' + (r.loc || '未知');
            tagEl.textContent = 'HIT';
            tagEl.className = 'tag status-good';
        } catch (e) {
            valEl.classList.remove('anim-pulse');
            valEl.textContent = '访问被拒绝 / Access Denied';
            valEl.style.color = 'var(--error)';
            subEl.textContent = '该节点被拦截、超时或跨域受限';
            tagEl.textContent = 'FAIL';
            tagEl.className = 'tag status-bad';
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

window.onload = init;
