// vue.config.js (https://cli.vuejs.org/config/#pages)
module.exports = {
    chainWebpack: config => config.resolve.symlinks(false),
    publicPath: './'
}
