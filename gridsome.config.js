module.exports = {
  siteName: 'イメジン開発ブログ',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: '7my7dll49gbt', // required
        accessToken: '8368b87f3b5438d6ffa9735c4c37a468c910e8ade5886cc39c9e6c48c0212ac4', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ]
}
