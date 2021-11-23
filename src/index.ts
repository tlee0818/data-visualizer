/**
 * this code will be run from within the tic.html page
 *
 * it has access to the DOM of the web page
 */

 import express from 'express'
 import exphbs from 'express-handlebars'
 import { ColorFrameworkImpl } from './core/frameworkimpl'
 import { loadDataPlugins, loadDisplayPlugin } from './pluginloader'
 import { renderPage } from './ui'
 
 console.log('starting server')
 const app = express()
 const port = 8080
 
 // setting up to use handlebars for templates by default
 app.engine('hbs', exphbs({
   defaultLayout: 'analysis_template',
   extname: '.hbs'
 }))
 app.set('view engine', 'hbs')
 
 const DATA_PLUGIN_DIR = 'plugins/dataplugin'
 const DISPLAY_PLUGIN_DIR = 'plugins/displayplugin'
 // game always holds the current version of the game
 // updates on actions and when starting a new game
 const framework = new ColorFrameworkImpl()
 const dataPluginsPromise = loadDataPlugins(DATA_PLUGIN_DIR)
 const displayPluginsPromise = loadDisplayPlugin(DISPLAY_PLUGIN_DIR)

dataPluginsPromise.then(ps =>
  ps.forEach(p => {
    console.log('Registering plugin ' + p.getDataPluginName())
    framework.registerDataPlugin(p)
  })).catch(e => console.error(`Failed to load plugins: ${e}`))

displayPluginsPromise.then(ps =>
  ps.forEach(p => {
    console.log('Registering plugin ' + p.getDisplayPluginName())
    framework.registerDisplayPlugin(p)
  })).catch(e => console.error(`Failed to load plugins: ${e}`))


 
 app.get('/new', (req, res) => {
   framework.startNewAnalysis()
   renderPage(framework, res)
 })

 app.get('/registerDataPlugin', (req, res) => {
  framework.setCurrentDisplayPlugin(parseInt(req.query.displayI as string))

  renderPage(framework, res)
})

app.get('/registerDisplayPlugin', (req, res) => {
  framework.setCurrentDisplayPlugin(parseInt(req.query.displayI as string))

  renderPage(framework, res)
})

 app.get('/searchImage', (req, res) => {
   if (req.query.keyword) { framework.makeQuery(req.query.keyword as string) }
   renderPage(framework, res)
 })
 
 app.get('/analysis', (req, res) => {
   framework.getColorDensityChart()
   renderPage(framework, res)
 })
 
 // start the Express server
 app.listen(port, () => {
   console.log(`server started at http://localhost:${port}`)
 })
 