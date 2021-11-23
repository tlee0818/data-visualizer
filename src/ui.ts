import { ColorFrameworkImpl } from './core/frameworkimpl'
import { Response } from 'express-serve-static-core'

/**
 * creates the data to fill into the template
 */
function genPage (framework: ColorFrameworkImpl): any {
  // console.log("update page")

  interface PluginEntry { name: string, link: string }

  const dataPlugins: PluginEntry[] = []
  const dataPluginNames = framework.getRegisteredDataPluginName()
  for (let i = 0; i < dataPluginNames.length; i++) {
    dataPlugins.push({ name: dataPluginNames[i], link: 'registerDataPlugin?i=' + i })
  }

  const displayPlugins: PluginEntry[] = []
  const diplayPluginNames = framework.getRegisteredDisplayPluginName()
  for (let i = 0; i < diplayPluginNames.length; i++) {
    displayPlugins.push({ name: diplayPluginNames[i], link: '/registerDisplayPlugin?i=' + i })
  }

  const currDataPlugin = framework.getCurrentDataPlugin()
  const currentDataPluginName = currDataPlugin === null ? null : currDataPlugin.getDataPluginName()

  const currentDisplayPlugin = framework.getCurrentDisplayPlugin()
  const currentDisplayPluginName = currentDisplayPlugin === null ? null : currentDisplayPlugin.getDisplayPluginName()

  const img = framework.getSelectedImage()
  const imageUrl = img === null ? null : img.getImage()
  const imageName = img === null ? null : img.getName()

  const keywordLink = "/searchImage?keyword="



  return {
    dataPlugins: dataPlugins,
    currentDataPluginName: currentDataPluginName,
    keywordLink: keywordLink,
    displayPlugins: displayPlugins,
    currentDisplayPluginName: currentDisplayPluginName,
    imageUrl: imageUrl,
    imageName: imageName,
    chart: framework.getChartHtmlString()
  }
}

function renderPage (framework: ColorFrameworkImpl, res: Response<any, Record<string, any>, number>): void {
  res.render('main', genPage(framework))
}

export { renderPage }
