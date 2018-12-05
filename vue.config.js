var path = require('path')
var PrerenderSPAPlugin = require('prerender-spa-plugin')
var Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
    configureWebpack: {
      plugins: [

        new PrerenderSPAPlugin({
            staticDir: path.join(__dirname, 'dist'),
 
            // Optional - The path your rendered app should be output to.
            // (Defaults to staticDir.)
            // outputDir: path.join(__dirname, 'prerendered'),
       
            // Optional - The location of index.html
            // indexPath: path.join(__dirname, 'dist', 'index.html'),
       
            // Required - Routes to render.
            //routes: [ '/' ],
            routes: [ '/', '/API', '/cities', '/cities/nairobi' , '/cities/kisumu', '/cities/thika', '/cities/mombasa', '/partners', '/careers', '/careers/seniorportmanager', '/careers/clientrelationsmanager', '/careers/androidengineer', '/careers/dataanalyst', '/careers/qualityassurancetester', '/careers/headoffinance', '/careers/kisumucitymanager', '/terms', '/privacy', '/driverprivacy', '/careers/headofpartneroperations', '/careers/junioroperationsassociate', '/careers/OperationsAssociate', '/careers/OperationsAssociateUG', '/careers/ProductManager', '/careers/MarketingAssociateUG', '/careers/clientrelationsmanager', '/careers/androidengineer', '/careers/customer&partnersupport', '/careers/jrsupportmanager', '/careers/countrygm'],
            renderer: new Renderer({
              timeout: 0,
              maxConcurrentRoutes: 1,
              renderAfterDocumentEvent: 'custom-render-trigger',
              headless: true
          })
    })
    ]
}
}
