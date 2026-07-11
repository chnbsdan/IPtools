// Cloudflare Workers 配置
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // 安全响应头
    const headers = {
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    };

    // 如果是 API 请求（用于 DNS 检测的代理）
    if (url.pathname.startsWith('/api/')) {
      const targetUrl = url.pathname.replace('/api/', 'https://');
      try {
        const response = await fetch(targetUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        });
        const data = await response.text();
        return new Response(data, {
          headers: {
            ...headers,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: 'Proxy error' }), {
          status: 500,
          headers: {
            ...headers,
            'Content-Type': 'application/json',
          }
        });
      }
    }

    // 静态资源缓存策略
    const cacheKey = new Request(url.toString(), request);
    const cache = caches.default;
    let response = await cache.match(cacheKey);

    if (!response) {
      // 获取原始响应
      response = await fetch(request);
      
      // 判断文件类型设置缓存时间
      const pathname = url.pathname;
      let cacheControl = 'public, max-age=3600'; // 默认1小时
      
      if (pathname.endsWith('.css') || pathname.endsWith('.js')) {
        cacheControl = 'public, max-age=86400'; // CSS/JS 缓存24小时
      } else if (pathname.endsWith('.jpg') || pathname.endsWith('.png') || pathname.endsWith('.ico')) {
        cacheControl = 'public, max-age=604800'; // 图片缓存7天
      } else if (pathname === '/' || pathname === '/index.html') {
        cacheControl = 'public, max-age=600'; // HTML 缓存10分钟
      }

      // 创建带缓存头的响应
      response = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: {
          ...Object.fromEntries(response.headers),
          ...headers,
          'Cache-Control': cacheControl,
        }
      });

      // 存入缓存
      ctx.waitUntil(cache.put(cacheKey, response.clone()));
    }

    return response;
  },
};
