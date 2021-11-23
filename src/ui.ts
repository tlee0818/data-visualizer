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

  const img = framework.getSelectedImage()
  const imageUrl = img === null ? null : img.getImage()

  const keywordLink = "/searchImage?keyword="

  return {
    dataPlugins: dataPlugins,
    currentDataPlugin: framework.getCurrentDataPlugin(),
    keywordLink: keywordLink,
    displayPlugins: displayPlugins,
    currentDisplayPlugin: framework.getCurrentDisplayPlugin(),
    imageUrl: imageUrl,
    chart: framework.getChartHtmlString()
  }
}

function renderPage (framework: ColorFrameworkImpl, res: Response<any, Record<string, any>, number>): void {
  res.render('main', genPage(framework))
}

export { renderPage }
