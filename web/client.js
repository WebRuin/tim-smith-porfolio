const sanityClient = require('@sanity/client');

module.exports = sanityClient({
  projectId: '0cqfg4vu', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
});
