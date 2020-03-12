const client = require('./client');
const withStyles = require('@webdeb/next-styles');

module.exports = {
  exportPathMap: async function(defaultPathMap) {
    const paths = await client
      .fetch('*[_type == "post" && defined(slug)].slug.current')
      .then(data =>
        data.reduce(
          (acc, slug) => ({
            '/': { page: '/' },
            ...acc,
            [`/post/${slug}`]: { page: '/post/[slug]', query: { slug } }
          }),
          defaultPathMap
        )
      )
      .catch(console.error);
    return paths;
  }
};

module.exports = withStyles({
  sass: true, // use .scss files
  modules: true, // style.(m|module).css & style.(m|module).scss for module files
  sassLoaderOptions: {
    sassOptions: {
      includePaths: ['scss'] // @import 'variables'; # loads (src/styles/varialbes.scss), you got it..
    }
  },
  cssLoaderOptions: {
    importLoaders: 2
  }
  // postcssLoaderOptions: {...}
});
