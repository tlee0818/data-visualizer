import { newPexelApi } from '../src/plugins/dataplugin/pexelapi'
import { FrameworkImage } from '../src/core/frameworkimage'
// make new pexel api object
const pexelapi = newPexelApi()

// test getDataPluginName
test("We should be able to get a name.", () => {
  expect(pexelapi.getDataPluginName()).toBe("Pexels API")
})

// test queryImage
test("We should be able to get FrameworkImage from queryImage.", () => {
  const promiseOutput = pexelapi.queryImage("banana")
  promiseOutput.then(img => 
    {
      expect(img).toBeInstanceOf(FrameworkImage)
    })
})