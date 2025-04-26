const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, 'docs'),
  lintOnSave: false,
  transpileDependencies: [
    'vuetify',
  ],
  chainWebpack: (config) => {
    // HTML Title used for OpenGraph linters (social media links)
    config.plugin('html').tap((args) => {
      // eslint-disable-next-line no-param-reassign
      args[0].title = 'Farewell, Guardian of Civilization';
      // eslint-disable-next-line no-param-reassign
      args[0].meta = {
        'og:title': 'Farewell, Guardian of Civilization',
        'og:type': 'website',
        'og:description': 'Hoomans wish Nanashi Mumei a future as bright as the smiles she brought us!',
        'og:image': 'https://mumei-farewell.fromyour.fans/ogimage.png',
        'twitter:card': 'summary_large_image',
        'twitter:title': 'Farewell, Guardian of Civilization',
        'twitter:description': 'Hoomans wish Nanashi Mumei a future as bright as the smiles she brought us!',
        'twitter:image': 'https://mumei-farewell.fromyour.fans/ogimage.png',
      };
      return args;
    });
  },
  pwa: {
    name: 'mumeifarewell',
    assetsVersion: '2025_04_27_05_49',
    workboxOptions: {
      skipWaiting: true,
      exclude: [
        'CNAME',
        /(.*).css.map/g,
        /(.*).js.map/g,
      ],
    },
  },
};
