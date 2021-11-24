import { newUnsplashApi } from '../src/plugins/dataplugin/unsplashapi'
import { FrameworkImage } from '../src/core/frameworkimage'
// make new pexel api object
const unsplashapi = newUnsplashApi()

test("We should be able to get a name.", () => {
  expect(unsplashapi.getDataPluginName()).toBe("Unsplash API")
})
test("We should be able to get FrameworkImage from queryImage.", () => {
  const promiseOutput = unsplashapi.queryImage("banana")
  promiseOutput
  .then(img => expect(img).toBeInstanceOf(FrameworkImage))
})
