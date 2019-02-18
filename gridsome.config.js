require('dotenv').load()

module.exports = {
  siteName: 'イメジン開発ブログ',
  siteDescription: '株式会社イメジンの開発者ブログです。',
  siteUrl: 'https://dev.imejin.biz/',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ]
}
