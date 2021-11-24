import { newDataPluginStub } from '../src/plugins/dataplugin/data_plugin_stub'
import { ColorFrameworkImpl } from '../src/core/frameworkimpl'

const newFrame = new ColorFrameworkImpl
const dp = newDataPluginStub()

test("We should not be able to set a data plugin initially because nothing is registered.", () => {
  let result = true
  try{
    newFrame.setCurrentDataPlugin(0)
  } catch(error){
    result = false
  }
  expect(result).toBeFalsy()
})
test("We should be able to set a data plugin because we registered a plugin.", () => {
  newFrame.registerDataPlugin(dp)
  let result = true
  try{
    newFrame.setCurrentDataPlugin(0)
  } catch(error){
    result = false
  }
  expect(result).toBeTruthy()
})
test("We should be able to make a new query without an error.", () => {
  let result = true
  try{
    newFrame.makeQuery("banana")
  } catch(error){
    result = false
  }
  expect(result).toBeTruthy()
})
test("We should be able to fetch color density without an error.", () => {
  let result = true
  try{
    newFrame.fetchColorDensity()
  } catch(error){
    console.log(error)
    result = false
  }
  expect(result).toBeTruthy()
})
//registerDisplayPlugin
//setCurrentDisplayPlugin
//getColorDensityChart
//fetchColorDensity
