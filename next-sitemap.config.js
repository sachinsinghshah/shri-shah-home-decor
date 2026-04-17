/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://shahhomedecor.in',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  changefreq: 'weekly',
  priority: 0.7,
  additionalPaths: async () => [
    { loc: '/', changefreq: 'weekly', priority: 1.0 },
    { loc: '/services', changefreq: 'weekly', priority: 0.9 },
    { loc: '/gallery', changefreq: 'monthly', priority: 0.8 },
    { loc: '/about', changefreq: 'monthly', priority: 0.7 },
    { loc: '/contact', changefreq: 'monthly', priority: 0.7 },
  ],
}
