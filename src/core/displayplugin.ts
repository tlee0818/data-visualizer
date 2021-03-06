import { ColorFramework } from './framework'
import { FrameworkImage } from './frameworkimage'

/**
 * The game plug-in interface that plug-ins use to implement and register games
 * with the {@link GameFramework}.  The type parameter, {@code P}, allows an
 * arbitrary type to represent a player.
 */
interface DisplayPlugin {

  /**
     * gets the chart @param image color density values as html string
     */
  
  getChart: (image: FrameworkImage) => string

    /**
         * Called (only once) when the plug-in is first registered with the
         * framework, giving the plug-in a chance to perform any initial set-up
         * such as loading the javascript
         *
         * @param framework The {@link ColorFramework} instance with which the plug-in
         *                  was registered.
         */
  onRegister: (framework: ColorFramework) => void

  getDisplayPluginName: () => string
  
}

export { DisplayPlugin }
