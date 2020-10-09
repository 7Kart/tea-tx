/* Build config:
  ========================================================================== */

// Source: https://github.com/survivejs/webpack-merge
const { merge } = require('webpack-merge')
// Base config
const baseWebpackConfig = require('./webpack.base.conf')
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

// console.log('__dirname', __dirname);

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [


    new PrerenderSPAPlugin({
      // Required - The path to the webpack-outputted app to prerender.
      staticDir: path.join(__dirname, '../', 'dist'),

      // Optional - The path your rendered app should be output to.
      // (Defaults to staticDir.)
      outputDir: path.join(__dirname, '../', 'dist'),

      // Optional - The location of index.html
      indexPath: path.join(__dirname, '../',  'dist', 'index.html'),

      // Required - Routes to render.
      routes: ['/', '/experience'],


      postProcess(renderedRoute) {
        // Ignore any redirects.
        renderedRoute.route = renderedRoute.originalRoute
        // Basic whitespace removal. (Don't use this in production.)
        renderedRoute.html = renderedRoute.html.split(/>[\s]+</gmi).join('><')
        // Remove /index.html from the output path if the dir name ends with a .html file extension.
        // For example: /dist/dir/special.html/index.html -> /dist/dir/special.html
        if (renderedRoute.route.endsWith('.html')) {
          renderedRoute.outputPath = path.join(__dirname, '../','dist', renderedRoute.route)
        }

        return renderedRoute
      },


      // The actual renderer to use. (Feel free to write your own)
      // Available renderers: https://github.com/Tribex/prerenderer/tree/master/renderers
      renderer: new Renderer({
        // Optional - The name of the property to add to the window object with the contents of `inject`.
        // injectProperty: '__PRERENDER_INJECTED',
        // // Optional - Any values you'd like your app to have access to via `window.injectProperty`.
        // inject: {
        //   foo: 'bar'
        // },

        // Optional - defaults to 0, no limit.
        // Routes are rendered asynchronously.
        // Use this to limit the number of routes rendered in parallel.
        maxConcurrentRoutes: 4,

        // Optional - Wait to render until the specified event is dispatched on the document.
        // eg, with `document.dispatchEvent(new Event('custom-render-trigger'))`
        renderAfterDocumentEvent: 'custom-render-trigger',

        // Optional - Wait to render until the specified element is detected using `document.querySelector`
        renderAfterElementExists: '#app',

        // Optional - Wait to render until a certain amount of time has passed.
        // NOT RECOMMENDED
        renderAfterTime: 5000, // Wait 5 seconds.

        // Other puppeteer options.
        // (See here: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions)
        headless: false // Display the browser window when rendering. Useful for debugging.
      })
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})
