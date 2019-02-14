module.exports = {
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'http://imejin.biz', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
        perPage: 100, // How many posts to load from server per request (Optional)
        concurrent: 10, // How many requests to run simultaneously (Optional)
        routes: {
          post: '/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
          post_tag: '/tag/:slug' // adds route for "post_tag" post type (Optional)
        }
      }
    },
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
