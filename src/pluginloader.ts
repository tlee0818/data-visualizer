import { DataPlugin } from './core/dataplugin'
import { DisplayPlugin } from './core/displayplugin'
import { readdir } from 'fs/promises'
import path from 'path'

/**
 * assumes that all .js files in the target directories are modules
 * which export an init function to create a GamePlugin object
 *
 * returns a promise with all the plugins
 *
 * @param targetDir where to look for plugins
 * @returns
 */
 async function loadDataPlugins (targetDir: string): Promise<DataPlugin[]> {
  const dir = path.join(__dirname, targetDir)
  const filesPr = readdir(dir, { withFileTypes: true })
  const jsFilesPr = filesPr.then(files =>
    files.filter(f => f.isFile() && f.name.endsWith('.ts')))
  const modulesPr = jsFilesPr.then(jsFiles =>
    jsFiles.map(f => require(path.join(dir, f.name))))
  filesPr.then(files => console.log(files))
  jsFilesPr.then(files => console.log(files))
  console.log("wtf1")
  modulesPr.then(files => console.log(files)).catch(error => console.log(error))
  console.log("wtf2")
  return await modulesPr.then(initFunctions =>
    initFunctions.map(m => {
      return m.exportObj.pluginInit() as DataPlugin
    }))
  }
/**
 * assumes that all .js files in the target directories are modules
 * which export an init function to create a GamePlugin object
 *
 * returns a promise with all the plugins
 *
 * @param targetDir where to look for plugins
 * @returns
 */
 async function loadDisplayPlugin (targetDir: string): Promise<DisplayPlugin[]> {
  const dir = path.join(__dirname, targetDir)
  const filesPr = readdir(dir, { withFileTypes: true })
  const jsFilesPr = filesPr.then(files =>
    files.filter(f => f.isFile() && f.name.endsWith('.ts')))
  const modulesPr = jsFilesPr.then(jsFiles =>
    jsFiles.map(f => require(path.join(dir, f.name))))
  filesPr.then(files => console.log(files))
  jsFilesPr.then(files => console.log(files))
  modulesPr.then(files => console.log(files))
  return await modulesPr.then(initFunctions =>
    initFunctions.map(m => {
      return m.exportObj.pluginInit() as DisplayPlugin
    }))
  }
// test this:
// const p = loadPlugins("plugins")
// p.then(console.log)
// p.catch(console.error)

export { loadDataPlugins, loadDisplayPlugin }
