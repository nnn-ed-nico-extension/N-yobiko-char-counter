const git = require('git-rev-sync');

process.env.VUE_APP_GIT_HASH = git.short();
process.env.VUE_APP_GIT_BRANCH = git.branch();
process.env.VUE_APP_HOMEPAGE = 'https://github.com/nnn-ed-nico-extension/N-yobiko-char-counter'

module.exports = {
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup'
    }
  },
  pluginOptions: {
    browserExtension: {
      manifestTransformer: manifest => {
        manifest.homepage_url = process.env.VUE_APP_HOMEPAGE;
        return manifest;
      },      
      componentOptions: {
        background: {
          entry: 'src/background.js'
        },
        contentScripts: {
          entries: {
            'content-script': [
              'src/content-scripts/contentScript.js'
            ]
          }
        }
      }
    }
  }
}
