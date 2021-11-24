import { newSerpApi } from '../src/plugins/dataplugin/serpapi'
import { FrameworkImage } from '../src/core/frameworkimage'
// make new pexel api object
const serpapi = newSerpApi()

// test getDataPluginName
test("We should be able to get a name.", () => {
  expect(serpapi.getDataPluginName()).toBe("Serp API")
})
// test queryImage
test("We should be able to get FrameworkImage from queryImage.", () => {
  const promiseOutput = serpapi.queryImage("banana")
  promiseOutput.then(img => 
    {
      expect(img).toBeInstanceOf(FrameworkImage)
    })
})