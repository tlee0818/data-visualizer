import { exportObj } from '../src/core/dataplugins/data_plugin_stub'
import { DataPlugin } from '../src/core/dataplugin'
import { DisplayPlugin } from '../src/core/displayplugin'
import { ColorFramework } from '../src/core/framework'
import { FrameworkImage } from '../src/core/image'
import { ColorFrameworkImpl } from '../src/core/frameworkimpl'

const newFrame = new ColorFrameworkImpl
const dp = exportObj.pluginInit()

test("We should not be able to set dataplugin initially because nothing is registered.", () => {
  let result = true
  try{
    newFrame.setCurrentDataPlugin(0)
  } catch(error){
    result = false
  }
  expect(result).toBeFalsy()
})
test("We should be able to set dataplugin because we registered a plugin.", () => {
  newFrame.registerDataPlugin(dp)
  let result = true
  try{
    newFrame.setCurrentDataPlugin(0)
  } catch(error){
    result = false
  }
  expect(result).toBeTruthy()
})