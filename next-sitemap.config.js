/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.shreeshahhomedecor.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/apple-icon.png', '/icon.png', '/manifest.webmanifest', '/favicon*'],
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/services': 0.9,
      '/services/pvc-panels': 0.9,
      '/gallery': 0.8,
      '/about': 0.7,
      '/contact': 0.7,
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}
