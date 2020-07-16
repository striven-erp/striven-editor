var ghpages = require('gh-pages');

ghpages.publish('demo/dist', err => console.log(err));
