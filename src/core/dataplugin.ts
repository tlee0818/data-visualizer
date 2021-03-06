import { ColorFramework } from './framework'
import { FrameworkImage } from './frameworkimage'

/**
 * The game plug-in interface that plug-ins use to implement and register games
 * with the {@link VisualFramework}.  The type parameter, allows an
 * arbitrary type to represent a player.
 */
interface DataPlugin {

   /**
     * Get name of the plugin
     * 
     * @return the name of this plugin
     */

  getDataPluginName: () => string


   /**
     * Get images from the user query
     *
     * @param keyword The keyword the user is trying to query for.
     * @param numImage Number of images the user wants to query.
     * @return a list of {@link Promise<FrameworkImage>} that sets framework's image as a the promise's image
     */

  queryImage: (keyword: string) => Promise<FrameworkImage>


}

export { DataPlugin }
