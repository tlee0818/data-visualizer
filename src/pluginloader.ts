import { DataPlugin } from './core/dataplugin'
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
    files.filter(f => f.isFile() && f.name.endsWith('.js')))
  const modulesPr = jsFilesPr.then(jsFiles =>
    jsFiles.map(f => require(path.join(dir, f.name))))
  return await modulesPr.then(modules =>
    modules.filter(m => typeof m.init === 'function').map(m => m.init() as DataPlugin))
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
 async function loadDisplayPlugin (targetDir: string): Promise<loadDisplayPlugin[]> {
  const dir = path.join(__dirname, targetDir)
  const filesPr = readdir(dir, { withFileTypes: true })
  const jsFilesPr = filesPr.then(files =>
    files.filter(f => f.isFile() && f.name.endsWith('.js')))
  const modulesPr = jsFilesPr.then(jsFiles =>
    jsFiles.map(f => require(path.join(dir, f.name))))
  return await modulesPr.then(modules =>
    modules.filter(m => typeof m.init === 'function').map(m => m.init() as loadDisplayPlugin))
  }
// test this:
// const p = loadPlugins("plugins")
// p.then(console.log)
// p.catch(console.error)

export { loadDataPlugins, loadDisplayPlugin}
