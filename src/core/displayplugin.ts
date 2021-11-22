import { ColorFramework } from './framework'
import { Image } from './image'

/**
 * The game plug-in interface that plug-ins use to implement and register games
 * with the {@link GameFramework}.  The type parameter, {@code P}, allows an
 * arbitrary type to represent a player.
 */
interface DisplayPlugin {

  /**
     * some methods
     */
  
  getChart: (image: Image) => string
  
}

export { DisplayPlugin }
