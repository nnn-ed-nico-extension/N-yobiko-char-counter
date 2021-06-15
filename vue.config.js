const git = require('git-rev-sync');

process.env.VUE_APP_GIT_HASH = git.short();
process.env.VUE_APP_GIT_BRANCH = git.branch();

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
