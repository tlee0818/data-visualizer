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
    files.filter(f => f.isFile() && f.name.endsWith('.js')))
  const modulesPr = jsFilesPr.then(jsFiles =>
    jsFiles.map(f => require(path.join(dir, f.name))))
  //filesPr.then(files => console.log(files))
  //jsFilesPr.then(files => console.log(files))
  //modulesPr.then(files => console.log(files)).catch(error => console.log(error))
  return await modulesPr.then(initFunctions =>
    initFunctions.map(m => {
      const n = m as object
      console.log(n, "wtf")
      const obj = Object.keys(n).map(k => n[k])
      console.log(obj)
      const func = obj[0]
      const plug = func()
      return plug as DataPlugin
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
 async function loadDisplayPlugins (targetDir: string): Promise<DisplayPlugin[]> {
  const dir = path.join(__dirname, targetDir)
  const filesPr = readdir(dir, { withFileTypes: true })
  const jsFilesPr = filesPr.then(files =>
    files.filter(f => f.isFile() && f.name.endsWith('.js')))
  const modulesPr = jsFilesPr.then(jsFiles =>
    jsFiles.map(f => require(path.join(dir, f.name))))
  //filesPr.then(files => console.log(files))
  //jsFilesPr.then(files => console.log(files))
  //modulesPr.then(files => console.log(files)).catch(error => console.log(error))
  return await modulesPr.then(initFunctions =>
    initFunctions.map(m => {
      const n = m as object
      console.log(n, "wtf")
      const obj = Object.keys(n).map(k => n[k])
      console.log(obj)
      const func = obj[0]
      const plug = func()
      return plug as DisplayPlugin
    }))
  }
// test this:
// const p = loadPlugins("plugins")
// p.then(console.log)
// p.catch(console.error)

export { loadDataPlugins, loadDisplayPlugins }
